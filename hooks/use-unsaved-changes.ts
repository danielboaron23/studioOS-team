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

  useEffect(() => {
    // Handle browser back/forward
    const handlePopState = () => {
      if (!isDirty) return

      // Push state back to block navigation
      history.pushState(null, "", window.location.href)

      if (onNavigateAway) {
        onNavigateAway().then((shouldNavigate) => {
          if (shouldNavigate) {
            // Allow the navigation by going back
            history.back()
          }
        })
      } else {
        const shouldNavigate = window.confirm(message)
        if (shouldNavigate) {
          history.back()
        }
      }
    }

    // Handle beforeunload (page close/reload)
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isDirty) return
      e.preventDefault()
      e.returnValue = message
      return message
    }

    // Handle in-app navigation via links
    const handleClick = (e: MouseEvent) => {
      if (!isDirty) return

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
            router.push(pendingNavigationRef.current)
            pendingNavigationRef.current = null
          } else {
            pendingNavigationRef.current = null
          }
        })
      } else {
        const shouldNavigate = window.confirm(message)
        if (shouldNavigate && pendingNavigationRef.current) {
          router.push(pendingNavigationRef.current)
          pendingNavigationRef.current = null
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
