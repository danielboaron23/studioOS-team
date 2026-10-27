# appearance — Figma design spec

- **Frame:** Appearance / 1 default (System, Comfortable)
- **Node id:** `7:12847`
- **Page:** Settings — desktop
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=7-12847
- **Reference image:** see INDEX.md
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — do not paste. Target codebase is Next.js + shadcn/ui with tokens in `app/globals.css`.
> Map `var(--token,#fallback)` values to the existing CSS variables / shadcn utility classes (e.g. `bg-[var(--sidebar,#f8fafc)]` -> `bg-sidebar`),
> replace absolute/fixed sizing with normal flex/grid layout, and use existing shadcn components (Button, Input, Select, Switch, Checkbox, RadioGroup, Avatar, Badge, DropdownMenu, Dialog, Tooltip, Sonner/Toast, Skeleton).
> `imgLucide*` constants are Lucide icons — use `lucide-react` (same icon names). Figma asset URLs expire ~7 days after export; local copies of the referenced assets are in `assets/` (see INDEX.md).
> Font in design: Geist.

```tsx
const imgLucideChevronsUpDown = "https://www.figma.com/api/mcp/asset/6dbd70fe-b5d3-44bd-bfcc-25ee6dd91130.svg";
const imgLucideHome = "https://www.figma.com/api/mcp/asset/aabb59ba-4a03-4fa4-b04c-9a39c8411b3d.svg";
const imgLucideFolderOpen = "https://www.figma.com/api/mcp/asset/26866bc4-015b-44da-8930-2dc90dd40db3.svg";
const imgLucideListTodo = "https://www.figma.com/api/mcp/asset/4b1e5598-d546-46e8-89d2-a1616651b694.svg";
const imgLucideChartPie = "https://www.figma.com/api/mcp/asset/a7c1f217-ae77-4b9a-8ffc-9e96041a4d9f.svg";
const imgLucideUsers = "https://www.figma.com/api/mcp/asset/b11643d5-2959-4ad3-84e6-392bd19fa415.svg";
const imgLucideSettings = "https://www.figma.com/api/mcp/asset/1ddbccf5-d6f1-4408-80e6-7280cd59a090.svg";
const imgLucidePanelLeft = "https://www.figma.com/api/mcp/asset/21feb460-e2c7-4d9c-b2fc-66ba4a2d0844.svg";
const imgLucideSearch = "https://www.figma.com/api/mcp/asset/fa43b6e9-ab73-4c91-ab39-9370c2c501a9.svg";
const imgLucideMoon = "https://www.figma.com/api/mcp/asset/686beb42-9bc9-4370-adff-2a2e43c38869.svg";
const imgLucideUser = "https://www.figma.com/api/mcp/asset/e60d94c9-df65-4b19-a676-a50f1930e1b1.svg";
const imgLucidePalette = "https://www.figma.com/api/mcp/asset/0e0300a8-abfd-49dd-805f-d9aafc972d5a.svg";
const imgLucideBell = "https://www.figma.com/api/mcp/asset/a6fb5070-b3dc-49f5-8145-688d9064f308.svg";
const imgLucideBuilding2 = "https://www.figma.com/api/mcp/asset/23eb6cdd-93f3-4d28-894d-fdebfd4bb0fe.svg";
const imgRadioGroupItemChecked = "https://www.figma.com/api/mcp/asset/a61c37a3-730a-4819-84ca-67f3c7a93bbd.svg";
const imgSwitchOff = "https://www.figma.com/api/mcp/asset/a429b668-d592-4eee-97de-c3b60b9d7168.svg";

export default function Appearance1DefaultSystemComfortable() {
  return (
    <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex items-start pr-[8px] py-[8px] relative size-full" data-node-id="7:12847" data-name="Appearance / 1 default (System, Comfortable)">
      <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex flex-col items-start overflow-clip p-[8px] relative self-stretch shrink-0 w-[256px]" data-node-id="7:12848" data-name="AppSidebar (inset)">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:12849" data-name="SidebarHeader">
          <div className="content-stretch flex gap-[8px] h-[48px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:12850" data-name="TeamSwitcher">
            <div className="bg-[var(--sidebar-primary,#0f172b)] content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:12851" data-name="Logo">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:12852">
                D
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:12853" data-name="Text">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[17.5px] relative shrink-0 text-[14px]" data-node-id="7:12854">
                Studio OS
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px]" data-node-id="7:12855">
                AI Design Studio
              </p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-node-id="7:12856" data-name="lucide/chevrons-up-down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronsUpDown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:12859" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:12860" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:12861">
              Platform
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:12862" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:12863" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:12864" data-name="lucide/home">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideHome} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:12867">
                Dashboard
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:12868" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:12869" data-name="lucide/folder-open">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideFolderOpen} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:12871">
                Projects
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:12872" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:12873" data-name="lucide/list-todo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideListTodo} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:12879">
                Tasks
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:12880" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:12881" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:12882">
              Workspace
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:12883" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:12884" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:12885" data-name="lucide/chart-pie">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChartPie} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:12888">
                Analytics
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:12889" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:12890" data-name="lucide/users">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUsers} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:12895">
                Team
              </p>
            </div>
            <div className="bg-[var(--sidebar-accent,#f1f5f9)] content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:12896" data-name="SidebarMenuButton :active">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:12897" data-name="lucide/settings">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSettings} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-accent-foreground,#0f172b)] whitespace-nowrap" data-node-id="7:12900">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--background,white)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[var(--radius-xl,14px)] self-stretch shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" data-node-id="7:12901" data-name="SidebarInset">
        <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center overflow-clip pl-[12px] pr-[16px] relative shrink-0 w-full" data-node-id="7:12902" data-name="Header">
          <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 w-[28px]" data-node-id="7:12903" data-name="SidebarTrigger">
            <div className="relative shrink-0 size-[16px]" data-node-id="7:12904" data-name="lucide/panel-left">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePanelLeft} />
            </div>
          </div>
          <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[384px]" data-node-id="7:12907" data-name="Search">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[8px] h-[36px] items-center min-w-px overflow-clip pl-[10px] pr-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:12908" data-name="Input/search">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:12909" data-name="lucide/search">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSearch} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:12912">
                Search...
              </p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="7:12913" data-name="Spacer" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[36px]" data-node-id="7:12914" data-name="ThemeToggle">
            <div className="relative shrink-0 size-[20px]" data-node-id="7:12915" data-name="lucide/moon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideMoon} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:12917" data-name="User">
            <div className="[word-break:break-word] content-stretch flex flex-col items-end overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="7:12918" data-name="Name">
              <p className="font-['Geist:Medium'] font-medium leading-[17.5px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:12919">
                Hani Buskila
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:12920">
                Product Designer
              </p>
            </div>
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[24px]" data-node-id="7:12921" data-name="Avatar/sm">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:12922">
                HB
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative shrink-0 w-full" data-node-id="7:12923" data-name="Page">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:12924" data-name="PageHeader">
            <p className="font-['Geist:Bold'] font-bold leading-[36px] relative shrink-0 text-[30px] text-[color:var(--foreground,#020618)] tracking-[-0.75px] whitespace-nowrap" data-node-id="7:12925">
              Settings
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:12926">
              Manage your profile, appearance, notifications, and workspace.
            </p>
          </div>
          <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:12927" data-name="Body">
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="7:12928" data-name="SettingsNav">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:12929" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:12930" data-name="lucide/user">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUser} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12933">
                  Profile
                </p>
              </div>
              <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:12934" data-name="SettingsNavItem :active">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:12935" data-name="lucide/palette">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePalette} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12941">
                  Appearance
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:12942" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:12943" data-name="lucide/bell">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBell} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12946">
                  Notifications
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:12947" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:12948" data-name="lucide/building-2">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding2} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12956">
                  Workspace
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[672px]" data-node-id="7:12957" data-name="SettingsSection">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:12958" data-name="SectionHeader">
                <p className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12959">
                  Appearance
                </p>
                <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:12960">
                  Changes apply and save right away.
                </p>
              </div>
              <div className="bg-[var(--border,#e2e8f0)] h-px relative shrink-0 w-full" data-node-id="7:12961" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:12962" data-name="Fields">
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:12963" data-name="Field/Theme">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12964">
                    Theme
                  </p>
                  <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0" data-node-id="7:12965" data-name="RadioGroup">
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:12966" data-name="Choice/System">
                      <div className="relative shrink-0 size-[16px]" data-node-id="7:12967" data-name="RadioGroupItem/checked">
                        <div className="absolute inset-[-6.25%_-12.5%_-18.75%_-12.5%]">
                          <img alt="" className="block max-w-none size-full" src={imgRadioGroupItemChecked} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12969">
                        System
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:12970" data-name="Choice/Light">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[999px] shrink-0 size-[16px]" data-node-id="7:12971" data-name="RadioGroupItem/unchecked" />
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12972">
                        Light
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:12973" data-name="Choice/Dark">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[999px] shrink-0 size-[16px]" data-node-id="7:12974" data-name="RadioGroupItem/unchecked" />
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12975">
                        Dark
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:12976" data-name="Field/Density">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12977">
                    Density
                  </p>
                  <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0" data-node-id="7:12978" data-name="RadioGroup">
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:12979" data-name="Choice/Comfortable">
                      <div className="relative shrink-0 size-[16px]" data-node-id="7:12980" data-name="RadioGroupItem/checked">
                        <div className="absolute inset-[-6.25%_-12.5%_-18.75%_-12.5%]">
                          <img alt="" className="block max-w-none size-full" src={imgRadioGroupItemChecked} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12982">
                        Comfortable
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:12983" data-name="Choice/Compact">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[999px] shrink-0 size-[16px]" data-node-id="7:12984" data-name="RadioGroupItem/unchecked" />
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12985">
                        Compact
                      </p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:12986">
                    Compact tightens rows in tables and lists.
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="7:12987" data-name="Field/Reduced motion">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:12988" data-name="SwitchRow">
                    <div className="h-[18.4px] relative shrink-0 w-[32px]" data-node-id="7:12989" data-name="Switch/off">
                      <div className="absolute inset-[-5.43%_-6.25%_-16.3%_-6.25%]">
                        <img alt="" className="block max-w-none size-full" src={imgSwitchOff} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12991">
                      Reduced motion
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:12992" data-name="Preview">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:12993">
                    Preview
                  </p>
                  <div className="bg-[var(--card,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[var(--radius-xl,14px)] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-node-id="7:12994" data-name="Card/preview">
                    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="7:12995" data-name="CardHeader">
                      <p className="font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[16px] text-[color:var(--foreground,#020618)]" data-node-id="7:12996">
                        Project Atlas
                      </p>
                      <p className="font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:12997">
                        Theme: System · Density: Comfortable
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="7:12998" data-name="CardContent">
                      <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:12999" data-name="Button/default">
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:13000">
                          Open project
                        </p>
                      </div>
                    </div>
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
| `imgLucideChevronsUpDown` | `assets/appearance/imgLucideChevronsUpDown.svg` | ok |
| `imgLucideHome` | `assets/appearance/imgLucideHome.svg` | ok |
| `imgLucideFolderOpen` | `assets/appearance/imgLucideFolderOpen.svg` | ok |
| `imgLucideListTodo` | `assets/appearance/imgLucideListTodo.svg` | ok |
| `imgLucideChartPie` | `assets/appearance/imgLucideChartPie.svg` | ok |
| `imgLucideUsers` | `assets/appearance/imgLucideUsers.svg` | ok |
| `imgLucideSettings` | `assets/appearance/imgLucideSettings.svg` | ok |
| `imgLucidePanelLeft` | `assets/appearance/imgLucidePanelLeft.svg` | ok |
| `imgLucideSearch` | `assets/appearance/imgLucideSearch.svg` | ok |
| `imgLucideMoon` | `assets/appearance/imgLucideMoon.svg` | ok |
| `imgLucideUser` | `assets/appearance/imgLucideUser.svg` | ok |
| `imgLucidePalette` | `assets/appearance/imgLucidePalette.svg` | ok |
| `imgLucideBell` | `assets/appearance/imgLucideBell.svg` | ok |
| `imgLucideBuilding2` | `assets/appearance/imgLucideBuilding2.svg` | ok |
| `imgRadioGroupItemChecked` | `assets/appearance/imgRadioGroupItemChecked.svg` | ok |
| `imgSwitchOff` | `assets/appearance/imgSwitchOff.svg` | ok |
