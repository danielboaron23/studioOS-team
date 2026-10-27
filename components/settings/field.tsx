import { cn } from "@/lib/utils"

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
        <label
          htmlFor={htmlFor}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}
      {children}
      {description && !error && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
