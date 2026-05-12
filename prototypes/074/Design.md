# Design Decisions — Safari Adventure (074)

## Colour Palette
| Role | Colour | Hex |
|------|--------|-----|
| Background | Safari cream | `#F5E6D3` |
| Text | Dark earth | `#2C1810` |
| Primary accent | Olive green | `#556B2F` |
| Secondary accent | Rust | `#B7410E` |
| Neutral | Khaki | `#C3B091` |
| Highlight | Sun yellow | `#E8B82E` |

## Typography
- `'Abril Fatface', Georgia, serif` — display headings (bold, weighty)
- `'Lato', 'Segoe UI', sans-serif` — body (clean, readable)
- ALL CAPS with wide letter-spacing for section labels

## Key Visual Elements
1. **Animal prints**: CSS `repeating-linear-gradient` and `radial-gradient` creating leopard/jaguar spot patterns for decorative accents
2. **Safari border**: Twine/rope-like borders using `border-image` and dashed patterns
3. **Compass/compass rose**: Unicode compass decorative elements (🧭)
4. **Adventure labels**: "EXPEDITION", "DISCOVERY", "EXPLORATION" as section headers
5. **Texture**: Rough paper texture via CSS noise/gradient
6. **Sunburst**: Radial gradient sunburst effect in hero

## Lightbox Treatment
- Khaki canvas backdrop
- Rust-coloured close/nav buttons
- Animal-print border on lightbox images
- Safari-counter with adventure nomenclature

## Responsive
- Reduce print patterns on mobile
- Bold headings still readable at small sizes
- Single column grid
