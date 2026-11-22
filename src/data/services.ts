export type IconName =
  | "pay-monthly-websites" | "google-business-profile" | "local-seo" | "seo-growth"
  | "website-hosting" | "reporting" | "customer-support" | "online-enquiries"
  | "business-growth" | "location";

export interface Service {
  id: string;
  /** Route, with trailing slash */
  path: string;
  /** Service name used in tiles and cards */
  name: string;
  /** Package name used on the price card and in signup routes */
  planName: string;
  icon: IconName;
  price: number;
  setupFee: number;
  /** Minimum term, as stated next to the offer */
  term: string;
  summary: string;
  features: string[];
  note: string;
  /** Label above the price-card feature list */
  includedLabel: string;
  cta: string;
  linkLabel: string;
  featured?: boolean;
}

/**
 * Single source for prices, setup fees and terms (approved copy:
 * design/uploads/local-search-pro-website-content.md).
 */
export const services: Service[] = [
  {
    id: "pay-monthly-websites", path: "/pay-monthly-websites/", name: "Pay Monthly Websites", planName: "Website Starter",
    icon: "pay-monthly-websites", price: 79, setupFee: 149, term: "24-month minimum",
    summary: "A professional website without the big upfront cost.",
    features: ["Up to five professionally designed pages", "Mobile-friendly layouts", "Contact form", "Basic on-page SEO", "SSL certificate", "Hosting and backups", "Limited ongoing content amendments"],
    includedLabel: "Included in your package:",
    note: "Minimum 24-month agreement. Additional pages, advanced features and larger content changes are quoted separately.",
    cta: "Choose Website Starter", linkLabel: "Explore Pay Monthly Websites",
  },
  {
    id: "google-business-profile-management", path: "/google-business-profile-management/", name: "Google Business Profile Management", planName: "Google Profile Care",
    icon: "google-business-profile", price: 69, setupFee: 99, term: "Initial three months",
    summary: "Make a better impression when customers find you on Google.",
    features: ["Initial profile audit and optimisation", "Two profile updates each month", "Business information maintenance", "Review response guidance", "Performance monitoring", "Quarterly performance summary"],
    includedLabel: "Your package includes:",
    note: "Initial three-month agreement. You must have an eligible Google Business Profile and provide the necessary management access.",
    cta: "Choose Google Profile Care", linkLabel: "Explore Google Profile Management",
  },
  {
    id: "local-seo", path: "/local-seo/", name: "Local SEO Essentials", planName: "Local SEO Essentials",
    icon: "local-seo", price: 149, setupFee: 149, term: "Initial three months", featured: true,
    summary: "Help more local customers discover your business.",
    features: ["Initial local SEO review", "Local keyword research", "Google Business Profile optimisation", "Two Google Profile updates per month", "Tracking for an agreed keyword set", "One prioritised website optimisation task each month", "Monthly SEO performance report"],
    includedLabel: "Your package includes:",
    note: "Initial three-month agreement. Requires access to your website and relevant Google services. Larger technical projects, new page creation and extensive content writing are not included.",
    cta: "Choose Local SEO Essentials", linkLabel: "Explore Local SEO Packages",
  },
  {
    id: "seo-growth", path: "/seo-growth/", name: "SEO Growth", planName: "SEO Growth",
    icon: "seo-growth", price: 249, setupFee: 199, term: "Initial three months",
    summary: "Take Your Online Visibility Further",
    features: ["Initial SEO review and keyword research", "Google Search Console analysis", "Google Business Profile management", "Two Google Profile updates per month", "Search visibility tracking", "Up to two scoped SEO optimisation tasks monthly", "Existing content improvements", "Internal linking optimisation", "Monthly reporting and recommendations"],
    includedLabel: "Your package includes:",
    note: "Initial three-month agreement. Extensive technical development, full new articles, additional landing pages and external link-building campaigns are not included as standard.",
    cta: "Choose SEO Growth", linkLabel: "Explore SEO Growth",
  },
];

export const byId = (id: string) => services.find((s) => s.id === id)!;
export const setupLine = (s: Service) => `£${s.setupFee} one-off setup fee + VAT`;
