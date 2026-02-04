"use client"

import * as React from "react"
import { classNames } from "@/utils/class-names"

type AspectRatioProps = React.HTMLAttributes<HTMLDivElement> & { ratio?: number }

function AspectRatio({ className, ratio = 1, style, ...props }: AspectRatioProps) {
  return (
    <div
      data-slot="aspect-ratio"
      className={classNames("relative", className)}
      style={{ aspectRatio: String(ratio), ...style }}
      {...props}
    />
  )
}

export { AspectRatio }
