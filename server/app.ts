import { Hono } from "hono";
import { logger } from "hono/logger";
import { cardsRoute } from "./routes/cards";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("*", logger());

const apiRoutes = app.basePath("/api").route("/cards", cardsRoute);

app.get("*", serveStatic({ root: "./app/dist" }));
app.get("*", serveStatic({ root: "./app/dist/index.html" }));

export default app;
export type ApiRoutes = typeof apiRoutes;
