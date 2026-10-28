"use client"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { expect } from "storybook/test"
import { UnsavedChangesTestHarness } from "./unsaved-changes-harness"

const meta: Meta<typeof UnsavedChangesTestHarness> = {
  title: "Hooks/useUnsavedChanges/Clean",
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

// Test: clean state -> link click does not show dialog
export const CleanStateNoDialog: Story = {
  play: async () => {
    // Ensure form is clean (default state)
    const dirtyToggle = document.querySelector('[data-testid="dirty-toggle"]') as HTMLInputElement
    expect(dirtyToggle?.checked).toBe(false)

    // Dialog should NOT be visible initially
    const dialog = document.querySelector('[data-testid="dialog"]')
    expect(dialog).toBeFalsy()
  },
}
