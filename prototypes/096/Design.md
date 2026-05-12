# Design Decisions — Prototype 096

## Concept
A storybook-inspired portfolio that transforms each project into a chapter of an enchanted tale. The design evokes illustrated fairy tale books from childhood — ornate borders, decorative drop caps, and a muted magical color palette.

## Layout
- Centered single-column layout, like a storybook page
- Decorative ornamental borders frame each section
- Drop cap initial on the hero heading and section titles
- Project cards styled as illustrated "pages" with ornate frames
- Whimsical divider motifs between sections

## Typography
"Playfair Display" for headings brings elegance and storybook charm. Body set in "Lora" for warm, readable serif text. Oversized drop caps (via `::first-letter`) create the classic fairy tale opening feel.

## Color Palette
Muted enchanted colors — sage green, dusty rose, lavender, and warm cream — create a soft, magical atmosphere. Deep forest green anchors the design. Gold accents add a hint of fairy-tale treasure.

## Decorative Elements
- CSS ornamental borders using repeating gradients and box-shadows
- Floral corner decorations via pseudo-elements
- Parchment-like cream background with subtle texture
- Decorative initial caps on headings
- Whimsical dotted/swirl dividers between sections

## Lightbox
Ornate gold-toned frame around images, cream backdrop with dark overlay, decorative border on the lightbox inner panel.

## Accessibility Note
High contrast between text and cream background. All animations respect prefers-reduced-motion.
