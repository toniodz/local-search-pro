import type { Service } from "./services";
import { setupLine } from "./services";

/** Props for <PriceCard /> from the single services source. */
export function planCard(s: Service) {
  return {
    name: s.planName, icon: s.icon, price: s.price, setup: setupLine(s),
    features: s.features, cta: s.cta, featured: false, note: s.note, includedLabel: s.includedLabel,
  };
}

/** Service JSON-LD (only real, approved values; no ratings or reviews). */
export function serviceSchema(s: Service, description: string) {
  return {
    "@context": "https://schema.org", "@type": "Service", name: s.name, description,
    provider: { "@type": "Organization", name: "Local Search Pro" },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    offers: { "@type": "Offer", priceCurrency: "GBP", price: String(s.price),
      priceSpecification: { "@type": "UnitPriceSpecification", price: String(s.price), priceCurrency: "GBP", unitText: "month", valueAddedTaxIncluded: false } },
  };
}
