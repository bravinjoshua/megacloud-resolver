import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { ResolveSources } from "./fetchSources.mjs";
import { launchBrowser } from "./puppeteer.mjs";

const app = new Hono();
launchBrowser();
console.log("browserInstance is active ");

app.get("/", (c) => c.text("Hono meets Node.js"));
app.get("/api", (c) => c.text("use api/resolve?id="));
app.get("/api/resolve", async (c) => {
  const { id } = c.req.query();

  if (!id) {
    return c.json({ error: "Missing 'id' query parameter" }, 400);
  }

  try {
    const result = await ResolveSources(id);
    return c.json(result);
  } catch (error) {
    console.error("Error in ResolveSources:", error);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});
