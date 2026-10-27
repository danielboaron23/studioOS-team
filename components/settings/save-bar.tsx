import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface SaveBarProps {
  onSave: () => void
  onDiscard: () => void
  className?: string
}

export function SaveBar({ onSave, onDiscard, className }: SaveBarProps) {
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
        <Button variant="outline" onClick={onDiscard}>
          Discard
        </Button>
        <Button onClick={onSave}>Save changes</Button>
      </div>
    </div>
  )
}
