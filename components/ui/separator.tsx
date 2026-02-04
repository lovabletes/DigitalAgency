"use client"

import * as React from "react"

import { classNames } from "@/utils/class-names"

type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
}

function Separator({ className, orientation = "horizontal", decorative = true, ...props }: SeparatorProps) {
  const ariaProps = decorative ? { role: "none" as const } : { role: "separator" as const }
  const ariaOrientation = orientation === "vertical" ? { "aria-orientation": "vertical" as const } : {}

  return (
    <div
      data-slot="separator"
      {...ariaProps}
      {...ariaOrientation}
      className={classNames(
        "bg-border shrink-0",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
