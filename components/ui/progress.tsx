"use client"

import * as React from "react"

import { classNames } from "@/utils/class-names"

function Progress({
  className,
  value,
  max = 100,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value?: number; max?: number }) {
  const clamped = Math.max(0, Math.min(max, value ?? 0))
  const percentage = max > 0 ? (clamped / max) * 100 : 0

  return (
    <div
      data-slot="progress"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={Math.round(percentage)}
      className={classNames(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <div
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </div>
  )
}

export { Progress }
