# Figma variable values (resolved) — studioOS Settings

Source: Figma MCP `get_variable_defs` on `Workspace / 1 default` (light, node `7:13698`, page "Settings — desktop") and the same frame on the Dark page (node `7:18498`).
Only variables bound inside that frame are listed; the Map page (`map-spec.md`, `map-*.png`) lists the full token set per component.
Compare against `app/globals.css` (shadcn tokens); `derived/*` are NOT new tokens — they map to existing shadcn classes (see table at bottom / map-derived-values.png).

| Variable | Light | Dark |
|---|---|---|
| `var(--sidebar-primary-foreground)` | `#f8fafc` | `#f8fafc` |
| `var(--radius-md)` | `8` | `8` |
| `var(--sidebar-primary)` | `#0f172b` | `#1447e6` |
| `var(--sidebar-foreground)` | `#020618` | `#f8fafc` |
| `var(--sidebar-accent-foreground)` | `#0f172b` | `#f8fafc` |
| `var(--sidebar-accent)` | `#f1f5f9` | `#1d293d` |
| `var(--sidebar)` | `#f8fafc` | `#0f172b` |
| `var(--foreground)` | `#020618` | `#f8fafc` |
| `var(--muted-foreground)` | `#62748e` | `#90a1b9` |
| `derived/input-bg` | `#ffffff00` | `#ffffff0b` |
| `var(--input)` | `#e2e8f0` | `#ffffff26` |
| `var(--muted)` | `#f1f5f9` | `#1d293d` |
| `var(--border)` | `#e2e8f0` | `#ffffff1a` |
| `derived/outline-bg` | `#ffffff` | `#ffffff0b` |
| `derived/outline-border` | `#e2e8f0` | `#ffffff26` |
| `var(--primary-foreground)` | `#f8fafc` | `#0f172b` |
| `var(--primary)` | `#0f172b` | `#e2e8f0` |
| `var(--radius-xl)` | `14` | `14` |
| `var(--background)` | `#ffffff` | `#020618` |

Radius scale (Map header): radius-sm 6 / md 8 / lg 10 / xl 14 (from `--radius: 0.625rem`).

## Derived values (Map page, node 14:493) — existing shadcn classes, not new tokens

| Figma variable | Existing shadcn classes | Used by | Light | Dark |
|---|---|---|---|---|
| derived/input-bg | `bg-transparent dark:bg-input/30` | Input, Textarea, Select trigger, Checkbox, Radio | #ffffff00 | #ffffff0b |
| derived/outline-bg | `bg-background dark:bg-input/30` | Button outline | #ffffff | #ffffff0b |
| derived/outline-border | `border dark:border-input` | Button outline | #e2e8f0 | #ffffff26 |
| derived/switch-track-off | `bg-input dark:bg-input/80` | Switch unchecked | #e2e8f0 | #ffffff1f |
| derived/switch-thumb-off | `bg-background dark:bg-foreground` | Switch thumb, unchecked | #ffffff | #f8fafc |
| derived/switch-thumb-on | `bg-background dark:bg-primary-foreground` | Switch thumb, checked | #ffffff | #0f172b |

Intro text on the Map: "Six Figma variables under derived/* only resolve existing shadcn class combinations so mockups render correctly in both modes. In code they stay as these classes; nothing is added to globals.css."

## Literal values kept as in code (Map, node 14:611)
- `text-white` on destructive Button and destructive Badge
- `bg-black/50` dialog overlay
- shadow-xs / sm / md / lg are effects, not color tokens
- `components/ui/sonner.tsx` is planned in the spec but not in the repo yet; Toast specimens follow the planned Toaster with popover tokens.
