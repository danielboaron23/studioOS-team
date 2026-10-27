"use client"

import { useEffect, useCallback, useRef } from "react"
import { usePathname } from "next/navigation"

export interface UseUnsavedChangesOptions {
  isDirty: boolean
  message?: string
  onNavigateAway?: () => boolean | Promise<boolean>
}

export function useUnsavedChanges({
  isDirty,
  message = "You have unsaved changes. Are you sure you want to leave?",
  onNavigateAway,
}: UseUnsavedChangesOptions) {
  const pathname = usePathname()
  const previousPathname = useRef(pathname)

  const handleBeforeUnload = useCallback(
    (e: BeforeUnloadEvent) => {
      if (!isDirty) return
      e.preventDefault()
      e.returnValue = message
      return message
    },
    [isDirty, message]
  )

  useEffect(() => {
    if (!isDirty) return

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [isDirty, handleBeforeUnload])

  useEffect(() => {
    if (pathname !== previousPathname.current && isDirty && onNavigateAway) {
      const shouldNavigate = onNavigateAway()
      
      if (shouldNavigate instanceof Promise) {
        shouldNavigate.then((result) => {
          if (!result) {
            window.history.pushState(null, "", previousPathname.current)
          }
        })
      } else if (!shouldNavigate) {
        window.history.pushState(null, "", previousPathname.current)
      }
    }
    
    previousPathname.current = pathname
  }, [pathname, isDirty, onNavigateAway])
}
