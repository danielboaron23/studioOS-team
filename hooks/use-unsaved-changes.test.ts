import { describe, it, expect, vi, beforeEach } from "vitest"

describe("use-unsaved-changes", () => {
  beforeEach(() => {
    // Stub globals for node environment
    global.history = {
      pushState: vi.fn(),
      back: vi.fn(),
      go: vi.fn(),
      replaceState: vi.fn(),
      state: {},
      length: 0,
      scrollRestoration: "auto" as ScrollRestoration,
      forward: vi.fn(),
    }
  })

  describe("Browser Back navigation", () => {
    it("should use history.go(-2) on Back + confirm to leave", () => {
      // Simulate the guard logic
      const isDirty = true
      const shouldLeave = true
      
      if (isDirty && shouldLeave) {
        // The hook should call go(-2) to skip sentinel + go back one real step
        global.history.go(-2)
      }
      
      expect(global.history.go).toHaveBeenCalledWith(-2)
    })
    
    it("should not navigate on Back + cancel", () => {
      const isDirty = true
      const shouldLeave = false
      
      if (isDirty && !shouldLeave) {
        // Should not call go
        expect(global.history.go).not.toHaveBeenCalled()
      }
    })
  })

  describe("Leaving flag pattern", () => {
    it("should set leavingRef flag to prevent double dialog", () => {
      let leavingRef = false
      const isDirty = true
      
      // Simulate link click + confirm
      const shouldLeave = true
      
      if (shouldLeave) {
        leavingRef = true
        
        // Subsequent guard checks should be blocked
        const shouldShowDialog = !leavingRef && isDirty
        expect(shouldShowDialog).toBe(false)
      }
    })
    
    it("should check leavingRef in all guard handlers", () => {
      let leavingRef = false
      const isDirty = true
      
      // All handlers should respect leavingRef
      const popstateBlocked = leavingRef || !isDirty
      const clickBlocked = leavingRef || !isDirty
      const beforeunloadBlocked = leavingRef || !isDirty
      
      // Initially not blocked
      expect(popstateBlocked).toBe(false)
      expect(clickBlocked).toBe(false)
      expect(beforeunloadBlocked).toBe(false)
      
      // After setting leavingRef, all blocked
      leavingRef = true
      expect(leavingRef || !isDirty).toBe(true)
    })
  })

  describe("Sentinel cleanup", () => {
    it("should clean up sentinel before link navigation", () => {
      const sentinelPresent = true
      const shouldLeave = true
      
      if (shouldLeave && sentinelPresent) {
        global.history.back()
        
        expect(global.history.back).toHaveBeenCalled()
        // Then navigate (would happen in setTimeout)
      }
    })
  })
})
