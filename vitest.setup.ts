import { vi } from "vitest"

// Setup matchMedia mock before any test files load
const createMatchMediaMock = (matches: boolean) => ({
  matches,
  media: "(prefers-color-scheme: dark)",
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
  addListener: vi.fn(),
  removeListener: vi.fn(),
})

Object.defineProperty(window, "matchMedia", {
  writable: true,
  configurable: true,
  value: vi.fn().mockImplementation(() => createMatchMediaMock(false)),
})
