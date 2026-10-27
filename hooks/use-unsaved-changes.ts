"use client"

import { useEffect, useRef, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"

export interface UseUnsavedChangesOptions {
  isDirty: boolean
  message?: string
  onNavigateAway?: () => Promise<boolean>
}

export function useUnsavedChanges({
  isDirty,
  message = "You have unsaved changes. Leave without saving?",
  onNavigateAway,
}: UseUnsavedChangesOptions) {
  const pathname = usePathname()
  const router = useRouter()
  const sentinelPushedRef = useRef(false)
  const leavingRef = useRef(false)

  // Reset leaving flag when form becomes clean
  useEffect(() => {
    if (!isDirty) {
      leavingRef.current = false
    }
  }, [isDirty])

  // Push sentinel when becoming dirty, remove when clean
  useEffect(() => {
    if (isDirty && !sentinelPushedRef.current && !leavingRef.current) {
      history.pushState({ sentinel: true, page: pathname }, "", window.location.href)
      sentinelPushedRef.current = true
    } else if (!isDirty && sentinelPushedRef.current && !leavingRef.current) {
      if (history.state?.sentinel) {
        history.back()
      }
      sentinelPushedRef.current = false
    }
  }, [isDirty, pathname])

  const handleLeave = useCallback(async () => {
    if (onNavigateAway) {
      return await onNavigateAway()
    } else {
      return window.confirm(message)
    }
  }, [message, onNavigateAway])

  useEffect(() => {
    // Handle browser back/forward
    const handlePopState = async () => {
      if (leavingRef.current || !isDirty) {
        sentinelPushedRef.current = false
        return
      }

      // Back was pressed while dirty and sentinel was on top
      // Sentinel has been popped, but Next hasn't changed the route yet
      if (sentinelPushedRef.current) {
        // Temporarily mark as not having sentinel
        sentinelPushedRef.current = false
        
        const shouldLeave = await handleLeave()
        
        if (shouldLeave) {
          // User wants to leave - navigate back to the previous page
          leavingRef.current = true
          router.back()
        } else {
          // User wants to keep editing - push sentinel again
          history.pushState({ sentinel: true, page: pathname }, "", window.location.href)
          sentinelPushedRef.current = true
        }
      }
    }

    // Handle beforeunload (page close/reload)
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (leavingRef.current || !isDirty) return
      e.preventDefault()
      e.returnValue = message
      return message
    }

    // Handle in-app navigation via links
    const handleClick = async (e: MouseEvent) => {
      if (leavingRef.current || !isDirty) return

      const target = e.target as HTMLElement
      const anchor = target.closest("a")
      
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (
        !href ||
        anchor.getAttribute("target") === "_blank" ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("//")
      ) {
        return
      }

      const url = new URL(href, window.location.origin)
      if (url.pathname === pathname) {
        return
      }

      // Prevent the navigation
      e.preventDefault()
      e.stopPropagation()

      const shouldLeave = await handleLeave()
      
      if (shouldLeave) {
        // Set leaving flag and navigate
        leavingRef.current = true
        sentinelPushedRef.current = false
        
        // If sentinel is on top, replace it; otherwise just navigate
        if (history.state?.sentinel) {
          router.replace(href)
        } else {
          router.push(href)
        }
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    window.addEventListener("popstate", handlePopState)
    document.addEventListener("click", handleClick, { capture: true })

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
      window.removeEventListener("popstate", handlePopState)
      document.removeEventListener("click", handleClick, { capture: true })
    }
  }, [isDirty, message, pathname, router, handleLeave])
}
