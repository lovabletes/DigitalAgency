"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { classNames } from "@/utils/class-names"
import { buttonVariants } from "@/components/ui/button"

type AlertDialogContextValue = {
  open: boolean
  setOpen: (o: boolean) => void
  titleId: string
  descriptionId: string
}

const AlertDialogContext = React.createContext<AlertDialogContextValue | null>(null)

type AlertDialogProps = React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

function AlertDialog({ children, open, defaultOpen, onOpenChange, ...rest }: AlertDialogProps) {
  const isControlled = open !== undefined
  const [internal, setInternal] = React.useState<boolean>(!!defaultOpen)
  const isOpen = isControlled ? !!open : internal
  const setOpen = (o: boolean) => {
    if (!isControlled) setInternal(o)
    onOpenChange?.(o)
  }
  const titleId = React.useId()
  const descriptionId = React.useId()
  return (
    <AlertDialogContext.Provider value={{ open: isOpen, setOpen, titleId, descriptionId }}>
      <div data-slot="alert-dialog" {...rest}>{children}</div>
    </AlertDialogContext.Provider>
  )
}

function AlertDialogTrigger({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(AlertDialogContext)
  return (
    <button
      type="button"
      data-slot="alert-dialog-trigger"
      onClick={(e) => {
        props.onClick?.(e)
        if (e.defaultPrevented) return
        ctx?.setOpen(true)
      }}
      {...props}
    >
      {children}
    </button>
  )
}

function AlertDialogPortal({ children }: { children?: React.ReactNode }) {
  if (typeof document === "undefined") return null
  return createPortal(<div data-slot="alert-dialog-portal">{children}</div>, document.body)
}

function AlertDialogOverlay({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-overlay"
      className={classNames(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const ctx = React.useContext(AlertDialogContext)
  React.useEffect(() => {
    if (!ctx?.open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") ctx.setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [ctx?.open, ctx])
  if (!ctx?.open) return null
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay onClick={() => ctx.setOpen(false)} />
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={ctx.titleId}
        aria-describedby={ctx.descriptionId}
        data-slot="alert-dialog-content"
        className={classNames(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={classNames("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function AlertDialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={classNames(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  const ctx = React.useContext(AlertDialogContext)
  return (
    <h2
      id={ctx?.titleId}
      data-slot="alert-dialog-title"
      className={classNames("text-lg font-semibold", className)}
      {...props}
    />
  )
}

function AlertDialogDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  const ctx = React.useContext(AlertDialogContext)
  return (
    <p
      id={ctx?.descriptionId}
      data-slot="alert-dialog-description"
      className={classNames("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function AlertDialogAction({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(AlertDialogContext)
  return (
    <button
      type="button"
      onClick={(e) => {
        props.onClick?.(e)
        if (e.defaultPrevented) return
        ctx?.setOpen(false)
      }}
      className={classNames(buttonVariants(), className)}
      {...props}
    />
  )
}

function AlertDialogCancel({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(AlertDialogContext)
  return (
    <button
      type="button"
      onClick={(e) => {
        props.onClick?.(e)
        if (e.defaultPrevented) return
        ctx?.setOpen(false)
      }}
      className={classNames(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
