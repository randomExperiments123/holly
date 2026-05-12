# Design.md — 089: Wabi-Sabi

## Concept
Imperfection as beauty. Asymmetric layouts, weathered textures, and an earthy palette create a serene, handcrafted feel.

## Palette
- #b89b7e (clay) — primary warm tone  
- #8a9a83 (sage) — secondary green  
- #d4c4a8 (sand) — background  
- #6b5d4d (umber) — text and shadows  
- #f0ebe3 (rice paper) — light background

## Asymmetry System
- Projects grid: left column wider than right (2fr 1fr on desktop, reversed on every other row)
- Hero text off-center (55/45 split)
- Section padding varies top vs bottom
- No element is perfectly centered

## Texture
- `background-image` with layered gradients simulating worn paper
- Borders use `outset` and `dashed` combinations for irregular edges
- Subtle noise overlay at 2% opacity

## Key Decisions
- No straight rules — borders are dashed or missing
- Navigation uses lowercase only
- Project images have slightly rounded corners with irregular radius (18px 4px 18px 4px)
- Contact section has no background — blends into overall page
- Generous whitespace (padding 1.5× normal)
- Footer is minimal, left-aligned
