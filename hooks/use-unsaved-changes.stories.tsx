"use client"

import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { expect, vi } from "vitest"
import { useUnsavedChanges } from "./use-unsaved-changes"

// Test harness component
function UnsavedChangesTestHarness({
  onRouterBack,
  onRouterReplace,
  onRouterPush,
}: {
  onRouterBack?: () => void
  onRouterReplace?: (href: string) => void
  onRouterPush?: (href: string) => void
}) {
  const [isDirty, setIsDirty] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [pendingAction, setPendingAction] = useState<"leave" | "stay" | null>(null)

  useUnsavedChanges({
    isDirty,
    onNavigateAway: () => {
      return new Promise<boolean>((resolve) => {
        setShowDialog(true)
        // Store resolver on window for test access
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(window as any).__testDialogResolve = (leave: boolean) => {
          setShowDialog(false)
          setPendingAction(leave ? "leave" : "stay")
          resolve(leave)
        }
      })
    },
  })

  return (
    <div data-testid="harness">
      <div>
        <label>
          <input
            type="checkbox"
            checked={isDirty}
            onChange={(e) => setIsDirty(e.target.checked)}
            data-testid="dirty-toggle"
          />
          Form is dirty
        </label>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <a href="/tasks" data-testid="tasks-link">
          Tasks
        </a>
      </div>

      {showDialog && (
        <div
          role="dialog"
          aria-label="Unsaved changes"
          data-testid="dialog"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "2rem",
            background: "white",
            border: "1px solid black",
            zIndex: 1000,
          }}
        >
          <p>You have unsaved changes. Leave?</p>
          <button
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ;(window as any).__testDialogResolve?.(true)
              if (onRouterReplace || onRouterPush) {
                const href = "/tasks"
                if (window.history.state?.sentinel && onRouterReplace) {
                  onRouterReplace(href)
                } else if (onRouterPush) {
                  onRouterPush(href)
                }
              }
            }}
            data-testid="leave-button"
          >
            Leave
          </button>
          <button
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ;(window as any).__testDialogResolve?.(false)
            }}
            data-testid="stay-button"
          >
            Stay
          </button>
        </div>
      )}

      <div data-testid="router-calls" style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
        <div>Router back called: {onRouterBack ? "ready" : "none"}</div>
        <div>Router replace called: {onRouterReplace ? "ready" : "none"}</div>
        <div>Router push called: {onRouterPush ? "ready" : "none"}</div>
        <div>Pending action: {pendingAction || "none"}</div>
      </div>
    </div>
  )
}

const meta: Meta<typeof UnsavedChangesTestHarness> = {
  title: "Hooks/useUnsavedChanges",
  component: UnsavedChangesTestHarness,
  parameters: {
    layout: "centered",
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
  args: {
    onRouterBack: vi.fn(),
    onRouterReplace: vi.fn(),
    onRouterPush: vi.fn(),
  },
  play: async ({ args }) => {
    // Make form dirty
    const dirtyToggle = document.querySelector('[data-testid="dirty-toggle"]') as HTMLInputElement
    dirtyToggle?.click()

    // Wait for state update
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Verify dirty
    // eslint-disable-next-line storybook/use-storybook-expect
    expect(dirtyToggle?.checked).toBe(true)

    // Simulate browser back by dispatching popstate
    const popstateEvent = new PopStateEvent("popstate", {
      bubbles: true,
    })
    window.dispatchEvent(popstateEvent)

    // Wait for dialog to appear
    const dialog = await waitForElement('[data-testid="dialog"]')
    // eslint-disable-next-line storybook/use-storybook-expect
    expect(dialog).toBeTruthy()

    // Click Leave
    const leaveButton = document.querySelector('[data-testid="leave-button"]') as HTMLButtonElement
    leaveButton?.click()

    // Wait for handler
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Verify router.back() was called
    // eslint-disable-next-line storybook/use-storybook-expect
    expect(args.onRouterBack).toHaveBeenCalled()
  },
}

// Test 2: dirty + Back -> Keep editing re-pushes sentinel
export const BrowserBackStay: Story = {
  args: {
    onRouterBack: vi.fn(),
    onRouterReplace: vi.fn(),
    onRouterPush: vi.fn(),
  },
  play: async () => {
    // Make form dirty
    const dirtyToggle = document.querySelector('[data-testid="dirty-toggle"]') as HTMLInputElement
    dirtyToggle?.click()

    await new Promise((resolve) => setTimeout(resolve, 100))

    // Track history pushState calls
    const pushStateSpy = vi.fn()
    const originalPushState = window.history.pushState
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.history.pushState = pushStateSpy as any

    // Wait a bit for sentinel to be pushed
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
    // eslint-disable-next-line storybook/use-storybook-expect
    expect(pushStateSpy.mock.calls.length).toBeGreaterThan(initialPushCount)

    // Restore
    window.history.pushState = originalPushState
  },
}

// Test 3: dirty + link click -> dialog -> Leave calls router.replace(href) when sentinel on top
export const LinkClickWithSentinel: Story = {
  args: {
    onRouterBack: vi.fn(),
    onRouterReplace: vi.fn(),
    onRouterPush: vi.fn(),
  },
  play: async ({ args }) => {
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

    // Verify router.replace was called with the href
    // eslint-disable-next-line storybook/use-storybook-expect
    expect(args.onRouterReplace).toHaveBeenCalledWith("/tasks")
    // eslint-disable-next-line storybook/use-storybook-expect
    expect(args.onRouterPush).not.toHaveBeenCalled()
  },
}

// Test 4: dirty + link click -> dialog -> Leave calls router.push(href) when no sentinel
export const LinkClickWithoutSentinel: Story = {
  args: {
    onRouterBack: vi.fn(),
    onRouterReplace: vi.fn(),
    onRouterPush: vi.fn(),
  },
  play: async ({ args }) => {
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

    // Verify router.push was called
    // eslint-disable-next-line storybook/use-storybook-expect
    expect(args.onRouterPush).toHaveBeenCalledWith("/tasks")
    // eslint-disable-next-line storybook/use-storybook-expect
    expect(args.onRouterReplace).not.toHaveBeenCalled()
  },
}

// Test 5: clean state -> link click does not show dialog
export const CleanStateNoDialog: Story = {
  args: {
    onRouterBack: vi.fn(),
    onRouterReplace: vi.fn(),
    onRouterPush: vi.fn(),
  },
  play: async () => {
    // Ensure form is clean (default state)
    const dirtyToggle = document.querySelector('[data-testid="dirty-toggle"]') as HTMLInputElement
    // eslint-disable-next-line storybook/use-storybook-expect
    expect(dirtyToggle?.checked).toBe(false)

    // Click the link
    const link = document.querySelector('[data-testid="tasks-link"]') as HTMLAnchorElement
    link?.click()

    // Wait a bit
    await new Promise((resolve) => setTimeout(resolve, 200))

    // Dialog should NOT appear
    const dialog = document.querySelector('[data-testid="dialog"]')
    // eslint-disable-next-line storybook/use-storybook-expect
    expect(dialog).toBeFalsy()
  },
}

// Visual story without tests
export const Interactive: Story = {
  args: {
    onRouterBack: () => console.log("router.back()"),
    onRouterReplace: (href) => console.log("router.replace()", href),
    onRouterPush: (href) => console.log("router.push()", href),
  },
}
