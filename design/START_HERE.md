# Local Search Pro — design handoff

Put this `design/` folder at the root of your site repo, commit it, then paste the prompt below into Claude Code.

## Contents
- `brand/`: logos (SVG and PNG), favicons, icons and backgrounds
- `Brand Guidelines.dc.html` and `Component Library.dc.html`: open these in a browser. They need `support.js` alongside them.
- `handoff/reference/`: static reference HTML for all five pages, plus `styles.css`
- `handoff/CLAUDE_CODE_COMPONENTS_PROMPT.md`: step 1, the components
- `handoff/CLAUDE_CODE_PAGES_PROMPT.md`: step 2, all the pages
- `uploads/local-search-pro-website-content.md`: the approved copy and SEO pack (source of truth)
- `uploads/LocalSearchPro Website Homepage Mockup.png`: the layout reference

## Paste into Claude Code

```
The existing Astro site needs updating from the design handoff in design/. Work through it in two stages, and stop for my review after each one.

Stage 1: read design/handoff/CLAUDE_CODE_COMPONENTS_PROMPT.md and do everything it says. Show me the /components screenshots and wait for my approval.

Stage 2: read design/handoff/CLAUDE_CODE_PAGES_PROMPT.md and do everything it says. Treat design/uploads/local-search-pro-website-content.md as the source of truth for all copy and SEO. Show me the page screenshots next to the references, then give me the copy-confirmation list and the route destinations you need.

Rules for both stages: update the existing project and don't scaffold anything new. Never rewrite the approved copy. Don't invent URLs, testimonials or claims. Commit after each stage.
```
