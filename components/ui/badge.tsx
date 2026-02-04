import * as React from "react"

import { classNames } from "@/utils/class-names"

type BadgeVariant = "default" | "secondary" | "destructive" | "outline"
function badgeVariants(variant: BadgeVariant = "default") {
  const base =
    "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
  const map: Record<BadgeVariant, string> = {
    default:
      "border-transparent bg-[var(--primary)] text-[var(--primary-foreground)] [a&]:hover:opacity-90",
    secondary:
      "border-transparent bg-[var(--secondary)] text-[var(--secondary-foreground)] [a&]:hover:opacity-90",
    destructive:
      "border-transparent bg-[var(--destructive)] text-[var(--destructive-foreground)] [a&]:hover:opacity-90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
    outline:
      "border-[color:var(--border)] text-[var(--foreground)] [a&]:hover:bg-[var(--accent)] [a&]:hover:text-[var(--accent-foreground)]",
  }
  return classNames(base, map[variant])
}

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { variant?: BadgeVariant; asChild?: boolean }) {
  const computed = classNames(badgeVariants(variant), className)

  return (
    asChild && React.isValidElement(props.children)
      ? (() => {
          type ChildProps = React.HTMLAttributes<HTMLElement> & { className?: string; ['data-slot']?: string }
          const child = props.children as React.ReactElement<ChildProps>
          return React.cloneElement(child, {
            ...props,
            className: classNames(child.props?.className, computed),
            "data-slot": "badge",
          })
        })()
      : (
          <span data-slot="badge" className={computed} {...props} />
        )
  )
}

export { Badge, badgeVariants }
