# Design.md — 087: Duotone

## Concept
High-contrast poster aesthetic with a rigid two-color constraint. Evokes 90s club flyers and Hatch Show Print poster traditions.

## Palette
- Primary: #ff0066 (hot pink)  
- Secondary: #0033ff (electric blue)  
- All colors derived from mixing these two (including grays as tinted mixtures)

## Halftone System
- Radial gradients create dot patterns at varying frequencies
- Large dots (0.4em) for backgrounds, small dots (0.15em) for accents
- Dot opacity creates tonal variation within the two-color limit

## Image Treatment
- `mix-blend-mode: multiply` on hot pink overlay
- `filter: grayscale(100%) contrast(150%)` then blend
- This pushes shadows toward blue, highlights toward pink

## Key Decisions
- Hero uses inverted colors (pink bg, white text)
- Project cards use split backgrounds (half pink, half blue)
- Section dividers are diagonal slash cuts
- All borders and rules are thick (4px+) for poster feel
- Typography: condensed uppercase for headlines, mono for details
