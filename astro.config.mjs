import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Production domain. Override with SITE_URL (e.g. for a staging build).
const site = process.env.SITE_URL || "https://www.localsearchpro.co.uk";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    sitemap({ filter: (page) => !/\/(components|thank-you|signup)\//.test(page) }),
  ],
});
