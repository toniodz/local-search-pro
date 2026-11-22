/**
 * Destinations for contact, pricing and signup. They default to the site's own pages
 * and can be overridden with an environment variable (e.g. to point at a checkout).
 *
 *   PUBLIC_ROUTE_CONTACT, PUBLIC_ROUTE_PRICING,
 *   PUBLIC_ROUTE_SIGNUP_WEBSITE_STARTER, PUBLIC_ROUTE_SIGNUP_GOOGLE_PROFILE_CARE,
 *   PUBLIC_ROUTE_SIGNUP_LOCAL_SEO_ESSENTIALS, PUBLIC_ROUTE_SIGNUP_SEO_GROWTH
 */
const env = import.meta.env as Record<string, string | undefined>;

/** Defaults are the site's own pages; any can be overridden with the env vars above. */
const table = {
  contact: env.PUBLIC_ROUTE_CONTACT || "/contact/",
  pricing: env.PUBLIC_ROUTE_PRICING || "/pricing/",
  "signup:Website Starter": env.PUBLIC_ROUTE_SIGNUP_WEBSITE_STARTER || "/signup/website-starter/",
  "signup:Google Profile Care": env.PUBLIC_ROUTE_SIGNUP_GOOGLE_PROFILE_CARE || "/signup/google-profile-care/",
  "signup:Local SEO Essentials": env.PUBLIC_ROUTE_SIGNUP_LOCAL_SEO_ESSENTIALS || "/signup/local-seo-essentials/",
  "signup:SEO Growth": env.PUBLIC_ROUTE_SIGNUP_SEO_GROWTH || "/signup/seo-growth/",
} as const;

export type RouteKey = keyof typeof table;

export function route(key: RouteKey): string {
  return table[key];
}
