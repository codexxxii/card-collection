CREATE TABLE "cards" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"image_front" text NOT NULL,
	"image_back" text NOT NULL,
	"price_charting_link" text NOT NULL,
	"illustrator" text NOT NULL,
	"set" text NOT NULL
);
