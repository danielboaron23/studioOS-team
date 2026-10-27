import { Separator } from "@/components/ui/separator"

export default function AppearancePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Appearance</h2>
        <p className="text-sm text-muted-foreground">
          Customize how the interface looks and feels.
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Appearance settings form (theme, density, reduced motion) will be implemented
          in the next phase once the required UI primitives (RadioGroup, Switch) are
          merged from the ui/settings branch.
        </p>
      </div>
    </div>
  )
}
