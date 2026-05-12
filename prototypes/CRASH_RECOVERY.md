# Crash Recovery Instructions

If this AI agent or another agent needs to continue this project after a crash or session restart, follow these steps:

## 1. Read State
```bash
# Check current progress
cat prototypes/Memory.md

# List all prototype directories
ls -d prototypes/0* | wc -l

# Find next incomplete prototype
# (check Memory.md for "Next prototype to create")
```

## 2. Verify Assets Per Prototype
Each completed prototype must have:
```
prototypes/XXX/
  index.html          # Main page (required)
  PRD.md              # Requirements (required)
  Design.md           # Design decisions (required)
  CNAME               # Copied from root
  HollyMatthewsPortfolio.pdf  # Copied from root
  projects/project{1,2,3,4,5}/  # AVIF images (required)
```

Quick check:
```bash
for i in $(seq -w 1 100); do
  d=$(printf "%03d" $i)
  echo -n "$d: "
  [ -f "prototypes/$d/index.html" ] && echo -n "✓" || echo -n "✗"
  [ -f "prototypes/$d/PRD.md" ] && echo -n "✓" || echo -n "✗"
  [ -f "prototypes/$d/Design.md" ] && echo -n "✓" || echo -n "✗"
  [ -d "prototypes/$d/projects/project1" ] && echo "✓" || echo "✗"
done
```

## 3. Resume Where You Left Off
Look at `Memory.md` → "Next prototype to create" field.

## 4. Creating a New Prototype
```bash
# Copy assets
NUM=$(cat prototypes/Memory.md | grep "Next Prototype to Create" | awk '{print $NF}')
mkdir -p "prototypes/$NUM/projects"
for p in 1 2 3 4 5; do
  cp -r "projects/project$p" "prototypes/$NUM/projects/"
done
cp CNAME HollyMatthewsPortfolio.pdf "prototypes/$NUM/"

# Create files:
# - prototypes/$NUM/PRD.md
# - prototypes/$NUM/Design.md  
# - prototypes/$NUM/index.html (fully self-contained)
```

## 5. Directory Naming Convention
**ALWAYS use 3-digit format**: `001`, `002`, ... `050`, `051`, ... `100`.
**Never use 2-digit** (`51`) or unpadded (`1`) numbering.

Never use 2-digit (`01`, `02`) or no-padding (`1`, `2`).

## 6. After Each Prototype
```bash
# Update tracking
# Edit prototypes/Memory.md to mark as ✅

# Update root index.html with new link (use `prototypes/XXX/` prefix in href)

# Commit
git add -A
git commit -m "prototype XXX: <description>"
```

## 7. Save Agent Memory (Important!)
Before ending a session, save the current state to Memory.md:
```
## Agent Memory
- Last action: <what you were doing>
- Next action needed: <what comes next>
- Known issues: <bugs, incomplete work>
```
