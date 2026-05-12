# Design Decisions — Western / Cowboy (075)

## Colour Palette
| Role | Colour | Hex |
|------|--------|-----|
| Background | Parchment/cream | `#FFF8DC` |
| Text | Dark leather | `#3E1F0D` |
| Primary accent | Leather brown | `#8B4513` |
| Secondary accent | Turquoise | `#40E0D0` |
| Warm accent | Burnt orange | `#CC5500` |
| Border | Rustic brown | `#6B3410` |

## Typography
- `'Abril Fatface', 'Playfair Display', Georgia, serif` — headings (western display)
- `'Courier New', Courier, monospace` — for wanted-poster elements and labels
- Mix of serif headings and monospace accents

## Key Visual Elements
1. **Wanted-poster borders**: Double dashed borders with decorative corners using `::before`/`::after`
2. **Distressed texture**: CSS noise/repeating-gradient overlay simulating worn paper
3. **Star badges**: ★ star characters as bullet points and decorative elements
4. **Wood grain**: `repeating-linear-gradient` creating horizontal wood-plank texture on nav/header
5. **Turquoise accent**: Pops of turquoise on buttons and interactive elements
6. **Rope border**: `border-image` with dashed/dotted repeating patterns
7. **Wanted-poster layout**: Hero section styled as a "WANTED" poster with large decorative border

## Lightbox Treatment
- Wanted-poster style border
- Turquoise close button
- Leather-brown backdrop
- Star-decorated counter
- Monospace wanted-poster label

## Responsive
- Simplify distressed textures on mobile
- Maintain legibility of decorative fonts
- Single-column layout
