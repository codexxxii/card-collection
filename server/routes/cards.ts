import { Hono } from "hono";

const cards = [
  { id: "1234", name: "", image_front: "", image_back: "", tcg_link: "" },
];

export const cardsRoute = new Hono().get("/", (c) => {
  return c.json({ cards: [] });
});
