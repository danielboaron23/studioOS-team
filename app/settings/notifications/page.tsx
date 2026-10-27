import { Separator } from "@/components/ui/separator"

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Notifications</h2>
        <p className="text-sm text-muted-foreground">
          Configure how and when you receive notifications.
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Notification settings form (in-app, email, categories, quiet hours) will be
          implemented in the next phase once the required UI primitives (Switch) are
          merged from the ui/settings branch.
        </p>
      </div>
    </div>
  )
}
