"use client"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { expect } from "storybook/test"
import { getRouter } from "@storybook/nextjs-vite/navigation.mock"
import { UnsavedChangesTestHarness, waitForElement } from "./unsaved-changes-harness"

const meta: Meta<typeof UnsavedChangesTestHarness> = {
  title: "Hooks/useUnsavedChanges/Link",
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

// Test: dirty + link click -> dialog -> Leave calls router.push(href) when no sentinel
export const LinkClickWithoutSentinel: Story = {
  play: async () => {
    const router = getRouter()
    router.replace.mockClear()
    router.push.mockClear()

    // Make form dirty
    const dirtyToggle = document.querySelector('[data-testid="dirty-toggle"]') as HTMLInputElement
    dirtyToggle?.click()

    await new Promise((resolve) => setTimeout(resolve, 100))

    // Push state WITHOUT sentinel using history.pushState
    window.history.pushState({}, "", window.location.href)

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

// Test: dirty + link click -> dialog -> Leave calls router.replace(href) when sentinel on top
export const LinkClickWithSentinel: Story = {
  play: async () => {
    const router = getRouter()
    router.replace.mockClear()
    router.push.mockClear()

    // Make form dirty
    const dirtyToggle = document.querySelector('[data-testid="dirty-toggle"]') as HTMLInputElement
    dirtyToggle?.click()

    await new Promise((resolve) => setTimeout(resolve, 100))

    // Push sentinel state using history.pushState
    window.history.pushState({ sentinel: true }, "", window.location.href)

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
