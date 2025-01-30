import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const js = readFileSync(join(__dirname, "mega2.js"), "utf-8");

// Function to initialize Puppeteer with stealth and launch browser
async function launchBrowser() {
  puppeteer.use(StealthPlugin());
  return await puppeteer.launch({
    headless: "shell",
    // devtools: false,
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
}

// Function to handle request interception
function setupRequestInterception(page) {
  page.on("request", (request) => {
    const requestUrl = request.url();
    if (
      requestUrl.includes("e1-player.min.js") ||
      requestUrl.includes("google") ||
      requestUrl.includes("embed.css?v=0.4") ||
      requestUrl.includes("ssl.p.jwpcdn.com") ||
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
}

// Main function to scrape MegaCloud
export async function MegaCloud(url) {
  const browser = await launchBrowser();
  const page = await browser.newPage();

  try {
    await page.setExtraHTTPHeaders({ Referer: url });
    await page.setRequestInterception(true);
    setupRequestInterception(page);

    // Go to the page
    await page.goto(url, { waitUntil: "domcontentloaded" });

    // Inject and execute custom JavaScript
    await page.evaluate((jsContent) => {
      eval(jsContent);
    }, js);

    // Handle console output and return result
    const consoleHandler = new Promise((resolve, reject) => {
      const handleConsole = async (msg) => {
        try {
          const args = msg.args();
          for (const arg of args) {
            const value = await arg.jsonValue();
            if (typeof value === "object" && value !== undefined) {
              page.off("console", handleConsole); // Cleanup listener
              resolve(value); // Return the value
              return;
            }
          }
        } catch (error) {
          page.off("console", handleConsole); // Cleanup listener
          reject(error); // Reject the promise
        }
      };

      page.on("console", handleConsole);
    });

    // Timeout after 5 seconds if no result
    const timeout = new Promise((_, reject) => {
      setTimeout(() => {
        page.off("console", () => {});
        reject("Timeout: No valid value found within 5 seconds");
      }, 5000);
    });

    const result = await Promise.race([consoleHandler, timeout]);
    return result;
  } catch (error) {
    console.error("Error during scraping:", error);
    throw error;
  } finally {
    await browser.close(); // Ensure the browser is closed
  }
}
