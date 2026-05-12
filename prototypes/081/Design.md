# Design Document: 081 — Scroll Story

## Concept
Each scroll reveals a new chapter in Holly's creative journey. The page behaves like an illustrated book that reads vertically — with parallax layers creating a sense of depth and immersion.

## Color Palette
- Background: #0f0f12 (deep charcoal)
- Text: #e8e6e3 (warm white)
- Accent: #c9a96e (gold/amber)
- Secondary: #3a3a40 (subtle grey)
- Chapter markers: #c9a96e with large numerals

## Typography
- Primary: Georgia / "Palatino Linotype" serif (narrative warmth)
- UI text: -apple-system sans-serif
- Chapter numerals: 200px+ Georgia italic

## Interactions
- Parallax: background motifs move at 0.3x scroll speed
- Fade-in: sections fade up from opacity 0 on scroll
- Shimmer: project cards have a slow-moving light sweep
- Chapter dividers: large numerals scroll behind content (sticky-ish)

## Layout
- Full-width hero with fixed parallax background
- Max-width 720px narrative columns for readability
- Project cards in a single-column stack (mobile-first), 2-col on desktop
- Chapter headers pinned as user scrolls through each section

## Key Design Decisions
- Serif type for body to reinforce the "storybook" feel
- Warm gold accent against dark background for premium narrative tone
- Illustrated diamond/dot motifs as background texture
- Generous whitespace between chapters (padding 160px)
