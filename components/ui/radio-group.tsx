"use client"

import * as React from "react"
import { CircleIcon } from "@/components/icons/icons"

import { classNames } from "@/utils/class-names"

type RadioGroupContextValue = {
  name: string
  value?: string
  setValue: (val: string) => void
  disabled?: boolean
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null)

type RadioGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: string
  defaultValue?: string
  onValueChange?: (val: string) => void
  name?: string
  disabled?: boolean
}

const RadioGroup = React.forwardRef<HTMLDivElement, Readonly<RadioGroupProps>>(
  ({ className, value, defaultValue, onValueChange, name, disabled, children, ...props }, ref) => {
    const generated = React.useId()
    const groupName = name ?? generated
    const isControlled = value !== undefined
    const [internal, setInternal] = React.useState<string | undefined>(defaultValue)
    const current = isControlled ? value : internal

    const setValue = React.useCallback((val: string) => {
      if (!isControlled) setInternal(val)
      onValueChange?.(val)
    }, [isControlled, onValueChange])

    const ctx = React.useMemo<RadioGroupContextValue>(() => ({
      name: groupName,
      value: current,
      setValue,
      disabled
    }), [groupName, current, setValue, disabled])

    return (
      <RadioGroupContext.Provider value={ctx}>
        <div
          role="radiogroup"
          aria-disabled={disabled || undefined}
          ref={ref}
          className={classNames("grid gap-2", className)}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  }
)
RadioGroup.displayName = "RadioGroup"

type RadioGroupItemProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "name" | "onChange"> & {
  value: string
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, Readonly<RadioGroupItemProps>>(
  ({ className, value, id, disabled, ...props }, ref) => {
    const ctx = React.useContext(RadioGroupContext)
    if (!ctx) {
      // Still render a standalone input
      return (
        <input ref={ref} id={id} type="radio" className={classNames("h-4 w-4", className)} value={value} disabled={disabled} {...props} />
      )
    }

    const checked = ctx.value === value
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (e.target.checked) ctx.setValue(value)
    }

    return (
      <>
        <input
          ref={ref}
          id={id}
          type="radio"
          className="peer sr-only"
          name={ctx.name}
          value={value}
          checked={checked}
          onChange={handleChange}
          disabled={disabled ?? ctx.disabled}
          {...props}
        />
        <span
          aria-hidden="true"
          data-state={checked ? "checked" : "unchecked"}
          className={classNames(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 inline-flex items-center justify-center",
            className,
          )}
        >
          {checked && <CircleIcon className="h-2.5 w-2.5 fill-current text-current" />}
        </span>
      </>
    )
  }
)
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
