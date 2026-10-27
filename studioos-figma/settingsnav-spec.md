# settingsnav — Figma design spec

- **Frame:** Section/SettingsNav
- **Node id:** `12:543`
- **Page:** Components & states
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=12-543
- **Reference image:** see INDEX.md
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — do not paste. Target codebase is Next.js + shadcn/ui with tokens in `app/globals.css`.
> Map `var(--token,#fallback)` values to the existing CSS variables / shadcn utility classes (e.g. `bg-[var(--sidebar,#f8fafc)]` -> `bg-sidebar`),
> replace absolute/fixed sizing with normal flex/grid layout, and use existing shadcn components (Button, Input, Select, Switch, Checkbox, RadioGroup, Avatar, Badge, DropdownMenu, Dialog, Tooltip, Sonner/Toast, Skeleton).
> `imgLucide*` constants are Lucide icons — use `lucide-react` (same icon names). Figma asset URLs expire ~7 days after export; local copies of the referenced assets are in `assets/` (see INDEX.md).
> Font in design: Geist.

```tsx
const imgLucideBell = "https://www.figma.com/api/mcp/asset/a74a6d72-7f7f-4af1-ad34-aa2dc2228f10.svg";
const imgLucidePalette = "https://www.figma.com/api/mcp/asset/184e9c9e-ade6-445d-9136-4a22f70611c6.svg";
const imgLucideUser = "https://www.figma.com/api/mcp/asset/c6668504-1fd7-4256-9a12-54f4f8e34745.svg";
const imgLucideBuilding2 = "https://www.figma.com/api/mcp/asset/87277404-5ce2-4116-9c2d-d1331392e425.svg";

export default function SectionSettingsNav() {
  return (
    <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative size-full" data-node-id="12:543" data-name="Section/SettingsNav">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:544" data-name="SectionTitle">
        <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:545">
          SettingsNav
        </p>
        <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:546">
          components/settings/settings-nav.tsx (composite)
        </p>
      </div>
      <div className="content-start flex flex-wrap gap-[32px_48px] items-start relative shrink-0 w-full" data-node-id="12:547" data-name="States">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:548" data-name="Specimen/item default">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[240px]" data-node-id="12:549" data-name="SettingsNavItem">
            <div className="relative shrink-0 size-[16px]" data-node-id="12:550" data-name="lucide/bell">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBell} />
            </div>
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:553">
              Notifications
            </p>
          </div>
          <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:554">
            item default
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:555" data-name="Specimen/item hover — bg-muted/60">
          <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[240px]" data-node-id="12:556" data-name="SettingsNavItem :hover">
            <div className="relative shrink-0 size-[16px]" data-node-id="12:557" data-name="lucide/palette">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePalette} />
            </div>
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:563">
              Appearance
            </p>
          </div>
          <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:564">
            item hover — bg-muted/60
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:565" data-name="Specimen/item active — bg-muted, aria-current">
          <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[240px]" data-node-id="12:566" data-name="SettingsNavItem :active">
            <div className="relative shrink-0 size-[16px]" data-node-id="12:567" data-name="lucide/user">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUser} />
            </div>
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:570">
              Profile
            </p>
          </div>
          <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:571">
            item active — bg-muted, aria-current
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:572" data-name="Specimen/SettingsNav (lg:w-60) — Profile active, hover Appearance">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[240px]" data-node-id="12:573" data-name="SettingsNav">
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="12:574" data-name="SettingsNavItem :active">
              <div className="relative shrink-0 size-[16px]" data-node-id="12:575" data-name="lucide/user">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUser} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:578">
                Profile
              </p>
            </div>
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="12:579" data-name="SettingsNavItem :hover">
              <div className="relative shrink-0 size-[16px]" data-node-id="12:580" data-name="lucide/palette">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePalette} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:586">
                Appearance
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="12:587" data-name="SettingsNavItem">
              <div className="relative shrink-0 size-[16px]" data-node-id="12:588" data-name="lucide/bell">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBell} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:591">
                Notifications
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="12:592" data-name="SettingsNavItem">
              <div className="relative shrink-0 size-[16px]" data-node-id="12:593" data-name="lucide/building-2">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding2} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:601">
                Workspace
              </p>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:602">
            SettingsNav (lg:w-60) — Profile active, hover Appearance
          </p>
        </div>
      </div>
    </div>
  );
}
```

## Asset constants -> local files

| Constant | Local file | Download |
|---|---|---|
| `imgLucideBell` | `assets/settingsnav/imgLucideBell.svg` | ok |
| `imgLucidePalette` | `assets/settingsnav/imgLucidePalette.svg` | ok |
| `imgLucideUser` | `assets/settingsnav/imgLucideUser.svg` | ok |
| `imgLucideBuilding2` | `assets/settingsnav/imgLucideBuilding2.svg` | ok |
