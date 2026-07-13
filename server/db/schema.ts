import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";

export const cards = pgTable("cards", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  name: text("name").notNull(),
  image_front: text("image_front").notNull(),
  image_back: text("image_back").notNull(),
  price_charting_link: text("price_charting_link").notNull(),
  illustrator: text("illustrator").notNull(),
  set: text("set").notNull(),
});
