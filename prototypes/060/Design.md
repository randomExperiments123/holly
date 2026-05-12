# Design Decisions — 060 Ghibli-inspired

## Colour Palette
- Sky blue: #b8d4e3
- Grass green: #7aaa6b
- Warm brown: #8b6f4a
- Cream: #f5f0e1
- Soft white: #faf8f0
- Forest green: #4a7a4a
- Sunset orange: #e8a87a

## Typography
- Google Fonts: 'Atkinson Hyperlegible' for body (friendly, highly readable)
- Google Fonts: 'Titan One' for headings (chunky, playful, rounded)
- Both from Google Fonts CDN

## Key Design Elements
1. Soft watercolour-blend gradient backgrounds that shift between nature-inspired colours
2. Organic, irregular border shapes using border-radius asymmetry
3. Leaf/vine decorative elements via CSS pseudo-elements and Unicode characters
4. Cloud-like shapes in hero section using CSS border-radius
5. Warm, soft shadows without harsh edges
6. Card backgrounds with subtle gradient that mimics watercolour washes
7. Nature-motif section dividers with leaf and vine patterns

## Accessibility
- Skip link with nature-green background
- ARIA labels on all interactive elements
- High contrast brown text on cream backgrounds
- Reduced motion media query

## Responsive
- Mobile-first single column
- Two-column grid at 768px+
- Fluid typography using clamp()
