# workspace — Figma design spec

- **Frame:** Workspace / 1 default
- **Node id:** `7:13698`
- **Page:** Settings — desktop
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=7-13698
- **Reference image:** see INDEX.md
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — do not paste. Target codebase is Next.js + shadcn/ui with tokens in `app/globals.css`.
> Map `var(--token,#fallback)` values to the existing CSS variables / shadcn utility classes (e.g. `bg-[var(--sidebar,#f8fafc)]` -> `bg-sidebar`),
> replace absolute/fixed sizing with normal flex/grid layout, and use existing shadcn components (Button, Input, Select, Switch, Checkbox, RadioGroup, Avatar, Badge, DropdownMenu, Dialog, Tooltip, Sonner/Toast, Skeleton).
> `imgLucide*` constants are Lucide icons — use `lucide-react` (same icon names). Figma asset URLs expire ~7 days after export; local copies of the referenced assets are in `assets/` (see INDEX.md).
> Font in design: Geist.

```tsx
const imgAvatarDefault = "https://www.figma.com/api/mcp/asset/5fd25cf8-f6e3-4b00-8970-1a639023e0be.png";
const imgAvatarDefault1 = "https://www.figma.com/api/mcp/asset/32c51ab4-cc9c-4c54-ba28-3989c736868f.png";
const imgAvatarDefault2 = "https://www.figma.com/api/mcp/asset/d104b919-ccac-4cff-887c-4f6f564793e4.png";
const imgAvatarDefault3 = "https://www.figma.com/api/mcp/asset/93872497-6eb4-4de8-8167-72e56939c98e.png";
const imgAvatarDefault4 = "https://www.figma.com/api/mcp/asset/fd7ba3fa-be68-466c-9068-79bd11486b56.png";
const imgAvatarDefault5 = "https://www.figma.com/api/mcp/asset/647f7b72-5a7f-42c0-b2f0-a58d63e2f7bc.png";
const imgAvatarDefault6 = "https://www.figma.com/api/mcp/asset/73db967f-7317-49b0-8b82-e61ac79c4440.png";
const imgAvatarDefault7 = "https://www.figma.com/api/mcp/asset/0e586463-82cc-4047-a2e2-ee844f812d44.png";
const imgLucideChevronsUpDown = "https://www.figma.com/api/mcp/asset/21149c1d-164e-4383-ab43-df496d93b1c8.svg";
const imgLucideHome = "https://www.figma.com/api/mcp/asset/eb6c7019-59e8-47df-9bcf-d281ded47c98.svg";
const imgLucideFolderOpen = "https://www.figma.com/api/mcp/asset/ccb139a1-e15b-4221-a0f8-1015f34d34cb.svg";
const imgLucideListTodo = "https://www.figma.com/api/mcp/asset/a3862772-9aa7-4a2e-8f3c-a49b69d52920.svg";
const imgLucideChartPie = "https://www.figma.com/api/mcp/asset/f31fcf79-486b-457b-9ea1-b99d0f74dc60.svg";
const imgLucideUsers = "https://www.figma.com/api/mcp/asset/d5b69699-526a-4231-a7ea-9bb55cf89bc0.svg";
const imgLucideSettings = "https://www.figma.com/api/mcp/asset/1636babb-ba66-423c-b576-a3c5966af22f.svg";
const imgLucidePanelLeft = "https://www.figma.com/api/mcp/asset/ca3bce2c-b8d5-4984-8586-b1508691eef8.svg";
const imgLucideSearch = "https://www.figma.com/api/mcp/asset/d7356b29-6bec-4f5b-a07d-77a12ebffdd7.svg";
const imgLucideMoon = "https://www.figma.com/api/mcp/asset/37c8c116-d26a-4344-8867-c628492747fc.svg";
const imgLucideUser = "https://www.figma.com/api/mcp/asset/850eabf8-bad8-41f3-a1e1-bec0fa176f9e.svg";
const imgLucidePalette = "https://www.figma.com/api/mcp/asset/e22d928b-0a67-4a4b-af17-0691a7462641.svg";
const imgLucideBell = "https://www.figma.com/api/mcp/asset/95473642-4fdf-4382-859d-79fa338eff2b.svg";
const imgLucideBuilding2 = "https://www.figma.com/api/mcp/asset/97e4558f-2a5f-4b12-ab6e-606768288567.svg";
const imgLucideBuilding3 = "https://www.figma.com/api/mcp/asset/0b45087d-2099-457b-b319-4388d6fe7c07.svg";
const imgLucideUpload = "https://www.figma.com/api/mcp/asset/f6c48208-2250-4875-9cb5-7b56ec44e181.svg";
const imgLucideEllipsis = "https://www.figma.com/api/mcp/asset/94d5a29d-67fe-47bb-bd0d-598bb667e552.svg";

export default function Workspace1Default() {
  return (
    <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex items-start pr-[8px] py-[8px] relative size-full" data-node-id="7:13698" data-name="Workspace / 1 default">
      <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex flex-col items-start overflow-clip p-[8px] relative self-stretch shrink-0 w-[256px]" data-node-id="7:13699" data-name="AppSidebar (inset)">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:13700" data-name="SidebarHeader">
          <div className="content-stretch flex gap-[8px] h-[48px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13701" data-name="TeamSwitcher">
            <div className="bg-[var(--sidebar-primary,#0f172b)] content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:13702" data-name="Logo">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:13703">
                D
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13704" data-name="Text">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[17.5px] relative shrink-0 text-[14px]" data-node-id="7:13705">
                Studio OS
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px]" data-node-id="7:13706">
                AI Design Studio
              </p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-node-id="7:13707" data-name="lucide/chevrons-up-down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronsUpDown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:13710" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:13711" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13712">
              Platform
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13713" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13714" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13715" data-name="lucide/home">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideHome} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13718">
                Dashboard
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13719" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13720" data-name="lucide/folder-open">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideFolderOpen} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13722">
                Projects
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13723" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13724" data-name="lucide/list-todo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideListTodo} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13730">
                Tasks
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:13731" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:13732" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13733">
              Workspace
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13734" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13735" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13736" data-name="lucide/chart-pie">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChartPie} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13739">
                Analytics
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13740" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13741" data-name="lucide/users">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUsers} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:13746">
                Team
              </p>
            </div>
            <div className="bg-[var(--sidebar-accent,#f1f5f9)] content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13747" data-name="SidebarMenuButton :active">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13748" data-name="lucide/settings">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSettings} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-accent-foreground,#0f172b)] whitespace-nowrap" data-node-id="7:13751">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--background,white)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[var(--radius-xl,14px)] self-stretch shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" data-node-id="7:13752" data-name="SidebarInset">
        <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center overflow-clip pl-[12px] pr-[16px] relative shrink-0 w-full" data-node-id="7:13753" data-name="Header">
          <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 w-[28px]" data-node-id="7:13754" data-name="SidebarTrigger">
            <div className="relative shrink-0 size-[16px]" data-node-id="7:13755" data-name="lucide/panel-left">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePanelLeft} />
            </div>
          </div>
          <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[384px]" data-node-id="7:13758" data-name="Search">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[8px] h-[36px] items-center min-w-px overflow-clip pl-[10px] pr-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:13759" data-name="Input/search">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:13760" data-name="lucide/search">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSearch} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13763">
                Search...
              </p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="7:13764" data-name="Spacer" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[36px]" data-node-id="7:13765" data-name="ThemeToggle">
            <div className="relative shrink-0 size-[20px]" data-node-id="7:13766" data-name="lucide/moon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideMoon} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13768" data-name="User">
            <div className="[word-break:break-word] content-stretch flex flex-col items-end overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="7:13769" data-name="Name">
              <p className="font-['Geist:Medium'] font-medium leading-[17.5px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:13770">
                Hani Buskila
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:13771">
                Product Designer
              </p>
            </div>
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[24px]" data-node-id="7:13772" data-name="Avatar/sm">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13773">
                HB
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative shrink-0 w-full" data-node-id="7:13774" data-name="Page">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13775" data-name="PageHeader">
            <p className="font-['Geist:Bold'] font-bold leading-[36px] relative shrink-0 text-[30px] text-[color:var(--foreground,#020618)] tracking-[-0.75px] whitespace-nowrap" data-node-id="7:13776">
              Settings
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:13777">
              Manage your profile, appearance, notifications, and workspace.
            </p>
          </div>
          <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13778" data-name="Body">
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="7:13779" data-name="SettingsNav">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13780" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:13781" data-name="lucide/user">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUser} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13784">
                  Profile
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13785" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:13786" data-name="lucide/palette">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePalette} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13792">
                  Appearance
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13793" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:13794" data-name="lucide/bell">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBell} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13797">
                  Notifications
                </p>
              </div>
              <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:13798" data-name="SettingsNavItem :active">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:13799" data-name="lucide/building-2">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding2} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13807">
                  Workspace
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[672px]" data-node-id="7:13808" data-name="SettingsSection">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13809" data-name="SectionHeader">
                <p className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13810">
                  Workspace
                </p>
                <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:13811">
                  Manage your workspace details and who has access.
                </p>
              </div>
              <div className="bg-[var(--border,#e2e8f0)] h-px relative shrink-0 w-full" data-node-id="7:13812" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13813" data-name="Fields">
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13814" data-name="Field/Workspace name">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13815">
                    Workspace name
                  </p>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:13816" data-name="Input">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13817">
                      Studio OS
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13818" data-name="Field/Slug">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13819">
                    Slug
                  </p>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:13820" data-name="Input">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13821">
                      studio-os
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:13822">
                    Lowercase letters, numbers and hyphens.
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13823" data-name="Field/Logo">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13824">
                    Logo
                  </p>
                  <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="7:13825" data-name="LogoUpload">
                    <div className="bg-[var(--muted,#f1f5f9)] border border-[var(--border,#e2e8f0)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[64px]" data-node-id="7:13826" data-name="LogoPreview">
                      <div className="relative shrink-0 size-[24px]" data-node-id="7:13827" data-name="lucide/building-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding3} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:13835" data-name="Buttons">
                      <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--derived\/outline-border,#e2e8f0)] border-solid content-stretch flex gap-[6px] h-[32px] items-center overflow-clip px-[10px] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="7:13836" data-name="Button/outline/sm">
                        <div className="relative shrink-0 size-[16px]" data-node-id="7:13837" data-name="lucide/upload">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUpload} />
                        </div>
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13841">
                          Upload logo
                        </p>
                      </div>
                      <div className="content-stretch flex h-[32px] items-center opacity-50 overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:13842" data-name="Button/ghost/sm :disabled">
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13843">
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:13844">
                    PNG or SVG, up to 1 MB, square.
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13845" data-name="Field/Invite">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13846">
                    Invite people
                  </p>
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="7:13847" data-name="InviteRow">
                    <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] h-[36px] items-center min-w-px overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:13848" data-name="Input/invite (tags)">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13849">
                        name@company.com
                      </p>
                    </div>
                    <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:13850" data-name="Button/default">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:13851">
                        Invite
                      </p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:13852">
                    Separate emails with a comma, space or Enter. No email is sent yet.
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="7:13853" data-name="Members">
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip pb-[8px] relative shrink-0 w-full" data-node-id="7:13854" data-name="MembersHeader">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[16px] min-w-px relative text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:13855">
                      Members (8)
                    </p>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:13856" data-name="h">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13857">
                        Role
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:13858" data-name="h">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13859">
                        Last active
                      </p>
                    </div>
                    <div className="h-px relative shrink-0 w-[32px]" data-node-id="7:13860" data-name="h" />
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13861" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:13862" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:13863" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:13864" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:13865">
                          Hani Buskila
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:13866">
                          hani@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:13867" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:13868">
                        Owner (you)
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:13869" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13870">
                        —
                      </p>
                    </div>
                    <div className="relative shrink-0 size-[32px]" data-node-id="7:13871" data-name="Actions" />
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13872" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:13873" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:13874" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault1} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:13875" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:13876">
                          Tal Rosen
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:13877">
                          tal@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:13878" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13879">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:13880" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13881">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:13882" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:13883" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:13884" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:13885" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13889" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:13890" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:13891" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault2} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:13892" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:13893">
                          Noa Meir
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:13894">
                          noa@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:13895" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13896">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:13897" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13898">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:13899" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:13900" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:13901" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:13902" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13906" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:13907" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:13908" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault3} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:13909" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:13910">
                          Daniel Cohen
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:13911">
                          daniel@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:13912" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13913">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:13914" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13915">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:13916" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:13917" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:13918" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:13919" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13923" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:13924" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:13925" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault4} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:13926" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:13927">
                          Maya Levi
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:13928">
                          maya@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:13929" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13930">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:13931" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13932">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:13933" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:13934" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:13935" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:13936" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13940" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:13941" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:13942" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault5} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:13943" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:13944">
                          Jon Ashkenazi
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:13945">
                          jon@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:13946" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13947">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:13948" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13949">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:13950" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:13951" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:13952" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:13953" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13957" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:13958" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:13959" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault6} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:13960" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:13961">
                          Amit Katz
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:13962">
                          amit@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:13963" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13964">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:13965" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13966">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:13967" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:13968" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:13969" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:13970" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:13974" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:13975" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:13976" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault7} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:13977" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:13978">
                          Shira Barak
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:13979">
                          shira@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:13980" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13981">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:13982" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:13983">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:13984" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:13985" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:13986" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:13987" data-name="lucide/ellipsis">
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
    </div>
  );
}
```

## Asset constants -> local files

| Constant | Local file | Download |
|---|---|---|
| `imgAvatarDefault` | `assets/workspace/imgAvatarDefault.png` | ok |
| `imgAvatarDefault1` | `assets/workspace/imgAvatarDefault1.png` | ok |
| `imgAvatarDefault2` | `assets/workspace/imgAvatarDefault2.png` | ok |
| `imgAvatarDefault3` | `assets/workspace/imgAvatarDefault3.png` | ok |
| `imgAvatarDefault4` | `assets/workspace/imgAvatarDefault4.png` | ok |
| `imgAvatarDefault5` | `assets/workspace/imgAvatarDefault5.png` | ok |
| `imgAvatarDefault6` | `assets/workspace/imgAvatarDefault6.png` | ok |
| `imgAvatarDefault7` | `assets/workspace/imgAvatarDefault7.png` | ok |
| `imgLucideChevronsUpDown` | `assets/workspace/imgLucideChevronsUpDown.svg` | ok |
| `imgLucideHome` | `assets/workspace/imgLucideHome.svg` | ok |
| `imgLucideFolderOpen` | `assets/workspace/imgLucideFolderOpen.svg` | ok |
| `imgLucideListTodo` | `assets/workspace/imgLucideListTodo.svg` | ok |
| `imgLucideChartPie` | `assets/workspace/imgLucideChartPie.svg` | ok |
| `imgLucideUsers` | `assets/workspace/imgLucideUsers.svg` | ok |
| `imgLucideSettings` | `assets/workspace/imgLucideSettings.svg` | ok |
| `imgLucidePanelLeft` | `assets/workspace/imgLucidePanelLeft.svg` | ok |
| `imgLucideSearch` | `assets/workspace/imgLucideSearch.svg` | ok |
| `imgLucideMoon` | `assets/workspace/imgLucideMoon.svg` | ok |
| `imgLucideUser` | `assets/workspace/imgLucideUser.svg` | ok |
| `imgLucidePalette` | `assets/workspace/imgLucidePalette.svg` | ok |
| `imgLucideBell` | `assets/workspace/imgLucideBell.svg` | ok |
| `imgLucideBuilding2` | `assets/workspace/imgLucideBuilding2.svg` | ok |
| `imgLucideBuilding3` | `assets/workspace/imgLucideBuilding3.svg` | ok |
| `imgLucideUpload` | `assets/workspace/imgLucideUpload.svg` | ok |
| `imgLucideEllipsis` | `assets/workspace/imgLucideEllipsis.svg` | ok |
