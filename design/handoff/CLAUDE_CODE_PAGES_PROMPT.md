# Prompt for Claude Code — Build all pages from the approved copy

Before running this, copy the updated `handoff/` folder (`reference/` now contains five pages) and `uploads/local-search-pro-website-content.md` into your repo's `design/` folder, then commit them. Paste everything below the line into Claude Code at the repo root.

---

The Local Search Pro Astro site and its component library already exist. Now build every page from the approved copy. **Update the existing project. Don't scaffold anything new.**

## Source of truth
- `design/uploads/local-search-pro-website-content.md`: the approved copy and on-page SEO pack. Treat it as the **source of truth**. Keep its headings, wording, prices, qualifications, FAQ answers and CTA intent exactly as written. Don't rewrite, shorten or add marketing copy. If anything looks wrong, list it for me instead of changing it.
- `design/handoff/reference/*.html` + `styles.css`: approved static layouts for each page. Match their structure and styling, using the existing components (Button, PriceCard, ServiceCard, IconTile, CTA, FAQ and Hero).

| Route | Reference file |
|---|---|
| `/` | `index.html` |
| `/pay-monthly-websites/` | `pay-monthly-websites.html` |
| `/google-business-profile-management/` | `google-business-profile-management.html` |
| `/local-seo/` | `local-seo.html` |
| `/seo-growth/` | `seo-growth.html` |

In the reference files, links between pages use `.html`. Map them to the routes above, and use trailing slashes consistently (`trailingSlash: 'always'`). If the site currently has `/websites`, `/google-business-profile` or similar routes, add 301 redirects from them to the new routes.

## Layout patterns used in the references (build as components if they don't exist)
- **PageHero**: navy with the map texture. Holds the H1, the lead line (the H3 under the H1 in the copy), paragraphs, a price line with "£X per month" in yellow, CTAs and an optional tick row. The right-hand media slot is a labelled placeholder for each page's graphic.
- **SectionSplit**: H2 (and optional H3) on the left; content on the right with a cyan rule.
- **FeatureGrid**: a variant `included` (bordered cards with a ✓ tile) and a variant `benefits` (cyan top rule).
- **StepList**: an `<ol>` with yellow numbered circles.
- **ServiceCard grid** (homepage), **PackageTiles** (homepage price list, linking to each service), **PricingSection** (copy on the left, PriceCard on the right, `id="pricing"`).
- **ComparisonTable** (SEO Growth): a semantic `<table>` with `<th scope>`, which scrolls horizontally on mobile.
- **SearchChips** (Local SEO example searches), **TagList** (homepage industries), **Band** (navy cross-sell with an outline-cyan CTA), **FAQ** (`<details>` with the question as an H3), and **CTA banner**.

Keep sections alternating between white and `#F4F8FB`, as in the references.

## Data
Extend `src/data/services.ts` so that pricing comes from a single source. The references and copy give these values:
- Website Starter: £79/month, £149 setup, 24-month minimum
- Google Profile Care: £69/month, £99 setup, initial 3 months
- Local SEO Essentials: £149/month, £149 setup, initial 3 months
- SEO Growth: £249/month, £199 setup, initial 3 months

Replace the earlier TODO placeholders in the component library with these values and the features from the copy.

## SEO (follow the "Website-wide" section of the copy doc)
- Each page gets its own SEO title and meta description from the copy, exactly as written, plus one H1 and the H2/H3 hierarchy shown.
- Canonical and Open Graph URLs come from a single `SITE_URL` env/config value. **Don't guess the domain.**
- Add Organization and WebSite JSON-LD, driven by config with placeholder values marked TODO. Add Service JSON-LD on the four service pages. FAQPage JSON-LD is optional, so leave it behind a flag that's off by default.
- Update the sitemap and robots.txt. Use "Google Business Profile" everywhere and never "Google My Business".

## Routes that don't exist yet
In the references, CTAs marked `data-route-todo` (`contact`, `pricing`, `signup:<plan>`) have no confirmed destination. Put these in `src/config/routes.ts` as configurable values that default to `#`, and add a visible console warning in development. **Don't invent URLs.** Ask me for the destinations once you've finished.

"Get Started"-style CTAs on service pages scroll to `#pricing`. On the homepage, they scroll to `#packages`.

## Rules
- No testimonials, ratings, results, accreditations or ranking guarantees.
- Keep the prices, VAT notes, setup fees and minimum terms visible next to each offer, as in the references.
- Keep client JS at zero apart from the mobile menu. Meet AA contrast, show visible focus, and use a skip link (one is included in the references).

## Finish
1. Build, then check each page at 360px and 1280px.
2. Show me screenshots of each page next to its reference file.
3. Give me two lists: (a) any copy you think needs confirming, using the pre-publication checklist at the end of the copy doc, and (b) the route destinations you need from me.
4. Commit as `feat: build all pages from approved copy`.
