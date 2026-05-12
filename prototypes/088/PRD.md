# PRD: Risograph — 088

## Purpose
Simulate the risograph print aesthetic — misregistration, limited fluorescent palette, grainy texture, and off-kilter alignment. Feels like a zine or poster printed on a Riso machine.

## Requirements
- 3-color risograph palette: fluorescent pink, bright blue, warm yellow
- Misregistration effect via text-shadow offsets in complementary colors
- Grainy paper texture via CSS noise background
- Slight rotation/skew on sections and cards (1–3 degrees)
- Rough, chalky visual feel
- Responsive and mobile-first
- Inline lightbox with keyboard nav

## Constraints
- Pure HTML + CSS + inline JS
- No external images except project AVIFs
- Grain texture must be pure CSS (repeating-conic-gradient or layered gradients)

## Success Criteria
- Feels authentically risograph-printed
- Misregistration is visible but readable
- Grain texture adds tactility
- Off-kilter alignment feels intentional, not broken
