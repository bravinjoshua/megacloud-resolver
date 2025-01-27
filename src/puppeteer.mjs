import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const js = readFileSync(join(__dirname, "mega2.js"), "utf-8");

export async function MegaCloud(url) {
  puppeteer.use(StealthPlugin());
  const browser = await puppeteer.launch({
    headless: false,
    devtools: false,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-infobars",
      "--disable-extensions",
      "--disable-dev-shm-usage",
      "--disable-background-networking",
      "--disable-renderer-backgrounding",
      "--disable-software-rasterizer",
      "--mute-audio",
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-default-apps",
    ],
  });
  const page = await browser.newPage();

  await page.setExtraHTTPHeaders({ Referer: url });
  await page.setRequestInterception(true);

  // Block certain requests
  page.on("request", (request) => {
    const requestUrl = request.url();
    if (
      ///js/pmediaplay.js?v=1.5
      //hls.js?v=0.2
      //nakedanalytics.net/
      // favicon
      requestUrl.includes("e1-player.min.js") ||
      requestUrl.includes("google") ||
      requestUrl.includes("embed.css?v=0.4") ||
      requestUrl.includes("ssl.p.jwpcdn.com") ||
      ///embed

      requestUrl.includes("pmediaplay.js?v=1.5") ||
      requestUrl.includes("nakedanalytics.net/") ||
      requestUrl.includes("hls.js?v=0.2") ||
      requestUrl.includes("favicon")
    ) {
      request.abort();
    } else {
      request.continue();
    }
  });

  // Go to the page
  await page.goto(url);

  try {
    await page.evaluate((jsContent) => {
      eval(jsContent);
    }, js);
  } catch (error) {
    console.error("Error executing JS:", error);
  }

  // Handle console output and return result
  const consoleHandler = new Promise((resolve, reject) => {
    const handleConsole = async (msg) => {
      try {
        const args = msg.args();
        for (const arg of args) {
          const value = await arg.jsonValue();
          if (typeof value === "object" && value !== undefined) {
            page.off("console", handleConsole); // Cleanup listener
            await browser.close(); // Close browser
            resolve(value); // Return the value
            return;
          }
        }
      } catch (error) {
        page.off("console", handleConsole); // Cleanup listener
        await browser.close(); // Close browser
        reject(error); // Reject the promise
      }
    };

    page.on("console", handleConsole);
  });

  // Timeout after 5 seconds if no result
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      page.off("console", () => {});
      browser.close();
      reject("Timeout: No valid value found within 5 seconds");
    }, 5000);
  });

  return Promise.race([consoleHandler, timeout]);
}
