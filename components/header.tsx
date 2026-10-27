"use client"

import { useState } from "react"
import { Moon, Sun, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useTheme, setTheme as setGlobalTheme } from "@/lib/theme"
import { useProfileSettings } from "@/lib/settings-store"

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  if (typeof window !== "undefined" && !mounted) {
    setMounted(true)
  }

  function toggle() {
    const next = theme === "system" 
      ? (resolvedTheme === "light" ? "dark" : "light")
      : (theme === "light" ? "dark" : "light")
    setGlobalTheme(next)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Moon className="size-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggle}>
      {resolvedTheme === "light" ? <Moon className="size-5" /> : <Sun className="size-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export function Header() {
  const profile = useProfileSettings()
  
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />

      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="search" placeholder="Search..." className="pl-9 h-9" />
      </div>

      <div className="flex-1" />

      <ThemeToggle />

      <div className="flex items-center gap-2">
        <div className="hidden sm:flex flex-col items-end leading-tight">
          <span className="text-sm font-medium">{profile.displayName}</span>
          <span className="text-xs text-muted-foreground">{profile.role}</span>
        </div>
        <Avatar size="sm">
          {profile.avatarDataUrl && (
            <AvatarImage src={profile.avatarDataUrl} alt={profile.displayName} />
          )}
          <AvatarFallback className="bg-muted text-foreground font-bold">
            {getInitials(profile.displayName)}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
