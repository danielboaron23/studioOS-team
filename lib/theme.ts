"use client"

import { useSyncExternalStore } from "react"

export type Theme = "system" | "light" | "dark"

type ThemeStore = {
  theme: Theme
  resolvedTheme: "light" | "dark"
}

let store: ThemeStore = {
  theme: "system",
  resolvedTheme: "light",
}

const listeners = new Set<() => void>()

function notifyListeners() {
  listeners.forEach((listener) => listener())
}

function getResolvedTheme(theme: Theme): "light" | "dark" {
  if (theme !== "system") return theme
  
  if (typeof window === "undefined") return "light"
  
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function applyTheme(resolved: "light" | "dark") {
  if (typeof document === "undefined") return
  document.documentElement.classList.toggle("dark", resolved === "dark")
}

function initialize() {
  if (typeof window === "undefined") return
  
  const stored = localStorage.getItem("theme") as Theme | null
  const theme = stored || "system"
  const resolvedTheme = getResolvedTheme(theme)
  
  store = { theme, resolvedTheme }
  applyTheme(resolvedTheme)
  
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  const handleChange = () => {
    if (store.theme === "system") {
      const newResolved = getResolvedTheme("system")
      store.resolvedTheme = newResolved
      applyTheme(newResolved)
      notifyListeners()
    }
  }
  
  mediaQuery.addEventListener("change", handleChange)
}

if (typeof window !== "undefined") {
  initialize()
}

export function setTheme(theme: Theme) {
  store.theme = theme
  store.resolvedTheme = getResolvedTheme(theme)
  
  localStorage.setItem("theme", theme)
  applyTheme(store.resolvedTheme)
  
  notifyListeners()
}

export function useTheme() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    () => store,
    () => store
  )
}
