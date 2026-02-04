"use client"

import * as React from "react"

import { classNames } from "@/utils/class-names"

const labelBaseClasses =
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

type NativeLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const Label = React.forwardRef<HTMLLabelElement, NativeLabelProps>(({ className, ...props }, ref) => (
  <label ref={ref} className={classNames(labelBaseClasses, className)} {...props} />
))
Label.displayName = "Label"

export { Label }
