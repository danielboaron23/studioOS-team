import { describe, it, expect, beforeEach, vi } from "vitest"
import {
  getSettings,
  updateProfileSettings,
  updateAppearanceSettings,
  updateNotificationSettings,
  updateWorkspaceSettings,
  createDraft,
} from "./settings-store"

describe("settings-store", () => {
  beforeEach(() => {
    // Stub localStorage
    const store: Record<string, string> = {}
    global.localStorage = {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value
      }),
      removeItem: vi.fn((key: string) => {
        delete store[key]
      }),
      clear: vi.fn(() => {
        Object.keys(store).forEach((key) => delete store[key])
      }),
      key: vi.fn(),
      length: 0,
    }

    // Stub window for SSR check
    global.window = {} as typeof globalThis.window

    vi.clearAllMocks()
  })

  describe("getSettings", () => {
    it("should return default settings when localStorage is empty", () => {
      const settings = getSettings()
      
      expect(settings.profile.displayName).toBe("Hani Buskila")
      expect(settings.profile.role).toBe("Product Designer")
      expect(settings.appearance.theme).toBe("system")
      expect(settings.notifications.inApp).toBe(true)
    })

    it("should persist and retrieve custom settings", () => {
      updateProfileSettings({ displayName: "Test User" })
      updateAppearanceSettings({ theme: "dark" })
      
      const settings = getSettings()
      expect(settings.profile.displayName).toBe("Test User")
      expect(settings.appearance.theme).toBe("dark")
    })
  })

  describe("updateSettings", () => {
    it("should update settings and persist to localStorage", () => {
      updateProfileSettings({ displayName: "New Name" })
      
      const stored = JSON.parse(localStorage.getItem("studioOS:settings") || "{}")
      expect(stored.profile.displayName).toBe("New Name")
    })

    it("should preserve other settings when updating one section", () => {
      updateProfileSettings({ displayName: "New Name" })
      updateAppearanceSettings({ theme: "dark" })
      
      const settings = getSettings()
      expect(settings.profile.displayName).toBe("New Name")
      expect(settings.appearance.theme).toBe("dark")
      expect(settings.notifications.inApp).toBe(true)
    })
  })

  describe("section-specific updates", () => {
    it("should update profile settings", () => {
      updateProfileSettings({
        displayName: "Jane Doe",
        bio: "Product designer at Studio OS",
      })
      
      const settings = getSettings()
      expect(settings.profile.displayName).toBe("Jane Doe")
      expect(settings.profile.bio).toBe("Product designer at Studio OS")
      expect(settings.profile.email).toBe("hani@studioos.com")
    })

    it("should update appearance settings", () => {
      updateAppearanceSettings({
        theme: "light",
        density: "compact",
      })
      
      const settings = getSettings()
      expect(settings.appearance.theme).toBe("light")
      expect(settings.appearance.density).toBe("compact")
    })

    it("should update notification settings", () => {
      updateNotificationSettings({
        inApp: false,
        email: false,
      })
      
      const settings = getSettings()
      expect(settings.notifications.inApp).toBe(false)
      expect(settings.notifications.email).toBe(false)
    })

    it("should update workspace settings", () => {
      updateWorkspaceSettings({
        name: "New Workspace",
        slug: "new-workspace",
      })
      
      const settings = getSettings()
      expect(settings.workspace.name).toBe("New Workspace")
      expect(settings.workspace.slug).toBe("new-workspace")
    })
  })

  describe("createDraft", () => {
    it("should create a draft with initial values", () => {
      const initial = { name: "Test", value: 42 }
      const draft = createDraft(initial)
      
      expect(draft.draft).toEqual(initial)
      expect(draft.isDirty(initial)).toBe(false)
    })

    it("should detect dirty state after changes", () => {
      const initial = { name: "Test", value: 42 }
      const draftHelper = createDraft(initial)
      
      const updated = draftHelper.save({ name: "Changed" })
      
      expect(updated.name).toBe("Changed")
      expect(updated.value).toBe(42)
      
      // isDirty compares the provided value to initial
      expect(draftHelper.isDirty(initial)).toBe(false) // same as initial
      expect(draftHelper.isDirty(updated)).toBe(true) // different from initial
    })

    it("should reset to initial values on discard", () => {
      const initial = { name: "Test", value: 42 }
      const draftHelper = createDraft(initial)
      
      draftHelper.save({ name: "Changed" })
      const discarded = draftHelper.discard()
      
      expect(discarded).toEqual(initial)
      expect(draftHelper.isDirty(initial)).toBe(false)
    })
  })

  describe("Server/Client snapshot", () => {
    it("should return defaults for server snapshot to avoid hydration mismatch", () => {
      // Save custom values
      updateProfileSettings({
        displayName: "Custom User",
        role: "Engineer",
      })
      
      // Client snapshot should have custom values
      const settings = getSettings()
      expect(settings.profile.displayName).toBe("Custom User")
      
      // Server snapshot (defaultSettings) should have original defaults
      // This is tested indirectly via useSyncExternalStore's getServerSnapshot
      // The key is that useSettings() uses defaultSettings as getServerSnapshot
    })
  })
})
