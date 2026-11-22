# Local Search Pro website

Astro 5, static output, no UI framework. Client JS is limited to the mobile menu.

## Setup

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview
```

Node 18.20.8+, 20.3+ or 22+. Copy `.env.example` to `.env` and fill in what you know.

## Configuration

| Variable | Purpose |
|---|---|
| `SITE_URL` | Production domain, e.g. `https://example.co.uk`. Enables canonical and Open Graph URLs, the sitemap and the `robots.txt` sitemap line. **Never guessed**: unset means those are omitted. |
| `PUBLIC_ROUTE_CONTACT`, `PUBLIC_ROUTE_PRICING` | Destinations for "Get in Touch", "Ask Us a Question" and "View All Packages". Default `#`. |
| `PUBLIC_ROUTE_SIGNUP_*` | Destination for each "Choose …" button (`WEBSITE_STARTER`, `GOOGLE_PROFILE_CARE`, `LOCAL_SEO_ESSENTIALS`, `SEO_GROWTH`). Default `#`. |

Unset routes log a warning in the dev server console. See `src/config/routes.ts`.
`src/config/site.ts` holds organisation details for structured data; `TODO` values are never emitted.

## Where things live

- `src/pages/`: `/`, `/pay-monthly-websites/`, `/google-business-profile-management/`, `/local-seo/`, `/seo-growth/`, plus `/components/` (dev only: `noindex`, not in the sitemap).
- `src/data/services.ts`: prices, setup fees, terms and package features (single source). `plans.ts` builds PriceCard props and Service JSON-LD from it.
- `src/components/`: Button, PriceCard, ServiceCard, CTA, Icon, IconTile, Hero, FAQ, Steps, LocalBand, PackageTiles, Header, Footer, Logo.
- `src/styles/tokens.css` (brand tokens) and `global.css` (layout patterns).
- `public/brand/`: logos, favicons, icons and background textures.
- `design/`: the design handoff and the approved copy (`design/uploads/local-search-pro-website-content.md` is the source of truth for copy and SEO).
- `netlify.toml`: build settings, cache headers and 301 redirects from the old routes.
