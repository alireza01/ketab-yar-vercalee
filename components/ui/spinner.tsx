"use client"

import { cn } from "@/lib/utils"

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

export function Spinner({ className, size = "md", ...props }: SpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-4 border-primary border-t-transparent",
        {
          "h-6 w-6": size === "sm",
          "h-8 w-8": size === "md",
          "h-10 w-10": size === "lg",
        },
        className
      )}
      {...props}
    >
      <span className="sr-only">در حال بارگذاری...</span>
    </div>
  )
} 