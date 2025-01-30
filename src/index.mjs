import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { ResolveSources } from "./fetchSources.mjs";

const app = new Hono();

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

const server = serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});

process.on("SIGTERM", () => {
  console.log("Received SIGTERM signal. Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});
