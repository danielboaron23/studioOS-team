# workspace-remove-dialog — Figma design spec

- **Frame:** Workspace / 6 remove confirm dialog
- **Node id:** `7:15243`
- **Page:** Settings — desktop
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=7-15243
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — Next.js + shadcn/ui, tokens in `app/globals.css`. Map `var(--token,#fallback)` to existing tokens; `imgLucide*` = lucide-react icons.
> Figma asset URLs in this file expire ~7 days after export (assets were not downloaded for this file; the main-section specs have local copies in `assets/`).

```tsx
const imgAvatarDefault = "https://www.figma.com/api/mcp/asset/e7e62714-5d75-4eee-81c1-df4a66f05fbf.png";
const imgAvatarDefault1 = "https://www.figma.com/api/mcp/asset/6e9e9d78-58e1-48bb-98f6-ea2605c23d4f.png";
const imgAvatarDefault2 = "https://www.figma.com/api/mcp/asset/3b61b349-1fa7-4854-8381-bb5856d1af22.png";
const imgAvatarDefault3 = "https://www.figma.com/api/mcp/asset/642c575f-b01a-42e1-8533-f143e71596bd.png";
const imgAvatarDefault4 = "https://www.figma.com/api/mcp/asset/8f97e3f3-a3db-4479-aa2b-5faf15a10287.png";
const imgAvatarDefault5 = "https://www.figma.com/api/mcp/asset/f565a7f8-fbbf-453f-a525-306d06c82387.png";
const imgAvatarDefault6 = "https://www.figma.com/api/mcp/asset/1045044f-30af-4ae0-9950-a7af64fa7f1e.png";
const imgAvatarDefault7 = "https://www.figma.com/api/mcp/asset/c801be3b-dee2-4e6b-84a6-0eb050a9c667.png";
const imgLucideChevronsUpDown = "https://www.figma.com/api/mcp/asset/908088ac-e5c7-4a3e-b7af-aee5eab5c0b6.svg";
const imgLucideHome = "https://www.figma.com/api/mcp/asset/35e2e021-4fa4-45ce-a72a-a40fc8bfb7c5.svg";
const imgLucideFolderOpen = "https://www.figma.com/api/mcp/asset/5a076c73-82c3-46bb-bdaf-be0d0be12e3b.svg";
const imgLucideListTodo = "https://www.figma.com/api/mcp/asset/3bc5f9d4-9d0f-488f-827a-75afc486d2a5.svg";
const imgLucideChartPie = "https://www.figma.com/api/mcp/asset/5c9bde0d-c02c-4572-9120-093e79aae8c7.svg";
const imgLucideUsers = "https://www.figma.com/api/mcp/asset/63f34694-69aa-4997-8022-9ccbea96fc92.svg";
const imgLucideSettings = "https://www.figma.com/api/mcp/asset/35ccd8c9-06c6-4cf5-990b-c31f77f4c233.svg";
const imgLucidePanelLeft = "https://www.figma.com/api/mcp/asset/e2a2055c-7507-4bdd-9888-75096f187a03.svg";
const imgLucideSearch = "https://www.figma.com/api/mcp/asset/8eee3968-6352-4253-9262-a49962ba4bc0.svg";
const imgLucideMoon = "https://www.figma.com/api/mcp/asset/0b908f4a-8950-4527-bf1e-8d6995bb9480.svg";
const imgLucideUser = "https://www.figma.com/api/mcp/asset/09eb596b-44f2-4268-b6d8-2c8c44145ec8.svg";
const imgLucidePalette = "https://www.figma.com/api/mcp/asset/3fb0a796-5778-4d23-958a-f626715bde5c.svg";
const imgLucideBell = "https://www.figma.com/api/mcp/asset/a92df138-626c-4c7b-8363-544ee4aac7c7.svg";
const imgLucideBuilding2 = "https://www.figma.com/api/mcp/asset/7c346d57-52ed-4f21-b2b2-b2881d389736.svg";
const imgLucideBuilding3 = "https://www.figma.com/api/mcp/asset/354aa56b-de29-4abf-828f-4f17a92d887b.svg";
const imgLucideUpload = "https://www.figma.com/api/mcp/asset/f089ca7b-a5cf-48a7-9f0b-1cfd48fee7e0.svg";
const imgLucideEllipsis = "https://www.figma.com/api/mcp/asset/41951e0f-bab0-40ce-a4d0-d0a062694db7.svg";
const imgLucideEllipsis1 = "https://www.figma.com/api/mcp/asset/fe224509-5120-4c63-b7ba-955337bce25a.svg";
const imgLucideX = "https://www.figma.com/api/mcp/asset/a779230b-1a67-4ab5-b4d0-2e3cafcc4df7.svg";

export default function Workspace6RemoveConfirmDialog() {
  return (
    <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex items-start pr-[8px] py-[8px] relative size-full" data-node-id="7:15243" data-name="Workspace / 6 remove confirm dialog">
      <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex flex-col items-start overflow-clip p-[8px] relative self-stretch shrink-0 w-[256px]" data-node-id="7:15244" data-name="AppSidebar (inset)">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:15245" data-name="SidebarHeader">
          <div className="content-stretch flex gap-[8px] h-[48px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15246" data-name="TeamSwitcher">
            <div className="bg-[var(--sidebar-primary,#0f172b)] content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15247" data-name="Logo">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:15248">
                D
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15249" data-name="Text">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[17.5px] relative shrink-0 text-[14px]" data-node-id="7:15250">
                Studio OS
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px]" data-node-id="7:15251">
                AI Design Studio
              </p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-node-id="7:15252" data-name="lucide/chevrons-up-down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronsUpDown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:15255" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:15256" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15257">
              Platform
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15258" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15259" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15260" data-name="lucide/home">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideHome} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15263">
                Dashboard
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15264" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15265" data-name="lucide/folder-open">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideFolderOpen} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15267">
                Projects
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15268" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15269" data-name="lucide/list-todo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideListTodo} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15275">
                Tasks
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:15276" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:15277" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15278">
              Workspace
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15279" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15280" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15281" data-name="lucide/chart-pie">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChartPie} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15284">
                Analytics
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15285" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15286" data-name="lucide/users">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUsers} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:15291">
                Team
              </p>
            </div>
            <div className="bg-[var(--sidebar-accent,#f1f5f9)] content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15292" data-name="SidebarMenuButton :active">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15293" data-name="lucide/settings">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSettings} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-accent-foreground,#0f172b)] whitespace-nowrap" data-node-id="7:15296">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--background,white)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[var(--radius-xl,14px)] self-stretch shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" data-node-id="7:15297" data-name="SidebarInset">
        <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center overflow-clip pl-[12px] pr-[16px] relative shrink-0 w-full" data-node-id="7:15298" data-name="Header">
          <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 w-[28px]" data-node-id="7:15299" data-name="SidebarTrigger">
            <div className="relative shrink-0 size-[16px]" data-node-id="7:15300" data-name="lucide/panel-left">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePanelLeft} />
            </div>
          </div>
          <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[384px]" data-node-id="7:15303" data-name="Search">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[8px] h-[36px] items-center min-w-px overflow-clip pl-[10px] pr-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:15304" data-name="Input/search">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:15305" data-name="lucide/search">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSearch} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15308">
                Search...
              </p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="7:15309" data-name="Spacer" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[36px]" data-node-id="7:15310" data-name="ThemeToggle">
            <div className="relative shrink-0 size-[20px]" data-node-id="7:15311" data-name="lucide/moon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideMoon} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:15313" data-name="User">
            <div className="[word-break:break-word] content-stretch flex flex-col items-end overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="7:15314" data-name="Name">
              <p className="font-['Geist:Medium'] font-medium leading-[17.5px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:15315">
                Hani Buskila
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:15316">
                Product Designer
              </p>
            </div>
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[24px]" data-node-id="7:15317" data-name="Avatar/sm">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15318">
                HB
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative shrink-0 w-full" data-node-id="7:15319" data-name="Page">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15320" data-name="PageHeader">
            <p className="font-['Geist:Bold'] font-bold leading-[36px] relative shrink-0 text-[30px] text-[color:var(--foreground,#020618)] tracking-[-0.75px] whitespace-nowrap" data-node-id="7:15321">
              Settings
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15322">
              Manage your profile, appearance, notifications, and workspace.
            </p>
          </div>
          <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15323" data-name="Body">
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="7:15324" data-name="SettingsNav">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15325" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:15326" data-name="lucide/user">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUser} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15329">
                  Profile
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15330" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:15331" data-name="lucide/palette">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePalette} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15337">
                  Appearance
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15338" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:15339" data-name="lucide/bell">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBell} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15342">
                  Notifications
                </p>
              </div>
              <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:15343" data-name="SettingsNavItem :active">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:15344" data-name="lucide/building-2">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding2} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15352">
                  Workspace
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[672px]" data-node-id="7:15353" data-name="SettingsSection">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15354" data-name="SectionHeader">
                <p className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15355">
                  Workspace
                </p>
                <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15356">
                  Manage your workspace details and who has access.
                </p>
              </div>
              <div className="bg-[var(--border,#e2e8f0)] h-px relative shrink-0 w-full" data-node-id="7:15357" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15358" data-name="Fields">
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15359" data-name="Field/Workspace name">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15360">
                    Workspace name
                  </p>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:15361" data-name="Input">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15362">
                      Studio OS
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15363" data-name="Field/Slug">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15364">
                    Slug
                  </p>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:15365" data-name="Input">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15366">
                      studio-os
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15367">
                    Lowercase letters, numbers and hyphens.
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15368" data-name="Field/Logo">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15369">
                    Logo
                  </p>
                  <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="7:15370" data-name="LogoUpload">
                    <div className="bg-[var(--muted,#f1f5f9)] border border-[var(--border,#e2e8f0)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[64px]" data-node-id="7:15371" data-name="LogoPreview">
                      <div className="relative shrink-0 size-[24px]" data-node-id="7:15372" data-name="lucide/building-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding3} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:15380" data-name="Buttons">
                      <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--derived\/outline-border,#e2e8f0)] border-solid content-stretch flex gap-[6px] h-[32px] items-center overflow-clip px-[10px] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="7:15381" data-name="Button/outline/sm">
                        <div className="relative shrink-0 size-[16px]" data-node-id="7:15382" data-name="lucide/upload">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUpload} />
                        </div>
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15386">
                          Upload logo
                        </p>
                      </div>
                      <div className="content-stretch flex h-[32px] items-center opacity-50 overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:15387" data-name="Button/ghost/sm :disabled">
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15388">
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15389">
                    PNG or SVG, up to 1 MB, square.
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15390" data-name="Field/Invite">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15391">
                    Invite people
                  </p>
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="7:15392" data-name="InviteRow">
                    <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] h-[36px] items-center min-w-px overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:15393" data-name="Input/invite (tags)">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15394">
                        name@company.com
                      </p>
                    </div>
                    <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:15395" data-name="Button/default">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:15396">
                        Invite
                      </p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:15397">
                    Separate emails with a comma, space or Enter. No email is sent yet.
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15398" data-name="Members">
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip pb-[8px] relative shrink-0 w-full" data-node-id="7:15399" data-name="MembersHeader">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[16px] min-w-px relative text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:15400">
                      Members (8)
                    </p>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15401" data-name="h">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15402">
                        Role
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15403" data-name="h">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15404">
                        Last active
                      </p>
                    </div>
                    <div className="h-px relative shrink-0 w-[32px]" data-node-id="7:15405" data-name="h" />
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15406" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15407" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15408" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15409" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15410">
                          Hani Buskila
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15411">
                          hani@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15412" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15413">
                        Owner (you)
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15414" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15415">
                        —
                      </p>
                    </div>
                    <div className="relative shrink-0 size-[32px]" data-node-id="7:15416" data-name="Actions" />
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15417" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15418" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15419" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault1} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15420" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15421">
                          Tal Rosen
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15422">
                          tal@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15423" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15424">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15425" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15426">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:15427" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:15428" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15429" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:15430" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15434" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15435" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15436" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault2} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15437" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15438">
                          Noa Meir
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15439">
                          noa@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15440" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15441">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15442" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15443">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:15444" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:15445" data-name="Row actions :open">
                        <div className="bg-[var(--accent,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15446" data-name="Button/ghost/sm :hover">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:15447" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15451" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15452" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15453" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault3} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15454" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15455">
                          Daniel Cohen
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15456">
                          daniel@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15457" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15458">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15459" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15460">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:15461" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:15462" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15463" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:15464" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15468" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15469" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15470" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault4} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15471" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15472">
                          Maya Levi
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15473">
                          maya@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15474" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15475">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15476" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15477">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:15478" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:15479" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15480" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:15481" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15485" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15486" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15487" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault5} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15488" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15489">
                          Jon Ashkenazi
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15490">
                          jon@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15491" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15492">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15493" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15494">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:15495" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:15496" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15497" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:15498" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15502" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15503" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15504" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault6} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15505" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15506">
                          Amit Katz
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15507">
                          amit@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15508" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15509">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15510" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15511">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:15512" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:15513" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15514" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:15515" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:15519" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:15520" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:15521" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault7} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:15522" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15523">
                          Shira Barak
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15524">
                          shira@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:15525" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15526">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:15527" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:15528">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:15529" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:15530" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:15531" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:15532" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
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
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.5)] h-[1246px] left-0 top-0 w-[1440px]" data-node-id="7:15536" data-name="Overlay (overlay)" />
      <div className="absolute bg-[var(--background,white)] border border-[var(--border,#e2e8f0)] border-solid content-stretch flex flex-col gap-[16px] items-start left-[464px] overflow-clip p-[24px] rounded-[var(--radius-lg,10px)] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] top-[366px] w-[512px]" data-node-id="7:15537" data-name="Dialog (overlay)">
        <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:15538" data-name="DialogHeader">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="7:15539" data-name="Text">
            <p className="font-['Geist:SemiBold'] font-semibold leading-[18px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:15540">
              Remove Noa Meir?
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:15541">
              They lose access to this workspace right away. You can invite them again later.
            </p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-node-id="7:15542" data-name="lucide/x">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideX} />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center justify-end overflow-clip relative shrink-0 w-full" data-node-id="7:15545" data-name="DialogFooter">
          <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--derived\/outline-border,#e2e8f0)] border-solid content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="7:15546" data-name="Button/outline">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:15547">
              Cancel
            </p>
          </div>
          <div className="bg-[var(--destructive,#e7000b)] content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:15548" data-name="Button/destructive">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="7:15549">
              Remove
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```
