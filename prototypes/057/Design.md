# Design Decisions — 057 Holographic

## Colour Palette
- Background: #0a0a0f (very dark, almost black with blue tint)
- Surface: #141420 (dark blue-grey)
- Iridescent gradient: linear-gradient through cyan, magenta, yellow, lime
- Text light: #f0f0ff
- Text muted: #8888aa

## Typography
- Google Fonts: 'Space Grotesk' (futuristic, geometric)
- Google Fonts: 'Orbitron' for headings (tech-oriented display)
- Both from Google Fonts CDN

## Key Design Elements
1. Animated iridescent gradient on hero and section dividers
2. Glass-morphism nav bar with rainbow border-bottom
3. Project cards with iridescent border and subtle glow
4. "Prismatic" shimmer effect on hover — a rainbow sweep
5. Holographic foil effect on the main heading using layered background-clip
6. Section backgrounds with varying iridescent overlays

## Accessibility
- Skip link with high contrast
- ARIA labels on interactive elements
- Ensure text contrast against iridescent backgrounds
- Reduced motion disables animations

## Responsive
- Mobile-first single column
- Two-column grid at 768px+
- Fluid typography using clamp()
