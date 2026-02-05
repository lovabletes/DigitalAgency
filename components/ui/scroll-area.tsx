"use client"

import * as React from "react"

import { classNames } from "@/utils/class-names"

function ScrollArea({
  className,
  children,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      data-slot="scroll-area"
      className={classNames("relative", className)}
      {...props}
    >
      <div
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 overflow-auto"
      >
        {children}
      </div>
      <ScrollBar />
    </div>
  )
}

function ScrollBar() {
  // No-op placeholder to preserve API. Native scrollbars are used.
  return null
}

export { ScrollArea, ScrollBar }
