import * as React from "react"

import { classNames } from "@/utils/class-names"

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
type ButtonSize = "default" | "sm" | "lg" | "icon"
type ButtonOptions = { variant?: ButtonVariant; size?: ButtonSize; className?: string }

// Backward-compatible API: accepts either an options object or positional args
function buttonVariants(
  optionsOrVariant: ButtonOptions | ButtonVariant = "default",
  sizeArg: ButtonSize = "default",
  extraClassName?: string
) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
  const variants: Record<ButtonVariant, string> = {
    default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
    destructive:
      "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    outline:
      "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
    secondary:
      "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
    link: "text-primary underline-offset-4 hover:underline",
  }
  const sizes: Record<ButtonSize, string> = {
    default: "h-9 px-4 py-2 has-[>svg]:px-3",
    sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
    lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
    icon: "size-9",
  }
  let variant: ButtonVariant
  let size: ButtonSize
  let className: string | undefined
  if (typeof optionsOrVariant === "string") {
    variant = optionsOrVariant
    size = sizeArg
    className = extraClassName
  } else {
    variant = optionsOrVariant?.variant ?? "default"
    size = optionsOrVariant?.size ?? "default"
    className = optionsOrVariant?.className
  }

  return classNames(base, variants[variant], sizes[size], className)
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...restProps
}: React.ComponentProps<"button"> & {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}) {
  const computed = classNames(buttonVariants({ variant, size }), className)

  return (
    asChild && React.isValidElement(children)
      ? (() => {
          type ChildProps = React.HTMLAttributes<HTMLElement> & { className?: string; ['data-slot']?: string }
          const child = children as React.ReactElement<ChildProps>
          return React.cloneElement(child, {
            ...(restProps as ChildProps),
            className: classNames(child.props?.className, computed),
            "data-slot": "button",
          })
        })()
      : (
          <button data-slot="button" className={computed} {...restProps}>
            {children}
          </button>
        )
  )
}

export { Button, buttonVariants }
