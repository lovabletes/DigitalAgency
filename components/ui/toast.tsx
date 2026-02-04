"use client"

import * as React from "react"
import { XIcon } from "@/components/icons/icons"
import { classNames } from "@/utils/class-names"

type Variant = "default" | "destructive"

const ToastProvider = ({ children }: { children?: React.ReactNode }) => (
  <div data-slot="toast-provider">{children}</div>
)

const ToastViewport = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames(
        // Always show bottom-right with higher z-index
        "fixed bottom-4 right-4 z-[1000] flex w-full sm:w-auto flex-col p-4 md:max-w-[420px]",
        className
      )}
      {...props}
    />
  )
)
ToastViewport.displayName = "ToastViewport"

function toastVariants(variant: Variant = "default") {
  const base =
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full"
  const map: Record<Variant, string> = {
    default: "border bg-background text-foreground",
    destructive:
      "destructive group border-destructive bg-destructive text-destructive-foreground",
  }
  return classNames(base, map[variant])
}

type ToastContextValue = { close: () => void }
const ToastItemContext = React.createContext<ToastContextValue | null>(null)

type ToastPropsBase = React.HTMLAttributes<HTMLDivElement> & {
  variant?: Variant
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Toast = React.forwardRef<HTMLDivElement, ToastPropsBase>(
  ({ className, variant = "default", open, onOpenChange, ...props }, ref) => {
    const [internalOpen, setInternalOpen] = React.useState(true)
    const isControlled = typeof open === "boolean"
    const isOpen = isControlled ? open! : internalOpen
    const setOpen = (v: boolean) => {
      if (!isControlled) setInternalOpen(v)
      onOpenChange?.(v)
    }
    if (!isOpen) return null
    return (
      <ToastItemContext.Provider value={{ close: () => setOpen(false) }}>
        <div
          ref={ref}
          data-state={isOpen ? "open" : "closed"}
          className={classNames(toastVariants(variant), className)}
          role="status"
          {...props}
        />
      </ToastItemContext.Provider>
    )
  }
)
Toast.displayName = "Toast"

const ToastAction = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={classNames(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        className
      )}
      {...props}
    />
  )
)
ToastAction.displayName = "ToastAction"

const ToastClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, onClick, ...props }, ref) => {
    const ctx = React.useContext(ToastItemContext)
    return (
      <button
        ref={ref}
        onClick={(e) => {
          onClick?.(e)
          ctx?.close()
        }}
        className={classNames(
          "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
          className
        )}
        aria-label="Close"
        {...props}
      >
        <XIcon className="h-4 w-4" />
      </button>
    )
  }
)
ToastClose.displayName = "ToastClose"

const ToastTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={classNames("text-sm font-semibold", className)} {...props} />
  )
)
ToastTitle.displayName = "ToastTitle"

const ToastDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={classNames("text-sm opacity-90", className)} {...props} />
  )
)
ToastDescription.displayName = "ToastDescription"

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
