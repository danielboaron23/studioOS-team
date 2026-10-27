import { Separator } from "@/components/ui/separator"

export default function WorkspacePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Workspace</h2>
        <p className="text-sm text-muted-foreground">
          Manage workspace settings and team members.
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Workspace settings form (name, slug, logo, members) will be implemented in the
          next phase once the required UI primitives are merged from the ui/settings branch.
        </p>
      </div>
    </div>
  )
}
