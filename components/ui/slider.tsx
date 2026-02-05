"use client"

import * as React from "react"

import { classNames } from "@/utils/class-names"

type SliderProps = {
  value?: number[]
  defaultValue?: number[]
  onValueChange?: (value: number[]) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  className?: string
}

const Slider = React.forwardRef<HTMLInputElement, Readonly<SliderProps>>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      min = 0,
      max = 100,
      step = 1,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = value !== undefined
    const [internal, setInternal] = React.useState<number>(
      defaultValue?.[0] ?? 0
    )

    const current = isControlled ? value?.[0] ?? 0 : internal

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = Number(e.target.value)
      if (!isControlled) setInternal(next)
      onValueChange?.([next])
    }

    // percentage for simple range background
    const pct = ((current - min) / (max - min)) * 100

    return (
      <div
        className={classNames(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
      >
        <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <div
            className="absolute h-full bg-primary"
            style={{ width: `${pct}%` }}
          />
        </div>
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          step={step}
          value={current}
          onChange={handleChange}
          disabled={disabled}
          className="absolute inset-0 z-10 opacity-0 cursor-pointer"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={current}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
        <div
          className="absolute block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-all duration-150 pointer-events-none shadow-sm"
          style={{ left: `calc(${pct}% - 10px)`, top: '50%', transform: 'translateY(-50%)' }}
        />
      </div>
    )
  }
)
Slider.displayName = "Slider"

export { Slider }
