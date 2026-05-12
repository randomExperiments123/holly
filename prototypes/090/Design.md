# Design.md — 090: Stripes Only

## Concept
A constraint so strict it becomes identity. Stripes in every direction, every element, every surface. Pattern-on-pattern maximalism.

## Palette
- #000000 (black)  
- #ffffff (white)  
- #ff4500 (orange-red) — single accent

## Stripe System
- **Horizontal**: `repeating-linear-gradient(0deg, ...)`
- **Vertical**: `repeating-linear-gradient(90deg, ...)`
- **Diagonal**: `repeating-linear-gradient(45deg, ...)` and `-45deg`
- **Thickness**: 2px, 4px, 8px, 16px stripe widths

## Pattern Assignments
- Hero: thick horizontal stripes (black/white)
- Navigation: thin vertical stripes (black/orange)
- Project cards: diagonal stripes (varying directions per card)
- Section backgrounds alternate direction per section
- Buttons: diagonal stripes at 45deg
- Footer: horizontal thin stripes

## Key Decisions
- Every background must be stripes — no solid colors (except text)
- Text on busy patterns needs careful positioning
- Lightbox backdrop remains striped (semi-transparent)
- Card text areas have white stripe background for readability
- Section labels use reversed stripe colors
- Reduced motion removes stripe animation but keeps pattern
