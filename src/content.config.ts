import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

// Services live in src/data/services.ts (shared by PriceCard and ServiceCard).
const faqs = defineCollection({
  loader: file("src/content/faqs.json"),
  schema: z.object({ page: z.string(), question: z.string(), answer: z.string() }),
});

export const collections = { faqs };
