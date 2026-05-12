# Design Decisions: IndieWeb (070)

## Visual Direction
This prototype returns to the roots of the web — a time when people built personal sites by hand with HTML. It mimics the look of a 1998 GeoCities/Neocities page: monospace text, marquee-style banners, web-safe colours, and a genuine "made by hand" feel. The design is intentionally naive and charming.

## Colour Palette
Web-safe 216 palette favourites:
- Background: #ffffff (white) or #c0c0c0 (silver)
- Text: #000000 (black)
- Links: #0000ff (blue) turning #800080 (purple) on hover
- Accent: #00ff00 (terminal green), #ffff00 (yellow highlight)
- Horizontal rules: #808080 (gray)
- Code blocks: #f0f0f0

## Typography
Exclusively monospace: "Courier New", "Courier", "SF Mono", "Menlo", monospace. No proportional fonts anywhere. Text is left-aligned, single-spaced.

## Layout
- Single-column, narrow content width (~700px)
- Hero is a simple <h1> with an ASCII-style border frame
- Navigation is a horizontal list of links separated by pipes (|)
- Project cards are simple bordered boxes with minimal decoration
- Horizontal rules (<hr>) separate sections
- "Last updated" timestamp in footer like old personal pages
- Blinking "NEW!" indicators next to items
- "Under construction" animated gif simulated with CSS

## Key Techniques
- CSS border-style: double / dashed / solid for retro box effects
- Monospace-only font-family
- "Blink" animation recreating the <blink> tag
- ASCII art border frames using box-shadow or border patterns
- Horizontal pipe-separated nav mimicking old link bars
- Minimal spacing, maximal content density (90s style)
- No border-radius anywhere (sharp corners only)
- Bevel/ridge borders for 3D button effect
