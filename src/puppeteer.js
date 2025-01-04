const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const fs = require("fs");
const path = require("path");

const js = fs.readFileSync(path.join(__dirname, "mega.js"), "utf-8");

puppeteer.use(StealthPlugin());

async function MegaCloud(url) {
  const browser = await puppeteer.launch({
    headless: true,
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
  await page.setViewport({ width: 800, height: 600 });

  await page.setExtraHTTPHeaders({ Referer: url });
  await page.setRequestInterception(true);
  await page.setCacheEnabled(true);

  // Block certain requests
  page.on("request", (request) => {
    const requestUrl = request.url();
    if (
      requestUrl.includes("e1-player.min.js") ||
      requestUrl.includes("google") ||
      requestUrl.includes("embed.css?v=0.4") ||
      requestUrl.includes("ssl.p.jwpcdn.com")
    ) {
      request.abort();
    } else {
      request.continue();
    }
  });

  // Go to the page and wait for it to load
  await page.goto(url, { waitUntil: "domcontentloaded" });

  // Inject JS content
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
    }, 6000);
  });

  return Promise.race([consoleHandler, timeout]);
}

module.exports = { MegaCloud };
