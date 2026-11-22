/**
 * Destinations that are not confirmed yet. Each defaults to "#" and can be set
 * with an environment variable. Nothing here is guessed.
 *
 *   PUBLIC_ROUTE_CONTACT, PUBLIC_ROUTE_PRICING,
 *   PUBLIC_ROUTE_SIGNUP_WEBSITE_STARTER, PUBLIC_ROUTE_SIGNUP_GOOGLE_PROFILE_CARE,
 *   PUBLIC_ROUTE_SIGNUP_LOCAL_SEO_ESSENTIALS, PUBLIC_ROUTE_SIGNUP_SEO_GROWTH
 */
const env = import.meta.env as Record<string, string | undefined>;

const table = {
  contact: env.PUBLIC_ROUTE_CONTACT,
  pricing: env.PUBLIC_ROUTE_PRICING,
  "signup:Website Starter": env.PUBLIC_ROUTE_SIGNUP_WEBSITE_STARTER,
  "signup:Google Profile Care": env.PUBLIC_ROUTE_SIGNUP_GOOGLE_PROFILE_CARE,
  "signup:Local SEO Essentials": env.PUBLIC_ROUTE_SIGNUP_LOCAL_SEO_ESSENTIALS,
  "signup:SEO Growth": env.PUBLIC_ROUTE_SIGNUP_SEO_GROWTH,
} as const;

export type RouteKey = keyof typeof table;

const warned = new Set<string>();

export function route(key: RouteKey): string {
  const value = table[key];
  if (value) return value;
  if (import.meta.env.DEV && !warned.has(key)) {
    warned.add(key);
    console.warn(`[routes] No destination configured for "${key}". Links to it point at "#". See src/config/routes.ts.`);
  }
  return "#";
}
