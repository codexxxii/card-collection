import { hc } from "hono/client";
import type { ApiRoutes } from "@server/app";

const api = hc<ApiRoutes>("/").api;

export async function getCards() {
  const res = await api.cards.$get();

  if (!res.ok) {
    throw new Error("SERVER ERROR");
  }

  const data = await res.json();

  return data;
}
