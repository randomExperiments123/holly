# Design Document — Prototype 080: Minimalist Japanese Vol. 2

## Design Direction
Zen minimalism with sumi-e (ink wash) aesthetics. Wabi-sabi imperfections, exquisite whitespace, vertical text arrangements.

## Color Palette
- **Sumi Black**: #1a1a1a — primary text
- **Rice Paper**: #f5f0e8 — background
- **Ink Gray**: #8a8078 — secondary text
- **Vermillion**: #bf3a2b — minimal accent (hanko stamp red)
- **Charcoal**: #2d2a26 — dark sections
- **Washi White**: #faf6f0 — card backgrounds

## Typography
- **Headings**: Vertical writing mode with `writing-mode: vertical-rl` — reads top-to-bottom, right-to-left
- **Body**: Minimal sans-serif `'Hiragino Sans', 'Noto Sans JP', sans-serif`
- **Accents**: Classic serif `'Noto Serif JP', serif` for Japanese-style elegance

## Key Visual Elements
1. **Sumi-e textures**: CSS radial-gradient and opacity overlays simulating ink wash
2. **Vertical text**: Key headings set in `writing-mode: vertical-rl` with `text-orientation: mixed`
3. **Wabi-sabi asymmetry**: Intentionally off-center layouts, varied card sizes, irregular spacing
4. **Enso circle**: A hand-drawn-style circle (CSS border-radius + rotation) as a decorative accent
5. **Hanko stamp**: Small red square accent (like a Japanese name stamp)
6. **Generous whitespace**: Padding and margins are intentionally large

## Layout
- Single-column mobile, asymmetric two-column on desktop
- Cards with rough/uneven borders (simulating torn washi paper)
- Content offset from center for zen asymmetry
- Minimal decoration — every element serves a purpose

## Lightbox
Minimal black-and-ink navigation. Red (vermillion) accent buttons. Clean, uncluttered controls.

## Accessibility
- Skip link
- ARIA labels
- Vertical text has fallback reading order for screen readers
- High contrast despite minimal palette
- Focus indicators in vermillion red
