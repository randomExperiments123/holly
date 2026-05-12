# Design Decisions — Terminal / Hacker (071)

## Colour Palette
| Role | Colour | Hex |
|------|--------|-----|
| Background | Black | `#000000` |
| Primary text | Bright green | `#00ff00` |
| Dim text | Dim green | `#00aa00` |
| Accent | Amber | `#ffb000` |
| Scanline overlay | Black w/ opacity | `rgba(0,0,0,0.15)` |

## Typography
- `'Courier New', Courier, monospace` for all text
- No font-weight variation — single weight terminal look
- Uppercase headings with letter-spacing mimicking terminal output

## Key Visual Elements
1. **CRT scanlines**: Repeating linear-gradient overlay on body
2. **Blinking cursor**: CSS animation `@keyframes blink` on a `::after` pseudo-element on hero heading
3. **Command prompts**: `$` prefix via `::before` on headings
4. **ASCII art**: Holly Matthews rendered in ASCII block characters in hero
5. **Terminal window chrome**: `box-shadow` border effect mimicking CRT bezel
6. **Matrix-style glow**: `text-shadow` with multiple green layers for glow effect

## Lightbox Treatment
- Green border glow on lightbox backdrop
- Monospace counter text
- Terminal-green close/nav buttons
- Scanline overlay persists in lightbox

## Responsive
- Mobile-first: single column at <640px
- ASCII art hides on small screens
- Cursor/glow effects respect `prefers-reduced-motion`
