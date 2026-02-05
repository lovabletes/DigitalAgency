"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { XIcon } from "@/components/icons/icons"

import { classNames } from "@/utils/class-names"

type DialogContextValue = {
  open: boolean
  setOpen: (v: boolean) => void
}

const DialogCtx = React.createContext<DialogContextValue | null>(null)

type DialogProps = {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

function Dialog({ open, defaultOpen, onOpenChange, children, className, ...props }: Readonly<DialogProps>) {
  const isControlled = open !== undefined
  const [internalOpen, setInternalOpen] = React.useState<boolean>(defaultOpen ?? false)
  const isOpen = isControlled ? !!open : internalOpen

  const setOpen = React.useCallback((v: boolean) => {
    if (!isControlled) setInternalOpen(v)
    onOpenChange?.(v)
  }, [isControlled, onOpenChange])

  const contextValue = React.useMemo(() => ({
    open: isOpen,
    setOpen
  }), [isOpen, setOpen])

  return (
    <DialogCtx.Provider value={contextValue}>
      <div data-slot="dialog" className={className} {...props}>
        {children}
      </div>
    </DialogCtx.Provider>
  )
}

type DialogTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  children: React.ReactElement<React.HTMLAttributes<HTMLElement> & { className?: string;['data-slot']?: string }> | React.ReactNode
}

function DialogTrigger({ asChild, children, className, onClick, ...props }: Readonly<DialogTriggerProps>) {
  const ctx = React.useContext(DialogCtx)
  if (!ctx) throw new Error("DialogTrigger must be used within Dialog")
  const { open, setOpen } = ctx
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    setOpen(!open)
  }
  if (asChild && React.isValidElement(children)) {
    type ChildProps = React.HTMLAttributes<HTMLElement> & { className?: string;['data-slot']?: string; onClick?: (e: React.MouseEvent) => void }
    const child = children as React.ReactElement<ChildProps>
    return React.cloneElement(child, {
      onClick: (e: React.MouseEvent) => {
        child.props?.onClick?.(e)
        // If user's handler prevented default, do not toggle
        if (!e.defaultPrevented) setOpen(!open)
      },
      className: classNames(child.props?.className, className),
      "data-slot": "dialog-trigger",
      "aria-expanded": open,
      "aria-haspopup": "dialog",
    })
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      data-slot="dialog-trigger"
      aria-expanded={open}
      aria-haspopup="dialog"
      {...props}
    >
      {children}
    </button>
  )
}

function DialogPortal({ children, ...props }: Readonly<{ children?: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>>) {
  if (typeof document === "undefined") return null
  return createPortal(
    <div data-slot="dialog-portal" {...props}>
      {children}
    </div>,
    document.body
  )
}

type DialogCloseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  children?: React.ReactElement<React.HTMLAttributes<HTMLElement> & { className?: string;['data-slot']?: string; onClick?: (e: React.MouseEvent) => void; onMouseDown?: (e: React.MouseEvent) => void }> | React.ReactNode
}

function DialogClose({ asChild, children, className, onClick, onMouseDown, ...props }: Readonly<DialogCloseProps>) {
  const ctx = React.useContext(DialogCtx)
  if (!ctx) throw new Error("DialogClose must be used within Dialog")
  const { setOpen } = ctx
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    setOpen(false)
  }
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Close on mousedown too, for reliability across browsers/components
    onMouseDown?.(e)
    if (e.defaultPrevented) return
    setOpen(false)
  }
  if (asChild && React.isValidElement(children)) {
    type ChildProps = React.HTMLAttributes<HTMLElement> & { className?: string;['data-slot']?: string; onClick?: (e: React.MouseEvent) => void; onMouseDown?: (e: React.MouseEvent) => void }
    const child = children as React.ReactElement<ChildProps>
    return React.cloneElement(child, {
      onClick: (e: React.MouseEvent) => {
        child.props?.onClick?.(e)
        if (!e.defaultPrevented) setOpen(false)
      },
      onMouseDown: (e: React.MouseEvent) => {
        child.props?.onMouseDown?.(e)
        if (!e.defaultPrevented) setOpen(false)
      },
      className: classNames(child.props?.className, className),
      "data-slot": "dialog-close",
    })
  }
  return (
    <button type="button" onClick={handleClick} onMouseDown={handleMouseDown} className={className} data-slot="dialog-close" {...props}>
      {children}
    </button>
  )
}

function DialogOverlay({ className, onKeyDown, ...props }: Readonly<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  const ctx = React.useContext(DialogCtx)
  if (!ctx) throw new Error("DialogOverlay must be used within Dialog")
  const { open, setOpen } = ctx
  if (!open) return null

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(e)
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpen(false)
    }
  }

  return (
    <button
      type="button"
      data-slot="dialog-overlay"
      data-state={open ? "open" : "closed"}
      aria-label="Close dialog"
      className={classNames(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/60 backdrop-blur-none border-none",
        className
      )}
      onClick={() => setOpen(false)}
      onMouseDown={() => setOpen(false)}
      onKeyDown={handleKeyDown}
      {...props}
    />
  )
}

type DialogContentProps = React.HTMLAttributes<HTMLDialogElement> & {
  showCloseButton?: boolean
  position?: "center" | "custom"
}

function DialogContent({ className, children, showCloseButton = true, position = "center", ...props }: Readonly<DialogContentProps>) {
  const ctx = React.useContext(DialogCtx)
  if (!ctx) throw new Error("DialogContent must be used within Dialog")
  const { open, setOpen } = ctx
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  // Sync dialog state with context
  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [open])

  // Prevent background scroll while dialog is open
  React.useEffect(() => {
    if (!open) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  if (!open) return null

  return (
    <DialogPortal data-slot="dialog-portal">
      <div className="fixed inset-0 z-[100] grid place-items-center p-4 sm:p-6 bg-black/60 backdrop-blur-none pointer-events-none">
        <button
          type="button"
          className="absolute inset-0 h-full w-full bg-transparent border-none cursor-default pointer-events-auto"
          onClick={() => setOpen(false)}
          aria-label="Close dialog"
        />
        <dialog
          ref={dialogRef}
          data-slot="dialog-content"
          data-state={open ? "open" : "closed"}
          className={classNames(
            "m-0 p-0 bg-transparent border-none overflow-visible w-full h-full flex items-center justify-center backdrop:bg-transparent pointer-events-none",
            className
          )}
          onClose={() => setOpen(false)}
          {...props}
        >
          <div
            className={classNames(
              "pointer-events-auto",
              position === "center"
                ? "relative bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 w-full max-w-[calc(100%-2rem)] gap-4 rounded-xl border border-border/60 p-6 sm:p-8 shadow-lg duration-200 sm:max-w-lg"
                : "",
            )}
          >
            <span className="pointer-events-none absolute left-0 right-0 top-0 h-1.5 rounded-t-xl bg-primary/70" aria-hidden="true" />
            {children}
            {showCloseButton && (
              <DialogClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-md opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogClose>
            )}
          </div>
        </dialog>
      </div>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: Readonly<React.ComponentProps<"div">>) {
  return (
    <div
      data-slot="dialog-header"
      className={classNames("flex flex-col gap-2 text-center sm:text-left border-b border-border/60 pb-2", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: Readonly<React.ComponentProps<"div">>) {
  return (
    <div
      data-slot="dialog-footer"
      className={classNames(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end border-t border-border/60 pt-3",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({ className, children, ...props }: Readonly<React.HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h2
      data-slot="dialog-title"
      className={classNames("text-lg leading-none font-semibold", className)}
      {...props}
    >
      {children}
    </h2>
  )
}

function DialogDescription({ className, children, ...props }: Readonly<React.HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p
      data-slot="dialog-description"
      className={classNames("text-muted-foreground text-sm", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
