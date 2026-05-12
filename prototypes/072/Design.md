# Design Decisions — Victorian (072)

## Colour Palette
| Role | Colour | Hex |
|------|--------|-----|
| Background | Cream/parchment | `#FFF8E7` |
| Text | Dark burgundy | `#4A0E0E` |
| Primary accent | Burgundy | `#800020` |
| Secondary accent | Gold | `#D4AF37` |
| Light accent | Soft cream | `#FFFDD0` |
| Border | Antique gold | `#B8860B` |

## Typography
- `'Playfair Display', Georgia, 'Times New Roman', serif` — headings
- `Georgia, 'Times New Roman', serif` — body text
- Italic heavily used for decorative effect
- Small caps for section labels

## Key Visual Elements
1. **Ornate borders**: Multi-layered `box-shadow` and `border` combinations creating Victorian picture-frame effects
2. **Filigree patterns**: CSS repeating patterns using `radial-gradient` and `repeating-linear-gradient`
3. **Vintage wallpaper**: Subtle repeating diamond/quatrefoil pattern via CSS background
4. **Decorative dividers**: `::after` pseudo-elements with `border-image` creating ornamental section breaks
5. **Gilt frames**: Golden inner shadows on project cards
6. **Floral ornaments**: Unicode decorative characters (❧ ✦ ❦) as decorative elements

## Lightbox Treatment
- Gold ornate border around images
- Burgundy backdrop with gold flecks
- Cream text on dark background
- Decorative frame for counter

## Responsive
- Reduce ornamentation on mobile
- Maintain readability of serif at small sizes
- Remove some decorative borders at <480px
