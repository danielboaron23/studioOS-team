# map — Figma design spec

- **Frame:** Map — components & tokens
- **Node id:** `14:2`
- **Page:** Map
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=14-2
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — Next.js + shadcn/ui, tokens in `app/globals.css`. Map `var(--token,#fallback)` to existing tokens; `imgLucide*` = lucide-react icons.
> Figma asset URLs in this file expire ~7 days after export (assets were not downloaded for this file; the main-section specs have local copies in `assets/`).

```tsx
export default function MapComponentsTokens() {
  return (
    <div className="bg-[var(--background,white)] content-stretch flex flex-col gap-[48px] items-start p-[64px] relative size-full" data-node-id="14:2" data-name="Map — components & tokens">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:3" data-name="MapHeader">
        <p className="font-['Geist:Bold'] font-bold leading-[36px] relative shrink-0 text-[30px] text-[color:var(--foreground,#020618)] tracking-[-0.75px] whitespace-nowrap" data-node-id="14:4">{`Component & token map`}</p>
        <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="14:5">{`studioOS Settings (KAN-1). Each Settings UI element → code component (components/ui/* on ui/settings, or composite) → tokens from app/globals.css. Mirrored in /workspace/designer-kan1/component-token-map.md.`}</p>
        <div className="content-stretch flex gap-[8px] items-center leading-[16px] overflow-clip pt-[8px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:6" data-name="TokenLegend">
          <p className="font-['Geist:Medium'] font-medium relative shrink-0 whitespace-nowrap" data-node-id="14:7">
            Tokens in “studioOS tokens” (Light/Dark):
          </p>
          <p className="flex-[1_0_0] font-['Geist:Regular'] font-normal min-w-px relative" data-node-id="14:8">
            background, foreground, card, card-foreground, popover, popover-foreground, primary, primary-foreground, secondary, secondary-foreground, muted, muted-foreground, accent, accent-foreground, destructive, border, input, ring, sidebar-*; radius-sm 6 / md 8 / lg 10 / xl 14 (from --radius 0.625rem)
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:9" data-name="Block/Elements">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:10" data-name="BlockTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="14:11">
            Elements
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] min-w-full relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="14:12">
            Shell = Settings composites; Primitive = components/ui; App = surrounding app chrome.
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="14:13" data-name="Table/Elements">
          <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="14:14" data-name="HeaderRow">
            <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] py-[10px] relative shrink-0 w-[110px]" data-node-id="14:15" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:16">
                Group
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] py-[10px] relative shrink-0 w-[300px]" data-node-id="14:17" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:18">
                Settings UI element
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] py-[10px] relative shrink-0 w-[360px]" data-node-id="14:19" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:20">
                Code component
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] py-[10px] relative shrink-0 w-[440px]" data-node-id="14:21" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:22">
                Tokens used
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] py-[10px] relative shrink-0 w-[342px]" data-node-id="14:23" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:24">
                Notes
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:25" data-name="Row/Page header (title + description)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:26" data-name="Cell">
              <div className="border border-[var(--border,#e2e8f0)] border-solid content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:27" data-name="Badge/outline">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="14:28">
                  Shell
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:29" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:30">
                Page header (title + description)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:31" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:32">
                app/settings/layout.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:33" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:34" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:35" data-name="Token/foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:36">
                    foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:37" data-name="Token/muted-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:38">
                    muted-foreground
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:39" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:40">
                h1 text-3xl font-bold tracking-tight; same as app/projects/page.tsx
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:41" data-name="Row/Settings section nav">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:42" data-name="Cell">
              <div className="border border-[var(--border,#e2e8f0)] border-solid content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:43" data-name="Badge/outline">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="14:44">
                  Shell
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:45" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:46">
                Settings section nav
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:47" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:48">
                SettingsNav — components/settings/settings-nav.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:49" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:50" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:51" data-name="Token/muted (active)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:52">
                    muted (active)
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:53" data-name="Token/muted/60 (hover)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:54">
                    muted/60 (hover)
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:55" data-name="Token/foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:56">
                    foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:57" data-name="Token/radius-md">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:58">
                    radius-md
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:59" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:60">{`lg:w-60 (240px); Link + size-4 icon; active has aria-current="page". Below lg: sideways-scrolling row`}</p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:61" data-name="Row/Section header + divider">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:62" data-name="Cell">
              <div className="border border-[var(--border,#e2e8f0)] border-solid content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:63" data-name="Badge/outline">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="14:64">
                  Shell
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:65" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:66">
                Section header + divider
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:67" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:68">
                SectionHeader (in each form) + components/ui/separator.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:69" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:70" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:71" data-name="Token/foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:72">
                    foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:73" data-name="Token/muted-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:74">
                    muted-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:75" data-name="Token/border">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:76">
                    border
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:77" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:78">
                Title text-lg font-medium; description text-sm
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:79" data-name="Row/Field (label + control + helper/error)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:80" data-name="Cell">
              <div className="border border-[var(--border,#e2e8f0)] border-solid content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:81" data-name="Badge/outline">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="14:82">
                  Shell
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:83" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:84">
                Field (label + control + helper/error)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:85" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:86">
                components/settings/field.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:87" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:88" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:89" data-name="Token/foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:90">
                    foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:91" data-name="Token/muted-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:92">
                    muted-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:93" data-name="Token/destructive">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:94">
                    destructive
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:95" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:96">
                Wires id / aria-describedby / aria-invalid; stack space-y-6; inputs max-w-sm (384)
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:97" data-name="Row/Save bar (dirty, saving)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:98" data-name="Cell">
              <div className="border border-[var(--border,#e2e8f0)] border-solid content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:99" data-name="Badge/outline">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="14:100">
                  Shell
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:101" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:102">
                Save bar (dirty, saving)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:103" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:104">
                SaveBar — components/settings/save-bar.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:105" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:106" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:107" data-name="Token/background">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:108">
                    background
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:109" data-name="Token/border">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:110">
                    border
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:111" data-name="Token/muted-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:112">
                    muted-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:113" data-name="Token/primary">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:114">
                    primary
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:115" data-name="Token/primary-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:116">
                    primary-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:117" data-name="Token/accent (ghost hover)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:118">
                    accent (ghost hover)
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:119" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:120">
                Sticky, border-t. Not used in Appearance (saves instantly)
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:121" data-name="Row/Button: default / outline / ghost / destructive">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:122" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:123" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:124">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:125" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:126">
                Button: default / outline / ghost / destructive
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:127" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:128">
                components/ui/button.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:129" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:130" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:131" data-name="Token/primary">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:132">
                    primary
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:133" data-name="Token/primary-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:134">
                    primary-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:135" data-name="Token/background (outline)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:136">
                    background (outline)
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:137" data-name="Token/border/input (outline)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:138">
                    border/input (outline)
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:139" data-name="Token/accent">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:140">
                    accent
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:141" data-name="Token/accent-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:142">
                    accent-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:143" data-name="Token/destructive">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:144">
                    destructive
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:145" data-name="Token/ring">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:146">
                    ring
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:147" data-name="Token/radius-md">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:148">
                    radius-md
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:149" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:150">
                Hover primary/90, destructive/90; focus ring-ring/50 (destructive: ring-destructive/20); disabled opacity-50; destructive text is literal text-white
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:151" data-name="Row/Input (name, email, slug, invite)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:152" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:153" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:154">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:155" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:156">
                Input (name, email, slug, invite)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:157" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:158">
                components/ui/input.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:159" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:160" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:161" data-name="Token/input">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:162">
                    input
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:163" data-name="Token/derived/input-bg">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:164">
                    derived/input-bg
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:165" data-name="Token/foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:166">
                    foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:167" data-name="Token/muted-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:168">
                    muted-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:169" data-name="Token/ring">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:170">
                    ring
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:171" data-name="Token/destructive">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:172">
                    destructive
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:173" data-name="Token/radius-md">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:174">
                    radius-md
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:175" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:176">
                h-9; focus border-ring ring-ring/50; aria-invalid border-destructive ring-destructive/20; read-only email; disabled opacity-50
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:177" data-name="Row/Textarea (bio) + counter">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:178" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:179" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:180">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:181" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:182">
                Textarea (bio) + counter
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:183" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:184">
                components/ui/textarea.tsx (new, KAN-2)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:185" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:186" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:187" data-name="Token/input">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:188">
                    input
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:189" data-name="Token/derived/input-bg">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:190">
                    derived/input-bg
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:191" data-name="Token/ring">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:192">
                    ring
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:193" data-name="Token/destructive">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:194">
                    destructive
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:195" data-name="Token/muted-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:196">
                    muted-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:197" data-name="Token/radius-md">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:198">
                    radius-md
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:199" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:200">
                min-h-16; counter 36/280 in muted-foreground, destructive when over 280
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:201" data-name="Row/Select (role, quiet-hours times)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:202" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:203" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:204">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:205" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:206">
                Select (role, quiet-hours times)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:207" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:208">
                components/ui/select.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:209" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:210" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:211" data-name="Token/input">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:212">
                    input
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:213" data-name="Token/derived/input-bg">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:214">
                    derived/input-bg
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:215" data-name="Token/popover">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:216">
                    popover
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:217" data-name="Token/popover-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:218">
                    popover-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:219" data-name="Token/accent">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:220">
                    accent
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:221" data-name="Token/accent-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:222">
                    accent-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:223" data-name="Token/muted-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:224">
                    muted-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:225" data-name="Token/border">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:226">
                    border
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:227" data-name="Token/radius-md / radius-sm">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:228">
                    radius-md / radius-sm
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:229" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:230">
                Trigger h-9; content shadow-md; highlighted item bg-accent; placeholder text-muted-foreground
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:231" data-name="Row/Switch (channels, quiet hours, reduced motion)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:232" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:233" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:234">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:235" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:236">
                Switch (channels, quiet hours, reduced motion)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:237" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:238">
                components/ui/switch.tsx (new, KAN-2)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:239" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:240" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:241" data-name="Token/primary (on)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:242">
                    primary (on)
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:243" data-name="Token/derived/switch-track-off">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:244">
                    derived/switch-track-off
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:245" data-name="Token/derived/switch-thumb-on/off">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:246">
                    derived/switch-thumb-on/off
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:247" data-name="Token/ring">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:248">
                    ring
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:249" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:250">
                32x18.4, rounded-full; focus ring-ring/50; disabled opacity-50
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:251" data-name="Row/RadioGroup (theme, density)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:252" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:253" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:254">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:255" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:256">
                RadioGroup (theme, density)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:257" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:258">
                components/ui/radio-group.tsx (new, KAN-2)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:259" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:260" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:261" data-name="Token/input">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:262">
                    input
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:263" data-name="Token/derived/input-bg">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:264">
                    derived/input-bg
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:265" data-name="Token/primary (indicator)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:266">
                    primary (indicator)
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:267" data-name="Token/ring">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:268">
                    ring
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:269" data-name="Token/destructive">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:270">
                    destructive
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:271" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:272">
                size-4 rounded-full; gap-3 vertical
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:273" data-name="Row/Checkbox (category matrix, quiet-hours days)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:274" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:275" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:276">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:277" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:278">
                Checkbox (category matrix, quiet-hours days)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:279" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:280">
                components/ui/checkbox.tsx (new, KAN-2)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:281" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:282" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:283" data-name="Token/input">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:284">
                    input
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:285" data-name="Token/derived/input-bg">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:286">
                    derived/input-bg
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:287" data-name="Token/primary">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:288">
                    primary
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:289" data-name="Token/primary-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:290">
                    primary-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:291" data-name="Token/ring">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:292">
                    ring
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:293" data-name="Token/destructive">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:294">
                    destructive
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:295" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:296">
                size-4 rounded-[4px]; disabled when channel is off; aria-invalid border-destructive
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:297" data-name="Row/Label">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:298" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:299" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:300">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:301" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:302">
                Label
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:303" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:304">
                components/ui/label.tsx (new, KAN-2)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:305" data-name="Cell">
              <div className="content-start flex flex-wrap gap-y-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:306" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:307" data-name="Token/foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:308">
                    foreground
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:309" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:310">
                text-sm font-medium leading-none; peer-disabled opacity-50
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:311" data-name="Row/Badge (Invited, Verified, invite chips)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:312" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:313" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:314">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:315" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:316">
                Badge (Invited, Verified, invite chips)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:317" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:318">
                components/ui/badge.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:319" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:320" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:321" data-name="Token/secondary">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:322">
                    secondary
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:323" data-name="Token/secondary-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:324">
                    secondary-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:325" data-name="Token/destructive (invalid chip)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:326">
                    destructive (invalid chip)
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:327" data-name="Token/radius-md">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:328">
                    radius-md
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:329" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:330">{`Invalid chip uses variant="destructive" (text-white)`}</p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:331" data-name="Row/Avatar (profile, member rows, header)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:332" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:333" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:334">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:335" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:336">
                Avatar (profile, member rows, header)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:337" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:338">
                components/ui/avatar.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:339" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:340" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:341" data-name="Token/muted (fallback bg)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:342">
                    muted (fallback bg)
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:343" data-name="Token/muted-foreground (initials)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:344">
                    muted-foreground (initials)
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:345" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:346">
                Sizes 40 / 32 / 24; image from mock data (pravatar) or data URL
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:347" data-name="Row/Member row actions menu">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:348" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:349" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:350">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:351" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:352">
                Member row actions menu
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:353" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:354">
                components/ui/dropdown-menu.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:355" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:356" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:357" data-name="Token/popover">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:358">
                    popover
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:359" data-name="Token/popover-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:360">
                    popover-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:361" data-name="Token/border">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:362">
                    border
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:363" data-name="Token/accent (highlight)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:364">
                    accent (highlight)
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:365" data-name="Token/destructive (Remove)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:366">
                    destructive (Remove)
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:367" data-name="Token/radius-md / radius-sm">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:368">
                    radius-md / radius-sm
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:369" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:370">{`Item variant="destructive" for Remove; trigger is ghost icon button`}</p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:371" data-name="Row/Confirm dialogs (remove member, unsaved guard)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:372" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:373" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:374">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:375" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:376">
                Confirm dialogs (remove member, unsaved guard)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:377" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:378">
                components/ui/dialog.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:379" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:380" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:381" data-name="Token/background">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:382">
                    background
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:383" data-name="Token/border">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:384">
                    border
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:385" data-name="Token/foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:386">
                    foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:387" data-name="Token/muted-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:388">
                    muted-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:389" data-name="Token/radius-lg">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:390">
                    radius-lg
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:391" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:392">
                Overlay is literal bg-black/50; actions outline Cancel + destructive confirm
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:393" data-name="Row/Tooltip (More actions)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:394" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:395" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:396">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:397" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:398">
                Tooltip (More actions)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:399" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:400">
                components/ui/tooltip.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:401" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:402" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:403" data-name="Token/foreground (bg)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:404">
                    foreground (bg)
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:405" data-name="Token/background (text)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:406">
                    background (text)
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:407" data-name="Token/radius-md">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:408">
                    radius-md
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:409" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:410">
                text-xs; arrow fill-foreground
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:411" data-name="Row/Toast (saved, failed + Retry, invite added)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:412" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:413" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:414">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:415" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:416">
                Toast (saved, failed + Retry, invite added)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:417" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:418">
                components/ui/sonner.tsx (Toaster — planned, not yet in repo)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:419" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:420" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:421" data-name="Token/popover">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:422">
                    popover
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:423" data-name="Token/popover-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:424">
                    popover-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:425" data-name="Token/border">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:426">
                    border
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:427" data-name="Token/primary (action)">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:428">
                    primary (action)
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:429" data-name="Token/radius-lg">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:430">
                    radius-lg
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:431" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:432">
                Bottom right, 4 s; error keeps unsaved changes; no animation with reduced motion
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:433" data-name="Row/Skeleton (loading)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:434" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:435" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:436">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:437" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:438">
                Skeleton (loading)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:439" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:440">
                components/ui/skeleton.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:441" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:442" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:443" data-name="Token/accent">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:444">
                    accent
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:445" data-name="Token/radius-md">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:446">
                    radius-md
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:447" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:448">
                animate-pulse; circles use rounded-full
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:449" data-name="Row/Cards (appearance preview, mobile member cards)">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:450" data-name="Cell">
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:451" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:452">
                  Primitive
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:453" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:454">
                Cards (appearance preview, mobile member cards)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:455" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:456">
                components/ui/card.tsx
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:457" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:458" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:459" data-name="Token/card">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:460">
                    card
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:461" data-name="Token/card-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:462">
                    card-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:463" data-name="Token/border">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:464">
                    border
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:465" data-name="Token/radius-xl">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:466">
                    radius-xl
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:467" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:468">
                shadow-sm
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:469" data-name="Row/Sidebar / Header around Settings">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[110px]" data-node-id="14:470" data-name="Cell">
              <div className="border border-[var(--border,#e2e8f0)] border-solid content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="14:471" data-name="Badge/outline">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="14:472">
                  App
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[300px]" data-node-id="14:473" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:474">
                Sidebar / Header around Settings
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[360px]" data-node-id="14:475" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:476">
                components/sidebar.tsx, components/header.tsx (ui/sidebar.tsx)
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[440px]" data-node-id="14:477" data-name="Cell">
              <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:478" data-name="Tokens">
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:479" data-name="Token/sidebar">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:480">
                    sidebar
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:481" data-name="Token/sidebar-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:482">
                    sidebar-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:483" data-name="Token/sidebar-accent">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:484">
                    sidebar-accent
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:485" data-name="Token/sidebar-accent-foreground">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:486">
                    sidebar-accent-foreground
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:487" data-name="Token/sidebar-primary">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:488">
                    sidebar-primary
                  </p>
                </div>
                <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="14:489" data-name="Token/border">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="14:490">
                    border
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[342px]" data-node-id="14:491" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:492">
                Unchanged by Settings except header name/avatar from the settings store
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:493" data-name="Block/Derived values — existing shadcn classes, not new tokens (approved decision 5)">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:494" data-name="BlockTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="14:495">
            Derived values — existing shadcn classes, not new tokens (approved decision 5)
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] min-w-full relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="14:496">{`Six Figma variables under derived/* only resolve existing shadcn class combinations so mockups render correctly in both modes. In code they stay as these classes; nothing is added to globals.css.`}</p>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="14:497" data-name="Table/Derived">
          <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="14:498" data-name="HeaderRow">
            <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] py-[10px] relative shrink-0 w-[260px]" data-node-id="14:499" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:500">
                Figma variable
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] py-[10px] relative shrink-0 w-[380px]" data-node-id="14:501" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:502">
                Existing shadcn classes
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] py-[10px] relative shrink-0 w-[380px]" data-node-id="14:503" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:504">
                Used by
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] py-[10px] relative shrink-0 w-[266px]" data-node-id="14:505" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:506">
                Light
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] py-[10px] relative shrink-0 w-[266px]" data-node-id="14:507" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:508">
                Dark
              </p>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:509" data-name="Row/derived/input-bg">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[260px]" data-node-id="14:510" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:511">
                derived/input-bg
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[380px]" data-node-id="14:512" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:513">
                bg-transparent dark:bg-input/30
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[380px]" data-node-id="14:514" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:515">
                Input, Textarea, Select trigger, Checkbox, Radio
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[266px]" data-node-id="14:516" data-name="Cell">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="14:517" data-name="Swatch Light">
                <div className="bg-[var(--background,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch flex h-[24px] items-center overflow-clip p-[4px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-[40px]" data-node-id="14:518" data-name="Swatch frame/Light">
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--border,#e2e8f0)] border-solid h-[16px] relative rounded-[4px] shrink-0 w-[32px]" data-node-id="14:519" data-name="derived/input-bg" />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:520">
                  #ffffff00
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[266px]" data-node-id="14:521" data-name="Cell">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="14:522" data-name="Swatch Dark">
                <div className="bg-[var(--background,#020618)] border border-[var(--border,rgba(255,255,255,0.1))] border-solid content-stretch flex h-[24px] items-center overflow-clip p-[4px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-[40px]" data-node-id="14:523" data-name="Swatch frame/Dark">
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0.04))] border border-[var(--border,rgba(255,255,255,0.1))] border-solid h-[16px] relative rounded-[4px] shrink-0 w-[32px]" data-node-id="14:524" data-name="derived/input-bg" />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:525">
                  #ffffff0b
                </p>
              </div>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:526" data-name="Row/derived/outline-bg">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[260px]" data-node-id="14:527" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:528">
                derived/outline-bg
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[380px]" data-node-id="14:529" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:530">
                bg-background dark:bg-input/30
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[380px]" data-node-id="14:531" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:532">
                Button outline
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[266px]" data-node-id="14:533" data-name="Cell">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="14:534" data-name="Swatch Light">
                <div className="bg-[var(--background,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch flex h-[24px] items-center overflow-clip p-[4px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-[40px]" data-node-id="14:535" data-name="Swatch frame/Light">
                  <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--border,#e2e8f0)] border-solid h-[16px] relative rounded-[4px] shrink-0 w-[32px]" data-node-id="14:536" data-name="derived/outline-bg" />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:537">
                  #ffffff
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[266px]" data-node-id="14:538" data-name="Cell">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="14:539" data-name="Swatch Dark">
                <div className="bg-[var(--background,#020618)] border border-[var(--border,rgba(255,255,255,0.1))] border-solid content-stretch flex h-[24px] items-center overflow-clip p-[4px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-[40px]" data-node-id="14:540" data-name="Swatch frame/Dark">
                  <div className="bg-[var(--derived\/outline-bg,rgba(255,255,255,0.04))] border border-[var(--border,rgba(255,255,255,0.1))] border-solid h-[16px] relative rounded-[4px] shrink-0 w-[32px]" data-node-id="14:541" data-name="derived/outline-bg" />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:542">
                  #ffffff0b
                </p>
              </div>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:543" data-name="Row/derived/outline-border">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[260px]" data-node-id="14:544" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:545">
                derived/outline-border
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[380px]" data-node-id="14:546" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:547">
                border dark:border-input
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[380px]" data-node-id="14:548" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:549">
                Button outline
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[266px]" data-node-id="14:550" data-name="Cell">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="14:551" data-name="Swatch Light">
                <div className="bg-[var(--background,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch flex h-[24px] items-center overflow-clip p-[4px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-[40px]" data-node-id="14:552" data-name="Swatch frame/Light">
                  <div className="bg-[var(--derived\/outline-border,#e2e8f0)] border border-[var(--border,#e2e8f0)] border-solid h-[16px] relative rounded-[4px] shrink-0 w-[32px]" data-node-id="14:553" data-name="derived/outline-border" />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:554">
                  #e2e8f0
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[266px]" data-node-id="14:555" data-name="Cell">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="14:556" data-name="Swatch Dark">
                <div className="bg-[var(--background,#020618)] border border-[var(--border,rgba(255,255,255,0.1))] border-solid content-stretch flex h-[24px] items-center overflow-clip p-[4px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-[40px]" data-node-id="14:557" data-name="Swatch frame/Dark">
                  <div className="bg-[var(--derived\/outline-border,rgba(255,255,255,0.15))] border border-[var(--border,rgba(255,255,255,0.1))] border-solid h-[16px] relative rounded-[4px] shrink-0 w-[32px]" data-node-id="14:558" data-name="derived/outline-border" />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:559">
                  #ffffff26
                </p>
              </div>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:560" data-name="Row/derived/switch-track-off">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[260px]" data-node-id="14:561" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:562">
                derived/switch-track-off
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[380px]" data-node-id="14:563" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:564">
                bg-input dark:bg-input/80
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[380px]" data-node-id="14:565" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:566">
                Switch unchecked
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[266px]" data-node-id="14:567" data-name="Cell">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="14:568" data-name="Swatch Light">
                <div className="bg-[var(--background,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch flex h-[24px] items-center overflow-clip p-[4px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-[40px]" data-node-id="14:569" data-name="Swatch frame/Light">
                  <div className="bg-[var(--derived\/switch-track-off,#e2e8f0)] border border-[var(--border,#e2e8f0)] border-solid h-[16px] relative rounded-[4px] shrink-0 w-[32px]" data-node-id="14:570" data-name="derived/switch-track-off" />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:571">
                  #e2e8f0
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[266px]" data-node-id="14:572" data-name="Cell">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="14:573" data-name="Swatch Dark">
                <div className="bg-[var(--background,#020618)] border border-[var(--border,rgba(255,255,255,0.1))] border-solid content-stretch flex h-[24px] items-center overflow-clip p-[4px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-[40px]" data-node-id="14:574" data-name="Swatch frame/Dark">
                  <div className="bg-[var(--derived\/switch-track-off,rgba(255,255,255,0.12))] border border-[var(--border,rgba(255,255,255,0.1))] border-solid h-[16px] relative rounded-[4px] shrink-0 w-[32px]" data-node-id="14:575" data-name="derived/switch-track-off" />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:576">
                  #ffffff1f
                </p>
              </div>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:577" data-name="Row/derived/switch-thumb-off">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[260px]" data-node-id="14:578" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:579">
                derived/switch-thumb-off
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[380px]" data-node-id="14:580" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:581">
                bg-background dark:bg-foreground
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[380px]" data-node-id="14:582" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:583">
                Switch thumb, unchecked
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[266px]" data-node-id="14:584" data-name="Cell">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="14:585" data-name="Swatch Light">
                <div className="bg-[var(--background,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch flex h-[24px] items-center overflow-clip p-[4px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-[40px]" data-node-id="14:586" data-name="Swatch frame/Light">
                  <div className="bg-[var(--derived\/switch-thumb-off,white)] border border-[var(--border,#e2e8f0)] border-solid h-[16px] relative rounded-[4px] shrink-0 w-[32px]" data-node-id="14:587" data-name="derived/switch-thumb-off" />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:588">
                  #ffffff
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[266px]" data-node-id="14:589" data-name="Cell">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="14:590" data-name="Swatch Dark">
                <div className="bg-[var(--background,#020618)] border border-[var(--border,rgba(255,255,255,0.1))] border-solid content-stretch flex h-[24px] items-center overflow-clip p-[4px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-[40px]" data-node-id="14:591" data-name="Swatch frame/Dark">
                  <div className="bg-[var(--derived\/switch-thumb-off,#f8fafc)] border border-[var(--border,rgba(255,255,255,0.1))] border-solid h-[16px] relative rounded-[4px] shrink-0 w-[32px]" data-node-id="14:592" data-name="derived/switch-thumb-off" />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:593">
                  #f8fafc
                </p>
              </div>
            </div>
          </div>
          <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="14:594" data-name="Row/derived/switch-thumb-on">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[260px]" data-node-id="14:595" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:596">
                derived/switch-thumb-on
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[380px]" data-node-id="14:597" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--foreground,#020618)] w-full" data-node-id="14:598">
                bg-background dark:bg-primary-foreground
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[380px]" data-node-id="14:599" data-name="Cell">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:600">
                Switch thumb, checked
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[266px]" data-node-id="14:601" data-name="Cell">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="14:602" data-name="Swatch Light">
                <div className="bg-[var(--background,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch flex h-[24px] items-center overflow-clip p-[4px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-[40px]" data-node-id="14:603" data-name="Swatch frame/Light">
                  <div className="bg-[var(--derived\/switch-thumb-on,white)] border border-[var(--border,#e2e8f0)] border-solid h-[16px] relative rounded-[4px] shrink-0 w-[32px]" data-node-id="14:604" data-name="derived/switch-thumb-on" />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:605">
                  #ffffff
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative shrink-0 w-[266px]" data-node-id="14:606" data-name="Cell">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="14:607" data-name="Swatch Dark">
                <div className="bg-[var(--background,#020618)] border border-[var(--border,rgba(255,255,255,0.1))] border-solid content-stretch flex h-[24px] items-center overflow-clip p-[4px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-[40px]" data-node-id="14:608" data-name="Swatch frame/Dark">
                  <div className="bg-[var(--derived\/switch-thumb-on,#0f172b)] border border-[var(--border,rgba(255,255,255,0.1))] border-solid h-[16px] relative rounded-[4px] shrink-0 w-[32px]" data-node-id="14:609" data-name="derived/switch-thumb-on" />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="14:610">
                  #0f172b
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:611" data-name="Block/Literal values kept as in code">
        <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:612" data-name="BlockTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="14:613">
            Literal values kept as in code
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] min-w-full relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="14:614">
            Not tokens in shadcn either, so they stay literal in Figma.
          </p>
        </div>
        <div className="content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[6px] items-start leading-[19.5px] overflow-clip relative shrink-0 text-[13px] w-full" data-node-id="14:615" data-name="List">
          <p className="relative shrink-0 text-[color:var(--foreground,#020618)] w-full" data-node-id="14:616">
            • text-white on destructive Button and destructive Badge
          </p>
          <p className="relative shrink-0 text-[color:var(--foreground,#020618)] w-full" data-node-id="14:617">
            • bg-black/50 dialog overlay
          </p>
          <p className="relative shrink-0 text-[color:var(--foreground,#020618)] w-full" data-node-id="14:618">
            • shadow-xs / sm / md / lg are effects, not color tokens
          </p>
          <p className="relative shrink-0 text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="14:619">
            • components/ui/sonner.tsx is planned in the spec but not in the repo yet; Toast specimens follow the planned Toaster with popover tokens.
          </p>
        </div>
      </div>
    </div>
  );
}
```
