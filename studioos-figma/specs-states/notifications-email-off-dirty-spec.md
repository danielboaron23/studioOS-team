# notifications-email-off-dirty — Figma design spec

- **Frame:** Notifications / 2 Email off (column dimmed), quiet hours on, dirty
- **Node id:** `7:13345`
- **Page:** Settings — desktop
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=7-13345
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — Next.js + shadcn/ui, tokens in `app/globals.css`. Map `var(--token,#fallback)` to existing tokens; `imgLucide*` = lucide-react icons.
> Figma asset URLs in this file expire ~7 days after export (assets were not downloaded for this file; the main-section specs have local copies in `assets/`).

```tsx
const imgLucideChevronsUpDown = "https://www.figma.com/api/mcp/asset/9e10bb06-9357-4e1e-a39d-cdfe8efd39fd.svg";
const imgLucideHome = "https://www.figma.com/api/mcp/asset/e2f03bbc-58bc-4d34-9605-7a3f9fd9a076.svg";
const imgLucideFolderOpen = "https://www.figma.com/api/mcp/asset/64a2ebfd-6e0d-46d1-8f0b-bdaa027581c1.svg";
const imgLucideListTodo = "https://www.figma.com/api/mcp/asset/8a663191-9261-426c-84db-b97ac927b378.svg";
const imgLucideChartPie = "https://www.figma.com/api/mcp/asset/3d0a4f90-3433-4305-b594-b36fd283e385.svg";
const imgLucideUsers = "https://www.figma.com/api/mcp/asset/87a33ef4-6bbf-423a-9624-f9f891d8d48c.svg";
const imgLucideSettings = "https://www.figma.com/api/mcp/asset/c0286835-1316-4f37-9887-e995477eefd1.svg";
const imgLucidePanelLeft = "https://www.figma.com/api/mcp/asset/27dc3423-123f-4898-aebb-7c64c5747e23.svg";
const imgLucideSearch = "https://www.figma.com/api/mcp/asset/1068a335-16f7-4a4e-8e78-90c0a02670f6.svg";
const imgLucideMoon = "https://www.figma.com/api/mcp/asset/359eaa5c-28fd-488e-a476-577aace50673.svg";
const imgLucideUser = "https://www.figma.com/api/mcp/asset/2832fbdc-c2c5-4310-b845-eba9af317e3e.svg";
const imgLucidePalette = "https://www.figma.com/api/mcp/asset/12219c34-718c-4a43-a058-c3900bc46285.svg";
const imgLucideBell = "https://www.figma.com/api/mcp/asset/1cad860d-73b1-433f-84bd-c80e6e745b36.svg";
const imgLucideBuilding2 = "https://www.figma.com/api/mcp/asset/de85d9af-c8b3-4816-b914-db110c3ba5c4.svg";
const imgSwitchOn = "https://www.figma.com/api/mcp/asset/aeeaa44f-7fd9-4ba3-9361-75ddaa801d43.svg";
const imgSwitchOffFocus = "https://www.figma.com/api/mcp/asset/75ce43c9-a7da-4287-9325-e21c5c62a9f8.svg";
const imgLucideCheck = "https://www.figma.com/api/mcp/asset/d91e2542-dc32-43d5-8c68-29fb6c7c6ad6.svg";
const imgLucideChevronDown = "https://www.figma.com/api/mcp/asset/54d81114-cb48-4321-b176-4d94f63080e6.svg";

export default function Notifications2EmailOffColumnDimmedQuietHoursOnDirty() {
  return (
    <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex items-start pr-[8px] py-[8px] relative size-full" data-node-id="7:13345" data-name="Notifications / 2 Email off (column dimmed), quiet hours on, dirty">
      <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex flex-col items-start overflow-clip p-[8px] relative self-stretch shrink-0 w-[256px]" data-node-id="7:13346" data-name="AppSidebar (inset)">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:13347" data-name="SidebarHeader">
          <div className="content-stretch flex gap-[8px] h-[48px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13348" data-name="TeamSwitcher">
            <div className="bg-[var(--sidebar-primary,#0f172b)] content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:13349" data-name="Logo">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:13350">
                D
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13351" data-name="Text">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[17.5px] relative shrink-0 text-[14px]" data-node-id="7:13352">
                Studio OS
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px]" data-node-id="7:13353">
                AI Design Studio
              </p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-node-id="7:13354" data-name="lucide/chevrons-up-down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronsUpDown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:13357" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:13358" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13359">
              Platform
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13360" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13361" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13362" data-name="lucide/home">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideHome} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13365">
                Dashboard
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13366" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13367" data-name="lucide/folder-open">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideFolderOpen} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13369">
                Projects
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13370" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13371" data-name="lucide/list-todo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideListTodo} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13377">
                Tasks
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:13378" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:13379" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13380">
              Workspace
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13381" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13382" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13383" data-name="lucide/chart-pie">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChartPie} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13386">
                Analytics
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13387" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13388" data-name="lucide/users">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUsers} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13393">
                Team
              </p>
            </div>
            <div className="bg-[var(--sidebar-accent,#f1f5f9)] content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13394" data-name="SidebarMenuButton :active">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13395" data-name="lucide/settings">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSettings} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-accent-foreground,#0f172b)] whitespace-nowrap" data-node-id="7:13398">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--background,white)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[var(--radius-xl,14px)] self-stretch shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" data-node-id="7:13399" data-name="SidebarInset">
        <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center overflow-clip pl-[12px] pr-[16px] relative shrink-0 w-full" data-node-id="7:13400" data-name="Header">
          <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 w-[28px]" data-node-id="7:13401" data-name="SidebarTrigger">
            <div className="relative shrink-0 size-[16px]" data-node-id="7:13402" data-name="lucide/panel-left">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePanelLeft} />
            </div>
          </div>
          <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[384px]" data-node-id="7:13405" data-name="Search">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[8px] h-[36px] items-center min-w-px overflow-clip pl-[10px] pr-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:13406" data-name="Input/search">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13407" data-name="lucide/search">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSearch} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13410">
                Search...
              </p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="7:13411" data-name="Spacer" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[36px]" data-node-id="7:13412" data-name="ThemeToggle">
            <div className="relative shrink-0 size-[20px]" data-node-id="7:13413" data-name="lucide/moon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideMoon} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13415" data-name="User">
            <div className="[word-break:break-word] content-stretch flex flex-col items-end overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="7:13416" data-name="Name">
              <p className="font-['Geist:Medium'] font-medium leading-[17.5px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:13417">
                Hani Buskila
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:13418">
                Product Designer
              </p>
            </div>
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[24px]" data-node-id="7:13419" data-name="Avatar/sm">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13420">
                HB
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative shrink-0 w-full" data-node-id="7:13421" data-name="Page">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13422" data-name="PageHeader">
            <p className="font-['Geist:Bold'] font-bold leading-[36px] relative shrink-0 text-[30px] text-[color:var(--foreground,#020618)] tracking-[-0.75px] whitespace-nowrap" data-node-id="7:13423">
              Settings
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:13424">
              Manage your profile, appearance, notifications, and workspace.
            </p>
          </div>
          <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13425" data-name="Body">
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="7:13426" data-name="SettingsNav">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13427" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:13428" data-name="lucide/user">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUser} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13431">
                  Profile
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13432" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:13433" data-name="lucide/palette">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePalette} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13439">
                  Appearance
                </p>
              </div>
              <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13440" data-name="SettingsNavItem :active">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:13441" data-name="lucide/bell">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBell} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13444">
                  Notifications
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13445" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:13446" data-name="lucide/building-2">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding2} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13454">
                  Workspace
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[672px]" data-node-id="7:13455" data-name="SettingsSection">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13456" data-name="SectionHeader">
                <p className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13457">
                  Notifications
                </p>
                <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:13458">
                  Choose where we reach you and about what.
                </p>
              </div>
              <div className="bg-[var(--border,#e2e8f0)] h-px relative shrink-0 w-full" data-node-id="7:13459" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13460" data-name="Fields">
                <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13461" data-name="Field/Channels">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13462">
                    Channels
                  </p>
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13463" data-name="SwitchRow">
                    <div className="h-[18.4px] relative shrink-0 w-[32px]" data-node-id="7:13464" data-name="Switch/on">
                      <div className="absolute inset-[-5.43%_-6.25%_-16.3%_-6.25%]">
                        <img alt="" className="block max-w-none size-full" src={imgSwitchOn} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13466">
                      In-app
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13467" data-name="SwitchRow">
                    <div className="border-3 border-[var(--ring,#90a1b9)] border-solid content-stretch flex items-start overflow-clip relative rounded-[999px] shrink-0" data-node-id="7:13468" data-name="Focus ring">
                      <div className="h-[18.4px] relative shrink-0 w-[32px]" data-node-id="7:13469" data-name="Switch/off :focus">
                        <div className="absolute inset-[-5.43%_-6.25%_-16.3%_-6.25%]">
                          <img alt="" className="block max-w-none size-full" src={imgSwitchOffFocus} />
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13471">
                      Email
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13472" data-name="CategoriesTable">
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip pb-[8px] relative shrink-0 w-full" data-node-id="7:13473" data-name="HeaderRow">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[16px] min-w-px relative text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:13474">
                      Category
                    </p>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13475" data-name="Th">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13476">
                        In-app
                      </p>
                    </div>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13477" data-name="Th">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13478">
                        Email
                      </p>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13479" data-name="Row/New comment">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[20px] min-w-px relative text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:13480">
                      New comment
                    </p>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13481" data-name="Cell">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13482" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13483" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13485" data-name="Cell">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] opacity-50 relative rounded-[4px] shrink-0 size-[16px]" data-node-id="7:13486" data-name="Checkbox/unchecked :disabled" />
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13487" data-name="Row/Mention">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[20px] min-w-px relative text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:13488">
                      Mention
                    </p>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13489" data-name="Cell">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13490" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13491" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13493" data-name="Cell">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] opacity-50 relative rounded-[4px] shrink-0 size-[16px]" data-node-id="7:13494" data-name="Checkbox/unchecked :disabled" />
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13495" data-name="Row/Project status change">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[20px] min-w-px relative text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:13496">
                      Project status change
                    </p>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13497" data-name="Cell">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13498" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13499" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13501" data-name="Cell">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] opacity-50 relative rounded-[4px] shrink-0 size-[16px]" data-node-id="7:13502" data-name="Checkbox/unchecked :disabled" />
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13503" data-name="Row/Weekly digest">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[20px] min-w-px relative text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:13504">
                      Weekly digest
                    </p>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13505" data-name="Cell">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13506" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13507" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13509" data-name="Cell">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] opacity-50 relative rounded-[4px] shrink-0 size-[16px]" data-node-id="7:13510" data-name="Checkbox/unchecked :disabled" />
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13511" data-name="Row/Product updates">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[20px] min-w-px relative text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:13512">
                      Product updates
                    </p>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13513" data-name="Cell">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13514" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13515" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-node-id="7:13517" data-name="Cell">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] opacity-50 relative rounded-[4px] shrink-0 size-[16px]" data-node-id="7:13518" data-name="Checkbox/unchecked :disabled" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13519" data-name="Field/Quiet hours">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13520" data-name="SwitchRow">
                    <div className="h-[18.4px] relative shrink-0 w-[32px]" data-node-id="7:13521" data-name="Switch/on">
                      <div className="absolute inset-[-5.43%_-6.25%_-16.3%_-6.25%]">
                        <img alt="" className="block max-w-none size-full" src={imgSwitchOn} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13523">
                      Quiet hours
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="7:13524" data-name="Times">
                    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="7:13525" data-name="Start">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13526">
                        Start
                      </p>
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center justify-between overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[128px]" data-node-id="7:13527" data-name="Select">
                        <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13528">
                          19:00
                        </p>
                        <div className="relative shrink-0 size-[16px]" data-node-id="7:13529" data-name="lucide/chevron-down">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronDown} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="7:13531" data-name="End">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13532">
                        End
                      </p>
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center justify-between overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[128px]" data-node-id="7:13533" data-name="Select">
                        <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13534">
                          08:00
                        </p>
                        <div className="relative shrink-0 size-[16px]" data-node-id="7:13535" data-name="lucide/chevron-down">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronDown} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13537">
                    Ends the next day
                  </p>
                  <div className="content-start flex flex-wrap gap-[12px_16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13538" data-name="Days">
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13539" data-name="Choice/Mon">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13540" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13541" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13543">
                        Mon
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13544" data-name="Choice/Tue">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13545" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13546" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13548">
                        Tue
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13549" data-name="Choice/Wed">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13550" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13551" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13553">
                        Wed
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13554" data-name="Choice/Thu">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13555" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13556" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13558">
                        Thu
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13559" data-name="Choice/Fri">
                      <div className="bg-[var(--primary,#0f172b)] border border-[var(--primary,#0f172b)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" data-node-id="7:13560" data-name="Checkbox/checked">
                        <div className="relative shrink-0 size-[14px]" data-node-id="7:13561" data-name="lucide/check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideCheck} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13563">
                        Fri
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13564" data-name="Choice/Sat">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="7:13565" data-name="Checkbox/unchecked" />
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13566">
                        Sat
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13567" data-name="Choice/Sun">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="7:13568" data-name="Checkbox/unchecked" />
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13569">
                        Sun
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--background,white)] border-[var(--border,#e2e8f0)] border-solid border-t content-stretch flex items-center justify-between overflow-clip pt-[16px] relative shrink-0 w-full" data-node-id="7:13570" data-name="SaveBar (sticky)">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13571">
                  You have unsaved changes
                </p>
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13572" data-name="Actions">
                  <div className="content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:13573" data-name="Button/ghost">
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13574">
                      Discard
                    </p>
                  </div>
                  <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:13575" data-name="Button/default">
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:13576">
                      Save changes
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
