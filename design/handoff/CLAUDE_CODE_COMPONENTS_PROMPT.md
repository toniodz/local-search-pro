# Prompt for Claude Code — Add the component library to the existing site

Paste everything below the line into Claude Code at the repo root.

---

The Local Search Pro Astro site is already built. Now bring its components in line with the approved component library. **Update the existing project. Don't scaffold anything new or change page copy.**

## Source material (in `design/`)
- `design/Component Library.dc.html`: the approved specs for every component. Open it in a browser, and read its markup for exact values. All styles are inline.
- `design/brand/icons/`: 10 SVG icons (24×24, 2px stroke, round caps and joins, `stroke="currentColor"`). `icons.json` maps each icon name to its inner SVG markup.
- `design/brand/logos/svg/lsp-symbol-on-dark.svg` and `lsp-symbol-on-light.svg`: used in the CTA components.
- `design/brand/backgrounds/map-navy.svg`: the background texture for navy CTAs.

Copy any assets you need into `public/brand/` if they aren't there already.

## Components to create or refactor (`src/components/`)

1. **`Icon.astro`**: props `name`, `size = 24`, `label?`. Inline the SVG from `icons.json` so it inherits `currentColor`. Use `aria-hidden="true"` unless `label` is set, in which case use `role="img"` and `aria-label`. Names: `pay-monthly-websites`, `google-business-profile`, `local-seo`, `seo-growth`, `website-hosting`, `reporting`, `customer-support`, `online-enquiries`, `business-growth`, `location`.
   Also create **`IconTile.astro`**: a 48px tile with a 14px radius. `tone="light"` is Pale Blue `#EAF6FD` with a navy icon; `tone="dark"` is navy with a cyan `#05B9F2` icon.

2. **`Button.astro`**: props `variant`, `size`, `href?`, `type?`, `arrow?`, `disabled?`, `fullWidth?`. Render `<a>` when there's an `href`, otherwise `<button>`.
   - Variants: `primary` (yellow `#FFE500`, navy text, hover `#FFF066`), `secondary` (1.5px `#0077B0` outline, fills on hover with white text), `dark` (navy fill, hover `#1C3A57`), `link` (underlined `#0077B0`), `ghost-dark` (white outline on navy, fills white on hover), `outline-cyan` (`#05B9F2` outline on navy, fills cyan on hover with navy text).
   - Sizes: `sm` 40px / 14px text (header nav only), `md` 48px / 16px, `lg` 56px / 17px.
   - Plus Jakarta Sans 700, 8px radius. Focus: 3px `#05B9F2` outline with a 3px offset. Disabled: `#E6EBF0` background, `#7A8A9A` text, `aria-disabled`.
   - `arrow` adds a trailing → with `aria-hidden`.

3. **`PriceCard.astro`**: props `name`, `icon`, `price`, `setup?`, `features[]`, `cta`, `href`, `featured?`.
   - The header is navy and holds the icon (cyan on a 14%-cyan tile), the name, "From" + price (44px, 800, yellow) + "per month + VAT", and the setup line.
   - The body has a ✓ feature list in `#1F8A3A` and a full-width primary button pinned to the bottom of the card.
   - Featured cards get a 2px `#05B9F2` border and a cyan "Popular" pill. 16px radius.
   - Cards in a row must be equal height.

4. **`ServiceCard.astro`**: props `icon`, `title`, `summary`, `price`, `href`, `variant = "default" | "compact"`. The whole card is a link.
   - `default`: white card, 1px `#DCE5EE` border, light IconTile, title, summary, "From £X per month + VAT", and a "Explore … →" link line. On hover the border turns cyan and a soft shadow appears.
   - `compact`: for navy sections. Translucent white card containing a cyan icon, the title and "From £X/month + VAT".

5. **`CTA.astro`**: prop `variant = "banner" | "band" | "inline"`, plus `eyebrow?`, `title`, `text?`, and `primary`/`secondary` button props, or slots.
   - `banner`: navy with the map texture, a large `lsp-symbol-on-dark.svg` cropped off the bottom-right corner (decorative, `alt=""`), eyebrow, H2, text, and primary + ghost-dark buttons.
   - `band`: navy with the map texture in a two-column grid. Heading on the left; text and an outline-cyan button on the right.
   - `inline`: a Pale Blue `#EAF6FD` panel with a small symbol, title, one line of text, and primary + secondary buttons.
   - On mobile, every variant stacks and its buttons go full width.

## Data
Create `src/data/services.ts` with the four services so that PriceCard and ServiceCard share a single source:
- Pay Monthly Websites: £79, with a £149 setup fee
- Google Business Profile Management: £69
- Local SEO: £149, featured
- SEO Growth: £249

Take features and summaries from `Component Library.dc.html`. Keep the `TODO` placeholders as they are; don't invent copy, fees or features.

## Then
1. Replace any one-off buttons, cards and CTAs on the existing pages with these components. Keep the visual output the same or closer to the spec, and leave the copy unchanged.
2. Add a `/components` dev page that renders every variant, matching the layout of `Component Library.dc.html`. Exclude it from the sitemap and add `noindex`.
3. Keep client JS at zero for these components. Use tokens from `src/styles/tokens.css`, and add any that are missing (`--yellow-hover:#FFF066`, `--cyan-text:#0077B0`, `--success:#1F8A3A`).
4. Run the build. Check 360px and 1280px, keyboard focus, and AA contrast.
5. Show me screenshots of `/components` next to `design/Component Library.dc.html` before committing. Commit as `feat: brand component library`.
