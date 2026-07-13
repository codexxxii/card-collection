import { Hono } from "hono";
import { db } from "../db";

export const cardsRoute = new Hono().get("/", async (c) => {
  try {
    const cards = await db.query.cards.findMany({
      orderBy: (cards, { desc }) => [desc(cards.created_at)],
    });

    return c.json({ cards });
  } catch (error) {
    console.log(error);
    throw error;
  }
});
