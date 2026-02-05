"use client"

import * as React from "react"
import { ChevronDownIcon } from "@/components/icons/icons"

// simple utility to join class names; replaces cn from @/lib/utils
function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ")
}

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  /** compatibility: if true, multiple items can be open */
  multiple?: boolean
  /** compatibility with radix/shadcn API; not forwarded to DOM */
  type?: "single" | "multiple"
  /** compatibility with radix/shadcn API; not forwarded to DOM */
  collapsible?: boolean
}

function Accordion({ className, ...props }: Readonly<AccordionProps>) {
  // Note: `multiple`, `type`, and `collapsible` are supported for API compatibility
  // but are intentionally NOT forwarded to the DOM to avoid React warnings.
  return <div data-slot="accordion" className={className} {...props} />
}

type AccordionItemProps = React.DetailsHTMLAttributes<HTMLDetailsElement> & {
  /** compatibility with radix/shadcn API; not forwarded to DOM */
  value?: string
}

function AccordionItem({ className, ...props }: Readonly<AccordionItemProps>) {
  return (
    <details data-slot="accordion-item" className={cx("border-b last:border-b-0 group", className)} {...props} />
  )
}

type AccordionTriggerProps = React.HTMLAttributes<HTMLElement> & {
  asChild?: boolean
}

function AccordionTrigger({ className, children, ...props }: Readonly<AccordionTriggerProps>) {
  return (
    <summary
      data-slot="accordion-trigger"
      className={cx(
        "flex list-none cursor-pointer items-start justify-between gap-4 py-4 text-left text-sm font-medium outline-none transition-all hover:underline",
        "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span className="flex-1">{children}</span>
      <ChevronDownIcon className="text-muted-foreground pointer-events-none h-4 w-4 shrink-0 translate-y-0.5 transition-transform duration-200 group-open:rotate-180" />
    </summary>
  )
}

type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>

function AccordionContent({ className, children, ...props }: Readonly<AccordionContentProps>) {
  return (
    <div
      data-slot="accordion-content"
      className={cx(
        "overflow-hidden text-sm",
        // you can add animations with CSS if desired
        className
      )}
      {...props}
    >
      <div className={cx("pt-0 pb-4")}>{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
