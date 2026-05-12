# Design Document — Prototype 061

## Concept
French New Wave cinema aesthetic. The page feels like a film title sequence — dramatic, typographic, monochrome with strategic colour accents. Grain texture overlays everything.

## Color Palette
- Background: #0a0a0a (near-black), #1a1a1a (dark gray)
- Text: #f0f0f0 (off-white), #888 (gray-secondary)
- Accent: #E8202F (Cinematic Red)
- Film grain overlays via CSS gradients

## Typography
- "Abril Fatface" (Google Fonts) for title cards, headlines
- "Courier New", monospace for metadata, counters
- System sans-serif for body text
- All caps section labels with wide letter-spacing
- Large (72px+), bold, centered headings

## Layout
- Full-viewport hero with letterboxed (2.35:1) image container
- Fixed top nav with transparent-to-black transition
- Split-screen project cards (50/50 image/text on desktop)
- Vertical film reel-inspired scroll indicators
- 4:3 project images with letterbox bars
- Footer with "Fin" treatment

## Key Interactions
- Scroll-triggered film grain intensity
- Project card "cut" transition on hover (jump-cut effect)
- Lightbox with film frame border
- Subtle flicker animation on headings
