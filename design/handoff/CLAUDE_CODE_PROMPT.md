# Prompt for Claude Code — Build the Local Search Pro Astro site

Copy everything below the line into Claude Code, run from the root of this downloaded project folder.

---

You are building the marketing website for **Local Search Pro**, a UK company selling subscription websites, Local SEO and Google Business Profile management to small businesses. Build it with **Astro** (latest stable), static output, no UI framework unless a component needs interactivity.

## Source material in this folder
- `handoff/reference/pay-monthly-websites.html` + `handoff/reference/styles.css` — the approved reference page. Match its layout, spacing, type and colours exactly. Copy is final: keep it **verbatim**.
- `Brand Guidelines.dc.html` — brand rules (open in a browser). Summary below.
- `Component Library.dc.html` — approved Button, PriceCard, ServiceCard (default + compact), Icon and CTA (banner | band | inline) specs. Build `src/components/` to match it.
- `brand/icons/` — 10 SVG icons (24px, 2px stroke, `currentColor`); `icons.json` has the inner markup for an `<Icon name>` component.
- `brand/logos/svg/` — logo masters (`lsp-{horizontal|tagline|stacked|symbol}-{on-dark|on-light|mono-navy|mono-white}.svg`). PNG equivalents in `brand/logos/png/`.
- `brand/logos/favicon/` — `favicon.svg`, `favicon-16/32/48.png`, `apple-touch-icon.png`, `icon-512.png`.
- `uploads/LocalSearchPro Website Homepage Mockup.png` — homepage layout reference (structure only; use the approved brand tokens below, not the mockup's colours/fonts).
- `brand/backgrounds/` — `map-navy.svg` (hero/CTA texture), `map-overlay-white.svg`, `map-pale.svg`, `divider-swoosh-cyan.svg`.

Note: the logo SVGs are fully outlined paths (no font dependency). Use them as-is; never retype the wordmark as HTML text.

## Brand tokens (put in `src/styles/tokens.css` as CSS custom properties)
- Deep Navy `#10283F` — primary dark, headings, nav
- Bright Yellow `#FFE500` (hover `#FFF066`) — primary buttons, key prices, symbol. One yellow button per view.
- Electric Cyan `#05B9F2` — accents/links/icons **on navy only**
- Cyan Deep `#0590CC` — large text & logo on light
- Cyan Text `#0077B0` — links, eyebrows, small text on light (4.9:1)
- Charcoal `#303030`, Pale Blue `#EAF6FD`, Surface `#F4F8FB`, Border `#DCE5EE`, White
- Text greys: `#33475B` (body on white), `#465A6E` (secondary); on navy `#D6E0EA`
- Fonts (Google Fonts, SIL OFL): **Plus Jakarta Sans** 600/700/800 for headings, nav, buttons, labels; **DM Sans** 400/500/700 for body. Self-host via `@fontsource/plus-jakarta-sans` and `@fontsource/dm-sans`.
- Type scale: H1 800 clamp(40px→60px)/1.04, −0.025em · H2 800 clamp(30px→40px)/1.15, −0.02em · H3 700 20–22px, −0.01em · Body 17px/1.6 · Buttons 700 16px · Nav 600 15px · Eyebrow 700 13px uppercase +0.14em · Caption 14px.
- Radius: 8 buttons, 12 cards, 16 feature/pricing cards. Container 1200px, 24px gutters, 88px section padding. Focus ring 3px `#05B9F2`, offset 3px. Min tap target 44px.
- Never: yellow or Electric Cyan text on white; gradients/shadows on the logo; "Number 1 on Google" / "Guaranteed leads" claims.

## Project structure
```
src/
  layouts/BaseLayout.astro        # <head>, fonts, favicon set, SEO props, Header, Footer
  components/
    Header.astro  Footer.astro  Logo.astro (variant, tone props → correct SVG)
    Button.astro (variant: primary | ghost-dark | ghost-light | outline-cyan; href)
    Hero.astro (eyebrow, title, slots, media slot) — map-navy bg + cyan swoosh
    SectionHeading.astro  FeatureCard.astro  PriceCard.astro
    WhyGrid.astro  LocalBand.astro  Steps.astro  FAQ.astro (<details>, + FAQPage JSON-LD)
    CTA.astro (map bg, top curve, cropped symbol bottom-right)
  content/                         # Astro content collections for services & FAQs
  pages/
    index.astro                    # Home — follow the homepage mockup structure (uploads/)
    websites.astro                 # = the reference page (build this first)
    google-business-profile.astro  local-seo.astro  seo-growth.astro
    pricing.astro  contact.astro  signup.astro (form placeholder)
  styles/tokens.css  global.css
public/brand/...                   # copy brand/logos and brand/backgrounds here
```

## Requirements
1. Build `/websites` first as a pixel-faithful port of the reference HTML using the components above. Then share components across the other pages.
2. Other pages use placeholder copy clearly marked `TODO: copy` — do not invent prices, stats, testimonials or claims. Known prices: Websites from £79/mo, GBP from £69/mo, Local SEO from £149/mo, SEO Growth from £249/mo (all + VAT).
3. Fully responsive (test 360, 768, 1280px). Mobile nav: accessible disclosure menu (button with `aria-expanded`), no JS framework.
4. Accessibility: semantic landmarks, one H1 per page, visible focus, AA contrast, `alt=""` on decorative graphics, reduced-motion respected.
5. SEO: per-page title/description props, canonical URLs, Open Graph image (use `brand/logos/png/lsp-tagline-on-dark.png` on navy until social assets exist), `@astrojs/sitemap`, `robots.txt`, LocalBusiness + Service JSON-LD, FAQPage JSON-LD on pages with FAQs. `lang="en-GB"`, British spelling.
6. Performance: Lighthouse 95+ on all four categories. No client JS except the mobile menu. Inline critical SVG (symbol) where helpful; use `astro:assets` for raster images.
7. Hero media slot on `/websites`: leave a clearly labelled placeholder for the laptop + phone mockup graphic (to be supplied).
8. Forms (`/contact`, `/signup`): accessible HTML forms posting to a configurable endpoint (`PUBLIC_FORM_ENDPOINT` env var); no backend.
9. Add a `README.md` with setup, scripts, and where tokens/components live.

Work in small commits: scaffold → tokens/global styles → layout/header/footer → `/websites` → remaining pages → SEO/a11y pass. After `/websites`, stop and show me a screenshot comparison against the reference HTML before continuing.
