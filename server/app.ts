import { Hono } from "hono";
import { logger } from "hono/logger";
import { cardsRoute } from "./routes/cards";

const app = new Hono();

app.use("*", logger());

const apiRoutes = app.basePath("/api").route("/cards", cardsRoute);

export default app;
export type ApiRoutes = typeof apiRoutes;
