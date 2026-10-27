"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import ProfilePage from "./profile/page"

export default function SettingsPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace("/settings/profile")
  }, [router])
  
  return <ProfilePage />
}
