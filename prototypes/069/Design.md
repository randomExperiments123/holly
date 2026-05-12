# Design Decisions: Acid Grunge (069)

## Visual Direction
Inspired by 90s rave flyers, psychedelic rock posters, and the acid house movement. The design rejects clean grid systems in favour of chaotic, energetic layouts that feel like they're vibrating. Neon colours clash and bleed into each other on a black void background.

## Colour Palette
- Background: #000000
- Acid green: #00ff00 (primary)
- Magenta: #ff00ff (primary)
- Cyan: #00ffff (accent)
- Yellow: #ffff00 (accent)
- White: #ffffff (text body)
- Dim text: #888888

## Typography
System sans-serif with heavy use of CSS transforms. Headings are skewed (-10deg to 10deg), scaled, and sometimes rotated 90 degrees. Text is often placed at unusual angles. All-caps for headings.

## Layout
- Hero has a large distorted title spanning full width
- Elements deliberately overlap and break out of containers
- Project cards are rotated at slight angles (alternating ±2deg)
- Section backgrounds alternate between pure black and subtle neon tint
- Decorative "noise" overlay using CSS pseudo-element with tiny gradient dots
- Buttons look like 90s web/browser elements with thick colourful borders

## Key Techniques
- CSS transform: skew(), rotate() on headings
- Multiple text-shadows in neon colours for glow
- Pseudo-element noise texture (repeating tiny conic gradients)
- Clashing neon border combinations on cards
- Rotated section headers that break the horizontal flow
- Blinking/pulsing CSS animation on key elements
- Asymmetric card layouts (different-sized cards on same row)
