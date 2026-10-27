import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Profile</h2>
        <p className="text-sm text-muted-foreground">
          Manage your profile information and how others see you.
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Profile settings form will be implemented in the next phase once the
          required UI primitives (Label, Textarea) are merged from the ui/settings branch.
        </p>
      </div>
    </div>
  )
}
