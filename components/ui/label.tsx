"use client"

import * as React from "react"
import { classNames } from "@/utils/class-names"

const Label = React.forwardRef<HTMLLabelElement, Readonly<React.LabelHTMLAttributes<HTMLLabelElement>>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      htmlFor={props.htmlFor}
      className={classNames(
        "text-sm font-medium leading-none select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
)
Label.displayName = "Label"

export { Label }
