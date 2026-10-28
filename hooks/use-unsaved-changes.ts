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
  const skipSentinelCleanupRef = useRef(false)
  const pendingHrefRef = useRef<string | null>(null)

  // Reset flags when pathname changes (navigation completed)
  useEffect(() => {
    leavingRef.current = false
    skipSentinelCleanupRef.current = false
    pendingHrefRef.current = null
  }, [pathname])

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
    } else if (!isDirty && sentinelPushedRef.current && !leavingRef.current && !skipSentinelCleanupRef.current) {
      // Only clean up sentinel if we're not in the middle of an intentional navigation
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
      if (sentinelPushedRef.current) {
        // Temporarily mark as not having sentinel
        sentinelPushedRef.current = false
        
        const shouldLeave = await handleLeave()
        
        if (shouldLeave) {
          // User wants to leave - navigate back to the previous page
          leavingRef.current = true
          skipSentinelCleanupRef.current = true
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

      // Store the pending href
      pendingHrefRef.current = href

      const shouldLeave = await handleLeave()
      
      if (shouldLeave) {
        // Set flags to prevent sentinel cleanup from interfering
        leavingRef.current = true
        skipSentinelCleanupRef.current = true
        sentinelPushedRef.current = false
        
        // Navigate using the pending href
        const targetHref = pendingHrefRef.current
        if (targetHref) {
          // If sentinel is on top, replace it; otherwise just navigate
          if (history.state?.sentinel) {
            router.replace(targetHref)
          } else {
            router.push(targetHref)
          }
        }
      } else {
        // User cancelled - clear pending href
        pendingHrefRef.current = null
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
