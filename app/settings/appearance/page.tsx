"use client"

import { useEffect, useState } from "react"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Field } from "@/components/settings/field"
import { useAppearanceSettings, updateAppearanceSettings, type Density } from "@/lib/settings-store"
import { setTheme, type Theme } from "@/lib/theme"
import { toast } from "sonner"

export default function AppearancePage() {
  const savedAppearance = useAppearanceSettings()
  const [isLoading, setIsLoading] = useState(true)
  const [localTheme, setLocalTheme] = useState<Theme>("system")
  const [density, setDensity] = useState<Density>("comfortable")
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocalTheme(savedAppearance.theme)
      setDensity(savedAppearance.density)
      setReducedMotion(savedAppearance.reducedMotion)
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [savedAppearance])

  const handleThemeChange = (value: Theme) => {
    setLocalTheme(value)
    setTheme(value)
    updateAppearanceSettings({ theme: value })
    toast.success("Settings saved")
  }

  const handleDensityChange = (value: Density) => {
    setDensity(value)
    updateAppearanceSettings({ density: value })
    toast.success("Settings saved")
  }

  const handleReducedMotionChange = (checked: boolean) => {
    setReducedMotion(checked)
    updateAppearanceSettings({ reducedMotion: checked })
    toast.success("Settings saved")
  }

  const getThemeDisplay = () => {
    if (localTheme === "system") return "System"
    return localTheme === "light" ? "Light" : "Dark"
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="space-y-1">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-5 w-64" />
        </div>
        <Separator />
        <div className="space-y-6">
          <div className="space-y-3">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-10 w-full max-w-sm" />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-10 w-full max-w-sm" />
            <Skeleton className="h-4 w-64" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Appearance</h2>
        <p className="text-sm text-muted-foreground">
          Changes apply and save right away.
        </p>
      </div>

      <Separator />

      <div className="space-y-6">
        <Field label="Theme">
          <RadioGroup value={localTheme} onValueChange={(v) => handleThemeChange(v as Theme)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="system" id="theme-system" />
              <Label htmlFor="theme-system" className="font-normal cursor-pointer">
                System
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="theme-light" />
              <Label htmlFor="theme-light" className="font-normal cursor-pointer">
                Light
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="theme-dark" />
              <Label htmlFor="theme-dark" className="font-normal cursor-pointer">
                Dark
              </Label>
            </div>
          </RadioGroup>
        </Field>

        <Field
          label="Density"
          description="Compact tightens rows in tables and lists."
        >
          <RadioGroup value={density} onValueChange={(v) => handleDensityChange(v as Density)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="density-comfortable" />
              <Label htmlFor="density-comfortable" className="font-normal cursor-pointer">
                Comfortable
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="density-compact" />
              <Label htmlFor="density-compact" className="font-normal cursor-pointer">
                Compact
              </Label>
            </div>
          </RadioGroup>
        </Field>

        <Field
          label={
            <div className="flex items-center gap-2">
              <Switch
                id="reduced-motion"
                checked={reducedMotion}
                onCheckedChange={handleReducedMotionChange}
              />
              <Label htmlFor="reduced-motion" className="font-medium cursor-pointer">
                Reduced motion
              </Label>
            </div>
          }
          description={reducedMotion ? "Overrides system setting" : undefined}
        >
          <></>
        </Field>

        <div>
          <h3 className="text-sm font-medium mb-4">Preview</h3>
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle className="text-base">Project Atlas</CardTitle>
              <p className="text-sm text-muted-foreground">
                Theme: {getThemeDisplay()} · Density: {density === "comfortable" ? "Comfortable" : "Compact"}
              </p>
            </CardHeader>
            <CardContent>
              <Button>Open project</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
