import { describe, it, expect } from "vitest"
import {
  validateDisplayName,
  validateBio,
  validateProfile,
  validateAvatarFile,
  validateLogoFile,
  validateLogoSquare,
  slugify,
  validateEmail,
  parseInviteInput,
  validateInviteChips,
  formatInviteErrors,
  shouldShowQuietHoursEndHelper,
} from "./settings-validation"

describe("settings-validation", () => {
  describe("validateDisplayName", () => {
    it("should reject names shorter than 2 characters", () => {
      expect(validateDisplayName("A")).toBe("Display name must be 2–60 characters.")
      expect(validateDisplayName("")).toBe("Display name must be 2–60 characters.")
    })

    it("should reject names longer than 60 characters", () => {
      const longName = "A".repeat(61)
      expect(validateDisplayName(longName)).toBe("Display name must be 2–60 characters.")
    })

    it("should accept valid names", () => {
      expect(validateDisplayName("Jo")).toBeUndefined()
      expect(validateDisplayName("John Doe")).toBeUndefined()
      expect(validateDisplayName("A".repeat(60))).toBeUndefined()
    })
  })

  describe("validateBio", () => {
    it("should reject bio longer than 280 characters", () => {
      const longBio = "A".repeat(281)
      expect(validateBio(longBio)).toBe("Bio must be 280 characters or less.")
    })

    it("should accept valid bio", () => {
      expect(validateBio("")).toBeUndefined()
      expect(validateBio("Short bio")).toBeUndefined()
      expect(validateBio("A".repeat(280))).toBeUndefined()
    })
  })

  describe("validateProfile", () => {
    it("should return errors for both invalid fields", () => {
      const errors = validateProfile({
        displayName: "A",
        bio: "A".repeat(281),
      })
      expect(errors.displayName).toBe("Display name must be 2–60 characters.")
      expect(errors.bio).toBe("Bio must be 280 characters or less.")
    })

    it("should return empty object for valid profile", () => {
      const errors = validateProfile({
        displayName: "John Doe",
        bio: "Software engineer",
      })
      expect(errors).toEqual({})
    })
  })

  describe("validateAvatarFile", () => {
    it("should reject unsupported file types", () => {
      const file = new File([""], "test.gif", { type: "image/gif" })
      expect(validateAvatarFile(file)).toBe("Use a PNG, JPG or WebP file up to 2 MB.")
    })

    it("should reject files larger than 2MB", () => {
      const largeFile = new File([new ArrayBuffer(2 * 1024 * 1024 + 1)], "test.png", {
        type: "image/png",
      })
      expect(validateAvatarFile(largeFile)).toBe("Use a PNG, JPG or WebP file up to 2 MB.")
    })

    it("should accept valid PNG file", () => {
      const file = new File([new ArrayBuffer(1024)], "test.png", { type: "image/png" })
      expect(validateAvatarFile(file)).toBeUndefined()
    })

    it("should accept valid JPEG file", () => {
      const file = new File([new ArrayBuffer(1024)], "test.jpg", { type: "image/jpeg" })
      expect(validateAvatarFile(file)).toBeUndefined()
    })

    it("should accept valid WebP file", () => {
      const file = new File([new ArrayBuffer(1024)], "test.webp", { type: "image/webp" })
      expect(validateAvatarFile(file)).toBeUndefined()
    })
  })

  describe("validateLogoFile", () => {
    it("should reject unsupported file types", () => {
      const file = new File([""], "test.jpg", { type: "image/jpeg" })
      expect(validateLogoFile(file)).toBe("PNG or SVG, up to 1 MB, square.")
    })

    it("should reject files larger than 1MB", () => {
      const largeFile = new File([new ArrayBuffer(1024 * 1024 + 1)], "test.png", {
        type: "image/png",
      })
      expect(validateLogoFile(largeFile)).toBe("PNG or SVG, up to 1 MB, square.")
    })

    it("should accept valid PNG file", () => {
      const file = new File([new ArrayBuffer(1024)], "test.png", { type: "image/png" })
      expect(validateLogoFile(file)).toBeUndefined()
    })

    it("should accept valid SVG file", () => {
      const file = new File([new ArrayBuffer(1024)], "test.svg", {
        type: "image/svg+xml",
      })
      expect(validateLogoFile(file)).toBeUndefined()
    })
  })

  describe("validateLogoSquare", () => {
    it("should reject non-square dimensions", () => {
      expect(validateLogoSquare(100, 200)).toBe("Logo must be square (1:1).")
      expect(validateLogoSquare(200, 100)).toBe("Logo must be square (1:1).")
    })

    it("should accept square dimensions", () => {
      expect(validateLogoSquare(100, 100)).toBeUndefined()
      expect(validateLogoSquare(512, 512)).toBeUndefined()
    })
  })

  describe("slugify", () => {
    it("should convert to lowercase", () => {
      expect(slugify("MyWorkspace")).toBe("myworkspace")
    })

    it("should replace spaces with hyphens", () => {
      expect(slugify("My Workspace")).toBe("my-workspace")
    })

    it("should replace non-alphanumeric characters with hyphens", () => {
      expect(slugify("My@Workspace!")).toBe("my-workspace")
    })

    it("should collapse multiple hyphens", () => {
      expect(slugify("My   Workspace")).toBe("my-workspace")
      expect(slugify("My---Workspace")).toBe("my-workspace")
    })

    it("should trim leading and trailing hyphens", () => {
      expect(slugify("-My Workspace-")).toBe("my-workspace")
      expect(slugify("---test---")).toBe("test")
    })

    it("should handle complex cases", () => {
      expect(slugify("Studio OS Team (2024)!")).toBe("studio-os-team-2024")
    })
  })

  describe("validateEmail", () => {
    it("should reject invalid emails", () => {
      expect(validateEmail("")).toBe(false)
      expect(validateEmail("notanemail")).toBe(false)
      expect(validateEmail("@example.com")).toBe(false)
      expect(validateEmail("user@")).toBe(false)
      expect(validateEmail("user@domain")).toBe(false)
    })

    it("should accept valid emails", () => {
      expect(validateEmail("user@example.com")).toBe(true)
      expect(validateEmail("test.user@company.co.uk")).toBe(true)
      expect(validateEmail("name+tag@domain.com")).toBe(true)
    })
  })

  describe("parseInviteInput", () => {
    it("should split by comma", () => {
      expect(parseInviteInput("a@test.com,b@test.com")).toEqual([
        "a@test.com",
        "b@test.com",
      ])
    })

    it("should split by space", () => {
      expect(parseInviteInput("a@test.com b@test.com")).toEqual([
        "a@test.com",
        "b@test.com",
      ])
    })

    it("should split by newline", () => {
      expect(parseInviteInput("a@test.com\nb@test.com")).toEqual([
        "a@test.com",
        "b@test.com",
      ])
    })

    it("should handle mixed separators", () => {
      expect(parseInviteInput("a@test.com, b@test.com\nc@test.com")).toEqual([
        "a@test.com",
        "b@test.com",
        "c@test.com",
      ])
    })

    it("should trim whitespace", () => {
      expect(parseInviteInput("  a@test.com  ,  b@test.com  ")).toEqual([
        "a@test.com",
        "b@test.com",
      ])
    })

    it("should filter empty strings", () => {
      expect(parseInviteInput("a@test.com,,,b@test.com")).toEqual([
        "a@test.com",
        "b@test.com",
      ])
    })
  })

  describe("validateInviteChips", () => {
    it("should mark already-member emails", () => {
      const result = validateInviteChips(
        ["new@test.com", "existing@test.com"],
        ["existing@test.com"]
      )
      expect(result).toEqual([
        { email: "new@test.com" },
        { email: "existing@test.com", error: "already-member" },
      ])
    })

    it("should mark invalid emails", () => {
      const result = validateInviteChips(["valid@test.com", "invalid"], [])
      expect(result).toEqual([
        { email: "valid@test.com" },
        { email: "invalid", error: "invalid" },
      ])
    })

    it("should mark duplicate emails", () => {
      const result = validateInviteChips(
        ["test@test.com", "test@test.com"],
        []
      )
      expect(result).toEqual([
        { email: "test@test.com" },
        { email: "test@test.com", error: "duplicate" },
      ])
    })

    it("should be case-insensitive for duplicates and existing", () => {
      const result = validateInviteChips(
        ["Test@Test.com", "test@test.com", "EXISTING@TEST.COM"],
        ["existing@test.com"]
      )
      expect(result[0]).toEqual({ email: "Test@Test.com" })
      expect(result[1].error).toBe("duplicate")
      expect(result[2].error).toBe("already-member")
    })

    it("should handle multiple error types", () => {
      const result = validateInviteChips(
        ["valid@test.com", "invalid", "existing@test.com", "valid@test.com"],
        ["existing@test.com"]
      )
      expect(result[0]).toEqual({ email: "valid@test.com" })
      expect(result[1].error).toBe("invalid")
      expect(result[2].error).toBe("already-member")
      expect(result[3].error).toBe("duplicate")
    })
  })

  describe("formatInviteErrors", () => {
    it("should format already-member errors", () => {
      const chips = [
        { email: "a@test.com", error: "already-member" as const },
        { email: "b@test.com", error: "already-member" as const },
      ]
      expect(formatInviteErrors(chips)).toBe(
        "Already in workspace: a@test.com, b@test.com"
      )
    })

    it("should format invalid errors", () => {
      const chips = [
        { email: "invalid1", error: "invalid" as const },
        { email: "invalid2", error: "invalid" as const },
      ]
      expect(formatInviteErrors(chips)).toBe("Check: invalid1, invalid2")
    })

    it("should format both error types", () => {
      const chips = [
        { email: "existing@test.com", error: "already-member" as const },
        { email: "invalid", error: "invalid" as const },
      ]
      expect(formatInviteErrors(chips)).toBe(
        "Already in workspace: existing@test.com. Check: invalid"
      )
    })

    it("should return empty string for no errors", () => {
      const chips = [{ email: "valid@test.com" }]
      expect(formatInviteErrors(chips)).toBe("")
    })

    it("should treat duplicate as invalid", () => {
      const chips = [
        { email: "test@test.com", error: "duplicate" as const },
      ]
      expect(formatInviteErrors(chips)).toBe("Check: test@test.com")
    })
  })

  describe("shouldShowQuietHoursEndHelper", () => {
    it("should always return true", () => {
      expect(shouldShowQuietHoursEndHelper()).toBe(true)
    })
  })
})
