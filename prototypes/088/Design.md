# Design.md — 088: Risograph

## Concept
Simulate the tactile, imperfect quality of risograph printing. Each element feels slightly off-register, textured, and printed on rough paper.

## Palette
- #ff6b9d (fluorescent pink) — misregistration offset color  
- #3a86ff (bright blue) — primary text and shapes  
- #ffd166 (warm yellow) — accent and highlights  
- White (#f5f0e8) — paper background, warm off-white

## Misregistration Technique
- `text-shadow` with colored offsets: pink shadow shifted 2px right, blue shadow 1px left
- Multiple box-shadows on borders simulate CMYK plate misalignment
- Section dividers have slightly different angles (0.5–2° variance)

## Grain Texture
- Layered `repeating-conic-gradient` creates paper noise
- Opacity 3–5% so it reads as paper texture
- Applied globally via `body::after` pseudo-element

## Layout Decisions
- Every even section rotated -1deg, odd sections +1deg
- Project cards have subtly different aspect ratios (not uniform)
- Navigation items are irregularly spaced
- Borders use dotted/dashed combinations

## Typography
- System serif (Charter, Georgia) for body — feels printed
- Monospace for labels — feels like riso stencil
- Slight letter-spacing variation
