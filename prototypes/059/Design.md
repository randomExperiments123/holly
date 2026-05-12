# Design Decisions — 059 Chicano

## Colour Palette
- Background: #1a0a0a (very dark red-black)
- Deep red: #8b1a1a
- Gold: #c9a84c
- Cream: #f5e6c8
- Black: #0d0d0d
- Gold accent: #e8c44a

## Typography
- Google Fonts: 'Great Vibes' (script/calligraphy for headings)
- Google Fonts: 'Cinzel Decorative' for subheadings (ornate serif)
- Google Fonts: 'Cormorant Garamond' for body (elegant serif)
- All from Google Fonts CDN

## Key Design Elements
1. Ornate decorative borders using CSS repeating patterns and box-shadow combinations
2. Gold and deep red colour scheme with cream accents
3. Script lettering for main headings with Great Vibes
4. Decorative dividers between sections (CSS pseudo-elements)
5. Project cards framed with ornate golden borders
6. Lowrider-inspired flame motifs in section separators
7. Filigree corner decorations on cards

## Accessibility
- Skip link with gold accent background
- ARIA labels on all interactive elements
- High contrast cream-on-red text
- Reduced motion media query

## Responsive
- Mobile-first single column
- Two-column grid at 768px+
- Fluid typography using clamp()
