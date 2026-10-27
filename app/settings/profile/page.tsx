"use client"

import { useState, useRef, useEffect } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { Field } from "@/components/settings/field"
import { SaveBar } from "@/components/settings/save-bar"
import { useUnsavedChanges } from "@/hooks/use-unsaved-changes"
import { useProfileSettings, updateProfileSettings } from "@/lib/settings-store"
import { validateProfile, validateAvatarFile } from "@/lib/settings-validation"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}

export default function ProfilePage() {
  const savedProfile = useProfileSettings()
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [displayName, setDisplayName] = useState("")
  const [role, setRole] = useState("")
  const [bio, setBio] = useState("")
  const [avatarDataUrl, setAvatarDataUrl] = useState<string | undefined>()
  const [avatarError, setAvatarError] = useState("")
  const [errors, setErrors] = useState<{ displayName?: string; bio?: string }>({})
  const [showUnsavedDialog, setShowUnsavedDialog] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setDisplayName(savedProfile.displayName)
      setRole(savedProfile.role)
      setBio(savedProfile.bio)
      setAvatarDataUrl(savedProfile.avatarDataUrl)
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [savedProfile])

  const isDirty =
    displayName !== savedProfile.displayName ||
    role !== savedProfile.role ||
    bio !== savedProfile.bio ||
    avatarDataUrl !== savedProfile.avatarDataUrl

  useUnsavedChanges({
    isDirty,
    message: "You have unsaved changes. Discard?",
    onNavigateAway: () => {
      return new Promise<boolean>((resolve) => {
        setShowUnsavedDialog(true)
        const handleDialog = (discard: boolean) => {
          setShowUnsavedDialog(false)
          if (discard) {
            handleDiscard()
          }
          resolve(discard)
        }
        ;(window as unknown as { __unsavedDialogHandler?: (discard: boolean) => void }).__unsavedDialogHandler = handleDialog
      })
    },
  })

  const handleSave = async () => {
    const validationErrors = validateProfile({ displayName, bio })
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setIsSaving(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Simulate occasional failure for demo
      if (Math.random() < 0.05) {
        throw new Error("Storage full")
      }

      updateProfileSettings({
        displayName,
        role,
        bio,
        avatarDataUrl,
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
    setDisplayName(savedProfile.displayName)
    setRole(savedProfile.role)
    setBio(savedProfile.bio)
    setAvatarDataUrl(savedProfile.avatarDataUrl)
    setErrors({})
    setAvatarError("")
  }

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setAvatarError("")

    const error = validateAvatarFile(file)
    if (error) {
      setAvatarError(error)
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setAvatarDataUrl(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveAvatar = () => {
    setAvatarDataUrl(undefined)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="space-y-1">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-5 w-96" />
        </div>
        <Separator />
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-5 w-16" />
            <div className="flex items-center gap-4">
              <Skeleton className="size-16 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-9 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-9 w-full max-w-sm" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-9 w-full max-w-sm" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-9 w-full max-w-sm" />
            <Skeleton className="h-4 w-64" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-24 w-full max-w-sm" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Profile</h2>
          <p className="text-sm text-muted-foreground">
            This is how teammates see you in comments and on the Team page.
          </p>
        </div>

        <Separator />

        <div className="space-y-6">
          <Field label="Avatar" error={avatarError}>
            <div className="flex items-center gap-4">
              <Avatar className="size-16">
                {avatarDataUrl && <AvatarImage src={avatarDataUrl} alt={displayName} />}
                <AvatarFallback className="bg-muted text-foreground text-lg font-bold">
                  {getInitials(displayName)}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="size-4" />
                    Upload avatar
                  </Button>
                  {avatarDataUrl && (
                    <Button variant="outline" size="sm" onClick={handleRemoveAvatar}>
                      Remove
                    </Button>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  PNG, JPG or WebP, up to 2 MB.
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="hidden"
                onChange={handleAvatarUpload}
              />
            </div>
          </Field>

          <Field
            label="Display name"
            htmlFor="displayName"
            error={errors.displayName}
          >
            <Input
              id="displayName"
              value={displayName}
              onChange={(e) => {
                setDisplayName(e.target.value)
                if (errors.displayName) {
                  setErrors({ ...errors, displayName: undefined })
                }
              }}
              className="max-w-sm"
            />
          </Field>

          <Field label="Role" htmlFor="role">
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger id="role" className="max-w-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Product Designer">Product Designer</SelectItem>
                <SelectItem value="Engineer">Engineer</SelectItem>
                <SelectItem value="Product Manager">Product Manager</SelectItem>
                <SelectItem value="Designer">Designer</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field
            label={
              <span>
                Email
                <Badge variant="secondary" className="ml-2">
                  Verified
                </Badge>
              </span>
            }
            htmlFor="email"
            description="Ask your workspace owner to change your email."
          >
            <Input
              id="email"
              type="email"
              value={savedProfile.email}
              disabled
              className="max-w-sm"
            />
          </Field>

          <Field
            label="Bio (optional)"
            htmlFor="bio"
            error={errors.bio}
          >
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value)
                if (errors.bio && e.target.value.length <= 280) {
                  setErrors({ ...errors, bio: undefined })
                }
              }}
              placeholder="Tell your team a little about yourself"
              rows={4}
              className="max-w-sm"
            />
            <div className="flex justify-end">
              <span
                className={`text-sm ${
                  bio.length > 280
                    ? "text-destructive font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {bio.length}/280
              </span>
            </div>
          </Field>
        </div>
      </div>

      {isDirty && (
        <SaveBar onSave={handleSave} onDiscard={handleDiscard} disabled={isSaving} />
      )}

      <Dialog open={showUnsavedDialog} onOpenChange={setShowUnsavedDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You have unsaved changes. Discard?</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowUnsavedDialog(false)
                const handler = (window as unknown as { __unsavedDialogHandler?: (discard: boolean) => void }).__unsavedDialogHandler
                handler?.(false)
              }}
            >
              Keep editing
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                handleDiscard()
                setShowUnsavedDialog(false)
                const handler = (window as unknown as { __unsavedDialogHandler?: (discard: boolean) => void }).__unsavedDialogHandler
                handler?.(true)
              }}
            >
              Discard
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
