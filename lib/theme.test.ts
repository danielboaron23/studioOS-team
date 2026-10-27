import { describe, it, expect, beforeEach, vi } from "vitest"
import { setTheme, useTheme } from "./theme"

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
    localStorage.clear()
    document.documentElement.classList.remove("dark")
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
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockImplementation(() => createMatchMediaMock(true)),
      })
      
      setTheme("system")
      
      expect(localStorage.getItem("theme")).toBe("system")
      expect(document.documentElement.classList.contains("dark")).toBe(true)
    })

    it("should resolve system theme to light when prefers light", () => {
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockImplementation(() => createMatchMediaMock(false)),
      })
      
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
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockImplementation(() => createMatchMediaMock(true)),
      })
      
      setTheme("system")
      
      expect(localStorage.getItem("theme")).toBe("system")
      expect(document.documentElement.classList.contains("dark")).toBe(true)
    })
  })
})
