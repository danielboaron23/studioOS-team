"use client"

import { useState, useRef, useEffect } from "react"
import { Upload, MoreHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Field } from "@/components/settings/field"
import { SaveBar } from "@/components/settings/save-bar"
import { useUnsavedChanges } from "@/hooks/use-unsaved-changes"
import {
  useWorkspaceSettings,
  updateWorkspaceSettings,
  type WorkspaceMember,
} from "@/lib/settings-store"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

export default function WorkspacePage() {
  const savedWorkspace = useWorkspaceSettings()
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [name, setName] = useState("")
  const [slug, setSlug] = useState("")
  const [logoDataUrl, setLogoDataUrl] = useState<string | undefined>()
  const [logoError, setLogoError] = useState("")
  const [members, setMembers] = useState<WorkspaceMember[]>([])
  const [inviteInput, setInviteInput] = useState("")
  const [inviteChips, setInviteChips] = useState<{ email: string; error?: string }[]>([])
  const [inviteError, setInviteError] = useState("")
  const [memberToRemove, setMemberToRemove] = useState<WorkspaceMember | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setName(savedWorkspace.name)
      setSlug(savedWorkspace.slug)
      setLogoDataUrl(savedWorkspace.logoDataUrl)
      setMembers(savedWorkspace.members)
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [savedWorkspace])

  const isDirty =
    name !== savedWorkspace.name ||
    slug !== savedWorkspace.slug ||
    logoDataUrl !== savedWorkspace.logoDataUrl ||
    JSON.stringify(members) !== JSON.stringify(savedWorkspace.members)

  useUnsavedChanges({
    isDirty,
    message: "You have unsaved changes. Discard?",
  })

  const handleSave = async () => {
    setIsSaving(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))

      updateWorkspaceSettings({
        name,
        slug,
        logoDataUrl,
        members,
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
    setName(savedWorkspace.name)
    setSlug(savedWorkspace.slug)
    setLogoDataUrl(savedWorkspace.logoDataUrl)
    setMembers(savedWorkspace.members)
    setLogoError("")
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setLogoError("")

    if (!["image/png", "image/svg+xml"].includes(file.type)) {
      setLogoError("PNG or SVG, up to 1 MB, square.")
      return
    }

    if (file.size > 1024 * 1024) {
      setLogoError("PNG or SVG, up to 1 MB, square.")
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      const img = new Image()
      img.onload = () => {
        if (img.width !== img.height) {
          setLogoError("Logo must be square (1:1).")
        } else {
          setLogoDataUrl(reader.result as string)
        }
      }
      img.src = reader.result as string
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveLogo = () => {
    setLogoDataUrl(undefined)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleInviteKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "," || e.key === " ") {
      e.preventDefault()
      const email = inviteInput.trim()
      if (email) {
        addInviteChip(email)
        setInviteInput("")
      }
    } else if (e.key === "Backspace" && !inviteInput && inviteChips.length > 0) {
      setInviteChips(inviteChips.slice(0, -1))
    }
  }

  const addInviteChip = (email: string) => {
    const existingMember = members.find((m) => m.email === email)
    if (existingMember) {
      setInviteChips([...inviteChips, { email, error: "Already in workspace" }])
      return
    }

    if (!validateEmail(email)) {
      setInviteChips([...inviteChips, { email, error: "Invalid email" }])
      return
    }

    setInviteChips([...inviteChips, { email }])
  }

  const removeInviteChip = (index: number) => {
    setInviteChips(inviteChips.filter((_, i) => i !== index))
  }

  const handleInvite = () => {
    const validChips = inviteChips.filter((c) => !c.error)
    const errorChips = inviteChips.filter((c) => c.error)

    if (errorChips.length > 0) {
      return
    }

    const newMembers = validChips.map((chip) => ({
      id: Math.random().toString(36).substr(2, 9),
      email: chip.email,
      displayName: chip.email.split("@")[0],
      role: "Member",
      status: "Invited" as const,
    }))

    setMembers([...members, ...newMembers])
    setInviteChips([])
    toast.success("Invite added")
  }

  const handleRemoveMember = (member: WorkspaceMember) => {
    setMembers(members.filter((m) => m.id !== member.id))
    setMemberToRemove(null)
  }

  const hasInviteErrors = inviteChips.some((c) => c.error)
  const canInvite = inviteChips.length > 0 && !hasInviteErrors

  useEffect(() => {
    const errors: string[] = []
    inviteChips.forEach((chip) => {
      if (chip.error === "Already in workspace") {
        errors.push(`Already in workspace: ${chip.email}`)
      } else if (chip.error === "Invalid email") {
        errors.push(`Check: ${chip.email}`)
      }
    })
    setInviteError(errors.join(". "))
  }, [inviteChips])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="space-y-1">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-5 w-96" />
        </div>
        <Separator />
        <div className="space-y-6">
          <Skeleton className="h-9 w-full max-w-sm" />
          <Skeleton className="h-9 w-full max-w-sm" />
          <Skeleton className="h-24 w-full max-w-sm" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    )
  }

  const owner = members.find((m) => m.role === "Owner (you)")
  const otherMembers = members.filter((m) => m.role !== "Owner (you)")
  const isEmpty = members.length === 1 && owner

  return (
    <>
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Workspace</h2>
          <p className="text-sm text-muted-foreground">
            Manage your workspace details and who has access.
          </p>
        </div>

        <Separator />

        <div className="space-y-6">
          <Field label="Workspace name" htmlFor="workspace-name">
            <Input
              id="workspace-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="max-w-sm"
            />
          </Field>

          <Field
            label="Slug"
            htmlFor="workspace-slug"
            description="Lowercase letters, numbers and hyphens."
          >
            <Input
              id="workspace-slug"
              value={slug}
              onChange={(e) => setSlug(slugify(e.target.value))}
              className="max-w-sm"
            />
          </Field>

          <Field label="Logo" error={logoError}>
            <div className="flex items-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-md border bg-muted">
                {logoDataUrl ? (
                  <img src={logoDataUrl} alt="Logo" className="size-full object-contain" />
                ) : (
                  <Upload className="size-6 text-muted-foreground" />
                )}
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="size-4" />
                    Upload logo
                  </Button>
                  {logoDataUrl && (
                    <Button variant="outline" size="sm" onClick={handleRemoveLogo}>
                      Remove
                    </Button>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  PNG or SVG, up to 1 MB, square.
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/svg+xml"
                className="hidden"
                onChange={handleLogoUpload}
              />
            </div>
          </Field>

          <Field
            label="Invite people"
            htmlFor="invite-input"
            description="Separate emails with a comma, space or Enter. No email is sent yet."
            error={inviteError}
          >
            <div className="flex gap-2 max-w-2xl">
              <div className="flex-1 min-w-0">
                <div
                  className={cn(
                    "flex flex-wrap gap-2 rounded-md border px-3 py-2 min-h-9",
                    inviteError && "border-destructive"
                  )}
                >
                  {inviteChips.map((chip, index) => (
                    <div
                      key={index}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm",
                        chip.error
                          ? "bg-destructive/10 text-destructive"
                          : "bg-muted text-foreground"
                      )}
                    >
                      <span>{chip.email}</span>
                      <button
                        type="button"
                        onClick={() => removeInviteChip(index)}
                        className="hover:bg-background/50 rounded"
                      >
                        <X className="size-3" />
                      </button>
                    </div>
                  ))}
                  <input
                    id="invite-input"
                    type="email"
                    value={inviteInput}
                    onChange={(e) => setInviteInput(e.target.value)}
                    onKeyDown={handleInviteKeyDown}
                    onBlur={() => {
                      if (inviteInput.trim()) {
                        addInviteChip(inviteInput.trim())
                        setInviteInput("")
                      }
                    }}
                    placeholder={inviteChips.length === 0 ? "name@company.com" : ""}
                    className="flex-1 min-w-[120px] bg-transparent outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <Button onClick={handleInvite} disabled={!canInvite}>
                Invite
              </Button>
            </div>
          </Field>

          <div>
            <h3 className="text-sm font-medium mb-4">
              Members ({members.length})
            </h3>
            {isEmpty ? (
              <div className="py-8 text-center">
                <p className="text-sm text-muted-foreground">
                  No one else here yet. Invite people above.
                </p>
              </div>
            ) : (
              <div className="border rounded-md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-3 text-sm font-medium">Member</th>
                      <th className="text-left p-3 text-sm font-medium">Role</th>
                      <th className="text-left p-3 text-sm font-medium">Last active</th>
                      <th className="w-12"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member) => (
                      <tr key={member.id} className="border-b last:border-0">
                        <td className="p-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="size-8">
                              {member.avatarDataUrl && (
                                <AvatarImage src={member.avatarDataUrl} alt={member.displayName} />
                              )}
                              <AvatarFallback className="bg-muted text-foreground text-xs font-bold">
                                {getInitials(member.displayName)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-sm font-medium">{member.displayName}</div>
                              <div className="text-sm text-muted-foreground">{member.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{member.role}</span>
                            {member.status === "Invited" && (
                              <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                                Invited
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">—</td>
                        <td className="p-3">
                          {member.role !== "Owner (you)" && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="size-8">
                                      <MoreHorizontal className="size-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem
                                      className="text-destructive"
                                      onClick={() => setMemberToRemove(member)}
                                    >
                                      Remove
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>More actions</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {isDirty && (
        <SaveBar onSave={handleSave} onDiscard={handleDiscard} disabled={isSaving} />
      )}

      <Dialog
        open={!!memberToRemove}
        onOpenChange={(open) => !open && setMemberToRemove(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove {memberToRemove?.displayName}?</DialogTitle>
            <DialogDescription>
              They lose access to this workspace right away. You can invite them again later.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setMemberToRemove(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => memberToRemove && handleRemoveMember(memberToRemove)}
            >
              Remove
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
