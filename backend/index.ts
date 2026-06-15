import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/", (c) => c.text("Hello"));

app.get("/health", (c) => {
  return c.json({
    status: "ok",
  });
});

app.get("/users", (c) => {
  return c.json([
    { id: 1, name: "You" },
    { id: 2, name: "Taro" },
  ]);
});

app.get("/where", (c) => {
  return c.json({
    method: c.req.method,
    url: c.req.url,
    host: c.req.header("host"),
    userAgent: c.req.header("user-agent"),
    forwardedFor: c.req.header("x-forwarded-for"),
    realIp: c.req.header("x-real-ip"),
  });
});

serve({
  fetch: app.fetch,
  port: 8080,
});

console.log("Server running on port 8080");