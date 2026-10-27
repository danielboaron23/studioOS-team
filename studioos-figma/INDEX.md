# studioOS — Settings: Figma export index

Figma file: **studioOS — Settings** — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt (fileKey `41IZ0Wmvjcju9w4HHm7hvt`). Exported read-only via Figma MCP on 2026-10-27.
Target stack: Next.js + shadcn/ui, tokens in `app/globals.css`. Specs are **reference**, not code to paste. Font Geist; icons Lucide (`lucide-react`).
All PNGs are 1x (desktop frames 1440 wide, mobile 390 wide). Open a node: `https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=<id with - instead of :>`.

## Figma pages
| Page | Node id | Content |
|---|---|---|
| Cover | 0:1 | empty |
| Settings — desktop | 3:8 | 23 desktop light frames (4 sections × states) |
| Settings — mobile 390 | 3:9 | 14 mobile light frames |
| Dark | 3:10 | dark duplicates of all desktop (7:16190–7:20843) and mobile (7:20989–7:22942) frames; only the 4 section defaults exported |
| Components & states | 3:11 | component sheet 12:2 + mock photos 6:2 |
| Map | 3:12 | 14:2 components & tokens map |

## Desktop — light (page 3:8)
| File | Frame | Node id | Size | Description |
|---|---|---|---|---|
| `profile-light.png` | Profile / 1 default (clean, nav hover on Appearance) | `7:11390` | 96 KB | Profile section default, light; Appearance nav item shows hover |
| `profile-dirty-savebar.png` | Profile / 2 dirty — save bar, name focused | `7:11547` | 101 KB | Name edited to "Hani B", input focused, sticky SaveBar visible |
| `profile-invalid-errors.png` | Profile / 3 invalid on Save — focus to first error, bio over limit | `7:11713` | 129 KB | Display name "H" error + bio 281/280 over limit (frame 916 tall) |
| `profile-saving.png` | Profile / 4 saving (pending) | `7:11880` | 102 KB | SaveBar in pending state (spinner, disabled) |
| `profile-saved-toast.png` | Profile / 5 saved — toast | `7:12046` | 103 KB | Saved, clean form, "Settings saved" toast bottom-right |
| `profile-save-failed-toast.png` | Profile / 6 save failed — error toast + Retry, changes kept | `7:12208` | 108 KB | Error toast with Retry; dirty changes kept |
| `profile-unsaved-dialog.png` | Profile / 7 unsaved-changes guard (clicked a sidebar link) | `7:12380` | 104 KB | Unsaved-changes confirm dialog |
| `profile-upload-error.png` | Profile / 8 upload error (file too big / wrong type) | `7:12557` | 96 KB | Avatar upload error message |
| `profile-loading-skeleton.png` | Profile / 9 loading — skeleton | `7:12714` | 63 KB | Profile skeleton loading |
| `appearance-light.png` | Appearance / 1 default (System, Comfortable) | `7:12847` | 84 KB | Appearance default, light |
| `appearance-dark-compact-focus.png` | Appearance / 2 Dark + Compact + reduced motion, radio focus | `7:13001` | 94 KB | Dark radio selected + Compact + Reduced motion on, focus ring on radio, "Settings saved" toast. NOTE: app chrome is still rendered LIGHT in this frame |
| `notifications-light.png` | Notifications / 1 default | `7:13162` | 82 KB | Notifications default: channels switches + category matrix + quiet hours off |
| `notifications-email-off-dirty.png` | Notifications / 2 Email off (column dimmed), quiet hours on, dirty | `7:13345` | 96 KB | Email channel off → Email column disabled/dimmed; quiet hours expanded (Start/End/days); SaveBar |
| `notifications-loading-skeleton.png` | Notifications / 3 loading — skeleton | `7:13577` | 61 KB | Notifications skeleton |
| `workspace-light.png` | Workspace / 1 default | `7:13698` | 155 KB | Workspace default: name, slug, logo, invite, 8 members (1246 tall) |
| `workspace-invite-invalid-chip.png` | Workspace / 2 invite — invalid chip, Invite disabled | `7:13997` | 158 KB | Invite input with valid + invalid (destructive) chips, error helper, Invite disabled |
| `workspace-invited-toast.png` | Workspace / 3 invited row added + toast | `7:14312` | 167 KB | New "Invited" member row (Members (9)) + "Invite added" toast (1303 tall) |
| `workspace-row-actions-tooltip.png` | Workspace / 4 row actions hover — tooltip | `7:14634` | 157 KB | Row ··· button hovered, "More actions" tooltip |
| `workspace-row-actions-menu.png` | Workspace / 5 row actions open — Remove | `7:14935` | 159 KB | Row dropdown open with destructive "Remove" item |
| `workspace-remove-dialog.png` | Workspace / 6 remove confirm dialog | `7:15243` | 159 KB | Remove-member confirm dialog |
| `workspace-empty-only-owner.png` | Workspace / 7 only owner — empty | `7:15556` | 103 KB | Members (1) with empty-state text (900 tall) |
| `workspace-logo-error-dirty.png` | Workspace / 8 logo error + dirty | `7:15737` | 164 KB | Renamed workspace/slug, logo-not-square error, SaveBar (1323 tall) |
| `workspace-loading-skeleton.png` | Workspace / 9 loading — skeleton | `7:16043` | 66 KB | Workspace skeleton (900 tall) |

## Desktop — dark (page 3:10)
| File | Frame | Node id | Size | Description |
|---|---|---|---|---|
| `profile-dark.png` | Profile / 1 default (Dark page) | `7:16190` | 132 KB | Profile default, dark theme |
| `appearance-dark.png` | Appearance / 1 default (Dark page) | `7:17647` | 88 KB | Appearance default, dark theme |
| `notifications-dark.png` | Notifications / 1 default (Dark page) | `7:17962` | 85 KB | Notifications default, dark theme |
| `workspace-dark.png` | Workspace / 1 default (Dark page) | `7:18498` | 177 KB | Workspace default, dark theme |

## Mobile 390 — light (page 3:9)
| File | Frame | Node id | Size | Description |
|---|---|---|---|---|
| `mobile/mobile-profile-light.png` | Profile m1 default | `7:9343` | 57 KB | Mobile 390: Profile default |
| `mobile/mobile-profile-dirty-savebar-invalid.png` | Profile m2 dirty — sticky save bar, invalid name | `7:9443` | 64 KB | Mobile: sticky SaveBar + invalid name |
| `mobile/mobile-profile-saved-toast.png` | Profile m saved — toast | `7:9552` | 57 KB | Mobile: saved toast |
| `mobile/mobile-profile-unsaved-dialog.png` | Profile m unsaved guard dialog | `7:9657` | 66 KB | Mobile: unsaved-changes dialog |
| `mobile/mobile-profile-loading.png` | Profile m loading | `7:9777` | 26 KB | Mobile: skeleton |
| `mobile/mobile-appearance-light.png` | Appearance m1 default | `7:9851` | 45 KB | Mobile: Appearance default |
| `mobile/mobile-appearance-dark-compact.png` | Appearance m2 Dark + Compact | `7:9948` | 46 KB | Mobile: Dark/Compact selected |
| `mobile/mobile-notifications-light.png` | Notifications m1 default | `7:10046` | 43 KB | Mobile: Notifications default |
| `mobile/mobile-notifications-email-off-dirty.png` | Notifications m2 email off, dirty | `7:10172` | 57 KB | Mobile: Email off + quiet hours + SaveBar |
| `mobile/mobile-workspace-light.png` | Workspace m1 default — member cards | `7:10346` | 127 KB | Mobile: members as cards instead of table |
| `mobile/mobile-workspace-invite-error.png` | Workspace m invite error | `7:10575` | 125 KB | Mobile: invalid invite chip |
| `mobile/mobile-workspace-card-menu.png` | Workspace m card menu open | `7:10815` | 129 KB | Mobile: member card ··· menu |
| `mobile/mobile-workspace-remove-dialog.png` | Workspace m remove dialog | `7:11053` | 131 KB | Mobile: remove confirm dialog |
| `mobile/mobile-workspace-loading.png` | Workspace m loading | `7:11296` | 28 KB | Mobile: skeleton |

## Components & states (page 3:11)
| File | Frame | Node id | Size | Description |
|---|---|---|---|---|
| `components-all.png` | Components & states — light | `12:2` | 498 KB | Whole component sheet, all primitives + composites with states (1440x5128 @1x) |
| `components-mock-photos.png` | Mock photos (components/team/data.ts, pravatar) | `6:2` | 96 KB | Avatar photos used for members |
| `components-button.png` | Section/Button | `12:6` | 48 KB | button variants/states |
| `components-input.png` | Section/Input | `12:112` | 35 KB | input variants/states |
| `components-textarea.png` | Section/Textarea | `12:142` | 48 KB | textarea variants/states |
| `components-select.png` | Section/Select | `12:170` | 35 KB | select variants/states |
| `components-switch.png` | Section/Switch | `12:206` | 15 KB | switch variants/states |
| `components-radiogroup.png` | Section/RadioGroup | `12:242` | 21 KB | radiogroup variants/states |
| `components-checkbox.png` | Section/Checkbox | `12:283` | 19 KB | checkbox variants/states |
| `components-label.png` | Section/Label | `12:323` | 17 KB | label variants/states |
| `components-badge.png` | Section/Badge | `12:345` | 13 KB | badge variants/states |
| `components-avatar.png` | Section/Avatar | `12:372` | 22 KB | avatar variants/states |
| `components-dropdownmenu.png` | Section/DropdownMenu | `12:398` | 21 KB | dropdownmenu variants/states |
| `components-dialog.png` | Section/Dialog | `12:432` | 58 KB | dialog variants/states |
| `components-tooltip.png` | Section/Tooltip | `12:470` | 10 KB | tooltip variants/states |
| `components-toast.png` | Section/Toast | `12:485` | 35 KB | toast variants/states |
| `components-skeleton.png` | Section/Skeleton | `12:519` | 14 KB | skeleton variants/states |
| `components-settingsnav.png` | Section/SettingsNav | `12:543` | 27 KB | settingsnav variants/states |
| `components-savebar.png` | Section/SaveBar | `12:603` | 22 KB | savebar variants/states |

## Map (page 3:12)
| File | Frame | Node id | Size | Description |
|---|---|---|---|---|
| `map-all.png` | Map — components & tokens | `14:2` | 491 KB | Full map: 22 Settings UI elements → code component → tokens → notes, plus derived & literal values |
| `map-tokens.png` | Block/Elements | `14:9` | 353 KB | Elements table (Shell 5 / Primitive 16 / App 1 = 22 rows) |
| `map-derived-values.png` | Block/Derived values — existing shadcn classes, not new tokens (approved decision 5) | `14:493` | 70 KB | derived/* Figma vars → existing shadcn classes |
| `map-literal-values.png` | Block/Literal values kept as in code | `14:611` | 25 KB | Literal values (text-white, bg-black/50, shadows, sonner note) |

## Specs (get_design_context, React+Tailwind reference)
Main specs have a header (frame/node/page/link), shadcn component list, token mapping notes, the code, and an "Asset constants -> local files" table pointing into `assets/<section>/` (downloaded icons/avatars; Figma URLs expire).
| File | Frame | Node id | Size | Description |
|---|---|---|---|---|
| `profile-spec.md` | Profile / 1 default | `7:11390` | 31 KB | get_design_context (React+Tailwind ref) + shadcn mapping + local asset table |
| `appearance-spec.md` | Appearance / 1 default | `7:12847` | 30 KB | same |
| `notifications-spec.md` | Notifications / 1 default | `7:13162` | 36 KB | same |
| `workspace-spec.md` | Workspace / 1 default | `7:13698` | 58 KB | same |
| `settingsnav-spec.md` | Section/SettingsNav | `12:543` | 10 KB | SettingsNav default/hover/active + lg:w-60 |
| `savebar-spec.md` | Section/SaveBar | `12:603` | 7 KB | SaveBar dirty + saving |
| `map-spec.md` | Map — components & tokens | `14:2` | 147 KB | Map page as code (tables as text) — extra |
| `components-spec.md` | Components & states — light | `12:2` | 127 KB | Whole component sheet as code — extra (large) |
| `tokens.md` | Workspace / 1 default light+dark | `7:13698 / 7:18498` | 3 KB | Resolved variable values light/dark, derived values, literals |

### State specs (`specs-states/`)
| File | Frame | Node id | Size | Description |
|---|---|---|---|---|
| `specs-states/profile-dirty-savebar-spec.md` | Profile / 2 dirty — save bar, name focused | `7:11547` | 32 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/profile-invalid-errors-spec.md` | Profile / 3 invalid on Save — focus to first error, bio over limit | `7:11713` | 32 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/profile-saving-spec.md` | Profile / 4 saving (pending) | `7:11880` | 32 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/profile-saved-toast-spec.md` | Profile / 5 saved — toast | `7:12046` | 30 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/profile-save-failed-toast-spec.md` | Profile / 6 save failed — error toast + Retry, changes kept | `7:12208` | 33 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/profile-unsaved-dialog-spec.md` | Profile / 7 unsaved-changes guard (clicked a sidebar link) | `7:12380` | 34 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/profile-upload-error-spec.md` | Profile / 8 upload error (file too big / wrong type) | `7:12557` | 30 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/profile-loading-skeleton-spec.md` | Profile / 9 loading — skeleton | `7:12714` | 22 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/appearance-dark-compact-focus-spec.md` | Appearance / 2 Dark + Compact + reduced motion, radio focus | `7:13001` | 30 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/notifications-email-off-dirty-spec.md` | Notifications / 2 Email off (column dimmed), quiet hours on, dirty | `7:13345` | 46 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/notifications-loading-skeleton-spec.md` | Notifications / 3 loading — skeleton | `7:13577` | 20 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/workspace-invite-invalid-chip-spec.md` | Workspace / 2 invite — invalid chip, Invite disabled | `7:13997` | 59 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/workspace-invited-toast-spec.md` | Workspace / 3 invited row added + toast | `7:14312` | 60 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/workspace-row-actions-tooltip-spec.md` | Workspace / 4 row actions hover — tooltip | `7:14634` | 56 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/workspace-row-actions-menu-spec.md` | Workspace / 5 row actions open — Remove | `7:14935` | 57 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/workspace-remove-dialog-spec.md` | Workspace / 6 remove confirm dialog | `7:15243` | 59 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/workspace-empty-only-owner-spec.md` | Workspace / 7 only owner — empty | `7:15556` | 32 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/workspace-logo-error-dirty-spec.md` | Workspace / 8 logo error + dirty | `7:15737` | 57 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |
| `specs-states/workspace-loading-skeleton-spec.md` | Workspace / 9 loading — skeleton | `7:16043` | 25 KB | Raw get_design_context for this state (no local assets; Figma asset URLs expire ~7 days) |

### assets/
`assets/{profile,appearance,notifications,workspace,settingsnav,savebar}/` — 79 files (~344 KB): Lucide icon SVGs/PNGs and 8 member avatar PNGs (workspace). Use lucide-react for icons in code; avatars match `components/team/data.ts` (pravatar).

---
# Copy strings (exact, from Figma text nodes)

## App shell (all frames)
- Sidebar: `Studio OS` / `AI Design Studio` (logo letter `D`); group `Platform`: `Dashboard`, `Projects`, `Tasks`; group `Workspace`: `Analytics`, `Team`, `Settings`
- Header: search placeholder `Search...`; user `Hani Buskila` / `Product Designer`; avatar initials `HB`; theme toggle (moon icon)
- Page: h1 `Settings`; description `Manage your profile, appearance, notifications, and workspace.`
- SettingsNav: `Profile`, `Appearance`, `Notifications`, `Workspace`

## Profile
- Section title `Profile`; description `This is how teammates see you in comments and on the Team page.`
- `Avatar` · buttons `Upload avatar`, `Remove` · helper `PNG, JPG or WebP, up to 2 MB.`
- `Display name` (value `Hani Buskila`)
- `Role` (select value `Product Designer`)
- `Email` + badge `Verified` · value `hani@studioos.app` (read-only) · helper `Ask your workspace owner to change your email.`
- `Bio` `(optional)` · placeholder `Tell your team a little about yourself` · counter `0/280`
- States:
  - 2 dirty: name value `Hani B`; SaveBar `You have unsaved changes` · `Discard` · `Save changes`
  - 3 invalid: name value `H`, error `Display name must be 2–60 characters.`; bio value `Product designer at Studio OS. I lead the design system and help the team ship faster with AI-assisted workflows, from early research to pixel-perfect handoff. Outside work I teach design + AI workshops and host a monthly meetup for designers in Tel Aviv who build with code.`; counter `281/280` (destructive)
  - 4 saving: SaveBar same copy, Save button spinner + disabled
  - 5 saved: toast `Settings saved`
  - 6 failed: name `Hani B.`; error toast `Couldn't save. Your browser storage may be full.` with action `Retry`; SaveBar stays (changes kept)
  - 7 unsaved guard: dialog `You have unsaved changes. Discard?` · buttons `Keep editing` / `Discard`
  - 8 upload error: `Use a PNG, JPG or WebP file up to 2 MB.`
  - 9 loading: skeleton only, no copy

## Appearance
- Description `Changes apply and save right away.` (no SaveBar)
- `Theme`: `System`, `Light`, `Dark` (radio)
- `Density`: `Comfortable`, `Compact` · helper `Compact tightens rows in tables and lists.`
- `Reduced motion` (switch)
- `Preview` card: `Project Atlas` · `Theme: System · Density: Comfortable` · button `Open project`
- State 2: switch helper `Overrides system setting`; preview `Theme: Dark · Density: Compact`; toast `Settings saved`

## Notifications
- Description `Choose where we reach you and about what.`
- `Channels`: `In-app`, `Email` (switches)
- Table header `Category` / `In-app` / `Email`; rows `New comment`, `Mention`, `Project status change`, `Weekly digest`, `Product updates` (checkboxes)
- `Quiet hours` · `Pause notifications at set times.` (switch)
- State 2 (quiet hours on): `Start` `19:00`, `End` `08:00`, helper `Ends the next day`; days `Mon` `Tue` `Wed` `Thu` `Fri` `Sat` `Sun`; Email column dimmed; SaveBar
- State 3: skeleton

## Workspace
- Description `Manage your workspace details and who has access.`
- `Workspace name` (value `Studio OS`) · `Slug` (value `studio-os`) · helper `Lowercase letters, numbers and hyphens.`
- `Logo` · `Upload logo`, `Remove` · helper `PNG or SVG, up to 1 MB, square.`
- `Invite people` · placeholder `name@company.com` · button `Invite` · helper `Separate emails with a comma, space or Enter. No email is sent yet.`
- Members table: `Members (8)` / `Role` / `Last active`
  - Hani Buskila · hani@studioos.app · `Owner (you)` · `—`
  - Tal Rosen · tal@studioos.app · `Member` · `—` (same for: Noa Meir noa@, Daniel Cohen daniel@, Maya Levi maya@, Jon Ashkenazi jon@, Amit Katz amit@, Shira Barak shira@ — all @studioos.app); each row has a ··· (MoreHorizontal) actions button
- States:
  - 2 invalid chip: chips `maya@acme.co`, `hani@studioos.app` (already member), `dana@acme` (invalid); error `Already in workspace: hani@studioos.app. Check: dana@acme`; `Invite` disabled
  - 3 invited: `Members (9)`; new row avatar initials `NO`, `noa@acme.co`, badge `Invited`; toast `Invite added`
  - 4 tooltip: `More actions`
  - 5 menu: item `Remove` (destructive)
  - 6 dialog: `Remove Noa Meir?` · `They lose access to this workspace right away. You can invite them again later.` · `Cancel` / `Remove`
  - 7 empty: `Members (1)` · `No one else here yet. Invite people above.`
  - 8 logo error + dirty: name `Studio OS Team`, slug `studio-os-team`; error `Logo must be square (1:1).`; SaveBar
  - 9 loading: skeleton

## SaveBar (12:603)
`You have unsaved changes` · `Discard` (ghost/outline) · `Save changes` (primary); saving = spinner + disabled. Notes: `components/settings/save-bar.tsx (composite) · sticky, border-t, bg-background`. Not used in Appearance.

## SettingsNav (12:543)
Items `Profile` `Appearance` `Notifications` `Workspace`; states `item default`, `item hover — bg-muted/60`, `item active — bg-muted, aria-current`; `SettingsNav (lg:w-60) — Profile active, hover Appearance`. File `components/settings/settings-nav.tsx`. Below lg: sideways-scrolling row (Map note).

## Open points / caveats
- Cover page empty. No standalone "Field" section on the Components page (Field = `components/settings/field.tsx` listed in the Map only).
- Map lists 22 elements (5 Shell, 16 Primitive, 1 App) — verified.
- `components/ui/sonner.tsx` is planned, not in repo (Map note); toasts follow planned Toaster with popover tokens.
- Map marks textarea/switch/radio-group/checkbox/label as "new, KAN-2".
- Dark variants exist for every state but only the 4 defaults are exported here; `appearance-dark-compact-focus.png` shows Dark *selected* but chrome still light.
- Images are 1x only (Figma MCP screenshot did not upscale).
- Mobile copy was not separately extracted; it mirrors desktop (verify in PNGs).
- Figma notes say code is the source of truth: `components/ui/*` on branch `ui/settings` (ticket KAN-1; new primitives KAN-2), and that the map is mirrored in `/workspace/designer-kan1/component-token-map.md` (that file exists on the box).
