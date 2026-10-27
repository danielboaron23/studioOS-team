import { describe, it, expect } from "vitest"
import { useUnsavedChanges } from "./use-unsaved-changes"

describe("useUnsavedChanges", () => {
  it("exports the hook", () => {
    expect(useUnsavedChanges).toBeDefined()
    expect(typeof useUnsavedChanges).toBe("function")
  })
})
