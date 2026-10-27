"use client"

import { useEffect, useRef } from "react"
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
  const pendingNavigationRef = useRef<string | null>(null)
  const sentinelPushedRef = useRef(false)
  const leavingRef = useRef(false)

  // Push sentinel when becoming dirty, remove when clean
  useEffect(() => {
    if (isDirty && !sentinelPushedRef.current && !leavingRef.current) {
      // Push sentinel history entry to intercept Back
      history.pushState({ sentinel: true }, "", window.location.href)
      sentinelPushedRef.current = true
    } else if (!isDirty && sentinelPushedRef.current && !leavingRef.current) {
      // Clean up sentinel when form becomes clean
      if (history.state?.sentinel) {
        history.back()
      }
      sentinelPushedRef.current = false
    }
  }, [isDirty])

  useEffect(() => {
    // Handle browser back/forward
    const handlePopState = () => {
      // Skip if we're in the process of leaving
      if (leavingRef.current || !isDirty) {
        sentinelPushedRef.current = false
        return
      }

      // Re-push sentinel to stay on current page
      history.pushState({ sentinel: true }, "", window.location.href)

      if (onNavigateAway) {
        onNavigateAway().then((shouldNavigate) => {
          if (shouldNavigate) {
            // Set leaving flag and navigate back
            leavingRef.current = true
            sentinelPushedRef.current = false
            // Go back 2 steps: the sentinel we just pushed + the real back step
            history.go(-2)
          }
        })
      } else {
        const shouldNavigate = window.confirm(message)
        if (shouldNavigate) {
          leavingRef.current = true
          sentinelPushedRef.current = false
          history.go(-2)
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
    const handleClick = (e: MouseEvent) => {
      if (leavingRef.current || !isDirty) return

      const target = e.target as HTMLElement
      const anchor = target.closest("a")
      
      if (!anchor) return

      // Skip external links, modified clicks, and target="_blank"
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

      // Check if this is a different route
      const url = new URL(href, window.location.origin)
      if (url.pathname === pathname) {
        return
      }

      // Prevent the navigation
      e.preventDefault()
      e.stopPropagation()

      pendingNavigationRef.current = href

      if (onNavigateAway) {
        onNavigateAway().then((shouldNavigate) => {
          if (shouldNavigate && pendingNavigationRef.current) {
            // Set leaving flag to disable guard
            leavingRef.current = true
            
            // Clean up sentinel if present
            if (sentinelPushedRef.current && history.state?.sentinel) {
              sentinelPushedRef.current = false
              history.back()
              // Wait for back to complete before navigating
              setTimeout(() => {
                if (pendingNavigationRef.current) {
                  router.push(pendingNavigationRef.current)
                  pendingNavigationRef.current = null
                }
              }, 0)
            } else {
              router.push(pendingNavigationRef.current)
              pendingNavigationRef.current = null
            }
          } else {
            pendingNavigationRef.current = null
          }
        })
      } else {
        const shouldNavigate = window.confirm(message)
        if (shouldNavigate && pendingNavigationRef.current) {
          // Set leaving flag to disable guard
          leavingRef.current = true
          
          // Clean up sentinel if present
          if (sentinelPushedRef.current && history.state?.sentinel) {
            sentinelPushedRef.current = false
            history.back()
            setTimeout(() => {
              if (pendingNavigationRef.current) {
                router.push(pendingNavigationRef.current)
                pendingNavigationRef.current = null
              }
            }, 0)
          } else {
            router.push(pendingNavigationRef.current)
            pendingNavigationRef.current = null
          }
        } else {
          pendingNavigationRef.current = null
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
  }, [isDirty, message, pathname, router, onNavigateAway])
}
