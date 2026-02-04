"use client"

import * as React from "react"
import { classNames } from "@/utils/class-names"
import { toggleVariants } from "@/components/ui/toggle"

type ToggleVariant = "default" | "outline"
type ToggleSize = "default" | "sm" | "lg"
type ToggleGroupType = "single" | "multiple"

type ToggleGroupContextValue = {
  variant?: ToggleVariant
  size?: ToggleSize
  type: ToggleGroupType
  isItemOn: (val: string) => boolean
  toggleItem: (val: string) => void
  disabled?: boolean
}

const ToggleGroupContext = React.createContext<ToggleGroupContextValue | null>(null)

type ToggleGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: ToggleGroupType
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: string | string[]) => void
  variant?: ToggleVariant
  size?: ToggleSize
  disabled?: boolean
}

function ToggleGroup({
  className,
  variant,
  size,
  type = "single",
  value,
  defaultValue,
  onValueChange,
  disabled,
  children,
  ...props
}: ToggleGroupProps) {
  const isControlled = value !== undefined
  const [internal, setInternal] = React.useState<string | string[] | undefined>(defaultValue)
  const current = (isControlled ? value : internal) as string | string[] | undefined

  const isItemOn = React.useCallback(
    (val: string) => {
      if (!current) return false
      return type === "multiple" ? Array.isArray(current) && current.includes(val) : current === val
    },
    [current, type]
  )

  const toggleItem = (val: string) => {
    if (type === "multiple") {
      const next = Array.isArray(current)
        ? isItemOn(val)
          ? current.filter((v) => v !== val)
          : [...current, val]
        : [val]
      if (!isControlled) setInternal(next)
      onValueChange?.(next)
    } else {
      const next = isItemOn(val) ? "" : val
      if (!isControlled) setInternal(next)
      onValueChange?.(next)
    }
  }

  const ctx: ToggleGroupContextValue = { variant, size, type, isItemOn, toggleItem, disabled }

  return (
    <div
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      role="group"
      aria-disabled={disabled || undefined}
      className={classNames(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={ctx}>{children}</ToggleGroupContext.Provider>
    </div>
  )
}

type ToggleGroupItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string
  variant?: ToggleVariant
  size?: ToggleSize
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  value,
  disabled,
  onClick,
  ...props
}: ToggleGroupItemProps) {
  const context = React.useContext(ToggleGroupContext)
  const isOn = context ? context.isItemOn(value) : false
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    if (disabled || context?.disabled) return
    context?.toggleItem(value)
  }

  const v = context?.variant ?? variant
  const s = context?.size ?? size

  return (
    <button
      type="button"
      data-slot="toggle-group-item"
      data-variant={v}
      data-size={s}
      data-state={isOn ? "on" : "off"}
      aria-pressed={isOn}
      disabled={disabled || context?.disabled}
      className={classNames(
        toggleVariants({ variant: v, size: s }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}

export { ToggleGroup, ToggleGroupItem }
