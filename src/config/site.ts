/**
 * Site-wide configuration. Values starting with "TODO" are placeholders:
 * they are never written into structured data (see `clean()` in BaseLayout).
 */
export const SITE = {
  name: "Local Search Pro",
  tagline: "Affordable websites and local SEO for UK businesses.",
  /** Production domain comes from the SITE_URL env var only. It is never guessed. */
  url: (import.meta.env.SITE_URL as string | undefined) || undefined,
  legalName: "TODO: legal trading entity",
  email: "TODO: contact email",
  telephone: "TODO: contact telephone",
  sameAs: [] as string[],
  /** FAQPage JSON-LD is optional and off by default. */
  faqSchema: false,
};
