# Design Decisions — 056 Origami

## Colour Palette
- Background: #faf8f5 (warm off-white)
- Paper white: #ffffff
- Pastel pink: #f2d5d5
- Pastel mint: #d5e8d5
- Pastel lavender: #d5d5e8
- Pastel blue: #d5e4f0
- Text: #2d2d2d (soft black)
- Accent: #e8b4b4 (darker pastel pink)

## Typography
- Google Fonts: 'Quicksand' for body (rounded, friendly)
- Google Fonts: 'Playfair Display' for headings (elegant contrast)
- Both loaded from Google Fonts CDN

## Key Design Elements
1. Folded paper effect: project cards use `clip-path: polygon()` for angular folded corner
2. Layered shadows: boxes have multiple `box-shadow` layers to simulate stacked paper
3. Subtle transform tilt: cards slightly rotate on hover mimicking paper lifting
4. Pastel colour blocks: alternating pastel accent colours per project card
5. Paper texture: subtle repeating gradient resembling paper grain
6. Origami crane divider: CSS-created geometric shape in the hero section

## Accessibility
- Skip link with folded-paper accent colour
- ARIA labels on all interactive elements
- Focus styles using pastel accent borders
- Reduced motion media query

## Responsive
- Mobile-first single column
- Two-column grid at 768px+
- Fluid typography using clamp()
