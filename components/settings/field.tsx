import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

export interface FieldProps {
  label?: string
  description?: string
  error?: string
  htmlFor?: string
  required?: boolean
  className?: string
  children: React.ReactNode
}

export function Field({
  label,
  description,
  error,
  htmlFor,
  required,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <Label htmlFor={htmlFor}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}
      {children}
      {description && !error && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
