# workspace-logo-error-dirty — Figma design spec

- **Frame:** Workspace / 8 logo error + dirty
- **Node id:** `7:15737`
- **Page:** Settings — desktop
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=7-15737
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — Next.js + shadcn/ui, tokens in `app/globals.css`. Map `var(--token,#fallback)` to existing tokens; `imgLucide*` = lucide-react icons.
> Figma asset URLs in this file expire ~7 days after export (assets were not downloaded for this file; the main-section specs have local copies in `assets/`).

```tsx
const imgAvatarDefault = "https://www.figma.com/api/mcp/asset/d01b23bf-0f79-4b42-bae8-1ce3639013b8.png";
const imgAvatarDefault1 = "https://www.figma.com/api/mcp/asset/daf88320-433c-4e0e-9cbf-8526e66c59d3.png";
const imgAvatarDefault2 = "https://www.figma.com/api/mcp/asset/973a047d-b5d3-4714-80e6-8d05b9ed648e.png";
const imgAvatarDefault3 = "https://www.figma.com/api/mcp/asset/78e83ee3-64ee-40f7-b468-6ae3f846f8d7.png";
const imgAvatarDefault4 = "https://www.figma.com/api/mcp/asset/b0b7741f-4762-4725-812e-94a1f9270c4d.png";
const imgAvatarDefault5 = "https://www.figma.com/api/mcp/asset/35ea114a-36f2-4c67-9377-c35ccdf8723d.png";
const imgAvatarDefault6 = "https://www.figma.com/api/mcp/asset/0f36a092-318d-4157-9f1c-1e225b4fd3d7.png";
const imgAvatarDefault7 = "https://www.figma.com/api/mcp/asset/e861888d-460d-4779-ad0b-563359c0cd1c.png";
const imgLucideChevronsUpDown = "https://www.figma.com/api/mcp/asset/48592c7a-b632-4baf-ba72-486ca676b2c7.svg";
const imgLucideHome = "https://www.figma.com/api/mcp/asset/443a0637-337d-46ae-b985-1177c0a92af6.svg";
const imgLucideFolderOpen = "https://www.figma.com/api/mcp/asset/e2da3281-b560-4696-8269-e3676c860104.svg";
const imgLucideListTodo = "https://www.figma.com/api/mcp/asset/f7b9774e-249e-4923-901b-1d37a93e56c7.svg";
const imgLucideChartPie = "https://www.figma.com/api/mcp/asset/c38b1a6b-7325-4a96-a0ca-aa1ddc4dd77c.svg";
const imgLucideUsers = "https://www.figma.com/api/mcp/asset/07bb18f7-649d-4d09-9c98-f2f4300fe424.svg";
const imgLucideSettings = "https://www.figma.com/api/mcp/asset/2ce8217e-4ad8-4990-bb74-74fc1ed2ffaa.svg";
const imgLucidePanelLeft = "https://www.figma.com/api/mcp/asset/cad3f5d4-2007-4f8c-85e9-9cdafa5089b3.svg";
const imgLucideSearch = "https://www.figma.com/api/mcp/asset/39949847-8f4f-4659-bcc1-c35e43d06918.svg";
const imgLucideMoon = "https://www.figma.com/api/mcp/asset/a07ff75f-c22d-40db-91cd-072623e22dd6.svg";
const imgLucideUser = "https://www.figma.com/api/mcp/asset/3cb9c6cf-575c-4cb3-a760-a4d104b60fdb.svg";
const imgLucidePalette = "https://www.figma.com/api/mcp/asset/815c99e1-697a-4d04-8b32-cb4b5fd7d192.svg";
const imgLucideBell = "https://www.figma.com/api/mcp/asset/6a56b788-e3b7-40bf-a905-bc9ecae17eb9.svg";
const imgLucideBuilding2 = "https://www.figma.com/api/mcp/asset/b00aff2a-fdd2-4dd1-b98f-949a898df3fa.svg";
const imgLucideBuilding3 = "https://www.figma.com/api/mcp/asset/bfba0eed-cc84-476d-a7e3-a114006fa1f3.svg";
const imgLucideUpload = "https://www.figma.com/api/mcp/asset/92253d50-f0f9-430a-af68-69a5fd6cb632.svg";
const imgLucideEllipsis = "https://www.figma.com/api/mcp/asset/3a1df4cc-ad86-4834-bb8f-453fec9885d0.svg";

export default function Workspace8LogoErrorDirty() {
  return (
    <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex items-start pr-[8px] py-[8px] relative size-full" data-node-id="7:15737" data-name="Workspace / 8 logo error + dirty">
      <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex flex-col items-start overflow-clip p-[8px] relative self-stretch shrink-0 w-[256px]" data-node-id="7:15738" data-name="AppSidebar (inset)">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:15739" data-name="SidebarHeader">
          <div className="content-stretch flex gap-[8px] h-[48px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15740" data-name="TeamSwitcher">
            <div className="bg-[var(--sidebar-primary,#0f172b)] content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15741" data-name="Logo">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:15742">
                D
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15743" data-name="Text">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[17.5px] relative shrink-0 text-[14px]" data-node-id="7:15744">
                Studio OS
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px]" data-node-id="7:15745">
                AI Design Studio
              </p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-node-id="7:15746" data-name="lucide/chevrons-up-down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronsUpDown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:15749" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:15750" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15751">
              Platform
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15752" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15753" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15754" data-name="lucide/home">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideHome} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15757">
                Dashboard
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15758" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15759" data-name="lucide/folder-open">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideFolderOpen} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15761">
                Projects
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15762" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15763" data-name="lucide/list-todo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideListTodo} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15769">
                Tasks
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:15770" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:15771" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15772">
              Workspace
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15773" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15774" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15775" data-name="lucide/chart-pie">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChartPie} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15778">
                Analytics
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15779" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15780" data-name="lucide/users">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUsers} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15785">
                Team
              </p>
            </div>
            <div className="bg-[var(--sidebar-accent,#f1f5f9)] content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15786" data-name="SidebarMenuButton :active">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15787" data-name="lucide/settings">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSettings} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-accent-foreground,#0f172b)] whitespace-nowrap" data-node-id="7:15790">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--background,white)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[var(--radius-xl,14px)] self-stretch shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" data-node-id="7:15791" data-name="SidebarInset">
        <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center overflow-clip pl-[12px] pr-[16px] relative shrink-0 w-full" data-node-id="7:15792" data-name="Header">
          <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 w-[28px]" data-node-id="7:15793" data-name="SidebarTrigger">
            <div className="relative shrink-0 size-[16px]" data-node-id="7:15794" data-name="lucide/panel-left">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePanelLeft} />
            </div>
          </div>
          <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[384px]" data-node-id="7:15797" data-name="Search">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[8px] h-[36px] items-center min-w-px overflow-clip pl-[10px] pr-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:15798" data-name="Input/search">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15799" data-name="lucide/search">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSearch} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15802">
                Search...
              </p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="7:15803" data-name="Spacer" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[36px]" data-node-id="7:15804" data-name="ThemeToggle">
            <div className="relative shrink-0 size-[20px]" data-node-id="7:15805" data-name="lucide/moon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideMoon} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:15807" data-name="User">
            <div className="[word-break:break-word] content-stretch flex flex-col items-end overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="7:15808" data-name="Name">
              <p className="font-['Geist:Medium'] font-medium leading-[17.5px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:15809">
                Hani Buskila
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:15810">
                Product Designer
              </p>
            </div>
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[24px]" data-node-id="7:15811" data-name="Avatar/sm">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15812">
                HB
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative shrink-0 w-full" data-node-id="7:15813" data-name="Page">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15814" data-name="PageHeader">
            <p className="font-['Geist:Bold'] font-bold leading-[36px] relative shrink-0 text-[30px] text-[color:var(--foreground,#020618)] tracking-[-0.75px] whitespace-nowrap" data-node-id="7:15815">
              Settings
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15816">
              Manage your profile, appearance, notifications, and workspace.
            </p>
          </div>
          <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15817" data-name="Body">
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="7:15818" data-name="SettingsNav">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15819" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:15820" data-name="lucide/user">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUser} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15823">
                  Profile
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15824" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:15825" data-name="lucide/palette">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePalette} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15831">
                  Appearance
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15832" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:15833" data-name="lucide/bell">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBell} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15836">
                  Notifications
                </p>
              </div>
              <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15837" data-name="SettingsNavItem :active">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:15838" data-name="lucide/building-2">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding2} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15846">
                  Workspace
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[672px]" data-node-id="7:15847" data-name="SettingsSection">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15848" data-name="SectionHeader">
                <p className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15849">
                  Workspace
                </p>
                <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15850">
                  Manage your workspace details and who has access.
                </p>
              </div>
              <div className="bg-[var(--border,#e2e8f0)] h-px relative shrink-0 w-full" data-node-id="7:15851" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15852" data-name="Fields">
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15853" data-name="Field/Workspace name">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15854">
                    Workspace name
                  </p>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:15855" data-name="Input">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15856">
                      Studio OS Team
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15857" data-name="Field/Slug">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15858">
                    Slug
                  </p>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:15859" data-name="Input">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15860">
                      studio-os-team
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15861">
                    Lowercase letters, numbers and hyphens.
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15862" data-name="Field/Logo">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15863">
                    Logo
                  </p>
                  <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="7:15864" data-name="LogoUpload">
                    <div className="bg-[var(--muted,#f1f5f9)] border border-[var(--border,#e2e8f0)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[64px]" data-node-id="7:15865" data-name="LogoPreview">
                      <div className="relative shrink-0 size-[24px]" data-node-id="7:15866" data-name="lucide/building-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding3} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:15874" data-name="Buttons">
                      <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--derived\/outline-border,#e2e8f0)] border-solid content-stretch flex gap-[6px] h-[32px] items-center overflow-clip px-[10px] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="7:15875" data-name="Button/outline/sm">
                        <div className="relative shrink-0 size-[16px]" data-node-id="7:15876" data-name="lucide/upload">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUpload} />
                        </div>
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15880">
                          Upload logo
                        </p>
                      </div>
                      <div className="content-stretch flex h-[32px] items-center opacity-50 overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:15881" data-name="Button/ghost/sm :disabled">
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15882">
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--destructive,#e7000b)] w-[min-content]" data-node-id="7:15883">
                    Logo must be square (1:1).
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15884" data-name="Field/Invite">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15885">
                    Invite people
                  </p>
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="7:15886" data-name="InviteRow">
                    <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] h-[36px] items-center min-w-px overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:15887" data-name="Input/invite (tags)">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15888">
                        name@company.com
                      </p>
                    </div>
                    <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:15889" data-name="Button/default">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:15890">
                        Invite
                      </p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15891">
                    Separate emails with a comma, space or Enter. No email is sent yet.
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15892" data-name="Members">
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip pb-[8px] relative shrink-0 w-full" data-node-id="7:15893" data-name="MembersHeader">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[16px] min-w-px relative text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:15894">
                      Members (8)
                    </p>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15895" data-name="h">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15896">
                        Role
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15897" data-name="h">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15898">
                        Last active
                      </p>
                    </div>
                    <div className="h-px relative shrink-0 w-[32px]" data-node-id="7:15899" data-name="h" />
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15900" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15901" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15902" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15903" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15904">
                          Hani Buskila
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15905">
                          hani@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15906" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15907">
                        Owner (you)
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15908" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15909">
                        —
                      </p>
                    </div>
                    <div className="relative shrink-0 size-[32px]" data-node-id="7:15910" data-name="Actions" />
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15911" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15912" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15913" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault1} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15914" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15915">
                          Tal Rosen
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15916">
                          tal@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15917" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15918">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15919" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15920">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:15921" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:15922" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15923" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:15924" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15928" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15929" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15930" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault2} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15931" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15932">
                          Noa Meir
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15933">
                          noa@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15934" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15935">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15936" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15937">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:15938" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:15939" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15940" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:15941" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15945" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15946" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15947" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault3} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15948" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15949">
                          Daniel Cohen
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15950">
                          daniel@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15951" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15952">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15953" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15954">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:15955" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:15956" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15957" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:15958" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15962" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15963" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15964" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault4} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15965" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15966">
                          Maya Levi
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15967">
                          maya@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15968" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15969">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15970" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15971">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:15972" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:15973" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15974" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:15975" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15979" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15980" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15981" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault5} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15982" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15983">
                          Jon Ashkenazi
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15984">
                          jon@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15985" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15986">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15987" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15988">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:15989" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:15990" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15991" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:15992" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15996" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15997" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15998" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault6} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15999" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:16000">
                          Amit Katz
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:16001">
                          amit@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:16002" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:16003">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:16004" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:16005">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:16006" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:16007" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:16008" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:16009" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:16013" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:16014" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:16015" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault7} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:16016" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:16017">
                          Shira Barak
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:16018">
                          shira@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:16019" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:16020">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:16021" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:16022">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:16023" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:16024" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:16025" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:16026" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--background,white)] border-[var(--border,#e2e8f0)] border-solid border-t content-stretch flex items-center justify-between overflow-clip pt-[16px] relative shrink-0 w-full" data-node-id="7:16030" data-name="SaveBar (sticky)">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:16031">
                  You have unsaved changes
                </p>
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:16032" data-name="Actions">
                  <div className="content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:16033" data-name="Button/ghost">
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:16034">
                      Discard
                    </p>
                  </div>
                  <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:16035" data-name="Button/default">
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:16036">
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
