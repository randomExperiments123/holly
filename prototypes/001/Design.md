# Design Document — Prototype 001

## Concept
Apple-inspired minimalism. The portfolio presents work as products — each project card feels like a product hero section on apple.com.

## Color Palette
- Background: #000 (hero), #fff (content)
- Text: #1d1d1f (primary), #6e6e73 (secondary)
- Accent: #0071e3 (Apple blue)
- Borders: #d2d2d7

## Typography
- System font stack (-apple-system, BlinkMacSystemFont, SF Pro Display)
- Hero heading: 64px, ultra-light weight
- Body: 17px, regular weight
- Tight line-height for headings, generous for body

## Layout
- Full-bleed dark hero with centered content
- Two-column project grid on desktop
- Single column on mobile
- Fixed navigation with backdrop blur
- Generous whitespace (80-120px sections)

## Key Interactions
- Smooth scroll navigation
- Hover lift effect on project cards
- Inline lightbox for project images
- Fade-in animations on scroll (via CSS)
