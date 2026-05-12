# Design Decisions — Coastal (073)

## Colour Palette
| Role | Colour | Hex |
|------|--------|-----|
| Background | Sandy white | `#FEF9F0` |
| Text | Deep navy | `#0A2E4A` |
| Primary accent | Ocean blue | `#0077B6` |
| Secondary accent | Seafoam | `#98F5E1` |
| Warm accent | Sand/tan | `#E6C9A8` |
| Dark accent | Driftwood | `#8B7355` |

## Typography
- `'Nunito', 'Segoe UI', sans-serif` — headings (rounded, friendly)
- `'Open Sans', 'Segoe UI', sans-serif` — body (clean, readable)
- Light font weights (300-400) for body, 600-700 for headings

## Key Visual Elements
1. **Wave motifs**: CSS `border-radius` waves, `clip-path` wave shapes on section dividers
2. **Gradient horizons**: Ocean-to-sky gradient in hero background
3. **Driftwood texture**: `repeating-linear-gradient` creating subtle wood-grain on cards
4. **Seashell accents**: Unicode shell characters (🐚 ⚓) as section markers
5. **Soft shadows**: Diffuse, light shadows mimicking beach light
6. **Curved lines**: Flowing organic shapes rather than straight borders

## Lightbox Treatment
- Ocean blue backdrop gradient
- Sandy/cream text
- Wave-decorated counter area
- Rounded, soft lightbox corners

## Responsive
- Single column at all widths for relaxed reading
- Generous padding mimicking beach spaciousness
- Wave effects scale down on mobile
