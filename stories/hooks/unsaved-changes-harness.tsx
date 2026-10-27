"use client"

import { useState } from "react"
import { useUnsavedChanges } from "@/hooks/use-unsaved-changes"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function UnsavedChangesTestHarness() {
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
          <DialogDescription className="sr-only">
            You have unsaved changes that will be lost if you leave this page.
          </DialogDescription>
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

export function waitForElement(selector: string, timeout = 3000): Promise<HTMLElement> {
  return new Promise((resolve, reject) => {
    const startTime = Date.now()
    const checkElement = () => {
      const element = document.querySelector(selector) as HTMLElement | null
      if (element) {
        resolve(element)
      } else if (Date.now() - startTime > timeout) {
        reject(new Error(`Element ${selector} not found within ${timeout}ms`))
      } else {
        setTimeout(checkElement, 50)
      }
    }
    checkElement()
  })
}
