"use client"

import { useEffect, useState } from "react"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Field } from "@/components/settings/field"
import { SaveBar } from "@/components/settings/save-bar"
import { useUnsavedChanges } from "@/hooks/use-unsaved-changes"
import {
  useNotificationSettings,
  updateNotificationSettings,
  type NotificationCategory,
} from "@/lib/settings-store"
import { toast } from "sonner"

const categories: { id: NotificationCategory; label: string }[] = [
  { id: "comments", label: "New comment" },
  { id: "mentions", label: "Mention" },
  { id: "updates", label: "Project status change" },
  { id: "security", label: "Weekly digest" },
  { id: "newsletters", label: "Product updates" },
]

export default function NotificationsPage() {
  const savedNotifications = useNotificationSettings()
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [inApp, setInApp] = useState(true)
  const [email, setEmail] = useState(true)
  const [categorySettings, setCategorySettings] = useState(savedNotifications.categories)
  const [quietHours, setQuietHours] = useState(savedNotifications.quietHours)

  useEffect(() => {
    const timer = setTimeout(() => {
      setInApp(savedNotifications.inApp)
      setEmail(savedNotifications.email)
      setCategorySettings(savedNotifications.categories)
      setQuietHours(savedNotifications.quietHours)
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [savedNotifications])

  const isDirty =
    inApp !== savedNotifications.inApp ||
    email !== savedNotifications.email ||
    JSON.stringify(categorySettings) !== JSON.stringify(savedNotifications.categories) ||
    JSON.stringify(quietHours) !== JSON.stringify(savedNotifications.quietHours)

  useUnsavedChanges({
    isDirty,
    message: "You have unsaved changes. Discard?",
  })

  const handleSave = async () => {
    setIsSaving(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))

      updateNotificationSettings({
        inApp,
        email,
        categories: categorySettings,
        quietHours,
      })

      setIsSaving(false)
      toast.success("Settings saved")
    } catch {
      setIsSaving(false)
      toast.error("Couldn't save. Your browser storage may be full.", {
        action: {
          label: "Retry",
          onClick: () => handleSave(),
        },
      })
    }
  }

  const handleDiscard = () => {
    setInApp(savedNotifications.inApp)
    setEmail(savedNotifications.email)
    setCategorySettings(savedNotifications.categories)
    setQuietHours(savedNotifications.quietHours)
  }

  const handleCategoryChange = (
    category: NotificationCategory,
    channel: "inApp" | "email",
    checked: boolean
  ) => {
    setCategorySettings({
      ...categorySettings,
      [category]: {
        ...categorySettings[category],
        [channel]: checked,
      },
    })
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="space-y-1">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-5 w-96" />
        </div>
        <Separator />
        <div className="space-y-6">
          <div className="space-y-3">
            <Skeleton className="h-5 w-20" />
            <div className="flex gap-4">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
          <div className="space-y-3">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Notifications</h2>
          <p className="text-sm text-muted-foreground">
            Choose where we reach you and about what.
          </p>
        </div>

        <Separator />

        <div className="space-y-6">
          <Field label="Channels">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Switch
                  id="channel-in-app"
                  checked={inApp}
                  onCheckedChange={setInApp}
                />
                <Label htmlFor="channel-in-app" className="font-normal cursor-pointer">
                  In-app
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  id="channel-email"
                  checked={email}
                  onCheckedChange={setEmail}
                />
                <Label htmlFor="channel-email" className="font-normal cursor-pointer">
                  Email
                </Label>
              </div>
            </div>
          </Field>

          <div>
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 mb-2">
              <div className="text-sm font-medium">Category</div>
              <div className="text-sm font-medium text-center w-20">In-app</div>
              <div className="text-sm font-medium text-center w-20">Email</div>
            </div>
            <div className="space-y-3">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="grid grid-cols-[1fr_auto_auto] gap-4 items-center"
                >
                  <div className="text-sm">{cat.label}</div>
                  <div className="flex justify-center w-20">
                    <Checkbox
                      aria-label={`${cat.label} in-app`}
                      checked={categorySettings[cat.id].inApp}
                      disabled={!inApp}
                      onCheckedChange={(checked) =>
                        handleCategoryChange(cat.id, "inApp", checked as boolean)
                      }
                    />
                  </div>
                  <div className="flex justify-center w-20">
                    <Checkbox
                      aria-label={`${cat.label} email`}
                      checked={categorySettings[cat.id].email}
                      disabled={!email}
                      onCheckedChange={(checked) =>
                        handleCategoryChange(cat.id, "email", checked as boolean)
                      }
                      className={!email ? "opacity-40" : ""}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Field
            label={
              <div className="flex items-center gap-2">
                <Switch
                  id="quiet-hours"
                  checked={quietHours.enabled}
                  onCheckedChange={(checked) =>
                    setQuietHours({ ...quietHours, enabled: checked })
                  }
                />
                <Label htmlFor="quiet-hours" className="font-medium cursor-pointer">
                  Quiet hours
                </Label>
              </div>
            }
            description="Pause notifications at set times."
          >
            {quietHours.enabled && (
              <div className="space-y-4 mt-2">
                <div className="grid grid-cols-2 gap-4 max-w-sm">
                  <Field label="Start" htmlFor="quiet-start">
                    <Input
                      id="quiet-start"
                      type="time"
                      value={quietHours.from}
                      onChange={(e) =>
                        setQuietHours({ ...quietHours, from: e.target.value })
                      }
                    />
                  </Field>
                  <Field label="End" htmlFor="quiet-end">
                    <Input
                      id="quiet-end"
                      type="time"
                      value={quietHours.to}
                      onChange={(e) =>
                        setQuietHours({ ...quietHours, to: e.target.value })
                      }
                    />
                  </Field>
                </div>
                <p className="text-sm text-muted-foreground">Ends the next day</p>
              </div>
            )}
          </Field>
        </div>
      </div>

      {isDirty && (
        <SaveBar onSave={handleSave} onDiscard={handleDiscard} disabled={isSaving} />
      )}
    </>
  )
}
