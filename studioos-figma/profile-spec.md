# profile — Figma design spec

- **Frame:** Profile / 1 default (clean, nav hover on Appearance)
- **Node id:** `7:11390`
- **Page:** Settings — desktop
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=7-11390
- **Reference image:** see INDEX.md
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — do not paste. Target codebase is Next.js + shadcn/ui with tokens in `app/globals.css`.
> Map `var(--token,#fallback)` values to the existing CSS variables / shadcn utility classes (e.g. `bg-[var(--sidebar,#f8fafc)]` -> `bg-sidebar`),
> replace absolute/fixed sizing with normal flex/grid layout, and use existing shadcn components (Button, Input, Select, Switch, Checkbox, RadioGroup, Avatar, Badge, DropdownMenu, Dialog, Tooltip, Sonner/Toast, Skeleton).
> `imgLucide*` constants are Lucide icons — use `lucide-react` (same icon names). Figma asset URLs expire ~7 days after export; local copies of the referenced assets are in `assets/` (see INDEX.md).
> Font in design: Geist.

```tsx
const imgLucideChevronsUpDown = "https://www.figma.com/api/mcp/asset/ae305895-f1f4-4aca-abb8-af3ab7080149.svg";
const imgLucideHome = "https://www.figma.com/api/mcp/asset/bf41384e-4b54-4af5-aebd-2ab04d09f844.svg";
const imgLucideFolderOpen = "https://www.figma.com/api/mcp/asset/18b291a2-7bcb-4ea3-8a01-790048243f00.svg";
const imgLucideListTodo = "https://www.figma.com/api/mcp/asset/f7859471-36c7-4c9f-bcbd-37ad4e1e6315.svg";
const imgLucideChartPie = "https://www.figma.com/api/mcp/asset/6d368460-a20f-476e-b907-d5c2f1005056.svg";
const imgLucideUsers = "https://www.figma.com/api/mcp/asset/2c0f1105-75f3-431a-aa16-8c62d12ed40a.svg";
const imgLucideSettings = "https://www.figma.com/api/mcp/asset/9a587c3e-2bd9-40f1-80ba-64d8119bebc1.svg";
const imgLucidePanelLeft = "https://www.figma.com/api/mcp/asset/97f88fe3-08b6-4408-bced-6d908c1a0ec7.svg";
const imgLucideSearch = "https://www.figma.com/api/mcp/asset/cabe64b9-9976-4284-9678-49cbb8bd09cc.svg";
const imgLucideMoon = "https://www.figma.com/api/mcp/asset/74adf8a4-da78-4570-bca6-473c64672678.svg";
const imgLucideUser = "https://www.figma.com/api/mcp/asset/2abd3d68-16cc-4903-a264-51703a44a517.svg";
const imgLucidePalette = "https://www.figma.com/api/mcp/asset/eb00da8b-7503-4627-a4b4-94a812c13b95.svg";
const imgLucideBell = "https://www.figma.com/api/mcp/asset/13cce159-fa94-48dc-89e3-d1629fdfdf30.svg";
const imgLucideBuilding2 = "https://www.figma.com/api/mcp/asset/5870f30f-19bb-498c-adab-92c1b859ccd4.svg";
const imgLucideUpload = "https://www.figma.com/api/mcp/asset/ea7b8129-9141-4cac-99ee-8c5472051088.svg";
const imgLucideChevronDown = "https://www.figma.com/api/mcp/asset/ff681992-8a08-469e-ba96-58fa9f4652b1.svg";

export default function Profile1DefaultCleanNavHoverOnAppearance() {
  return (
    <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex items-start pr-[8px] py-[8px] relative size-full" data-node-id="7:11390" data-name="Profile / 1 default (clean, nav hover on Appearance)">
      <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex flex-col items-start overflow-clip p-[8px] relative self-stretch shrink-0 w-[256px]" data-node-id="7:11391" data-name="AppSidebar (inset)">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:11392" data-name="SidebarHeader">
          <div className="content-stretch flex gap-[8px] h-[48px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:11393" data-name="TeamSwitcher">
            <div className="bg-[var(--sidebar-primary,#0f172b)] content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:11394" data-name="Logo">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:11395">
                D
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:11396" data-name="Text">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[17.5px] relative shrink-0 text-[14px]" data-node-id="7:11397">
                Studio OS
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px]" data-node-id="7:11398">
                AI Design Studio
              </p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-node-id="7:11399" data-name="lucide/chevrons-up-down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronsUpDown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:11402" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:11403" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:11404">
              Platform
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:11405" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:11406" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:11407" data-name="lucide/home">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideHome} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:11410">
                Dashboard
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:11411" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:11412" data-name="lucide/folder-open">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideFolderOpen} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:11414">
                Projects
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:11415" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:11416" data-name="lucide/list-todo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideListTodo} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:11422">
                Tasks
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:11423" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:11424" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:11425">
              Workspace
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:11426" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:11427" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:11428" data-name="lucide/chart-pie">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChartPie} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:11431">
                Analytics
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:11432" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:11433" data-name="lucide/users">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUsers} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:11438">
                Team
              </p>
            </div>
            <div className="bg-[var(--sidebar-accent,#f1f5f9)] content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:11439" data-name="SidebarMenuButton :active">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:11440" data-name="lucide/settings">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSettings} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-accent-foreground,#0f172b)] whitespace-nowrap" data-node-id="7:11443">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--background,white)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[var(--radius-xl,14px)] self-stretch shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" data-node-id="7:11444" data-name="SidebarInset">
        <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center overflow-clip pl-[12px] pr-[16px] relative shrink-0 w-full" data-node-id="7:11445" data-name="Header">
          <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 w-[28px]" data-node-id="7:11446" data-name="SidebarTrigger">
            <div className="relative shrink-0 size-[16px]" data-node-id="7:11447" data-name="lucide/panel-left">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePanelLeft} />
            </div>
          </div>
          <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[384px]" data-node-id="7:11450" data-name="Search">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[8px] h-[36px] items-center min-w-px overflow-clip pl-[10px] pr-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:11451" data-name="Input/search">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:11452" data-name="lucide/search">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSearch} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:11455">
                Search...
              </p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="7:11456" data-name="Spacer" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[36px]" data-node-id="7:11457" data-name="ThemeToggle">
            <div className="relative shrink-0 size-[20px]" data-node-id="7:11458" data-name="lucide/moon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideMoon} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:11460" data-name="User">
            <div className="[word-break:break-word] content-stretch flex flex-col items-end overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="7:11461" data-name="Name">
              <p className="font-['Geist:Medium'] font-medium leading-[17.5px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:11462">
                Hani Buskila
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:11463">
                Product Designer
              </p>
            </div>
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[24px]" data-node-id="7:11464" data-name="Avatar/sm">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:11465">
                HB
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative shrink-0 w-full" data-node-id="7:11466" data-name="Page">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:11467" data-name="PageHeader">
            <p className="font-['Geist:Bold'] font-bold leading-[36px] relative shrink-0 text-[30px] text-[color:var(--foreground,#020618)] tracking-[-0.75px] whitespace-nowrap" data-node-id="7:11468">
              Settings
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:11469">
              Manage your profile, appearance, notifications, and workspace.
            </p>
          </div>
          <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:11470" data-name="Body">
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="7:11471" data-name="SettingsNav">
              <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:11472" data-name="SettingsNavItem :active">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:11473" data-name="lucide/user">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUser} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11476">
                  Profile
                </p>
              </div>
              <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:11477" data-name="SettingsNavItem :hover">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:11478" data-name="lucide/palette">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePalette} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11484">
                  Appearance
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:11485" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:11486" data-name="lucide/bell">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBell} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11489">
                  Notifications
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:11490" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:11491" data-name="lucide/building-2">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding2} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11499">
                  Workspace
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[672px]" data-node-id="7:11500" data-name="SettingsSection">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:11501" data-name="SectionHeader">
                <p className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11502">
                  Profile
                </p>
                <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:11503">
                  This is how teammates see you in comments and on the Team page.
                </p>
              </div>
              <div className="bg-[var(--border,#e2e8f0)] h-px relative shrink-0 w-full" data-node-id="7:11504" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:11505" data-name="Fields">
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:11506" data-name="Field/Avatar">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11507">
                    Avatar
                  </p>
                  <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="7:11508" data-name="AvatarUpload">
                    <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[40px]" data-node-id="7:11509" data-name="Avatar/lg">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:11510">
                        HB
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:11511" data-name="Buttons">
                      <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--derived\/outline-border,#e2e8f0)] border-solid content-stretch flex gap-[6px] h-[32px] items-center overflow-clip px-[10px] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="7:11512" data-name="Button/outline/sm">
                        <div className="relative shrink-0 size-[16px]" data-node-id="7:11513" data-name="lucide/upload">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUpload} />
                        </div>
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11517">
                          Upload avatar
                        </p>
                      </div>
                      <div className="content-stretch flex h-[32px] items-center overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:11518" data-name="Button/ghost/sm">
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11519">
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:11520">
                    PNG, JPG or WebP, up to 2 MB.
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:11521" data-name="Field/Display name">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11522">
                    Display name
                  </p>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:11523" data-name="Input">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11524">
                      Hani Buskila
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:11525" data-name="Field/Role">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11526">
                    Role
                  </p>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center justify-between overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:11527" data-name="Select">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11528">
                      Product Designer
                    </p>
                    <div className="relative shrink-0 size-[16px]" data-node-id="7:11529" data-name="lucide/chevron-down">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronDown} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:11531" data-name="Field/Email">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:11532" data-name="LabelRow">
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11533">
                      Email
                    </p>
                    <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:11534" data-name="Badge/secondary">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="7:11535">
                        Verified
                      </p>
                    </div>
                  </div>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:11536" data-name="Input">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:11537">
                      hani@studioos.app
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:11538">
                    Ask your workspace owner to change your email.
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:11539" data-name="Field/Bio">
                  <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[14px] overflow-clip relative shrink-0 text-[14px] whitespace-nowrap" data-node-id="7:11540" data-name="LabelRow">
                    <p className="font-['Geist:Medium'] font-medium relative shrink-0 text-[color:var(--foreground,#020618)]" data-node-id="7:11541">
                      Bio
                    </p>
                    <p className="font-['Geist:Regular'] font-normal relative shrink-0 text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:11542">
                      (optional)
                    </p>
                  </div>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start min-h-[64px] overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:11543" data-name="Textarea">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:11544">
                      Tell your team a little about yourself
                    </p>
                  </div>
                  <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 w-full" data-node-id="7:11545" data-name="Counter">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:11546">
                      0/280
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Asset constants -> local files

| Constant | Local file | Download |
|---|---|---|
| `imgLucideChevronsUpDown` | `assets/profile/imgLucideChevronsUpDown.svg` | ok |
| `imgLucideHome` | `assets/profile/imgLucideHome.svg` | ok |
| `imgLucideFolderOpen` | `assets/profile/imgLucideFolderOpen.svg` | ok |
| `imgLucideListTodo` | `assets/profile/imgLucideListTodo.svg` | ok |
| `imgLucideChartPie` | `assets/profile/imgLucideChartPie.svg` | ok |
| `imgLucideUsers` | `assets/profile/imgLucideUsers.svg` | ok |
| `imgLucideSettings` | `assets/profile/imgLucideSettings.svg` | ok |
| `imgLucidePanelLeft` | `assets/profile/imgLucidePanelLeft.svg` | ok |
| `imgLucideSearch` | `assets/profile/imgLucideSearch.svg` | ok |
| `imgLucideMoon` | `assets/profile/imgLucideMoon.svg` | ok |
| `imgLucideUser` | `assets/profile/imgLucideUser.svg` | ok |
| `imgLucidePalette` | `assets/profile/imgLucidePalette.svg` | ok |
| `imgLucideBell` | `assets/profile/imgLucideBell.svg` | ok |
| `imgLucideBuilding2` | `assets/profile/imgLucideBuilding2.svg` | ok |
| `imgLucideUpload` | `assets/profile/imgLucideUpload.svg` | ok |
| `imgLucideChevronDown` | `assets/profile/imgLucideChevronDown.svg` | ok |
