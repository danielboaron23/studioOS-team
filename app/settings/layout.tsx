"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, Palette, Bell, Briefcase, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/settings/profile", label: "Profile", icon: User },
  { href: "/settings/appearance", label: "Appearance", icon: Palette },
  { href: "/settings/notifications", label: "Notifications", icon: Bell },
  { href: "/settings/workspace", label: "Workspace", icon: Briefcase },
]

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
      <nav
        aria-label="Settings sections"
        className="flex shrink-0 gap-1 overflow-x-auto lg:w-60 lg:flex-col lg:overflow-visible"
      >
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href
          
          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-muted text-foreground"
                  : "text-foreground hover:bg-muted/60"
              )}
            >
              <Icon className="size-4 shrink-0" aria-hidden />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="min-w-0 max-w-2xl flex-1">{children}</div>
    </div>
  )
}
