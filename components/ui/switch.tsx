"use client"

import * as React from "react"

import { classNames } from "@/utils/class-names"

type NativeSwitchProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Switch = React.forwardRef<HTMLButtonElement, NativeSwitchProps>(
  (
    { className, checked, defaultChecked, onCheckedChange, disabled, onKeyDown, onClick, ...props },
    ref
  ) => {
    const isControlled = checked !== undefined
    const [internalChecked, setInternalChecked] = React.useState<boolean>(defaultChecked ?? false)
    const isOn = isControlled ? !!checked : internalChecked

    const setOn = (next: boolean) => {
      if (!isControlled) setInternalChecked(next)
      onCheckedChange?.(next)
    }

    const handleToggle = () => {
      if (disabled) return
      setOn(!isOn)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(e)
      if (e.defaultPrevented) return
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault()
        handleToggle()
      }
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      if (e.defaultPrevented) return
      handleToggle()
    }

    return (
      <button
        ref={ref}
        role="switch"
        aria-checked={isOn}
        data-slot="switch"
        data-state={isOn ? "checked" : "unchecked"}
        disabled={disabled}
        className={classNames(
          "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        {...props}
      >
        <span
          data-slot="switch-thumb"
          data-state={isOn ? "checked" : "unchecked"}
          className={classNames(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )}
        />
      </button>
    )
  }
)
Switch.displayName = "Switch"

export { Switch }
