"use client"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { expect } from "storybook/test"
import { getRouter } from "@storybook/nextjs-vite/navigation.mock"
import { UnsavedChangesTestHarness, waitForElement } from "./unsaved-changes-harness"

const meta: Meta<typeof UnsavedChangesTestHarness> = {
  title: "Hooks/useUnsavedChanges/Back",
  component: UnsavedChangesTestHarness,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/test-page",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof UnsavedChangesTestHarness>

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

    // Verify sentinel was initially pushed
    expect(window.history.state).toHaveProperty('sentinel', true)

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

    // Verify sentinel is still on top (was re-pushed after clicking Stay)
    expect(window.history.state).toHaveProperty('sentinel', true)
  },
}
