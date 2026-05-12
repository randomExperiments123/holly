# Design Document — Prototype 078: Halloween

## Design Direction
Dark, spooky, atmospheric. Inspired by haunted houses, graveyards, and classic horror movie posters.

## Color Palette
- **Dark Purple**: #1a0a2e — primary background
- **Deep Purple**: #2d1b4e — card backgrounds
- **Pumpkin Orange**: #ff6b35 — accents, buttons
- **Eerie Green**: #39ff14 — glow effects, highlights
- **Moonlight**: #e8d5b7 — text on dark backgrounds
- **Grave Gray**: #3d3d3d — secondary text

## Typography
- **Headings**: `'Creepster', 'Chiller', fantasy` — spooky display faces
- **Body**: `'Courier New', monospace` — typewriter horror feel
- **Accents**: All caps with wide letter-spacing

## Key Visual Elements
1. **Cobweb motifs**: CSS conic-gradient and radial-gradient for web-like corner decorations
2. **Eerie glow**: `text-shadow` and `box-shadow` with orange/green glow colors
3. **Graveyard vibe**: Dark backgrounds with subtle texture gradients
4. **Flicker animation**: Subtle opacity pulse on hero text
5. **Skull/ghost shapes**: CSS pseudo-element silhouettes

## Layout
- Single-column mobile, two-column desktop
- Cards with jagged/uneven borders (using clip-path)
- Dark theme throughout

## Lightbox
Black with orange glow buttons. Green counter text. Spooky backdrop blur.

## Accessibility
- Skip link for keyboard users
- ARIA labels on all interactive elements
- Text contrast maintained despite dark theme
- Focus indicators in bright orange
