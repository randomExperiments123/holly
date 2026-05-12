# Design Document — Prototype 077: Valentine

## Design Direction
Romantic, elegant, and graceful. Inspired by vintage Valentine's cards and rose gold jewelry.

## Color Palette
- **Rose Gold**: #b76e79 — primary accent
- **Soft Pink**: #f8e8e8 — background
- **Deep Rose**: #8b2252 — headings, dark accents
- **Blush**: #f5d5d5 — card backgrounds
- **Warm White**: #fffbfb — text areas
- **Gold highlight**: #d4af37 — subtle accents

## Typography
- **Headings**: Script/cursive using `'Brush Script MT', 'Snell Roundhand', 'Apple Chancery', cursive`
- **Body**: Elegant serif `'Georgia', 'Times New Roman', serif`
- **Subheadings**: Small-caps for contrast

## Key Visual Elements
1. **Heart motifs**: CSS pseudo-elements generating heart shapes (◆ rotated)
2. **Lace patterns**: Repeating radial-gradient for lace-like borders
3. **Soft gradients**: Pink-to-blush linear gradients on sections
4. **Rose gold accents**: Buttons and borders in #b76e79
5. **Gentle shadows**: Warm, soft box-shadows throughout

## Layout
- Single-column mobile, two-column desktop
- Rounded, soft corners on cards (border-radius: 24px)
- Centered, intimate layout with cozy whitespace

## Lightbox
Rose gold navigation buttons. Soft pink glow on backdrop. Script-style counter.

## Accessibility
- Skip link
- ARIA labels
- Adequate contrast ratios on text
- Focus rings in rose gold
