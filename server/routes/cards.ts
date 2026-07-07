import { Hono } from "hono";

const cards = [
  {
    id: "1234",
    name: "2025 POKEMON JAPANESE M1S-MEGA SYMPHONIA #064 SHUCKLE ART RARE",
    image_front: "https://i.ebayimg.com/images/g/ufsAAeSwuqtqSUWw/s-l1600.webp",
    image_back: "https://i.ebayimg.com/images/g/SzAAAeSwQIBqSUWw/s-l1600.webp",
    tcg_link:
      "https://www.pricecharting.com/game/pokemon-japanese-mega-symphonia/shuckle-64",
  },
  {
    id: "1234",
    name: "2026 POKEMON JAPANESE M4-NINJA SPINNER ART RARE #089 XERNEAS PSA 10",
    image_front: "https://i.ebayimg.com/images/g/gRkAAeSw2UdqP~9N/s-l1600.webp",
    image_back: "https://i.ebayimg.com/images/g/8DYAAeSwQhRqP~9N/s-l1600.webp",
    tcg_link:
      "https://www.pricecharting.com/game/pokemon-japanese-ninja-spinner/xerneas-89",
  },
];

export const cardsRoute = new Hono().get("/", (c) => {
  return c.json({ cards });
});
