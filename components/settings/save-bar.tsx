import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export interface SaveBarProps {
  onSave: () => void
  onDiscard: () => void
  disabled?: boolean
  className?: string
}

export function SaveBar({ onSave, onDiscard, disabled, className }: SaveBarProps) {
  return (
    <div
      className={cn(
        "sticky bottom-0 z-10 flex items-center justify-between gap-4 border-t bg-background px-6 py-4",
        className
      )}
    >
      <p className="text-sm text-muted-foreground">
        You have unsaved changes
      </p>
      <div className="flex gap-2">
        <Button variant="outline" onClick={onDiscard} disabled={disabled}>
          Discard
        </Button>
        <Button onClick={onSave} disabled={disabled}>
          {disabled && <Loader2 className="size-4 animate-spin" />}
          Save changes
        </Button>
      </div>
    </div>
  )
}
