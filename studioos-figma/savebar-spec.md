# savebar — Figma design spec

- **Frame:** Section/SaveBar
- **Node id:** `12:603`
- **Page:** Components & states
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=12-603
- **Reference image:** see INDEX.md
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — do not paste. Target codebase is Next.js + shadcn/ui with tokens in `app/globals.css`.
> Map `var(--token,#fallback)` values to the existing CSS variables / shadcn utility classes (e.g. `bg-[var(--sidebar,#f8fafc)]` -> `bg-sidebar`),
> replace absolute/fixed sizing with normal flex/grid layout, and use existing shadcn components (Button, Input, Select, Switch, Checkbox, RadioGroup, Avatar, Badge, DropdownMenu, Dialog, Tooltip, Sonner/Toast, Skeleton).
> `imgLucide*` constants are Lucide icons — use `lucide-react` (same icon names). Figma asset URLs expire ~7 days after export; local copies of the referenced assets are in `assets/` (see INDEX.md).
> Font in design: Geist.

```tsx
const imgLucideLoaderCircle = "https://www.figma.com/api/mcp/asset/9ad3a292-1c64-491c-9297-597a5581a750.svg";

export default function SectionSaveBar() {
  return (
    <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative size-full" data-node-id="12:603" data-name="Section/SaveBar">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:604" data-name="SectionTitle">
        <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:605">
          SaveBar
        </p>
        <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:606">
          components/settings/save-bar.tsx (composite) · sticky, border-t, bg-background
        </p>
      </div>
      <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full" data-node-id="12:607" data-name="States">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[672px]" data-node-id="12:608" data-name="Specimen/dirty">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[672px]" data-node-id="12:609" data-name="w">
            <div className="bg-[var(--background,white)] border-[var(--border,#e2e8f0)] border-solid border-t content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-node-id="12:610" data-name="SaveBar (sticky)">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:611">
                You have unsaved changes
              </p>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:612" data-name="Actions">
                <div className="content-stretch flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:613" data-name="Button/ghost">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:614">
                    Discard
                  </p>
                </div>
                <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:615" data-name="Button/default">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="12:616">
                    Save changes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:617">
            dirty
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[672px]" data-node-id="12:618" data-name="Specimen/saving (pending)">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[672px]" data-node-id="12:619" data-name="w">
            <div className="bg-[var(--background,white)] border-[var(--border,#e2e8f0)] border-solid border-t content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-node-id="12:620" data-name="SaveBar (sticky)">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:621">
                You have unsaved changes
              </p>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:622" data-name="Actions">
                <div className="content-stretch flex h-[36px] items-center opacity-50 px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:623" data-name="Button/ghost :disabled">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:624">
                    Discard
                  </p>
                </div>
                <div className="bg-[var(--primary,#0f172b)] content-stretch flex gap-[8px] h-[36px] items-center opacity-50 px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:625" data-name="Button/default :disabled">
                  <div className="relative shrink-0 size-[16px]" data-node-id="12:626" data-name="lucide/loader-circle">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideLoaderCircle} />
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="12:628">
                    Save changes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:629">
            saving (pending)
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
| `imgLucideLoaderCircle` | `assets/savebar/imgLucideLoaderCircle.svg` | ok |
