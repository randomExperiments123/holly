# Design Decisions — 058 Claymorphism

## Colour Palette
- Background: #f5ede3 (warm cream)
- Clay base: #d4a574 (warm terracotta)
- Clay light: #e8c9a0 (light ochre)
- Clay dark: #b8834a (deep clay)
- Accent: #7a9e7e (sage green)
- Text dark: #3d2c1e (deep brown)
- Text light: #faf0e6 (cream)

## Typography
- Google Fonts: 'Nunito' (rounded, friendly, soft)
- Google Fonts: 'Fraunces' for headings (soft serif with optical sizing)
- Both from Google Fonts CDN

## Key Design Elements
1. Dual-layer box-shadow on cards (dark shadow + light highlight) creating extruded 3D effect
2. Extreme border-radius (24px+ on cards, 50% on buttons)
3. Warmer, softer gradients mimicking clay textures
4. Pill-shaped buttons with deep inner shadow
5. Section backgrounds alternating between cream and clay-tinted cream
6. Hero heading with thick, soft extruded text effect

## Accessibility
- Skip link with clay-colour background
- ARIA labels on all interactive elements
- High contrast text on clay backgrounds
- Reduced motion media query

## Responsive
- Mobile-first single column
- Two-column grid at 768px+
- Fluid typography using clamp()
