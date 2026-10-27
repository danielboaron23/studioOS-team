# notifications — Figma design spec

- **Frame:** Notifications / 1 default
- **Node id:** `7:13162`
- **Page:** Settings — desktop
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=7-13162
- **Reference image:** see INDEX.md
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — do not paste. Target codebase is Next.js + shadcn/ui with tokens in `app/globals.css`.
> Map `var(--token,#fallback)` values to the existing CSS variables / shadcn utility classes (e.g. `bg-[var(--sidebar,#f8fafc)]` -> `bg-sidebar`),
> replace absolute/fixed sizing with normal flex/grid layout, and use existing shadcn components (Button, Input, Select, Switch, Checkbox, RadioGroup, Avatar, Badge, DropdownMenu, Dialog, Tooltip, Sonner/Toast, Skeleton).
> `imgLucide*` constants are Lucide icons — use `lucide-react` (same icon names). Figma asset URLs expire ~7 days after export; local copies of the referenced assets are in `assets/` (see INDEX.md).
> Font in design: Geist.

```tsx
const imgLucideChevronsUpDown = "https://www.figma.com/api/mcp/asset/4dbffba0-e69b-4e09-b2b4-a178262643c0.svg";
const imgLucideHome = "https://www.figma.com/api/mcp/asset/dfba4634-70ed-4342-a70a-bfbc07ef0a0e.svg";
const imgLucideFolderOpen = "https://www.figma.com/api/mcp/asset/32c49faf-b379-41cb-947b-e2f04acdbe87.svg";
const imgLucideListTodo = "https://www.figma.com/api/mcp/asset/916876bb-ff69-4827-9494-50bf74c46500.svg";
const imgLucideChartPie = "https://www.figma.com/api/mcp/asset/2f14967b-a7b0-4e7f-ac96-f7623ef7807a.svg";
const imgLucideUsers = "https://www.figma.com/api/mcp/asset/3773d043-0f3a-4738-a3ec-f2daf180076f.svg";
const imgLucideSettings = "https://www.figma.com/api/mcp/asset/5ff6b6a3-9afe-428d-a318-57f01ddbccc4.svg";
const imgLucidePanelLeft = "https://www.figma.com/api/mcp/asset/9337f823-c54a-4104-9546-d91aaa45efa5.svg";
const imgLucideSearch = "https://www.figma.com/api/mcp/asset/182c2c05-cb27-487b-ad66-c85684f04062.svg";
const imgLucideMoon = "https://www.figma.com/api/mcp/asset/d01988b5-4a18-4070-aa9b-4bdfc21884b9.svg";
const imgLucideUser = "https://www.figma.com/api/mcp/asset/8ffa076f-958d-453c-bb8e-1c1b3a973874.svg";
const imgLucidePalette = "https://www.figma.com/api/mcp/asset/12f0fc21-c111-4fec-85ef-d6af46e6780b.svg";
const imgLucideBell = "https://www.figma.com/api/mcp/asset/a11c8a1b-0064-459d-a00a-41dd1b7f3ac0.svg";
const imgLucideBuilding2 = "https://www.figma.com/api/mcp/asset/c78defb5-1dac-4261-8524-4b3bac6323d0.svg";
const imgSwitchOn = "https://www.figma.com/api/mcp/asset/a634127b-cef8-4c9a-a0a6-faf7d09bd48a.svg";
const imgLucideCheck = "https://www.figma.com/api/mcp/asset/b7bb31be-161e-4d92-89a5-1603527847ee.svg";
const imgSwitchOff = "https://www.figma.com/api/mcp/asset/bce5afff-867c-49d5-81c0-c7a9cd93034b.svg";

export default function Notifications1Default() {
  return (
    <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex items-start pr-[8px] py-[8px] relative size-full" data-node-id="7:13162" data-name="Notifications / 1 default">
      <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex flex-col items-start overflow-clip p-[8px] relative self-stretch shrink-0 w-[256px]" data-node-id="7:13163" data-name="AppSidebar (inset)">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:13164" data-name="SidebarHeader">
          <div className="content-stretch flex gap-[8px] h-[48px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13165" data-name="TeamSwitcher">
            <div className="bg-[var(--sidebar-primary,#0f172b)] content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:13166" data-name="Logo">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:13167">
                D
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13168" data-name="Text">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[17.5px] relative shrink-0 text-[14px]" data-node-id="7:13169">
                Studio OS
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px]" data-node-id="7:13170">
                AI Design Studio
              </p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-node-id="7:13171" data-name="lucide/chevrons-up-down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronsUpDown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:13174" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:13175" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13176">
              Platform
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13177" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13178" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13179" data-name="lucide/home">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideHome} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13182">
                Dashboard
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13183" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13184" data-name="lucide/folder-open">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideFolderOpen} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13186">
                Projects
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13187" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13188" data-name="lucide/list-todo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideListTodo} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13194">
                Tasks
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:13195" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:13196" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13197">
              Workspace
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13198" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13199" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13200" data-name="lucide/chart-pie">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChartPie} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13203">
                Analytics
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13204" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13205" data-name="lucide/users">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUsers} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13210">
                Team
              </p>
            </div>
            <div className="bg-[var(--sidebar-accent,#f1f5f9)] content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13211" data-name="SidebarMenuButton :active">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13212" data-name="lucide/settings">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSettings} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-accent-foreground,#0f172b)] whitespace-nowrap" data-node-id="7:13215">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--background,white)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[var(--radius-xl,14px)] self-stretch shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" data-node-id="7:13216" data-name="SidebarInset">
        <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center overflow-clip pl-[12px] pr-[16px] relative shrink-0 w-full" data-node-id="7:13217" data-name="Header">
          <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 w-[28px]" data-node-id="7:13218" data-name="SidebarTrigger">
            <div className="relative shrink-0 size-[16px]" data-node-id="7:13219" data-name="lucide/panel-left">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePanelLeft} />
            </div>
          </div>
          <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[384px]" data-node-id="7:13222" data-name="Search">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[8px] h-[36px] items-center min-w-px overflow-clip pl-[10px] pr-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:13223" data-name="Input/search">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13224" data-name="lucide/search">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSearch} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13227">
                Search...
              </p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="7:13228" data-name="Spacer" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[36px]" data-node-id="7:13229" data-name="ThemeToggle">
            <div className="relative shrink-0 size-[20px]" data-node-id="7:13230" data-name="lucide/moon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideMoon} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13232" data-name="User">
            <div className="[word-break:break-word] content-stretch flex flex-col items-end overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="7:13233" data-name="Name">
              <p className="font-['Geist:Medium'] font-medium leading-[17.5px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:13234">
                Hani Buskila
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:13235">
                Product Designer
              </p>
            </div>
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[24px]" data-node-id="7:13236" data-name="Avatar/sm">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13237">
                HB
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative shrink-0 w-full" data-node-id="7:13238" data-name="Page">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13239" data-name="PageHeader">
            <p className="font-['Geist:Bold'] font-bold leading-[36px] relative shrink-0 text-[30px] text-[color:var(--foreground,#020618)] tracking-[-0.75px] whitespace-nowrap" data-node-id="7:13240">
              Settings
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:13241">
              Manage your profile, appearance, notifications, and workspace.
            </p>
          </div>
          <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13242" data-name="Body">
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="7:13243" data-name="SettingsNav">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13244" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:13245" data-name="lucide/user">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUser} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13248">
                  Profile
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13249" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:13250" data-name="lucide/palette">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePalette} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13256">
                  Appearance
                </p>
              </div>
              <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13257" data-name="SettingsNavItem :active">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:13258" data-name="lucide/bell">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBell} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13261">
                  Notifications
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13262" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:13263" data-name="lucide/building-2">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding2} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13271">
                  Workspace
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[672px]" data-node-id="7:13272" data-name="SettingsSection">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13273" data-name="SectionHeader">
                <p className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13274">
                  Notifications
                </p>
                <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:13275">
                  Choose where we reach you and about what.
                </p>
              </div>
              <div className="bg-[var(--border,#e2e8f0)] h-px relative shrink-0 w-full" data-node-id="7:13276" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13277" data-name="Fields">
                <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13278" data-name="Field/Channels">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13279">
                    Channels
                  </p>
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13280" data-name="SwitchRow">
                    <div className="h-[18.4px] relative shrink-0 w-[32px]" data-node-id="7:13281" data-name="Switch/on">
                      <div className="absolute inset-[-5.43%_-6.25%_-16.3%_-6.25%]">
                        <img alt="" className="block max-w-none size-full" src={imgSwitchOn} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13283">
                      In-app
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13284" data-name="SwitchRow">
                    <div className="h-[18.4px] relative shrink-0 w-[32px]" data-node-id="7:13285" data-name="Switch/on">
                      <div className="absolute inset-[-5.43%_-6.25%_-16.3%_-6.25%]">
                        <img alt="" className="block max-w-none size-full" src={imgSwitchOn} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13287">
                      Email
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13288" data-name="CategoriesTable">
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip pb-[8px] relative shrink-0 w-full" data-node-id="7:13289" data-name="HeaderRow">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[16px] min-w-px relative text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:13290">
                      Category
                    </p>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13291" data-name="Th">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13292">
                        In-app
                      </p>
                    </div>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13293" data-name="Th">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13294">
                        Email
                      </p>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13295" data-name="Row/New comment">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[20px] min-w-px relative text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:13296">
                      New comment
                    </p>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13297" data-name="Cell">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13298" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13299" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13301" data-name="Cell">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="7:13302" data-name="Checkbox/unchecked" />
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13303" data-name="Row/Mention">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[20px] min-w-px relative text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:13304">
                      Mention
                    </p>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13305" data-name="Cell">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13306" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13307" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13309" data-name="Cell">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13310" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13311" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13313" data-name="Row/Project status change">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[20px] min-w-px relative text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:13314">
                      Project status change
                    </p>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13315" data-name="Cell">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13316" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13317" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13319" data-name="Cell">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="7:13320" data-name="Checkbox/unchecked" />
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13321" data-name="Row/Weekly digest">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[20px] min-w-px relative text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:13322">
                      Weekly digest
                    </p>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13323" data-name="Cell">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13324" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13325" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13327" data-name="Cell">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13328" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13329" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13331" data-name="Row/Product updates">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[20px] min-w-px relative text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:13332">
                      Product updates
                    </p>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13333" data-name="Cell">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13334" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13335" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13337" data-name="Cell">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="7:13338" data-name="Checkbox/unchecked" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13339" data-name="Field/Quiet hours">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13340" data-name="SwitchRow">
                    <div className="h-[18.4px] relative shrink-0 w-[32px]" data-node-id="7:13341" data-name="Switch/off">
                      <div className="absolute inset-[-5.43%_-6.25%_-16.3%_-6.25%]">
                        <img alt="" className="block max-w-none size-full" src={imgSwitchOff} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13343">
                      Quiet hours
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13344">
                    Pause notifications at set times.
                  </p>
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
| `imgLucideChevronsUpDown` | `assets/notifications/imgLucideChevronsUpDown.svg` | ok |
| `imgLucideHome` | `assets/notifications/imgLucideHome.svg` | ok |
| `imgLucideFolderOpen` | `assets/notifications/imgLucideFolderOpen.svg` | ok |
| `imgLucideListTodo` | `assets/notifications/imgLucideListTodo.svg` | ok |
| `imgLucideChartPie` | `assets/notifications/imgLucideChartPie.svg` | ok |
| `imgLucideUsers` | `assets/notifications/imgLucideUsers.svg` | ok |
| `imgLucideSettings` | `assets/notifications/imgLucideSettings.svg` | ok |
| `imgLucidePanelLeft` | `assets/notifications/imgLucidePanelLeft.svg` | ok |
| `imgLucideSearch` | `assets/notifications/imgLucideSearch.svg` | ok |
| `imgLucideMoon` | `assets/notifications/imgLucideMoon.svg` | ok |
| `imgLucideUser` | `assets/notifications/imgLucideUser.svg` | ok |
| `imgLucidePalette` | `assets/notifications/imgLucidePalette.svg` | ok |
| `imgLucideBell` | `assets/notifications/imgLucideBell.svg` | ok |
| `imgLucideBuilding2` | `assets/notifications/imgLucideBuilding2.svg` | ok |
| `imgSwitchOn` | `assets/notifications/imgSwitchOn.svg` | ok |
| `imgLucideCheck` | `assets/notifications/imgLucideCheck.svg` | ok |
| `imgSwitchOff` | `assets/notifications/imgSwitchOff.svg` | ok |
