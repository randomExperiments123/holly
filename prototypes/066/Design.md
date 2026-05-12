# Design Decisions: Neon Chinese (066)

## Visual Direction
Inspired by the neon-lit streets of Kowloon and Macau casinos. The design uses a pitch-black background punctuated by electric neon borders and warm gold text to mimic glowing signage at night.

## Colour Palette
- Background: #0a0500 (near-black with warm undertone)
- Primary neon: #ff1a1a (ruby red glow)
- Accent: #ffd700 (gold, for headings and highlights)
- Secondary: #ff4500 (orange-red, for hover states)
- Card bg: rgba(10, 5, 0, 0.85) with neon border

## Typography
System font stack with CJK fallbacks (PingFang SC, Microsoft YaHei) for Chinese character decorative elements. Latin text uses SF Pro / Helvetica Neue for clean contrast against the ornamental Chinese motifs.

## Layout
- Single-column on mobile, two-column grid on desktop
- Cards have a "lantern" motif — rounded top corners with decorative horizontal bars
- Hero section features a glowing neon title with multiple layered text-shadows
- Decorative pseudo-elements create Chinese window-frame border patterns

## Key Techniques
- Multiple layered text-shadow for neon glow effect
- Box-shadow with spread for border glow
- ::before/::after for decorative frames and lantern top bars
- Rotated "seal stamp" decorative square in hero
- Gold-to-red gradient text on hero title
