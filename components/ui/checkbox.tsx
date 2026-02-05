"use client"

import * as React from "react"

import { CheckIcon } from "@/components/icons/icons"

import { classNames } from "@/utils/class-names"

type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange"
> & {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, defaultChecked, disabled, onCheckedChange, onChange, ...props }, ref) => {
    const isControlled = checked !== undefined
    const [internalChecked, setInternalChecked] = React.useState(!!defaultChecked)
    const currentChecked = isControlled ? !!checked : internalChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalChecked(e.target.checked)
      onCheckedChange?.(e.target.checked)
      onChange?.(e)
    }

    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          ref={ref}
          type="checkbox"
          className="peer sr-only"
          checked={isControlled ? currentChecked : undefined}
          defaultChecked={isControlled ? undefined : currentChecked}
          disabled={disabled}
          onChange={handleChange}
          aria-checked={currentChecked}
          {...props}
        />
        <span
          data-state={currentChecked ? "checked" : "unchecked"}
          className={classNames(
            "h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            className,
          )}
          aria-hidden="true"
        >
          <span className={classNames("flex h-full w-full items-center justify-center text-current")}>
            {currentChecked && <CheckIcon className="h-4 w-4" />}
          </span>
        </span>
      </label>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
