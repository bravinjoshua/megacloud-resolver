import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Global variable to store the browser instance
let browserInstance = null;

// Function to initialize Puppeteer with stealth and launch browser
export async function launchBrowser() {
  if (!browserInstance) {
    puppeteer.use(StealthPlugin());
    browserInstance = await puppeteer.launch({
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
        "--disable-gpu",
        "--disable-fonts",
      ],
    });
  }
  return browserInstance;
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
    try {
      await page.addScriptTag({ path: join(__dirname, "mega2.js") });
    } catch (error) {
      console.error("Error injecting script:", error);
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
    await page.close(); // Close the page after the task
  }
}

// Function to close the browser
export async function closeBrowser() {
  if (browserInstance) {
    await browserInstance.close();
    browserInstance = null; // Reset the global instance
  }
}
