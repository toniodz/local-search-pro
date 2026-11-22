import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const services = defineCollection({
  loader: file("src/content/services.json"),
  schema: z.object({
    name: z.string(),
    href: z.string(),
    price: z.number(),
    tagline: z.string(),
    bullets: z.array(z.string()),
    icon: z.string(),
  }),
});

const faqs = defineCollection({
  loader: file("src/content/faqs.json"),
  schema: z.object({ page: z.string(), question: z.string(), answer: z.string() }),
});

export const collections = { services, faqs };
