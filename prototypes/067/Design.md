# Design Decisions: Soviet Constructivism (067)

## Visual Direction
The design channels Soviet propaganda posters and constructivist art from the 1920s-30s. Everything is bold, angular, and unapologetically graphic. Diagonal lines slice through sections, typography is heavy and occasionally rotated, and the red/black dichotomy dominates.

## Colour Palette
- Background: #1a1a1a (charcoal black)
- Primary: #cc0000 (Soviet red)
- Accent: #8b0000 (dark red for depth)
- Text: #f0f0f0 (off-white) and #ffffff
- Highlights: #ff3333 (bright red glow)

## Typography
System sans-serif with heavy weight (700+). Headings use letter-spacing compression and occasional text-transform: uppercase. Some decorative text elements are rotated 90 degrees like Russian avant-garde posters.

## Layout
- Hero has a dramatic diagonal split background (red triangle cuts into black)
- Section dividers use CSS diagonal stripe patterns
- Project cards have a stencil-like border treatment
- Decorative hammer & sickle shapes created with CSS pseudo-elements (circles + intersecting lines)
- Star motifs (red star outlines) as decorative elements

## Key Techniques
- CSS clip-path for diagonal section splits
- Linear-gradient with hard stops for diagonal stripes
- Rotated text elements (-5deg to -15deg)
- Pseudo-element decorative shapes (stars, angles)
- Red banner strips with white text (propaganda style)
