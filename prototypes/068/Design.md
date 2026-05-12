# Design Decisions: Pixel Art 2 (068)

## Visual Direction
This prototype is a love letter to the NES/Famicom era. Every element is blocky, chunky, and intentionally "low-res" in feel. The scanline overlay and grid background create the illusion of looking at a CRT monitor.

## Colour Palette
NES "2C02" PPU-inspired palette:
- Black: #0f0f0f (background)
- White: #f0f0f0 (text)
- Red: #e4000f (accents, hearts, HP bars)
- Orange: #f8a000 (highlights)
- Yellow: #f8d800 (emphasis)
- Green: #00a800 (accents)
- Blue: #0040c0 (links, buttons)

## Typography
Monospace only ("Courier New", "SF Mono", monospace). All text is uppercase where possible. Headings use a chunky blocky appearance with pixel-shadows.

## Layout
- Hero section has a pixelated "stars" background pattern
- Section titles styled like 8-bit game title screens
- Project cards are styled like NES game cartridges with "label" areas
- Buttons look like 8-bit UI elements from RPG menus
- Footer resembles a "Game Over" screen

## Key Techniques
- repeating-linear-gradient for scanline overlay (pseudo-element on body)
- background-image with radial gradients for grid pattern
- box-shadow chaining for pixelated border effect
- text-shadow layering for pixel text
- NES-inspired decorative elements via CSS (hearts, stars, arrows)
- CSS animation for subtle "idle" scanline movement
