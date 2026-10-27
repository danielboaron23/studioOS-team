import { describe, it, expect, beforeEach, vi } from "vitest"
import { setTheme } from "./theme"

// In-test stubs for browser APIs
const createMatchMediaMock = (matches: boolean) => ({
  matches,
  media: "(prefers-color-scheme: dark)",
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
  addListener: vi.fn(),
  removeListener: vi.fn(),
})

describe("theme", () => {
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

    // Stub document.documentElement.classList
    const classList = new Set<string>()
    global.document = {
      documentElement: {
        classList: {
          add: vi.fn((cls: string) => classList.add(cls)),
          remove: vi.fn((cls: string) => classList.delete(cls)),
          toggle: vi.fn((cls: string, force?: boolean) => {
            if (force === undefined) {
              if (classList.has(cls)) {
                classList.delete(cls)
                return false
              } else {
                classList.add(cls)
                return true
              }
            } else if (force) {
              classList.add(cls)
            } else {
              classList.delete(cls)
            }
          }),
          contains: vi.fn((cls: string) => classList.has(cls)),
        },
      },
    } as typeof globalThis.document

    // Stub matchMedia
    global.window = {
      matchMedia: vi.fn(() => createMatchMediaMock(false)),
    } as typeof globalThis.window

    vi.clearAllMocks()
  })

  describe("setTheme", () => {
    it("should set theme to light and remove dark class", () => {
      setTheme("light")
      
      expect(localStorage.getItem("theme")).toBe("light")
      expect(document.documentElement.classList.contains("dark")).toBe(false)
    })

    it("should set theme to dark and add dark class", () => {
      setTheme("dark")
      
      expect(localStorage.getItem("theme")).toBe("dark")
      expect(document.documentElement.classList.contains("dark")).toBe(true)
    })

    it("should resolve system theme based on prefers-color-scheme", () => {
      global.window = {
        matchMedia: vi.fn(() => createMatchMediaMock(true)),
      } as typeof globalThis.window
      
      setTheme("system")
      
      expect(localStorage.getItem("theme")).toBe("system")
      expect(document.documentElement.classList.contains("dark")).toBe(true)
    })

    it("should resolve system theme to light when prefers light", () => {
      global.window = {
        matchMedia: vi.fn(() => createMatchMediaMock(false)),
      } as typeof globalThis.window
      
      setTheme("system")
      
      expect(localStorage.getItem("theme")).toBe("system")
      expect(document.documentElement.classList.contains("dark")).toBe(false)
    })
  })

  describe("theme persistence", () => {
    it("should persist theme to localStorage", () => {
      setTheme("dark")
      
      expect(localStorage.getItem("theme")).toBe("dark")
    })
  })

  describe("resolved theme", () => {
    it("should apply dark class when theme is dark", () => {
      setTheme("dark")
      
      expect(document.documentElement.classList.contains("dark")).toBe(true)
    })

    it("should remove dark class when theme is light", () => {
      setTheme("dark")
      setTheme("light")
      
      expect(document.documentElement.classList.contains("dark")).toBe(false)
    })

    it("should resolve system theme based on prefers-color-scheme", () => {
      global.window = {
        matchMedia: vi.fn(() => createMatchMediaMock(true)),
      } as typeof globalThis.window
      
      setTheme("system")
      
      expect(localStorage.getItem("theme")).toBe("system")
      expect(document.documentElement.classList.contains("dark")).toBe(true)
    })
  })
})
