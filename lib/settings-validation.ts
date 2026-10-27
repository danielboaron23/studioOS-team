// Pure validation and formatting functions for Settings feature

export interface ProfileValidation {
  displayName?: string
  bio?: string
}

export interface InviteChip {
  email: string
  error?: "invalid" | "duplicate" | "already-member"
}

export function validateDisplayName(name: string): string | undefined {
  if (name.length < 2 || name.length > 60) {
    return "Display name must be 2–60 characters."
  }
  return undefined
}

export function validateBio(bio: string): string | undefined {
  if (bio.length > 280) {
    return "Bio must be 280 characters or less."
  }
  return undefined
}

export function validateProfile(data: {
  displayName: string
  bio: string
}): ProfileValidation {
  const errors: ProfileValidation = {}

  const displayNameError = validateDisplayName(data.displayName)
  if (displayNameError) {
    errors.displayName = displayNameError
  }

  const bioError = validateBio(data.bio)
  if (bioError) {
    errors.bio = bioError
  }

  return errors
}

export function validateAvatarFile(file: File): string | undefined {
  // Validate file type
  if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
    return "Use a PNG, JPG or WebP file up to 2 MB."
  }

  // Validate file size (2MB)
  if (file.size > 2 * 1024 * 1024) {
    return "Use a PNG, JPG or WebP file up to 2 MB."
  }

  return undefined
}

export function validateLogoFile(file: File): string | undefined {
  if (!["image/png", "image/svg+xml"].includes(file.type)) {
    return "PNG or SVG, up to 1 MB, square."
  }

  if (file.size > 1024 * 1024) {
    return "PNG or SVG, up to 1 MB, square."
  }

  return undefined
}

export function validateLogoSquare(width: number, height: number): string | undefined {
  if (width !== height) {
    return "Logo must be square (1:1)."
  }
  return undefined
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function parseInviteInput(input: string): string[] {
  // Split by comma, space, or newline, filter empty
  return input
    .split(/[,\s\n]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
}

export function validateInviteChips(
  chips: string[],
  existingEmails: string[]
): InviteChip[] {
  const seen = new Set<string>()
  const existingSet = new Set(existingEmails.map((e) => e.toLowerCase()))

  return chips.map((email) => {
    const lower = email.toLowerCase()

    if (existingSet.has(lower)) {
      return { email, error: "already-member" }
    }

    if (seen.has(lower)) {
      return { email, error: "duplicate" }
    }

    if (!validateEmail(email)) {
      return { email, error: "invalid" }
    }

    seen.add(lower)
    return { email }
  })
}

export function formatInviteErrors(chips: InviteChip[]): string {
  const alreadyMember = chips.filter((c) => c.error === "already-member")
  const invalid = chips.filter((c) => c.error === "invalid" || c.error === "duplicate")

  const parts: string[] = []

  if (alreadyMember.length > 0) {
    parts.push(`Already in workspace: ${alreadyMember.map((c) => c.email).join(", ")}`)
  }

  if (invalid.length > 0) {
    parts.push(`Check: ${invalid.map((c) => c.email).join(", ")}`)
  }

  return parts.join(". ")
}

export function shouldShowQuietHoursEndHelper(): boolean {
  // Helper "Ends the next day" is always shown when quiet hours is enabled
  // This is a formatting helper, not a validation check
  return true
}
