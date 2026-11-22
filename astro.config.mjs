import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// The production domain is never guessed: set SITE_URL (e.g. in Netlify's environment variables).
// Without it the sitemap, canonical and Open Graph URLs are omitted.
const site = process.env.SITE_URL || undefined;

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: site ? [sitemap({ filter: (page) => !page.includes("/components") })] : [],
});
