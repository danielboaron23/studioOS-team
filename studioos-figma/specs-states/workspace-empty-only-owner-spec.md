# workspace-empty-only-owner — Figma design spec

- **Frame:** Workspace / 7 only owner — empty
- **Node id:** `7:15556`
- **Page:** Settings — desktop
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=7-15556
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — Next.js + shadcn/ui, tokens in `app/globals.css`. Map `var(--token,#fallback)` to existing tokens; `imgLucide*` = lucide-react icons.
> Figma asset URLs in this file expire ~7 days after export (assets were not downloaded for this file; the main-section specs have local copies in `assets/`).

```tsx
const imgAvatarDefault = "https://www.figma.com/api/mcp/asset/a0a65cab-5cb8-4647-8f1e-949c309c9bce.png";
const imgLucideChevronsUpDown = "https://www.figma.com/api/mcp/asset/51a39324-cd53-49ac-abbe-d0ab8a963e0e.svg";
const imgLucideHome = "https://www.figma.com/api/mcp/asset/cef3af4a-444c-435e-9f7f-c3248b30a183.svg";
const imgLucideFolderOpen = "https://www.figma.com/api/mcp/asset/1ea27236-561f-4c6a-85b3-7300e99fc3c8.svg";
const imgLucideListTodo = "https://www.figma.com/api/mcp/asset/123a68d4-6c71-4235-b0b0-a67a9eb79178.svg";
const imgLucideChartPie = "https://www.figma.com/api/mcp/asset/60de3ede-6ddd-4029-8eb1-32cbfafacebd.svg";
const imgLucideUsers = "https://www.figma.com/api/mcp/asset/10f539f3-b1ed-437a-8477-1bd172972e62.svg";
const imgLucideSettings = "https://www.figma.com/api/mcp/asset/b13e780e-e3b3-479b-9b15-25e9ea41d084.svg";
const imgLucidePanelLeft = "https://www.figma.com/api/mcp/asset/c5dad99c-6e40-4bee-9946-d641026ba495.svg";
const imgLucideSearch = "https://www.figma.com/api/mcp/asset/d5868c32-6259-4391-86d4-1af59f55f257.svg";
const imgLucideMoon = "https://www.figma.com/api/mcp/asset/ad524d86-522a-4da3-9e48-a49ffde16ae4.svg";
const imgLucideUser = "https://www.figma.com/api/mcp/asset/bd64151a-c65a-4de3-a93f-33d024542c56.svg";
const imgLucidePalette = "https://www.figma.com/api/mcp/asset/8c5cf10b-3992-4617-9275-7a01529a94bf.svg";
const imgLucideBell = "https://www.figma.com/api/mcp/asset/f8b2aa33-3dc2-4063-bf48-1916f7d6c0b6.svg";
const imgLucideBuilding2 = "https://www.figma.com/api/mcp/asset/0ea61f06-ad7c-4c55-971d-d889c99a1493.svg";
const imgLucideBuilding3 = "https://www.figma.com/api/mcp/asset/984f3c41-8f12-454b-930c-144ab52277bb.svg";
const imgLucideUpload = "https://www.figma.com/api/mcp/asset/5f283500-c2e6-49f7-8a51-78733aae8cbb.svg";

export default function Workspace7OnlyOwnerEmpty() {
  return (
    <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex items-start pr-[8px] py-[8px] relative size-full" data-node-id="7:15556" data-name="Workspace / 7 only owner — empty">
      <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex flex-col items-start overflow-clip p-[8px] relative self-stretch shrink-0 w-[256px]" data-node-id="7:15557" data-name="AppSidebar (inset)">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:15558" data-name="SidebarHeader">
          <div className="content-stretch flex gap-[8px] h-[48px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15559" data-name="TeamSwitcher">
            <div className="bg-[var(--sidebar-primary,#0f172b)] content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15560" data-name="Logo">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:15561">
                D
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15562" data-name="Text">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[17.5px] relative shrink-0 text-[14px]" data-node-id="7:15563">
                Studio OS
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px]" data-node-id="7:15564">
                AI Design Studio
              </p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-node-id="7:15565" data-name="lucide/chevrons-up-down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronsUpDown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:15568" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:15569" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15570">
              Platform
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15571" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15572" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15573" data-name="lucide/home">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideHome} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15576">
                Dashboard
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15577" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15578" data-name="lucide/folder-open">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideFolderOpen} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15580">
                Projects
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15581" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15582" data-name="lucide/list-todo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideListTodo} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15588">
                Tasks
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:15589" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:15590" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15591">
              Workspace
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15592" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15593" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15594" data-name="lucide/chart-pie">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChartPie} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15597">
                Analytics
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15598" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15599" data-name="lucide/users">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUsers} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15604">
                Team
              </p>
            </div>
            <div className="bg-[var(--sidebar-accent,#f1f5f9)] content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15605" data-name="SidebarMenuButton :active">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15606" data-name="lucide/settings">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSettings} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-accent-foreground,#0f172b)] whitespace-nowrap" data-node-id="7:15609">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--background,white)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[var(--radius-xl,14px)] self-stretch shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" data-node-id="7:15610" data-name="SidebarInset">
        <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center overflow-clip pl-[12px] pr-[16px] relative shrink-0 w-full" data-node-id="7:15611" data-name="Header">
          <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 w-[28px]" data-node-id="7:15612" data-name="SidebarTrigger">
            <div className="relative shrink-0 size-[16px]" data-node-id="7:15613" data-name="lucide/panel-left">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePanelLeft} />
            </div>
          </div>
          <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[384px]" data-node-id="7:15616" data-name="Search">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[8px] h-[36px] items-center min-w-px overflow-clip pl-[10px] pr-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:15617" data-name="Input/search">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15618" data-name="lucide/search">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSearch} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15621">
                Search...
              </p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="7:15622" data-name="Spacer" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[36px]" data-node-id="7:15623" data-name="ThemeToggle">
            <div className="relative shrink-0 size-[20px]" data-node-id="7:15624" data-name="lucide/moon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideMoon} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:15626" data-name="User">
            <div className="[word-break:break-word] content-stretch flex flex-col items-end overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="7:15627" data-name="Name">
              <p className="font-['Geist:Medium'] font-medium leading-[17.5px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:15628">
                Hani Buskila
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:15629">
                Product Designer
              </p>
            </div>
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[24px]" data-node-id="7:15630" data-name="Avatar/sm">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15631">
                HB
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative shrink-0 w-full" data-node-id="7:15632" data-name="Page">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15633" data-name="PageHeader">
            <p className="font-['Geist:Bold'] font-bold leading-[36px] relative shrink-0 text-[30px] text-[color:var(--foreground,#020618)] tracking-[-0.75px] whitespace-nowrap" data-node-id="7:15634">
              Settings
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15635">
              Manage your profile, appearance, notifications, and workspace.
            </p>
          </div>
          <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15636" data-name="Body">
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="7:15637" data-name="SettingsNav">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15638" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:15639" data-name="lucide/user">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUser} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15642">
                  Profile
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15643" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:15644" data-name="lucide/palette">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePalette} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15650">
                  Appearance
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15651" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:15652" data-name="lucide/bell">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBell} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15655">
                  Notifications
                </p>
              </div>
              <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15656" data-name="SettingsNavItem :active">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:15657" data-name="lucide/building-2">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding2} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15665">
                  Workspace
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[672px]" data-node-id="7:15666" data-name="SettingsSection">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15667" data-name="SectionHeader">
                <p className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15668">
                  Workspace
                </p>
                <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15669">
                  Manage your workspace details and who has access.
                </p>
              </div>
              <div className="bg-[var(--border,#e2e8f0)] h-px relative shrink-0 w-full" data-node-id="7:15670" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15671" data-name="Fields">
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15672" data-name="Field/Workspace name">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15673">
                    Workspace name
                  </p>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:15674" data-name="Input">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15675">
                      Studio OS
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15676" data-name="Field/Slug">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15677">
                    Slug
                  </p>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:15678" data-name="Input">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15679">
                      studio-os
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15680">
                    Lowercase letters, numbers and hyphens.
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15681" data-name="Field/Logo">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15682">
                    Logo
                  </p>
                  <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="7:15683" data-name="LogoUpload">
                    <div className="bg-[var(--muted,#f1f5f9)] border border-[var(--border,#e2e8f0)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[64px]" data-node-id="7:15684" data-name="LogoPreview">
                      <div className="relative shrink-0 size-[24px]" data-node-id="7:15685" data-name="lucide/building-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding3} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:15693" data-name="Buttons">
                      <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--derived\/outline-border,#e2e8f0)] border-solid content-stretch flex gap-[6px] h-[32px] items-center overflow-clip px-[10px] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="7:15694" data-name="Button/outline/sm">
                        <div className="relative shrink-0 size-[16px]" data-node-id="7:15695" data-name="lucide/upload">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUpload} />
                        </div>
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15699">
                          Upload logo
                        </p>
                      </div>
                      <div className="content-stretch flex h-[32px] items-center opacity-50 overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:15700" data-name="Button/ghost/sm :disabled">
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15701">
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15702">
                    PNG or SVG, up to 1 MB, square.
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15703" data-name="Field/Invite">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15704">
                    Invite people
                  </p>
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="7:15705" data-name="InviteRow">
                    <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] h-[36px] items-center min-w-px overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:15706" data-name="Input/invite (tags)">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15707">
                        name@company.com
                      </p>
                    </div>
                    <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:15708" data-name="Button/default">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:15709">
                        Invite
                      </p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15710">
                    Separate emails with a comma, space or Enter. No email is sent yet.
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15711" data-name="Members">
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip pb-[8px] relative shrink-0 w-full" data-node-id="7:15712" data-name="MembersHeader">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[16px] min-w-px relative text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:15713">
                      Members (1)
                    </p>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15714" data-name="h">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15715">
                        Role
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15716" data-name="h">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15717">
                        Last active
                      </p>
                    </div>
                    <div className="h-px relative shrink-0 w-[32px]" data-node-id="7:15718" data-name="h" />
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15719" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15720" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15721" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15722" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15723">
                          Hani Buskila
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15724">
                          hani@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15725" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15726">
                        Owner (you)
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15727" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15728">
                        —
                      </p>
                    </div>
                    <div className="relative shrink-0 size-[32px]" data-node-id="7:15729" data-name="Actions" />
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15730">
                    No one else here yet. Invite people above.
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
