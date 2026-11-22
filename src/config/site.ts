/**
 * Site-wide configuration. Values starting with "TODO" are placeholders:
 * they are never written into structured data (see `clean()` in BaseLayout).
 */
export const SITE = {
  name: "Local Search Pro",
  tagline: "Affordable websites and local SEO for UK businesses.",
  url: "https://www.localsearchpro.co.uk",
  legalName: "TODO: legal trading entity",
  address: "TODO: registered business address",
  email: "TODO: contact email",
  telephone: "TODO: contact telephone",
  sameAs: [] as string[],
  /** FAQPage JSON-LD is optional and off by default. */
  faqSchema: false,
};

/** True when a config value has been filled in (not a TODO placeholder). */
export const isSet = (v?: string) => !!v && !v.startsWith("TODO");

/** Date shown on the legal pages. Update it whenever their wording changes. */
export const LEGAL_UPDATED = "22 November 2026";
