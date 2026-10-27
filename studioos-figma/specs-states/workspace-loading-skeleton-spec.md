# workspace-loading-skeleton — Figma design spec

- **Frame:** Workspace / 9 loading — skeleton
- **Node id:** `7:16043`
- **Page:** Settings — desktop
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=7-16043
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — Next.js + shadcn/ui, tokens in `app/globals.css`. Map `var(--token,#fallback)` to existing tokens; `imgLucide*` = lucide-react icons.
> Figma asset URLs in this file expire ~7 days after export (assets were not downloaded for this file; the main-section specs have local copies in `assets/`).

```tsx
const imgLucideChevronsUpDown = "https://www.figma.com/api/mcp/asset/8a44ae5a-f4fb-4bec-8151-f1e917846956.svg";
const imgLucideHome = "https://www.figma.com/api/mcp/asset/e271a0c8-083f-44c8-bf96-e74e9426e803.svg";
const imgLucideFolderOpen = "https://www.figma.com/api/mcp/asset/5369bd80-1b06-4780-9751-9e331d887f89.svg";
const imgLucideListTodo = "https://www.figma.com/api/mcp/asset/39197821-8070-4e15-a3b1-47d4f395a5cd.svg";
const imgLucideChartPie = "https://www.figma.com/api/mcp/asset/962cb206-d9c3-4b7a-a4ee-5737a19e14c1.svg";
const imgLucideUsers = "https://www.figma.com/api/mcp/asset/68d37b71-4027-4cd7-b7a0-3af299204cd3.svg";
const imgLucideSettings = "https://www.figma.com/api/mcp/asset/76e87480-c4b0-4b2d-9b7e-f4161f584bc5.svg";
const imgLucidePanelLeft = "https://www.figma.com/api/mcp/asset/23360c2e-aeca-434f-9d19-a47bde14cb9a.svg";
const imgLucideSearch = "https://www.figma.com/api/mcp/asset/1b88ae2f-1e4a-4317-8764-a0a216800d7d.svg";
const imgLucideMoon = "https://www.figma.com/api/mcp/asset/b1cd0284-2e4c-4690-bcee-6dfab841f8df.svg";
const imgLucideUser = "https://www.figma.com/api/mcp/asset/c5446762-9a22-4c60-bfdf-8e810c3afa62.svg";
const imgLucidePalette = "https://www.figma.com/api/mcp/asset/9e0d9b0f-1895-4586-aaad-4ca5644e6205.svg";
const imgLucideBell = "https://www.figma.com/api/mcp/asset/0deb888d-b7a6-460a-9fe8-fcc38d34dbde.svg";
const imgLucideBuilding2 = "https://www.figma.com/api/mcp/asset/6f9743cd-ed6f-4f39-b542-f477e0c43e50.svg";

export default function Workspace9LoadingSkeleton() {
  return (
    <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex items-start pr-[8px] py-[8px] relative size-full" data-node-id="7:16043" data-name="Workspace / 9 loading — skeleton">
      <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex flex-col items-start overflow-clip p-[8px] relative self-stretch shrink-0 w-[256px]" data-node-id="7:16044" data-name="AppSidebar (inset)">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:16045" data-name="SidebarHeader">
          <div className="content-stretch flex gap-[8px] h-[48px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:16046" data-name="TeamSwitcher">
            <div className="bg-[var(--sidebar-primary,#0f172b)] content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:16047" data-name="Logo">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:16048">
                D
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:16049" data-name="Text">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[17.5px] relative shrink-0 text-[14px]" data-node-id="7:16050">
                Studio OS
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px]" data-node-id="7:16051">
                AI Design Studio
              </p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-node-id="7:16052" data-name="lucide/chevrons-up-down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronsUpDown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:16055" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:16056" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:16057">
              Platform
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:16058" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:16059" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:16060" data-name="lucide/home">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideHome} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:16063">
                Dashboard
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:16064" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:16065" data-name="lucide/folder-open">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideFolderOpen} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:16067">
                Projects
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:16068" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:16069" data-name="lucide/list-todo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideListTodo} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:16075">
                Tasks
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:16076" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:16077" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:16078">
              Workspace
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:16079" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:16080" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:16081" data-name="lucide/chart-pie">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChartPie} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:16084">
                Analytics
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:16085" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:16086" data-name="lucide/users">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUsers} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:16091">
                Team
              </p>
            </div>
            <div className="bg-[var(--sidebar-accent,#f1f5f9)] content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:16092" data-name="SidebarMenuButton :active">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:16093" data-name="lucide/settings">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSettings} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-accent-foreground,#0f172b)] whitespace-nowrap" data-node-id="7:16096">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--background,white)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[var(--radius-xl,14px)] self-stretch shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" data-node-id="7:16097" data-name="SidebarInset">
        <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center overflow-clip pl-[12px] pr-[16px] relative shrink-0 w-full" data-node-id="7:16098" data-name="Header">
          <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 w-[28px]" data-node-id="7:16099" data-name="SidebarTrigger">
            <div className="relative shrink-0 size-[16px]" data-node-id="7:16100" data-name="lucide/panel-left">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePanelLeft} />
            </div>
          </div>
          <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[384px]" data-node-id="7:16103" data-name="Search">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[8px] h-[36px] items-center min-w-px overflow-clip pl-[10px] pr-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:16104" data-name="Input/search">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:16105" data-name="lucide/search">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSearch} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:16108">
                Search...
              </p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="7:16109" data-name="Spacer" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[36px]" data-node-id="7:16110" data-name="ThemeToggle">
            <div className="relative shrink-0 size-[20px]" data-node-id="7:16111" data-name="lucide/moon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideMoon} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:16113" data-name="User">
            <div className="[word-break:break-word] content-stretch flex flex-col items-end overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="7:16114" data-name="Name">
              <p className="font-['Geist:Medium'] font-medium leading-[17.5px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:16115">
                Hani Buskila
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:16116">
                Product Designer
              </p>
            </div>
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[24px]" data-node-id="7:16117" data-name="Avatar/sm">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:16118">
                HB
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative shrink-0 w-full" data-node-id="7:16119" data-name="Page">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:16120" data-name="PageHeader">
            <p className="font-['Geist:Bold'] font-bold leading-[36px] relative shrink-0 text-[30px] text-[color:var(--foreground,#020618)] tracking-[-0.75px] whitespace-nowrap" data-node-id="7:16121">
              Settings
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:16122">
              Manage your profile, appearance, notifications, and workspace.
            </p>
          </div>
          <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:16123" data-name="Body">
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="7:16124" data-name="SettingsNav">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:16125" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:16126" data-name="lucide/user">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUser} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:16129">
                  Profile
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:16130" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:16131" data-name="lucide/palette">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePalette} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:16137">
                  Appearance
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:16138" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:16139" data-name="lucide/bell">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBell} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:16142">
                  Notifications
                </p>
              </div>
              <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:16143" data-name="SettingsNavItem :active">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:16144" data-name="lucide/building-2">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding2} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:16152">
                  Workspace
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[672px]" data-node-id="7:16153" data-name="SettingsSection">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:16154" data-name="SectionHeader">
                <p className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:16155">
                  Workspace
                </p>
                <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:16156">
                  Manage your workspace details and who has access.
                </p>
              </div>
              <div className="bg-[var(--border,#e2e8f0)] h-px relative shrink-0 w-full" data-node-id="7:16157" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:16158" data-name="Skeleton/Workspace">
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:16159" data-name="f">
                  <div className="bg-[var(--accent,#f1f5f9)] h-[14px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[110px]" data-node-id="7:16160" data-name="Skeleton" />
                  <div className="bg-[var(--accent,#f1f5f9)] h-[36px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:16161" data-name="Skeleton" />
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:16162" data-name="f">
                  <div className="bg-[var(--accent,#f1f5f9)] h-[14px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[110px]" data-node-id="7:16163" data-name="Skeleton" />
                  <div className="bg-[var(--accent,#f1f5f9)] h-[36px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:16164" data-name="Skeleton" />
                </div>
                <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="7:16165" data-name="logo">
                  <div className="bg-[var(--accent,#f1f5f9)] relative rounded-[var(--radius-md,8px)] shrink-0 size-[64px]" data-node-id="7:16166" data-name="Skeleton" />
                  <div className="bg-[var(--accent,#f1f5f9)] h-[32px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[120px]" data-node-id="7:16167" data-name="Skeleton" />
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:16168" data-name="rows">
                  <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="7:16169" data-name="r">
                    <div className="bg-[var(--accent,#f1f5f9)] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:16170" data-name="Skeleton" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="7:16171" data-name="t">
                      <div className="bg-[var(--accent,#f1f5f9)] h-[14px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[140px]" data-node-id="7:16172" data-name="Skeleton" />
                      <div className="bg-[var(--accent,#f1f5f9)] h-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[180px]" data-node-id="7:16173" data-name="Skeleton" />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="7:16174" data-name="r">
                    <div className="bg-[var(--accent,#f1f5f9)] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:16175" data-name="Skeleton" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="7:16176" data-name="t">
                      <div className="bg-[var(--accent,#f1f5f9)] h-[14px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[140px]" data-node-id="7:16177" data-name="Skeleton" />
                      <div className="bg-[var(--accent,#f1f5f9)] h-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[180px]" data-node-id="7:16178" data-name="Skeleton" />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="7:16179" data-name="r">
                    <div className="bg-[var(--accent,#f1f5f9)] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:16180" data-name="Skeleton" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="7:16181" data-name="t">
                      <div className="bg-[var(--accent,#f1f5f9)] h-[14px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[140px]" data-node-id="7:16182" data-name="Skeleton" />
                      <div className="bg-[var(--accent,#f1f5f9)] h-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[180px]" data-node-id="7:16183" data-name="Skeleton" />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="7:16184" data-name="r">
                    <div className="bg-[var(--accent,#f1f5f9)] relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:16185" data-name="Skeleton" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="7:16186" data-name="t">
                      <div className="bg-[var(--accent,#f1f5f9)] h-[14px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[140px]" data-node-id="7:16187" data-name="Skeleton" />
                      <div className="bg-[var(--accent,#f1f5f9)] h-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[180px]" data-node-id="7:16188" data-name="Skeleton" />
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
