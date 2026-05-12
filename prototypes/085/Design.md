# Design Document: 085 — Monospace Only

## Concept
Radical constraint: one font, no decorative images, strict grid. The portfolio becomes a typographic exercise where hierarchy, spacing, and ASCII-level decoration do all the work.

## Color Palette
- Background: #1a1a1a (dark terminal)
- Text: #d4d4d4 (terminal green-grey)
- Accent: #00ff41 (matrix green)
- Secondary: #555555 (dimmed)
- Cursor blink: #00ff41

## Typography
- Font: "Courier New", "Courier", "Liberation Mono", monospace
- Sizes: 14px body, 16px h2, 18px h1 (all monospace, subtle size differences only)
- Weight: 400 and 700 only
- Letter-spacing: normal (monospace default)
- Text-transform: uppercase for headings

## Interactions
- Cursor blink animation on hero
- Typewriter reveal effect on load (staggered character appearance)
- Project links: underscore turns to block on hover
- ASCII borders glow on hover (green)
- Lightbox opens with terminal-like transition

## Layout
- Strict 12-column grid, all elements align to it
- Content max-width 960px, centered
- ASCII boxes around project cards (actual pipe/hyphen characters)
- Every element has a grid position, nothing floats
- Footer: centered, dimmed

## Key Design Decisions
- Terminal aesthetic — green on black evokes early computing
- ASCII decoration only — no CSS borders, real character borders
- Typewriter feel — monospace rhythm, fixed line heights
- Project images only visible in lightbox, cards show only text
- The constraint itself IS the design statement
