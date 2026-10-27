# components — Figma design spec

- **Frame:** Components & states — light
- **Node id:** `12:2`
- **Page:** Components & states
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=12-2
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — Next.js + shadcn/ui, tokens in `app/globals.css`. Map `var(--token,#fallback)` to existing tokens; `imgLucide*` = lucide-react icons.
> Figma asset URLs in this file expire ~7 days after export (assets were not downloaded for this file; the main-section specs have local copies in `assets/`).

```tsx
const imgAvatarLg = "https://www.figma.com/api/mcp/asset/f508d3ab-5a0f-466d-bb2a-a935d8412fb2.png";
const imgAvatarDefault = "https://www.figma.com/api/mcp/asset/24e5a3d2-6d2a-43c1-8815-170f9cb2a3b6.png";
const imgLucideUpload = "https://www.figma.com/api/mcp/asset/87a19a38-b8c5-406a-95d8-fa302be5060a.svg";
const imgLucideEllipsis = "https://www.figma.com/api/mcp/asset/7cb1f58f-fe85-4ab3-97fd-ad00439a93cb.svg";
const imgLucideLoaderCircle = "https://www.figma.com/api/mcp/asset/1a13fa5d-e950-48b6-a9d1-832f7522fd15.svg";
const imgLucideChevronDown = "https://www.figma.com/api/mcp/asset/fb323c7b-4a39-4741-9a4c-83ca5081f122.svg";
const imgLucideCheck = "https://www.figma.com/api/mcp/asset/cd38c3fa-f270-44e8-9013-a3182cce2936.svg";
const imgSwitchOff = "https://www.figma.com/api/mcp/asset/f8f773ea-75c7-4480-ad1f-cc1d253549b6.svg";
const imgSwitchOn = "https://www.figma.com/api/mcp/asset/4c66658b-ebb7-4d8e-9af5-77fe6b7d0571.svg";
const imgSwitchOffDisabled = "https://www.figma.com/api/mcp/asset/3a24242c-3e3a-4cf4-bde5-43e4fe0c1482.svg";
const imgSwitchOnDisabled = "https://www.figma.com/api/mcp/asset/7fa9de2c-fb4b-4a02-90aa-a33c31191ff7.svg";
const imgRadioGroupItemChecked = "https://www.figma.com/api/mcp/asset/2567b08d-f517-484d-a94f-5cbe3ec6ace5.svg";
const imgRadioGroupItemCheckedFocus = "https://www.figma.com/api/mcp/asset/f86a1eeb-bec5-49da-8822-3c0d1bfd1bbb.svg";
const imgLucideCheck1 = "https://www.figma.com/api/mcp/asset/bcb81262-cd40-4f4d-af1a-0f6286e3fd34.svg";
const imgLucideX = "https://www.figma.com/api/mcp/asset/83bbab1f-ccaa-4e38-8d2d-9eb635c10ee4.svg";
const imgLucideX1 = "https://www.figma.com/api/mcp/asset/151c3987-a60d-4f41-a7e3-3543923bd761.svg";
const imgLucideEllipsis1 = "https://www.figma.com/api/mcp/asset/a79dc471-4d0a-4446-9dbb-ab550e954fca.svg";
const imgLucideTrash2 = "https://www.figma.com/api/mcp/asset/686c8374-dc90-4185-be25-a3d94ba78cb3.svg";
const imgLucideX2 = "https://www.figma.com/api/mcp/asset/1256e507-714f-4668-b00e-4e6d84f7e580.svg";
const imgLucideCircleCheck = "https://www.figma.com/api/mcp/asset/502ad128-5023-45ff-aebc-eabcec0859a4.svg";
const imgLucideCircleAlert = "https://www.figma.com/api/mcp/asset/4e94fe9c-36ce-43e0-95a9-d312bd9d62bf.svg";
const imgLucideBell = "https://www.figma.com/api/mcp/asset/bb69dd2e-4ddf-4744-895c-52daa3e1c426.svg";
const imgLucidePalette = "https://www.figma.com/api/mcp/asset/67c8ee72-4eef-42d7-b6b5-bcc178dc44fc.svg";
const imgLucideUser = "https://www.figma.com/api/mcp/asset/0775bd78-a5b5-498f-8f10-5cc28e9d6e6b.svg";
const imgLucideBuilding2 = "https://www.figma.com/api/mcp/asset/28becfb4-b6f2-4477-b7b8-ebfc1b5af38e.svg";

export default function ComponentsStatesLight() {
  return (
    <div className="bg-[var(--background,white)] content-stretch flex flex-col gap-[40px] items-start p-[64px] relative size-full" data-node-id="12:2" data-name="Components & states — light">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="12:3" data-name="SheetHeader">
        <p className="font-['Geist:Bold'] font-bold leading-[36px] relative shrink-0 text-[30px] text-[color:var(--foreground,#020618)] tracking-[-0.75px] whitespace-nowrap" data-node-id="12:4">{`Components & states`}</p>
        <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="12:5">{`studioOS Settings (KAN-1) · light mode · every fill/stroke bound to “studioOS tokens”. Code is the source of truth: components/ui/* on ui/settings.`}</p>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:6" data-name="Section/Button">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:7" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:8">
            Button
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:9">
            components/ui/button.tsx · variants default / outline / ghost / destructive · h-9 px-4 rounded-md
          </p>
        </div>
        <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-node-id="12:10" data-name="Header">
          <div className="h-[16px] relative shrink-0 w-[120px]" data-node-id="12:11" data-name="RowLabel" />
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:12" data-name="Col">
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:13">
              default
            </p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:14" data-name="Col">
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:15">
              hover
            </p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:16" data-name="Col">
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:17">
              focus
            </p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:18" data-name="Col">
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:19">
              disabled
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-node-id="12:20" data-name="Row/default">
          <div className="content-stretch flex items-center relative shrink-0 w-[120px]" data-node-id="12:21" data-name="RowLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:22">
              default
            </p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:23" data-name="Cell">
            <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:24" data-name="Button/default">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="12:25">
                Save changes
              </p>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:26" data-name="Cell">
            <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:27" data-name="Button/default :hover">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="12:28">
                Save changes
              </p>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:29" data-name="Cell">
            <div className="border-3 border-[var(--ring,#90a1b9)] border-solid content-stretch flex items-start relative rounded-[8px] shrink-0" data-node-id="12:30" data-name="Focus ring">
              <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:31" data-name="Button/default">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="12:32">
                  Save changes
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:33" data-name="Cell">
            <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[36px] items-center opacity-50 px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:34" data-name="Button/default :disabled">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="12:35">
                Save changes
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-node-id="12:36" data-name="Row/outline">
          <div className="content-stretch flex items-center relative shrink-0 w-[120px]" data-node-id="12:37" data-name="RowLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:38">
              outline
            </p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:39" data-name="Cell">
            <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--derived\/outline-border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:40" data-name="Button/outline">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:41">
                Upload avatar
              </p>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:42" data-name="Cell">
            <div className="bg-[var(--accent,#f1f5f9)] border border-[var(--derived\/outline-border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:43" data-name="Button/outline :hover">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--accent-foreground,#0f172b)] whitespace-nowrap" data-node-id="12:44">
                Upload avatar
              </p>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:45" data-name="Cell">
            <div className="border-3 border-[var(--ring,#90a1b9)] border-solid content-stretch flex items-start relative rounded-[8px] shrink-0" data-node-id="12:46" data-name="Focus ring">
              <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--ring,#90a1b9)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:47" data-name="Button/outline">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:48">
                  Upload avatar
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:49" data-name="Cell">
            <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--derived\/outline-border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center opacity-50 px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:50" data-name="Button/outline :disabled">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:51">
                Upload avatar
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-node-id="12:52" data-name="Row/ghost">
          <div className="content-stretch flex items-center relative shrink-0 w-[120px]" data-node-id="12:53" data-name="RowLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:54">
              ghost
            </p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:55" data-name="Cell">
            <div className="content-stretch flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:56" data-name="Button/ghost">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:57">
                Discard
              </p>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:58" data-name="Cell">
            <div className="bg-[var(--accent,#f1f5f9)] content-stretch flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:59" data-name="Button/ghost :hover">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--accent-foreground,#0f172b)] whitespace-nowrap" data-node-id="12:60">
                Discard
              </p>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:61" data-name="Cell">
            <div className="border-3 border-[var(--ring,#90a1b9)] border-solid content-stretch flex items-start relative rounded-[8px] shrink-0" data-node-id="12:62" data-name="Focus ring">
              <div className="content-stretch flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:63" data-name="Button/ghost">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:64">
                  Discard
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:65" data-name="Cell">
            <div className="content-stretch flex h-[36px] items-center opacity-50 px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:66" data-name="Button/ghost :disabled">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:67">
                Discard
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-node-id="12:68" data-name="Row/destructive">
          <div className="content-stretch flex items-center relative shrink-0 w-[120px]" data-node-id="12:69" data-name="RowLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:70">
              destructive
            </p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:71" data-name="Cell">
            <div className="bg-[var(--destructive,#e7000b)] content-stretch flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:72" data-name="Button/destructive">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="12:73">
                Remove
              </p>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:74" data-name="Cell">
            <div className="bg-[var(--destructive,#e7000b)] content-stretch flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:75" data-name="Button/destructive :hover">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="12:76">
                Remove
              </p>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:77" data-name="Cell">
            <div className="border-3 border-[var(--destructive,#e7000b)] border-solid content-stretch flex items-start relative rounded-[8px] shrink-0" data-node-id="12:78" data-name="Focus ring">
              <div className="bg-[var(--destructive,#e7000b)] content-stretch flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:79" data-name="Button/destructive">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="12:80">
                  Remove
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[160px]" data-node-id="12:81" data-name="Cell">
            <div className="bg-[var(--destructive,#e7000b)] content-stretch flex h-[36px] items-center opacity-50 px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:82" data-name="Button/destructive :disabled">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="12:83">
                Remove
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-node-id="12:84" data-name="Row/sizes">
          <div className="content-stretch flex items-center relative shrink-0 w-[120px]" data-node-id="12:85" data-name="RowLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:86">
              sizes
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:87" data-name="Specimen/size=sm">
            <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--derived\/outline-border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] h-[32px] items-center px-[10px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:88" data-name="Button/outline/sm">
              <div className="relative shrink-0 size-[16px]" data-node-id="12:89" data-name="lucide/upload">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUpload} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:93">
                Upload avatar
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:94">
              size=sm
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:95" data-name="Specimen/icon (ghost sm)">
            <div className="content-stretch flex items-center justify-center relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="12:96" data-name="Button/ghost/sm">
              <div className="relative shrink-0 size-[16px]" data-node-id="12:97" data-name="lucide/ellipsis">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:101">
              icon (ghost sm)
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:102" data-name="Specimen/pending (disabled + spinner)">
            <div className="bg-[var(--primary,#0f172b)] content-stretch flex gap-[8px] h-[36px] items-center opacity-50 px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:103" data-name="Button/default :disabled">
              <div className="relative shrink-0 size-[16px]" data-node-id="12:104" data-name="lucide/loader-circle">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideLoaderCircle} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="12:106">
                Save changes
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:107">
              pending (disabled + spinner)
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:108" data-name="Specimen/size=xs (toast action)">
            <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[24px] items-center px-[8px] relative rounded-[4px] shrink-0" data-node-id="12:109" data-name="Button/default/xs">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="12:110">
                Retry
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:111">
              size=xs (toast action)
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:112" data-name="Section/Input">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:113" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:114">
            Input
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:115">
            components/ui/input.tsx · h-9 rounded-md border-input bg-transparent shadow-xs · max-w-sm (384)
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full" data-node-id="12:116" data-name="States">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[384px]" data-node-id="12:117" data-name="Specimen/default">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="12:118" data-name="Input">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:119">
                Hani Buskila
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:120">
              default
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[384px]" data-node-id="12:121" data-name="Specimen/placeholder">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="12:122" data-name="Input">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:123">
                name@company.com
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:124">
              placeholder
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[384px]" data-node-id="12:125" data-name="Specimen/focus — border-ring + ring-ring/50">
            <div className="border-3 border-[var(--ring,#90a1b9)] border-solid content-stretch flex items-start relative rounded-[8px] shrink-0" data-node-id="12:126" data-name="Focus ring">
              <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--ring,#90a1b9)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] h-[36px] items-center px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="12:127" data-name="Input">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:128">
                  Hani Buskila
                </p>
                <div className="bg-[var(--foreground,#020618)] h-[18px] relative shrink-0 w-px" data-node-id="12:129" data-name="Caret" />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:130">
              focus — border-ring + ring-ring/50
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[384px]" data-node-id="12:131" data-name="Specimen/invalid — aria-invalid">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="12:132" data-name="Field">
              <div className="border-3 border-[var(--destructive,#e7000b)] border-solid content-stretch flex items-start relative rounded-[8px] shrink-0" data-node-id="12:133" data-name="Invalid ring">
                <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--destructive,#e7000b)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="12:134" data-name="Input">
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:135">
                    H
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--destructive,#e7000b)] whitespace-nowrap" data-node-id="12:136">
                Display name must be 2–60 characters.
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:137">
              invalid — aria-invalid
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[384px]" data-node-id="12:138" data-name="Specimen/disabled / read-only">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center opacity-50 px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="12:139" data-name="Input">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:140">
                hani@studioos.app
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:141">
              disabled / read-only
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:142" data-name="Section/Textarea">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:143" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:144">
            Textarea
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:145">
            components/ui/textarea.tsx (new, KAN-2) · min-h-16 · counter is muted-foreground → destructive when over
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full" data-node-id="12:146" data-name="States">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[384px]" data-node-id="12:147" data-name="Specimen/default (placeholder)">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="12:148" data-name="Field">
              <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start min-h-[64px] px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="12:149" data-name="Textarea">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="12:150">
                  Tell your team a little about yourself
                </p>
              </div>
              <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="12:151" data-name="Counter">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:152">
                  0/280
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:153">
              default (placeholder)
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[384px]" data-node-id="12:154" data-name="Specimen/with counter 36/280">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="12:155" data-name="Field">
              <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start min-h-[64px] px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="12:156" data-name="Textarea">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="12:157">
                  Designing calm tools for busy teams.
                </p>
              </div>
              <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="12:158" data-name="Counter">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:159">
                  36/280
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:160">
              with counter 36/280
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[384px]" data-node-id="12:161" data-name="Specimen/invalid — over limit">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="12:162" data-name="Field">
              <div className="border-3 border-[var(--destructive,#e7000b)] border-solid content-stretch flex items-start relative rounded-[8px] shrink-0 w-full" data-node-id="12:163" data-name="Invalid ring">
                <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--destructive,#e7000b)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] flex-col items-start min-h-[64px] min-w-px px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)]" data-node-id="12:164" data-name="Textarea">
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="12:165">
                    Product designer focused on design systems, accessibility and calm interfaces for busy teams. Previously at two agencies…
                  </p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular'] font-normal items-center justify-between leading-[16px] relative shrink-0 text-[12px] text-[color:var(--destructive,#e7000b)] w-full whitespace-nowrap" data-node-id="12:166" data-name="Meta">
                <p className="relative shrink-0" data-node-id="12:167">
                  Bio must be 280 characters or fewer.
                </p>
                <p className="relative shrink-0" data-node-id="12:168">
                  291/280
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:169">
              invalid — over limit
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:170" data-name="Section/Select">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:171" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:172">
            Select
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:173">
            components/ui/select.tsx · SelectTrigger h-9 · SelectContent bg-popover shadow-md
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full" data-node-id="12:174" data-name="States">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[384px]" data-node-id="12:175" data-name="Specimen/closed">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center justify-between px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="12:176" data-name="Select">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:177">
                Product Designer
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="12:178" data-name="lucide/chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronDown} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:180">
              closed
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[384px]" data-node-id="12:181" data-name="Specimen/placeholder">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center justify-between px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="12:182" data-name="Select">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:183">
                Select a role
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="12:184" data-name="lucide/chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronDown} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:186">
              placeholder
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[384px]" data-node-id="12:187" data-name="Specimen/open — SelectContent, item highlighted (bg-accent)">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[384px]" data-node-id="12:188" data-name="Select :open">
              <div className="border-3 border-[var(--ring,#90a1b9)] border-solid content-stretch flex items-start relative rounded-[8px] shrink-0" data-node-id="12:189" data-name="Focus ring">
                <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--ring,#90a1b9)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center justify-between px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="12:190" data-name="Select">
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:191">
                    Product Designer
                  </p>
                  <div className="relative shrink-0 size-[16px]" data-node-id="12:192" data-name="lucide/chevron-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronDown} />
                  </div>
                </div>
              </div>
              <div className="bg-[var(--popover,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex flex-col items-start p-[4px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="12:194" data-name="SelectContent">
                <div className="content-stretch flex items-center justify-between px-[8px] py-[6px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-full" data-node-id="12:195" data-name="SelectItem">
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--popover-foreground,#020618)] whitespace-nowrap" data-node-id="12:196">
                    Product Designer
                  </p>
                  <div className="relative shrink-0 size-[16px]" data-node-id="12:197" data-name="lucide/check">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                  </div>
                </div>
                <div className="bg-[var(--accent,#f1f5f9)] content-stretch flex items-center justify-between px-[8px] py-[6px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-full" data-node-id="12:199" data-name="SelectItem :highlighted">
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--accent-foreground,#0f172b)] whitespace-nowrap" data-node-id="12:200">
                    Design Lead
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-between px-[8px] py-[6px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-full" data-node-id="12:201" data-name="SelectItem">
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--popover-foreground,#020618)] whitespace-nowrap" data-node-id="12:202">
                    Engineer
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-between px-[8px] py-[6px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-full" data-node-id="12:203" data-name="SelectItem">
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--popover-foreground,#020618)] whitespace-nowrap" data-node-id="12:204">
                    Product Manager
                  </p>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:205">
              open — SelectContent, item highlighted (bg-accent)
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:206" data-name="Section/Switch">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:207" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:208">
            Switch
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:209">
            components/ui/switch.tsx (new, KAN-2) · 32×18.4 · checked bg-primary, unchecked bg-input
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[32px_48px] items-start relative shrink-0 w-full" data-node-id="12:210" data-name="States">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:211" data-name="Specimen/off">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:212" data-name="SwitchRow">
              <div className="h-[18.4px] relative shrink-0 w-[32px]" data-node-id="12:213" data-name="Switch/off">
                <div className="absolute inset-[-5.43%_-6.25%_-16.3%_-6.25%]">
                  <img alt="" className="block max-w-none size-full" src={imgSwitchOff} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:215">
                Email
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:216">
              off
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:217" data-name="Specimen/on">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:218" data-name="SwitchRow">
              <div className="h-[18.4px] relative shrink-0 w-[32px]" data-node-id="12:219" data-name="Switch/on">
                <div className="absolute inset-[-5.43%_-6.25%_-16.3%_-6.25%]">
                  <img alt="" className="block max-w-none size-full" src={imgSwitchOn} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:221">
                Email
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:222">
              on
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:223" data-name="Specimen/focus">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:224" data-name="SwitchRow">
              <div className="border-3 border-[var(--ring,#90a1b9)] border-solid content-stretch flex items-start relative rounded-[999px] shrink-0" data-node-id="12:225" data-name="Focus ring">
                <div className="h-[18.4px] relative shrink-0 w-[32px]" data-node-id="12:226" data-name="Switch/on :focus">
                  <div className="absolute inset-[-5.43%_-6.25%_-16.3%_-6.25%]">
                    <img alt="" className="block max-w-none size-full" src={imgSwitchOn} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:228">
                Email
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:229">
              focus
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:230" data-name="Specimen/disabled (off)">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:231" data-name="SwitchRow">
              <div className="h-[18.4px] relative shrink-0 w-[32px]" data-node-id="12:232" data-name="Switch/off :disabled">
                <div className="absolute inset-[-5.43%_-6.25%_-16.3%_-6.25%]">
                  <img alt="" className="block max-w-none size-full" src={imgSwitchOffDisabled} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:234">
                Email
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:235">
              disabled (off)
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:236" data-name="Specimen/disabled (on)">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:237" data-name="SwitchRow">
              <div className="h-[18.4px] relative shrink-0 w-[32px]" data-node-id="12:238" data-name="Switch/on :disabled">
                <div className="absolute inset-[-5.43%_-6.25%_-16.3%_-6.25%]">
                  <img alt="" className="block max-w-none size-full" src={imgSwitchOnDisabled} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:240">
                Email
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:241">
              disabled (on)
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:242" data-name="Section/RadioGroup">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:243" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:244">
            RadioGroup
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:245">
            components/ui/radio-group.tsx (new, KAN-2) · size-4 · indicator fill-primary
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[32px_48px] items-start relative shrink-0 w-full" data-node-id="12:246" data-name="States">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:247" data-name="Specimen/selected">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:248" data-name="Choice/System">
              <div className="relative shrink-0 size-[16px]" data-node-id="12:249" data-name="RadioGroupItem/checked">
                <div className="absolute inset-[-6.25%_-12.5%_-18.75%_-12.5%]">
                  <img alt="" className="block max-w-none size-full" src={imgRadioGroupItemChecked} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:251">
                System
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:252">
              selected
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:253" data-name="Specimen/unselected">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:254" data-name="Choice/Light">
              <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[999px] shrink-0 size-[16px]" data-node-id="12:255" data-name="RadioGroupItem/unchecked" />
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:256">
                Light
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:257">
              unselected
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:258" data-name="Specimen/focus">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:259" data-name="Choice/Dark">
              <div className="border-3 border-[var(--ring,#90a1b9)] border-solid content-stretch flex items-start relative rounded-[999px] shrink-0" data-node-id="12:260" data-name="Focus ring">
                <div className="relative shrink-0 size-[16px]" data-node-id="12:261" data-name="RadioGroupItem/checked :focus">
                  <div className="absolute inset-[-6.25%_-12.5%_-18.75%_-12.5%]">
                    <img alt="" className="block max-w-none size-full" src={imgRadioGroupItemCheckedFocus} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:263">
                Dark
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:264">
              focus
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:265" data-name="Specimen/disabled">
            <div className="content-stretch flex gap-[8px] items-center opacity-50 relative shrink-0" data-node-id="12:266" data-name="Choice/Compact">
              <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] opacity-50 relative rounded-[999px] shrink-0 size-[16px]" data-node-id="12:267" data-name="RadioGroupItem/unchecked :disabled" />
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:268">
                Compact
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:269">
              disabled
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:270" data-name="Specimen/group (vertical, gap 12)">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:271" data-name="RadioGroup">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:272" data-name="Choice/System">
                <div className="relative shrink-0 size-[16px]" data-node-id="12:273" data-name="RadioGroupItem/checked">
                  <div className="absolute inset-[-6.25%_-12.5%_-18.75%_-12.5%]">
                    <img alt="" className="block max-w-none size-full" src={imgRadioGroupItemChecked} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:275">
                  System
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:276" data-name="Choice/Light">
                <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[999px] shrink-0 size-[16px]" data-node-id="12:277" data-name="RadioGroupItem/unchecked" />
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:278">
                  Light
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:279" data-name="Choice/Dark">
                <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[999px] shrink-0 size-[16px]" data-node-id="12:280" data-name="RadioGroupItem/unchecked" />
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:281">
                  Dark
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:282">
              group (vertical, gap 12)
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:283" data-name="Section/Checkbox">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:284" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:285">
            Checkbox
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:286">
            components/ui/checkbox.tsx (new, KAN-2) · size-4 rounded-[4px] · checked bg-primary
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[32px_48px] items-start relative shrink-0 w-full" data-node-id="12:287" data-name="States">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:288" data-name="Specimen/unchecked">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:289" data-name="Choice/Mon">
              <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="12:290" data-name="Checkbox/unchecked" />
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:291">
                Mon
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:292">
              unchecked
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:293" data-name="Specimen/checked">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:294" data-name="Choice/Tue">
              <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-node-id="12:295" data-name="Checkbox/checked">
                <div className="relative shrink-0 size-[14px]" data-node-id="12:296" data-name="lucide/check">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck1} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:298">
                Tue
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:299">
              checked
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:300" data-name="Specimen/focus">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:301" data-name="Choice/Wed">
              <div className="border-3 border-[var(--ring,#90a1b9)] border-solid content-stretch flex items-start relative rounded-[4px] shrink-0" data-node-id="12:302" data-name="Focus ring">
                <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-node-id="12:303" data-name="Checkbox/checked :focus">
                  <div className="relative shrink-0 size-[14px]" data-node-id="12:304" data-name="lucide/check">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck1} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:306">
                Wed
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:307">
              focus
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:308" data-name="Specimen/disabled">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="12:309" data-name="Disabled">
              <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] opacity-50 relative rounded-[4px] shrink-0 size-[16px]" data-node-id="12:310" data-name="Checkbox/unchecked :disabled" />
              <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center opacity-50 relative rounded-[4px] shrink-0 size-[16px]" data-node-id="12:311" data-name="Checkbox/checked :disabled">
                <div className="relative shrink-0 size-[14px]" data-node-id="12:312" data-name="lucide/check">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:314">
              disabled
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:315" data-name="Specimen/invalid — aria-invalid">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="12:316" data-name="Field">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:317" data-name="Choice/Sat">
                <div className="border-3 border-[var(--destructive,#e7000b)] border-solid content-stretch flex items-start relative rounded-[4px] shrink-0" data-node-id="12:318" data-name="Invalid ring">
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--destructive,#e7000b)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="12:319" data-name="Checkbox/unchecked :invalid" />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:320">
                  Sat
                </p>
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--destructive,#e7000b)] whitespace-nowrap" data-node-id="12:321">
                Pick at least one day.
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:322">
              invalid — aria-invalid
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:323" data-name="Section/Label">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:324" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:325">
            Label
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:326">
            components/ui/label.tsx (new, KAN-2) · text-sm font-medium leading-none
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[32px_48px] items-start relative shrink-0 w-full" data-node-id="12:327" data-name="States">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 whitespace-nowrap" data-node-id="12:328" data-name="Specimen/default — text-sm font-medium">
            <p className="font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="12:329">
              Display name
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:330">
              default — text-sm font-medium
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 whitespace-nowrap" data-node-id="12:331" data-name="Specimen/with optional hint">
            <div className="content-stretch flex gap-[4px] items-center leading-[14px] relative shrink-0 text-[14px]" data-node-id="12:332" data-name="LabelRow">
              <p className="font-['Geist:Medium'] font-medium relative shrink-0 text-[color:var(--foreground,#020618)]" data-node-id="12:333">
                Bio
              </p>
              <p className="font-['Geist:Regular'] font-normal relative shrink-0 text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:334">
                (optional)
              </p>
            </div>
            <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:335">
              with optional hint
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:336" data-name="Specimen/with badge">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="12:337" data-name="LabelRow">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:338">
                Email
              </p>
              <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:339" data-name="Badge/secondary">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="12:340">
                  Verified
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:341">
              with badge
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 whitespace-nowrap" data-node-id="12:342" data-name="Specimen/disabled peer — opacity 50%">
            <p className="font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="12:343">
              Email
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:344">
              disabled peer — opacity 50%
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:345" data-name="Section/Badge">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:346" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:347">
            Badge
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:348">
            components/ui/badge.tsx · secondary
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[32px_48px] items-start relative shrink-0 w-full" data-node-id="12:349" data-name="States">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:350" data-name="Specimen/secondary — Invited">
            <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:351" data-name="Badge/secondary">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="12:352">
                Invited
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:353">
              secondary — Invited
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:354" data-name="Specimen/secondary — Verified">
            <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:355" data-name="Badge/secondary">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="12:356">
                Verified
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:357">
              secondary — Verified
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:358" data-name="Specimen/invite chip">
            <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:359" data-name="Badge/secondary">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="12:360">
                maya@acme.co
              </p>
              <div className="relative shrink-0 size-[12px]" data-node-id="12:361" data-name="lucide/x">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideX} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:364">
              invite chip
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:365" data-name="Specimen/invite chip invalid">
            <div className="bg-[var(--destructive,#e7000b)] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:366" data-name="Badge/destructive">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="12:367">
                dana@acme
              </p>
              <div className="relative shrink-0 size-[12px]" data-node-id="12:368" data-name="lucide/x">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideX1} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:371">
              invite chip invalid
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:372" data-name="Section/Avatar">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:373" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:374">
            Avatar
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:375">
            components/ui/avatar.tsx · AvatarImage + AvatarFallback bg-muted
          </p>
        </div>
        <div className="content-end flex flex-wrap gap-[32px_48px] items-end relative shrink-0 w-full" data-node-id="12:376" data-name="States">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:377" data-name="Specimen/image — lg 40">
            <div className="relative rounded-[999px] shrink-0 size-[40px]" data-node-id="12:378" data-name="Avatar/lg">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarLg} />
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:379">
              image — lg 40
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:380" data-name="Specimen/image — 32">
            <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="12:381" data-name="Avatar/default">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault} />
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:382">
              image — 32
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:383" data-name="Specimen/fallback bg-muted — 32">
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-node-id="12:384" data-name="Avatar/default">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:385">
                DC
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:386">
              fallback bg-muted — 32
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:387" data-name="Specimen/fallback — invited">
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-node-id="12:388" data-name="Avatar/default">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:389">
                NO
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:390">
              fallback — invited
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:391" data-name="Specimen/sm 24 (header)">
            <div className="relative rounded-[999px] shrink-0 size-[24px]" data-node-id="12:392" data-name="Avatar/sm">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarLg} />
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:393">
              sm 24 (header)
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:394" data-name="Specimen/fallback sm 24">
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[24px]" data-node-id="12:395" data-name="Avatar/sm">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:396">
                HB
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:397">
              fallback sm 24
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:398" data-name="Section/DropdownMenu">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:399" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:400">
            DropdownMenu
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:401">{`components/ui/dropdown-menu.tsx · item variant="destructive"`}</p>
        </div>
        <div className="content-start flex flex-wrap gap-[32px_48px] items-start relative shrink-0 w-full" data-node-id="12:402" data-name="States">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:403" data-name="Specimen/trigger :open (ghost, hover bg)">
            <div className="bg-[var(--accent,#f1f5f9)] content-stretch flex items-center justify-center relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="12:404" data-name="Button/ghost/sm :hover">
              <div className="relative shrink-0 size-[16px]" data-node-id="12:405" data-name="lucide/ellipsis">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis1} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:409">
              trigger :open (ghost, hover bg)
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:410" data-name="Specimen/DropdownMenuContent — destructive Remove">
            <div className="bg-[var(--popover,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex flex-col items-start p-[4px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[176px]" data-node-id="12:411" data-name="DropdownMenuContent">
              <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-full" data-node-id="12:412" data-name="DropdownMenuItem/destructive">
                <div className="relative shrink-0 size-[16px]" data-node-id="12:413" data-name="lucide/trash-2">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideTrash2} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--destructive,#e7000b)] whitespace-nowrap" data-node-id="12:419">
                  Remove
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:420">
              DropdownMenuContent — destructive Remove
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:421" data-name="Specimen/item highlighted (focus:bg-accent)">
            <div className="bg-[var(--popover,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex flex-col items-start p-[4px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[176px]" data-node-id="12:422" data-name="DropdownMenuContent :highlighted">
              <div className="bg-[var(--accent,#f1f5f9)] content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[var(--radius-sm,6px)] shrink-0 w-full" data-node-id="12:423" data-name="DropdownMenuItem/destructive">
                <div className="relative shrink-0 size-[16px]" data-node-id="12:424" data-name="lucide/trash-2">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideTrash2} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--destructive,#e7000b)] whitespace-nowrap" data-node-id="12:430">
                  Remove
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:431">
              item highlighted (focus:bg-accent)
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:432" data-name="Section/Dialog">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:433" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:434">
            Dialog
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:435">
            components/ui/dialog.tsx · DialogContent bg-background rounded-lg shadow-lg · overlay bg-black/50
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full" data-node-id="12:436" data-name="States">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:437" data-name="Specimen/confirm — remove member">
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex h-[260px] items-center justify-center overflow-clip relative rounded-[var(--radius-lg,10px)] shrink-0 w-[600px]" data-node-id="12:438" data-name="Dialog (with bg-black/50 overlay)">
              <div className="absolute bg-[rgba(0,0,0,0.5)] h-[260px] left-0 top-0 w-[600px]" data-node-id="12:439" data-name="DialogOverlay" />
              <div className="bg-[var(--background,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_10px_7.5px_rgba(0,0,0,0.1)] flex flex-col gap-[16px] items-start p-[24px] relative rounded-[var(--radius-lg,10px)] shrink-0 w-[512px]" data-node-id="12:440" data-name="DialogContent">
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="12:441" data-name="DialogHeader">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-node-id="12:442" data-name="Text">
                    <p className="font-['Geist:SemiBold'] font-semibold leading-[18px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] w-full" data-node-id="12:443">
                      Remove Noa Meir?
                    </p>
                    <p className="font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="12:444">
                      They lose access to this workspace right away. You can invite them again later.
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="12:445" data-name="lucide/x">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideX2} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="12:448" data-name="DialogFooter">
                  <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--derived\/outline-border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:449" data-name="Button/outline">
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:450">
                      Cancel
                    </p>
                  </div>
                  <div className="bg-[var(--destructive,#e7000b)] content-stretch flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:451" data-name="Button/destructive">
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="12:452">
                      Remove
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:453">
              confirm — remove member
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:454" data-name="Specimen/confirm — unsaved changes guard">
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex h-[260px] items-center justify-center overflow-clip relative rounded-[var(--radius-lg,10px)] shrink-0 w-[600px]" data-node-id="12:455" data-name="Dialog (with bg-black/50 overlay)">
              <div className="absolute bg-[rgba(0,0,0,0.5)] h-[260px] left-0 top-0 w-[600px]" data-node-id="12:456" data-name="DialogOverlay" />
              <div className="bg-[var(--background,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_10px_7.5px_rgba(0,0,0,0.1)] flex flex-col gap-[16px] items-start p-[24px] relative rounded-[var(--radius-lg,10px)] shrink-0 w-[512px]" data-node-id="12:457" data-name="DialogContent">
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="12:458" data-name="DialogHeader">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="12:459" data-name="Text">
                    <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[18px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] w-full" data-node-id="12:460">
                      You have unsaved changes. Discard?
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="12:461" data-name="lucide/x">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideX2} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="12:464" data-name="DialogFooter">
                  <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--derived\/outline-border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:465" data-name="Button/outline">
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="12:466">
                      Keep editing
                    </p>
                  </div>
                  <div className="bg-[var(--destructive,#e7000b)] content-stretch flex h-[36px] items-center px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:467" data-name="Button/destructive">
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="12:468">
                      Discard
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:469">
              confirm — unsaved changes guard
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:470" data-name="Section/Tooltip">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:471" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:472">
            Tooltip
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:473">
            components/ui/tooltip.tsx
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-y-[32px] items-start relative shrink-0 w-full" data-node-id="12:474" data-name="States">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:475" data-name="Specimen/TooltipContent — bg-foreground text-background">
            <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-node-id="12:476" data-name="Tooltip demo">
              <div className="bg-[var(--foreground,#020618)] content-stretch flex items-center px-[12px] py-[6px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="12:477" data-name="TooltipContent">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--background,white)] whitespace-nowrap" data-node-id="12:478">
                  More actions
                </p>
              </div>
              <div className="bg-[var(--accent,#f1f5f9)] content-stretch flex items-center justify-center relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="12:479" data-name="Button/ghost/sm :hover">
                <div className="relative shrink-0 size-[16px]" data-node-id="12:480" data-name="lucide/ellipsis">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:484">
              TooltipContent — bg-foreground text-background
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:485" data-name="Section/Toast">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:486" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:487">
            Toast
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:488">
            components/ui/sonner.tsx (Toaster, planned in spec) · bottom-right, 4 s
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full" data-node-id="12:489" data-name="States">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:490" data-name="Specimen/default">
            <div className="bg-[var(--popover,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.1)] flex items-center p-[16px] relative rounded-[var(--radius-lg,10px)] shrink-0 w-[356px]" data-node-id="12:491" data-name="Toast/default">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[19.5px] min-w-px relative text-[13px] text-[color:var(--popover-foreground,#020618)]" data-node-id="12:492">
                Invite added
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:493">
              default
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:494" data-name="Specimen/success">
            <div className="bg-[var(--popover,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.1)] flex gap-[6px] items-center p-[16px] relative rounded-[var(--radius-lg,10px)] shrink-0 w-[356px]" data-node-id="12:495" data-name="Toast/success">
              <div className="relative shrink-0 size-[16px]" data-node-id="12:496" data-name="lucide/circle-check">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCircleCheck} />
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[19.5px] min-w-px relative text-[13px] text-[color:var(--popover-foreground,#020618)]" data-node-id="12:499">
                Settings saved
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:500">
              success
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:501" data-name="Specimen/error">
            <div className="bg-[var(--popover,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.1)] flex gap-[6px] items-center p-[16px] relative rounded-[var(--radius-lg,10px)] shrink-0 w-[356px]" data-node-id="12:502" data-name="Toast/error">
              <div className="relative shrink-0 size-[16px]" data-node-id="12:503" data-name="lucide/circle-alert">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCircleAlert} />
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[19.5px] min-w-px relative text-[13px] text-[color:var(--popover-foreground,#020618)]" data-node-id="12:507">{`Couldn't save. Your browser storage may be full.`}</p>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:508">
              error
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:509" data-name="Specimen/error with action">
            <div className="bg-[var(--popover,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.1)] flex gap-[6px] items-center p-[16px] relative rounded-[var(--radius-lg,10px)] shrink-0 w-[356px]" data-node-id="12:510" data-name="Toast/action">
              <div className="relative shrink-0 size-[16px]" data-node-id="12:511" data-name="lucide/circle-alert">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCircleAlert} />
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[19.5px] min-w-px relative text-[13px] text-[color:var(--popover-foreground,#020618)]" data-node-id="12:515">{`Couldn't save. Your browser storage may be full.`}</p>
              <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[24px] items-center px-[8px] relative rounded-[4px] shrink-0" data-node-id="12:516" data-name="Toast action">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="12:517">
                  Retry
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:518">
              error with action
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:519" data-name="Section/Skeleton">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-node-id="12:520" data-name="SectionTitle">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)]" data-node-id="12:521">
            Skeleton
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="12:522">
            components/ui/skeleton.tsx · bg-accent rounded-md animate-pulse
          </p>
        </div>
        <div className="content-end flex flex-wrap gap-[32px_48px] items-end relative shrink-0 w-full" data-node-id="12:523" data-name="States">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:524" data-name="Specimen/avatar circle 40">
            <div className="bg-[var(--accent,#f1f5f9)] relative rounded-[999px] shrink-0 size-[40px]" data-node-id="12:525" data-name="Skeleton" />
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:526">
              avatar circle 40
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:527" data-name="Specimen/button 120×32">
            <div className="bg-[var(--accent,#f1f5f9)] h-[32px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[120px]" data-node-id="12:528" data-name="Skeleton" />
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:529">
              button 120×32
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:530" data-name="Specimen/label 96×14">
            <div className="bg-[var(--accent,#f1f5f9)] h-[14px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[96px]" data-node-id="12:531" data-name="Skeleton" />
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:532">
              label 96×14
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:533" data-name="Specimen/input 384×36">
            <div className="bg-[var(--accent,#f1f5f9)] h-[36px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="12:534" data-name="Skeleton" />
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:535">
              input 384×36
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="12:536" data-name="Specimen/member row">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[320px]" data-node-id="12:537" data-name="r">
              <div className="bg-[var(--accent,#f1f5f9)] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="12:538" data-name="Skeleton" />
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="12:539" data-name="t">
                <div className="bg-[var(--accent,#f1f5f9)] h-[14px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[140px]" data-node-id="12:540" data-name="Skeleton" />
                <div className="bg-[var(--accent,#f1f5f9)] h-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[180px]" data-node-id="12:541" data-name="Skeleton" />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="12:542">
              member row
            </p>
          </div>
        </div>
      </div>
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:543" data-name="Section/SettingsNav">
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
      <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start pb-[40px] relative shrink-0 w-full" data-node-id="12:603" data-name="Section/SaveBar">
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
    </div>
  );
}
```
