"use client"

import * as React from "react"
import { XIcon } from "@/components/icons/icons"

import { classNames } from "@/utils/class-names"
import * as DialogPrimitive from "@/components/ui/dialog"

type SheetSide = "top" | "right" | "bottom" | "left"

const Sheet = DialogPrimitive.Dialog
const SheetTrigger = DialogPrimitive.DialogTrigger
const SheetClose = DialogPrimitive.DialogClose
const SheetPortal = DialogPrimitive.DialogPortal
const SheetOverlay = DialogPrimitive.DialogOverlay

function SheetContent({ className, children, side = "right", ...props }: Readonly<React.HTMLAttributes<HTMLDialogElement> & { side?: SheetSide }>) {
  return (
    <DialogPrimitive.DialogContent
      position="custom"
      data-slot="sheet-content"
      role="dialog"
      aria-modal="true"
      className={classNames(
        "bg-background fixed z-[100] flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
        side === "right" &&
        "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
        side === "left" &&
        "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        side === "top" &&
        "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
        side === "bottom" &&
        "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
        className
      )}
      {...props}
    >
      {children}
      <SheetClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
        <XIcon className="size-4" />
        <span className="sr-only">Close</span>
      </SheetClose>
    </DialogPrimitive.DialogContent>
  )
}

function SheetHeader({ className, ...props }: Readonly<React.ComponentProps<"div">>) {
  return (
    <div
      data-slot="sheet-header"
      className={classNames("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: Readonly<React.ComponentProps<"div">>) {
  return (
    <div
      data-slot="sheet-footer"
      className={classNames("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, children, ...props }: Readonly<React.ComponentProps<"h2">>) {
  return (
    <h2
      data-slot="sheet-title"
      className={classNames("text-foreground font-semibold", className)}
      {...props}
    >
      {children || <span className="sr-only">Sheet Title</span>}
    </h2>
  )
}

function SheetDescription({ className, ...props }: Readonly<React.ComponentProps<"p">>) {
  return (
    <p
      data-slot="sheet-description"
      className={classNames("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export { Sheet, SheetTrigger, SheetClose, SheetPortal, SheetOverlay, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription }
