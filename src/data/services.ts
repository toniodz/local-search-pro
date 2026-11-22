export type IconName =
  | "pay-monthly-websites" | "google-business-profile" | "local-seo" | "seo-growth"
  | "website-hosting" | "reporting" | "customer-support" | "online-enquiries"
  | "business-growth" | "location";

export interface Service {
  id: string;
  name: string;
  icon: IconName;
  price: number;
  /** Full setup-fee line, shown as-is on PriceCard */
  setup: string;
  summary: string;
  features: string[];
  cta: string;
  href: string;
  linkLabel: string;
  featured?: boolean;
}

/** Single source for PriceCard and ServiceCard. TODO entries are placeholders awaiting copy. */
export const services: Service[] = [
  {
    id: "websites", name: "Pay Monthly Websites", icon: "pay-monthly-websites", price: 79,
    setup: "£149 one-off setup fee + VAT",
    summary: "A professional website without the big upfront cost.",
    features: ["Up to five professionally designed pages", "Mobile-friendly layouts", "Contact form", "Basic on-page SEO", "Hosting and backups"],
    cta: "Choose Website Starter", href: "/signup?plan=website-starter", linkLabel: "Explore Websites",
  },
  {
    id: "google-business-profile", name: "Google Business Profile Management", icon: "google-business-profile", price: 69,
    setup: "TODO: setup fee",
    summary: "Make a better impression when customers find you on Google.",
    features: ["Profile optimisation and setup", "Two Google updates per month", "Business information management", "Review response guidance", "Performance monitoring"],
    cta: "Choose Google Profile", href: "/signup?plan=google-business-profile", linkLabel: "Explore Google Profile",
  },
  {
    id: "local-seo", name: "Local SEO", icon: "local-seo", price: 149, featured: true,
    setup: "TODO: setup fee",
    summary: "Help more local customers discover your business.",
    features: ["Local keyword research", "Website optimisation", "Google Business Profile care", "Search performance tracking", "Monthly reporting"],
    cta: "Choose Local SEO", href: "/signup?plan=local-seo", linkLabel: "Explore Local SEO",
  },
  {
    id: "seo-growth", name: "SEO Growth", icon: "seo-growth", price: 249,
    setup: "TODO: setup fee",
    summary: "TODO: one-line summary for SEO Growth.",
    features: ["TODO: feature 1", "TODO: feature 2", "TODO: feature 3", "TODO: feature 4", "TODO: feature 5"],
    cta: "Choose SEO Growth", href: "/signup?plan=seo-growth", linkLabel: "Explore SEO Growth",
  },
];

/** Page paths for the service detail pages */
export const servicePath: Record<string, string> = {
  websites: "/websites",
  "google-business-profile": "/google-business-profile",
  "local-seo": "/local-seo",
  "seo-growth": "/seo-growth",
};
