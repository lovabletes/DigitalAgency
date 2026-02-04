"use client"

import * as React from "react"
import { classNames } from "@/utils/class-names"

type ToggleVariant = "default" | "outline"
type ToggleSize = "default" | "sm" | "lg"

function toggleVariants({
  variant = "default",
  size = "default",
  className,
}: { variant?: ToggleVariant; size?: ToggleSize; className?: string }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap"
  const variantMap: Record<ToggleVariant, string> = {
    default: "bg-transparent",
    outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
  }
  const sizeMap: Record<ToggleSize, string> = {
    default: "h-9 px-2 min-w-9",
    sm: "h-8 px-1.5 min-w-8",
    lg: "h-10 px-2.5 min-w-10",
  }
  return classNames(base, variantMap[variant], sizeMap[size], className)
}

type ToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  pressed?: boolean
  defaultPressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  variant?: ToggleVariant
  size?: ToggleSize
}

function Toggle({ className, variant, size, pressed, defaultPressed, onPressedChange, onClick, ...props }: ToggleProps) {
  const isControlled = pressed !== undefined
  const [internal, setInternal] = React.useState<boolean>(!!defaultPressed)
  const isOn = isControlled ? !!pressed : internal

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    const next = !isOn
    if (!isControlled) setInternal(next)
    onPressedChange?.(next)
  }

  return (
    <button
      type="button"
      role="button"
      aria-pressed={isOn}
      data-state={isOn ? "on" : "off"}
      className={classNames(toggleVariants({ variant, size, className }))}
      onClick={handleClick}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
