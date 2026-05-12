# Prototype Creation Agent Instructions

## Process
1. Read `prototypes/Memory.md` to find the next prototype number to create
2. Create the prototype folder (e.g., `prototypes/003/`) with:
   - `index.html` — fully self-contained portfolio page
   - `projects/` — copy of all 5 project image folders
   - `CNAME` — copied from root
   - `HollyMatthewsPortfolio.pdf` — copied from root
   - `PRD.md` — product requirements document for this prototype
   - `Design.md` — design decisions document
3. After creating, update `prototypes/Memory.md` with completion status
4. Update root `index.html` to add a link to the new prototype (with `prototypes/` prefix in the href)
5. Run `git add -A && git commit -m "prototype XXX: <description>"` after each prototype

## Design Constraints
- Each prototype must have completely unique styling from all others
- Pure HTML + CSS — zero JS dependencies (except lightbox which must be inline)
- Must showcase all 5 projects with their images
- Must be responsive (mobile-first)
- Must be accessible (ARIA, skip link, semantic HTML)
- Self-contained — no external file dependencies
- AVIF images only
- Must include SEO meta tags and Schema.org markup

## Directory Structure Per Prototype
```
prototypes/XXX/
  index.html         # Main portfolio page
  CNAME              # Copied from root
  HollyMatthewsPortfolio.pdf  # Copied from root
  PRD.md             # Product requirements
  Design.md          # Design documentation
  projects/
    project1/        # 1.avif, 2.avif, 3.avif
    project2/        # 1.avif, 2.avif, 3.avif
    project3/        # 1.avif, 2.avif, 3.avif
    project4/        # 1.avif, 2.avif, 3.avif
    project5/        # 1.avif, 2.avif, 3.avif
```
