# workspace-invite-invalid-chip — Figma design spec

- **Frame:** Workspace / 2 invite — invalid chip, Invite disabled
- **Node id:** `7:13997`
- **Page:** Settings — desktop
- **File:** studioOS — Settings (`41IZ0Wmvjcju9w4HHm7hvt`) — https://www.figma.com/design/41IZ0Wmvjcju9w4HHm7hvt?node-id=7-13997
- **Source:** Figma MCP `get_design_context` (React + Tailwind reference output), exported 2026-10-27.

> REFERENCE ONLY — Next.js + shadcn/ui, tokens in `app/globals.css`. Map `var(--token,#fallback)` to existing tokens; `imgLucide*` = lucide-react icons.
> Figma asset URLs in this file expire ~7 days after export (assets were not downloaded for this file; the main-section specs have local copies in `assets/`).

```tsx
const imgAvatarDefault = "https://www.figma.com/api/mcp/asset/1021b0cd-c4dd-4413-ac5c-191164a0064d.png";
const imgAvatarDefault1 = "https://www.figma.com/api/mcp/asset/cbbbfed3-36e8-4b6d-b652-274c764c53e4.png";
const imgAvatarDefault2 = "https://www.figma.com/api/mcp/asset/7719a20b-c86c-413a-ae45-67ed45c2b279.png";
const imgAvatarDefault3 = "https://www.figma.com/api/mcp/asset/51075045-fd74-49ce-a822-e448bd40b28d.png";
const imgAvatarDefault4 = "https://www.figma.com/api/mcp/asset/e7834973-2bce-47fb-9f13-4171609f5ede.png";
const imgAvatarDefault5 = "https://www.figma.com/api/mcp/asset/84936a2a-8ac9-4c83-98cf-aed4caf11d3a.png";
const imgAvatarDefault6 = "https://www.figma.com/api/mcp/asset/0afff02d-ff63-43ff-9e5b-b3f8ac1e9e01.png";
const imgAvatarDefault7 = "https://www.figma.com/api/mcp/asset/027b9c08-e788-44a6-94f9-80f15cc9ec2a.png";
const imgLucideChevronsUpDown = "https://www.figma.com/api/mcp/asset/fb7213e9-cc2f-41b7-ae7a-bbc749924268.svg";
const imgLucideHome = "https://www.figma.com/api/mcp/asset/8a099618-137c-426d-843b-e3e52a0aadf8.svg";
const imgLucideFolderOpen = "https://www.figma.com/api/mcp/asset/24cdd472-406e-4552-aa22-d03bfa1e3d30.svg";
const imgLucideListTodo = "https://www.figma.com/api/mcp/asset/b17cf608-c35f-409c-90ab-2b522aac08fc.svg";
const imgLucideChartPie = "https://www.figma.com/api/mcp/asset/ed607878-20cc-4eb8-97d5-dfca43b66e0d.svg";
const imgLucideUsers = "https://www.figma.com/api/mcp/asset/a026631e-beda-42d1-b97f-05fcf3406286.svg";
const imgLucideSettings = "https://www.figma.com/api/mcp/asset/483b02b5-aa5a-48e8-b233-02ec0410c0a0.svg";
const imgLucidePanelLeft = "https://www.figma.com/api/mcp/asset/503e8c19-928c-43a8-8687-9e73d0a632e5.svg";
const imgLucideSearch = "https://www.figma.com/api/mcp/asset/958e685f-43ec-4949-8eb5-94e09f816ab5.svg";
const imgLucideMoon = "https://www.figma.com/api/mcp/asset/2e82e748-d90a-4606-af44-8d769c2d1b42.svg";
const imgLucideUser = "https://www.figma.com/api/mcp/asset/3558f45c-513c-474b-a1de-5d4a6c8c9383.svg";
const imgLucidePalette = "https://www.figma.com/api/mcp/asset/db42c765-aafb-409a-b11e-6521e0bdb18c.svg";
const imgLucideBell = "https://www.figma.com/api/mcp/asset/62c6bed3-1fba-4c65-9493-0c073e093667.svg";
const imgLucideBuilding2 = "https://www.figma.com/api/mcp/asset/ca425ec7-afc8-4fd2-9ea8-d0d20b31e4a1.svg";
const imgLucideBuilding3 = "https://www.figma.com/api/mcp/asset/50cd00ee-3202-4bc2-a9fa-3fa41d1a6aa3.svg";
const imgLucideUpload = "https://www.figma.com/api/mcp/asset/38d79db3-8cd3-42a9-9cb0-894d5c72e12e.svg";
const imgLucideX = "https://www.figma.com/api/mcp/asset/6f911242-f31d-4772-bc83-b918b3db4d07.svg";
const imgLucideX1 = "https://www.figma.com/api/mcp/asset/35b967d8-a900-49b4-b04e-ddb251c9a634.svg";
const imgLucideEllipsis = "https://www.figma.com/api/mcp/asset/628f9aa7-653e-44ce-aa16-10475c4dc864.svg";

export default function Workspace2InviteInvalidChipInviteDisabled() {
  return (
    <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex items-start pr-[8px] py-[8px] relative size-full" data-node-id="7:13997" data-name="Workspace / 2 invite — invalid chip, Invite disabled">
      <div className="bg-[var(--sidebar,#f8fafc)] content-stretch flex flex-col items-start overflow-clip p-[8px] relative self-stretch shrink-0 w-[256px]" data-node-id="7:13998" data-name="AppSidebar (inset)">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:13999" data-name="SidebarHeader">
          <div className="content-stretch flex gap-[8px] h-[48px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:14000" data-name="TeamSwitcher">
            <div className="bg-[var(--sidebar-primary,#0f172b)] content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:14001" data-name="Logo">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:14002">
                D
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:14003" data-name="Text">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[17.5px] relative shrink-0 text-[14px]" data-node-id="7:14004">
                Studio OS
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px]" data-node-id="7:14005">
                AI Design Studio
              </p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-node-id="7:14006" data-name="lucide/chevrons-up-down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChevronsUpDown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:14009" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:14010" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:14011">
              Platform
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:14012" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:14013" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:14014" data-name="lucide/home">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideHome} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:14017">
                Dashboard
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:14018" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:14019" data-name="lucide/folder-open">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideFolderOpen} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:14021">
                Projects
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:14022" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:14023" data-name="lucide/list-todo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideListTodo} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:14029">
                Tasks
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="7:14030" data-name="SidebarGroup">
          <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="7:14031" data-name="SidebarGroupLabel">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:14032">
              Workspace
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:14033" data-name="SidebarMenu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:14034" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:14035" data-name="lucide/chart-pie">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideChartPie} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:14038">
                Analytics
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:14039" data-name="SidebarMenuButton">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:14040" data-name="lucide/users">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUsers} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-foreground,#020618)] whitespace-nowrap" data-node-id="7:14045">
                Team
              </p>
            </div>
            <div className="bg-[var(--sidebar-accent,#f1f5f9)] content-stretch flex gap-[8px] h-[32px] items-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:14046" data-name="SidebarMenuButton :active">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:14047" data-name="lucide/settings">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSettings} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--sidebar-accent-foreground,#0f172b)] whitespace-nowrap" data-node-id="7:14050">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--background,white)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[var(--radius-xl,14px)] self-stretch shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" data-node-id="7:14051" data-name="SidebarInset">
        <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center overflow-clip pl-[12px] pr-[16px] relative shrink-0 w-full" data-node-id="7:14052" data-name="Header">
          <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 w-[28px]" data-node-id="7:14053" data-name="SidebarTrigger">
            <div className="relative shrink-0 size-[16px]" data-node-id="7:14054" data-name="lucide/panel-left">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePanelLeft} />
            </div>
          </div>
          <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[384px]" data-node-id="7:14057" data-name="Search">
            <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[8px] h-[36px] items-center min-w-px overflow-clip pl-[10px] pr-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:14058" data-name="Input/search">
              <div className="relative shrink-0 size-[16px]" data-node-id="7:14059" data-name="lucide/search">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideSearch} />
              </div>
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14062">
                Search...
              </p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="7:14063" data-name="Spacer" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[36px]" data-node-id="7:14064" data-name="ThemeToggle">
            <div className="relative shrink-0 size-[20px]" data-node-id="7:14065" data-name="lucide/moon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideMoon} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:14067" data-name="User">
            <div className="[word-break:break-word] content-stretch flex flex-col items-end overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="7:14068" data-name="Name">
              <p className="font-['Geist:Medium'] font-medium leading-[17.5px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)]" data-node-id="7:14069">
                Hani Buskila
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:14070">
                Product Designer
              </p>
            </div>
            <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[24px]" data-node-id="7:14071" data-name="Avatar/sm">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14072">
                HB
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative shrink-0 w-full" data-node-id="7:14073" data-name="Page">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:14074" data-name="PageHeader">
            <p className="font-['Geist:Bold'] font-bold leading-[36px] relative shrink-0 text-[30px] text-[color:var(--foreground,#020618)] tracking-[-0.75px] whitespace-nowrap" data-node-id="7:14075">
              Settings
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:14076">
              Manage your profile, appearance, notifications, and workspace.
            </p>
          </div>
          <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:14077" data-name="Body">
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="7:14078" data-name="SettingsNav">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:14079" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:14080" data-name="lucide/user">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUser} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14083">
                  Profile
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:14084" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:14085" data-name="lucide/palette">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucidePalette} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14091">
                  Appearance
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:14092" data-name="SettingsNavItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:14093" data-name="lucide/bell">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBell} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14096">
                  Notifications
                </p>
              </div>
              <div className="bg-[var(--muted,#f1f5f9)] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[var(--radius-md,8px)] shrink-0 w-full" data-node-id="7:14097" data-name="SettingsNavItem :active">
                <div className="relative shrink-0 size-[16px]" data-node-id="7:14098" data-name="lucide/building-2">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding2} />
                </div>
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14106">
                  Workspace
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[672px]" data-node-id="7:14107" data-name="SettingsSection">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:14108" data-name="SectionHeader">
                <p className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[18px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14109">
                  Workspace
                </p>
                <p className="font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:14110">
                  Manage your workspace details and who has access.
                </p>
              </div>
              <div className="bg-[var(--border,#e2e8f0)] h-px relative shrink-0 w-full" data-node-id="7:14111" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:14112" data-name="Fields">
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:14113" data-name="Field/Workspace name">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14114">
                    Workspace name
                  </p>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:14115" data-name="Input">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14116">
                      Studio OS
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:14117" data-name="Field/Slug">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14118">
                    Slug
                  </p>
                  <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--input,#e2e8f0)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[36px] items-center overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0 w-[384px]" data-node-id="7:14119" data-name="Input">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14120">
                      studio-os
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:14121">
                    Lowercase letters, numbers and hyphens.
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:14122" data-name="Field/Logo">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14123">
                    Logo
                  </p>
                  <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="7:14124" data-name="LogoUpload">
                    <div className="bg-[var(--muted,#f1f5f9)] border border-[var(--border,#e2e8f0)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[64px]" data-node-id="7:14125" data-name="LogoPreview">
                      <div className="relative shrink-0 size-[24px]" data-node-id="7:14126" data-name="lucide/building-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideBuilding3} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="7:14134" data-name="Buttons">
                      <div className="bg-[var(--derived\/outline-bg,white)] border border-[var(--derived\/outline-border,#e2e8f0)] border-solid content-stretch flex gap-[6px] h-[32px] items-center overflow-clip px-[10px] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="7:14135" data-name="Button/outline/sm">
                        <div className="relative shrink-0 size-[16px]" data-node-id="7:14136" data-name="lucide/upload">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideUpload} />
                        </div>
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14140">
                          Upload logo
                        </p>
                      </div>
                      <div className="content-stretch flex h-[32px] items-center opacity-50 overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:14141" data-name="Button/ghost/sm :disabled">
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14142">
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-[min-content]" data-node-id="7:14143">
                    PNG or SVG, up to 1 MB, square.
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7:14144" data-name="Field/Invite">
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14145">
                    Invite people
                  </p>
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="7:14146" data-name="InviteRow">
                    <div className="border-3 border-[var(--destructive,#e7000b)] border-solid content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip relative rounded-[8px]" data-node-id="7:14147" data-name="Invalid ring">
                      <div className="bg-[var(--derived\/input-bg,rgba(255,255,255,0))] border border-[var(--destructive,#e7000b)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[8px] h-[36px] items-center min-w-px overflow-clip px-[12px] relative rounded-[var(--radius-md,8px)]" data-node-id="7:14148" data-name="Input/invite (tags)">
                        <div className="bg-[var(--secondary,#f1f5f9)] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:14149" data-name="Badge/secondary">
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--secondary-foreground,#0f172b)] whitespace-nowrap" data-node-id="7:14150">
                            maya@acme.co
                          </p>
                          <div className="relative shrink-0 size-[12px]" data-node-id="7:14151" data-name="lucide/x">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideX} />
                          </div>
                        </div>
                        <div className="bg-[var(--destructive,#e7000b)] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:14154" data-name="Badge/destructive">
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="7:14155">
                            dana@acme
                          </p>
                          <div className="relative shrink-0 size-[12px]" data-node-id="7:14156" data-name="lucide/x">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideX1} />
                          </div>
                        </div>
                        <div className="bg-[var(--destructive,#e7000b)] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:14159" data-name="Badge/destructive">
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="7:14160">
                            hani@studioos.app
                          </p>
                          <div className="relative shrink-0 size-[12px]" data-node-id="7:14161" data-name="lucide/x">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideX1} />
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14164">
                          ​
                        </p>
                      </div>
                    </div>
                    <div className="bg-[var(--primary,#0f172b)] content-stretch flex h-[36px] items-center opacity-50 overflow-clip px-[16px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="7:14165" data-name="Button/default :disabled">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--primary-foreground,#f8fafc)] whitespace-nowrap" data-node-id="7:14166">
                        Invite
                      </p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--destructive,#e7000b)] w-[min-content]" data-node-id="7:14167">
                    Already in workspace: hani@studioos.app. Check: dana@acme
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="7:14168" data-name="Members">
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip pb-[8px] relative shrink-0 w-full" data-node-id="7:14169" data-name="MembersHeader">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[16px] min-w-px relative text-[12px] text-[color:var(--muted-foreground,#62748e)]" data-node-id="7:14170">
                      Members (8)
                    </p>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:14171" data-name="h">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14172">
                        Role
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:14173" data-name="h">
                      <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14174">
                        Last active
                      </p>
                    </div>
                    <div className="h-px relative shrink-0 w-[32px]" data-node-id="7:14175" data-name="h" />
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:14176" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:14177" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:14178" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:14179" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:14180">
                          Hani Buskila
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:14181">
                          hani@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:14182" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] whitespace-nowrap" data-node-id="7:14183">
                        Owner (you)
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:14184" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14185">
                        —
                      </p>
                    </div>
                    <div className="relative shrink-0 size-[32px]" data-node-id="7:14186" data-name="Actions" />
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:14187" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:14188" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:14189" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault1} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:14190" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:14191">
                          Tal Rosen
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:14192">
                          tal@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:14193" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14194">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:14195" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14196">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:14197" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:14198" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:14199" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:14200" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:14204" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:14205" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:14206" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault2} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:14207" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:14208">
                          Noa Meir
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:14209">
                          noa@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:14210" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14211">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:14212" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14213">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:14214" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:14215" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:14216" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:14217" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:14221" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:14222" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:14223" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault3} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:14224" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:14225">
                          Daniel Cohen
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:14226">
                          daniel@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:14227" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14228">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:14229" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14230">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:14231" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:14232" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:14233" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:14234" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:14238" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:14239" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:14240" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault4} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:14241" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:14242">
                          Maya Levi
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:14243">
                          maya@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:14244" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14245">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:14246" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14247">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:14248" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:14249" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:14250" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:14251" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:14255" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:14256" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:14257" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault5} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:14258" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:14259">
                          Jon Ashkenazi
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:14260">
                          jon@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:14261" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14262">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:14263" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14264">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:14265" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:14266" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:14267" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:14268" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:14272" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:14273" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:14274" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault6} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:14275" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:14276">
                          Amit Katz
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:14277">
                          amit@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:14278" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14279">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:14280" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14281">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:14282" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:14283" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:14284" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:14285" data-name="lucide/ellipsis">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLucideEllipsis} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--border,#e2e8f0)] border-b border-solid content-stretch flex gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="7:14289" data-name="MemberRow">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="7:14290" data-name="Who">
                      <div className="relative rounded-[999px] shrink-0 size-[32px]" data-node-id="7:14291" data-name="Avatar/default">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatarDefault7} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="7:14292" data-name="Text">
                        <p className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-[color:var(--foreground,#020618)] w-full" data-node-id="7:14293">
                          Shira Barak
                        </p>
                        <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#62748e)] w-full" data-node-id="7:14294">
                          shira@studioos.app
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[128px]" data-node-id="7:14295" data-name="Role">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14296">
                        Member
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[88px]" data-node-id="7:14297" data-name="Last active">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--muted-foreground,#62748e)] whitespace-nowrap" data-node-id="7:14298">
                        —
                      </p>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[32px]" data-node-id="7:14299" data-name="Actions">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="7:14300" data-name="Row actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[32px]" data-node-id="7:14301" data-name="Button/ghost/sm">
                          <div className="relative shrink-0 size-[16px]" data-node-id="7:14302" data-name="lucide/ellipsis">
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
