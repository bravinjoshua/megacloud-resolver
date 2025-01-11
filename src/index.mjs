import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { ResolveSources } from "./fetchSources.mjs";
const app = new Hono();
app.get("/", (c) => c.text("Hono meets Node.js"));
app.get("/api", (c) => c.text("use api/resolve?id="));
app.get("/api/resolve", async (c) => {
  const { id } = c.req.query();

  const result = await ResolveSources(id);

  return c.json(result);
});

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`); // Listening on http://localhost:3000
});
