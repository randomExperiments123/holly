# Design Document — Prototype 076: Circus

## Design Direction
Vibrant big-top circus aesthetic with maximalist energy.

## Color Palette
- **Primary Red**: #e63946 — tent stripes, accents
- **Primary Yellow**: #f4a261 — backgrounds, highlights
- **Primary Blue**: #264653 — text, dark areas
- **Accent Gold**: #e9c46a — decorative elements
- **Background**: #fefae0 — warm off-white

## Typography
- **Headings**: Fantasy/display style using `'Cooper Black', 'Party LET', fantasy` for that carnival feel
- **Body**: System sans-serif for readability
- **Special**: Decorative curly-letter styling on hero

## Key Visual Elements
1. **Striped hero**: Diagonal red/yellow/blue stripe background using CSS linear-gradient
2. **Dotted borders**: `border: 3px dotted` on cards and sections
3. **Confetti**: Pseudo-element circles in multiple colors scattered around
4. **Project cards**: Rounded corners with striped overlays on hover
5. **Lightbox**: Dark backdrop with yellow accent buttons

## Layout
- Single-column on mobile (<768px), two-column grid on desktop
- Center-aligned text with playful asymmetrical accents
- Generous padding to let the colors breathe

## Lightbox
Standard inline implementation. Yellow/red navigation buttons. Dark backdrop with blur.

## Accessibility
- Skip link at top
- ARIA on all interactive elements
- High contrast where text appears
- Focus indicators in yellow
