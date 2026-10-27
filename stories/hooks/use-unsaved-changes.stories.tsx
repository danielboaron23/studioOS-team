"use client"

import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { expect, fn } from "storybook/test"
import { getRouter } from "@storybook/nextjs-vite/navigation.mock"
import { useUnsavedChanges } from "@/hooks/use-unsaved-changes"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Test harness component
function UnsavedChangesTestHarness() {
  const [isDirty, setIsDirty] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  useUnsavedChanges({
    isDirty,
    onNavigateAway: () => {
      return new Promise<boolean>((resolve) => {
        setShowDialog(true)
        // Store resolver for test access
        interface WindowWithTest extends Window {
          __testDialogResolve?: (leave: boolean) => void
        }
        ;(window as WindowWithTest).__testDialogResolve = (leave: boolean) => {
          setShowDialog(false)
          resolve(leave)
        }
      })
    },
  })

  return (
    <div data-testid="harness" className="p-6 space-y-4">
      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isDirty}
            onChange={(e) => setIsDirty(e.target.checked)}
            data-testid="dirty-toggle"
            className="size-4"
          />
          <span className="text-sm">Form is dirty</span>
        </label>
      </div>

      <div>
        <a
          href="/tasks"
          data-testid="tasks-link"
          className="text-primary underline-offset-4 hover:underline"
        >
          Tasks
        </a>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent data-testid="dialog" aria-describedby="dialog-description">
          <DialogHeader>
            <DialogTitle>You have unsaved changes. Leave?</DialogTitle>
          </DialogHeader>
          <p id="dialog-description" className="sr-only">
            You have unsaved changes that will be lost if you leave this page.
          </p>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                interface WindowWithTest extends Window {
                  __testDialogResolve?: (leave: boolean) => void
                }
                ;(window as WindowWithTest).__testDialogResolve?.(false)
              }}
              data-testid="stay-button"
            >
              Stay
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                interface WindowWithTest extends Window {
                  __testDialogResolve?: (leave: boolean) => void
                }
                ;(window as WindowWithTest).__testDialogResolve?.(true)
              }}
              data-testid="leave-button"
            >
              Leave
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const meta: Meta<typeof UnsavedChangesTestHarness> = {
  title: "Hooks/useUnsavedChanges",
  component: UnsavedChangesTestHarness,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/test-page",
      },
    },
    docs: {
      description: {
        component:
          "Hook for guarding navigation when form has unsaved changes. Tests browser Back navigation and link click interception.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof UnsavedChangesTestHarness>

// Helper to wait for element
function waitForElement(selector: string, timeout = 3000): Promise<HTMLElement> {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector) as HTMLElement
    if (element) {
      resolve(element)
      return
    }

    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector) as HTMLElement
      if (el) {
        observer.disconnect()
        resolve(el)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    setTimeout(() => {
      observer.disconnect()
      reject(new Error(`Element ${selector} not found after ${timeout}ms`))
    }, timeout)
  })
}

// Test 1: dirty + Back (popstate) -> dialog -> Leave calls router.back()
export const BrowserBackLeave: Story = {
  play: async () => {
    const router = getRouter()
    router.back.mockClear()

    // Make form dirty
    const dirtyToggle = document.querySelector('[data-testid="dirty-toggle"]') as HTMLInputElement
    dirtyToggle?.click()

    await new Promise((resolve) => setTimeout(resolve, 100))

    expect(dirtyToggle?.checked).toBe(true)

    // Simulate browser back by dispatching popstate
    const popstateEvent = new PopStateEvent("popstate", {
      bubbles: true,
    })
    window.dispatchEvent(popstateEvent)

    // Wait for dialog to appear
    const dialog = await waitForElement('[data-testid="dialog"]')
    expect(dialog).toBeTruthy()

    // Click Leave
    const leaveButton = document.querySelector('[data-testid="leave-button"]') as HTMLButtonElement
    leaveButton?.click()

    await new Promise((resolve) => setTimeout(resolve, 100))

    // Verify router.back() was called by the hook
    expect(router.back).toHaveBeenCalled()
  },
}

// Test 2: dirty + Back -> Keep editing re-pushes sentinel
export const BrowserBackStay: Story = {
  play: async () => {
    // Make form dirty
    const dirtyToggle = document.querySelector('[data-testid="dirty-toggle"]') as HTMLInputElement
    dirtyToggle?.click()

    await new Promise((resolve) => setTimeout(resolve, 100))

    // Track history pushState calls
    const pushStateSpy = fn()
    const originalPushState = window.history.pushState
    window.history.pushState = pushStateSpy as unknown as typeof window.history.pushState

    // Wait for sentinel to be pushed
    await new Promise((resolve) => setTimeout(resolve, 100))
    const initialPushCount = pushStateSpy.mock.calls.length

    // Simulate browser back
    const popstateEvent = new PopStateEvent("popstate", {
      bubbles: true,
    })
    window.dispatchEvent(popstateEvent)

    // Wait for dialog
    await waitForElement('[data-testid="dialog"]')

    // Click Stay
    const stayButton = document.querySelector('[data-testid="stay-button"]') as HTMLButtonElement
    stayButton?.click()

    // Wait for sentinel to be re-pushed
    await new Promise((resolve) => setTimeout(resolve, 200))

    // Verify sentinel was re-pushed (pushState called again)
    expect(pushStateSpy.mock.calls.length).toBeGreaterThan(initialPushCount)

    // Restore
    window.history.pushState = originalPushState
  },
}

// Test 3: dirty + link click -> dialog -> Leave calls router.replace(href) when sentinel on top
export const LinkClickWithSentinel: Story = {
  play: async () => {
    const router = getRouter()
    router.replace.mockClear()
    router.push.mockClear()

    // Make form dirty
    const dirtyToggle = document.querySelector('[data-testid="dirty-toggle"]') as HTMLInputElement
    dirtyToggle?.click()

    await new Promise((resolve) => setTimeout(resolve, 100))

    // Mock history.state to have sentinel
    Object.defineProperty(window.history, "state", {
      writable: true,
      configurable: true,
      value: { sentinel: true },
    })

    // Click the link
    const link = document.querySelector('[data-testid="tasks-link"]') as HTMLAnchorElement
    link?.click()

    // Wait for dialog
    await waitForElement('[data-testid="dialog"]')

    // Click Leave
    const leaveButton = document.querySelector('[data-testid="leave-button"]') as HTMLButtonElement
    leaveButton?.click()

    await new Promise((resolve) => setTimeout(resolve, 100))

    // Verify router.replace was called with the href by the hook
    expect(router.replace).toHaveBeenCalledWith("/tasks")
    expect(router.push).not.toHaveBeenCalled()
  },
}

// Test 4: dirty + link click -> dialog -> Leave calls router.push(href) when no sentinel
export const LinkClickWithoutSentinel: Story = {
  play: async () => {
    const router = getRouter()
    router.replace.mockClear()
    router.push.mockClear()

    // Make form dirty
    const dirtyToggle = document.querySelector('[data-testid="dirty-toggle"]') as HTMLInputElement
    dirtyToggle?.click()

    await new Promise((resolve) => setTimeout(resolve, 100))

    // Mock history.state to NOT have sentinel
    Object.defineProperty(window.history, "state", {
      writable: true,
      configurable: true,
      value: {},
    })

    // Click the link
    const link = document.querySelector('[data-testid="tasks-link"]') as HTMLAnchorElement
    link?.click()

    // Wait for dialog
    await waitForElement('[data-testid="dialog"]')

    // Click Leave
    const leaveButton = document.querySelector('[data-testid="leave-button"]') as HTMLButtonElement
    leaveButton?.click()

    await new Promise((resolve) => setTimeout(resolve, 100))

    // Verify router.push was called by the hook
    expect(router.push).toHaveBeenCalledWith("/tasks")
    expect(router.replace).not.toHaveBeenCalled()
  },
}

// Test 5: clean state -> link click does not show dialog
export const CleanStateNoDialog: Story = {
  play: async () => {
    // Ensure form is clean (default state)
    const dirtyToggle = document.querySelector('[data-testid="dirty-toggle"]') as HTMLInputElement
    expect(dirtyToggle?.checked).toBe(false)

    // Click the link
    const link = document.querySelector('[data-testid="tasks-link"]') as HTMLAnchorElement
    link?.click()

    // Wait a bit
    await new Promise((resolve) => setTimeout(resolve, 200))

    // Dialog should NOT appear
    const dialog = document.querySelector('[data-testid="dialog"]')
    expect(dialog).toBeFalsy()
  },
}

// Visual story without tests
export const Interactive: Story = {}
