# Design.md — 086: Variable Font Play

## Concept
Typography as performance. The page breathes, shifts, and responds through variable font axes. Text is not static — it has range, weight, and rhythm.

## Font
- **Inter Variable** (Google Fonts) — loaded with wght 200–900, wdth 50–200, slnt 0–10
- System font fallback stack

## Palette
- Background: near-black (#0a0a0f)  
- Text: white → gray gradient (#ffffff → #8888aa)  
- Accent: cyan (#00e5ff) used sparingly for active states

## Key Decisions
- Hero title animates `font-weight` from 200 to 900 in a 4s loop
- Navigation links expand `font-width` on hover (100 → 150)
- Project card titles shift weight gradually on scroll reveal
- Section headings use maximum weight (900) with tight letter-spacing
- Body text uses lighter weight (300) for contrast
- All animations respect `prefers-reduced-motion`

## Mobile Adaptations
- Weight animation speed adjusted for touch devices
- Smaller weight range on small screens to maintain readability
- Touch targets enlarged for interaction
