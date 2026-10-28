"use client"

import { useSyncExternalStore } from "react"

export type Theme = "system" | "light" | "dark"
export type Density = "comfortable" | "compact"

export type NotificationCategory =
  | "comments"
  | "mentions"
  | "updates"
  | "security"
  | "newsletters"

export type NotificationSettings = {
  inApp: boolean
  email: boolean
  categories: Record<NotificationCategory, { inApp: boolean; email: boolean }>
  quietHours: {
    enabled: boolean
    from: string // HH:mm format
    to: string // HH:mm format
  }
}

export type WorkspaceMember = {
  id: string
  email: string
  displayName: string
  role: string
  avatarDataUrl?: string
  status: "Active" | "Invited"
}

export type ProfileSettings = {
  displayName: string
  role: string
  email: string
  bio: string
  avatarDataUrl?: string
}

export type AppearanceSettings = {
  theme: Theme
  density: Density
  reducedMotion: boolean
}

export type WorkspaceSettings = {
  name: string
  slug: string
  logoDataUrl?: string
  members: WorkspaceMember[]
}

export type Settings = {
  profile: ProfileSettings
  appearance: AppearanceSettings
  notifications: NotificationSettings
  workspace: WorkspaceSettings
}

const STORAGE_KEY = "studioOS:settings"

const defaultSettings: Settings = {
  profile: {
    displayName: "Hani Buskila",
    role: "Product Designer",
    email: "hani@studioos.com",
    bio: "",
    avatarDataUrl: undefined,
  },
  appearance: {
    theme: "system",
    density: "comfortable",
    reducedMotion: false,
  },
  notifications: {
    inApp: true,
    email: true,
    categories: {
      comments: { inApp: true, email: true },
      mentions: { inApp: true, email: true },
      updates: { inApp: true, email: false },
      security: { inApp: true, email: true },
      newsletters: { inApp: false, email: false },
    },
    quietHours: {
      enabled: false,
      from: "22:00",
      to: "08:00",
    },
  },
  workspace: {
    name: "Studio OS",
    slug: "studio-os",
    logoDataUrl: undefined,
    members: [],
  },
}

let store: Settings = { ...defaultSettings }
const listeners = new Set<() => void>()

function notifyListeners() {
  listeners.forEach((listener) => listener())
}

function loadFromStorage(): Settings {
  if (typeof window === "undefined") return { ...defaultSettings }
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return { ...defaultSettings }
    
    const parsed = JSON.parse(stored)
    return {
      profile: { ...defaultSettings.profile, ...parsed.profile },
      appearance: { ...defaultSettings.appearance, ...parsed.appearance },
      notifications: { ...defaultSettings.notifications, ...parsed.notifications },
      workspace: { ...defaultSettings.workspace, ...parsed.workspace },
    }
  } catch {
    return { ...defaultSettings }
  }
}

function saveToStorage(settings: Settings) {
  if (typeof window === "undefined") return
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  } catch {
    // ignore
  }
}

if (typeof window !== "undefined") {
  store = loadFromStorage()
}

export function getSettings(): Readonly<Settings> {
  return store
}

export function updateSettings(partial: Partial<Settings>) {
  store = {
    ...store,
    ...partial,
  }
  saveToStorage(store)
  notifyListeners()
}

export function updateProfileSettings(partial: Partial<ProfileSettings>) {
  updateSettings({
    profile: { ...store.profile, ...partial },
  })
}

export function updateAppearanceSettings(partial: Partial<AppearanceSettings>) {
  updateSettings({
    appearance: { ...store.appearance, ...partial },
  })
}

export function updateNotificationSettings(partial: Partial<NotificationSettings>) {
  updateSettings({
    notifications: { ...store.notifications, ...partial },
  })
}

export function updateWorkspaceSettings(partial: Partial<WorkspaceSettings>) {
  updateSettings({
    workspace: { ...store.workspace, ...partial },
  })
}

export function useSettings() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    () => store,
    () => defaultSettings // Server snapshot always returns defaults
  )
}

export function useProfileSettings() {
  const settings = useSettings()
  return settings.profile
}

export function useAppearanceSettings() {
  const settings = useSettings()
  return settings.appearance
}

export function useNotificationSettings() {
  const settings = useSettings()
  return settings.notifications
}

export function useWorkspaceSettings() {
  const settings = useSettings()
  return settings.workspace
}

// Draft/save/discard helpers for section forms
export function createDraft<T>(initial: T): {
  draft: T
  isDirty: (current: T) => boolean
  save: (updates: Partial<T>) => T
  discard: () => T
} {
  let draft = { ...initial }
  
  return {
    draft,
    isDirty: (current: T) => JSON.stringify(current) !== JSON.stringify(initial),
    save: (updates: Partial<T>) => {
      draft = { ...draft, ...updates }
      return draft
    },
    discard: () => {
      draft = { ...initial }
      return draft
    },
  }
}
