"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { classNames } from "@/utils/class-names"

interface DrawerProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  direction?: "top" | "bottom" | "left" | "right"
}

interface DrawerContextProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  direction: "top" | "bottom" | "left" | "right"
}

const DrawerContext = React.createContext<DrawerContextProps | null>(null)

function useDrawer() {
  const context = React.useContext(DrawerContext)

  if (!context) {
    throw new Error("useDrawer must be used within a <Drawer />")
  }

  return context
}

function Drawer({
  children,
  open: controlledOpen,
  onOpenChange,
  direction = "bottom",
}: Readonly<DrawerProps>) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false)

  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen

  const setIsOpen = React.useCallback(
    (open: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(open)
      }
      onOpenChange?.(open)
    },
    [isControlled, onOpenChange]
  )

  const contextValue = React.useMemo(() => ({
    isOpen,
    setIsOpen,
    direction
  }), [isOpen, setIsOpen, direction])

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  )
}

function DrawerTrigger({
  children,
  className,
  onKeyDown,
  ...props
}: Readonly<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  const { setIsOpen } = useDrawer()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(e)
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen(true)
    }
  }

  return (
    <button
      type="button"
      data-slot="drawer-trigger"
      className={classNames("w-full text-left", className)}
      onClick={() => setIsOpen(true)}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </button>
  )
}

function DrawerOverlay({
  className,
  onKeyDown,
  ...props
}: Readonly<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  const { isOpen, setIsOpen } = useDrawer()

  if (!isOpen) return null

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(e)
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen(false)
    }
  }

  return (
    <button
      type="button"
      data-slot="drawer-overlay"
      aria-label="Close drawer"
      className={classNames(
        "fixed inset-0 z-50 bg-black/50 animate-in fade-in-0 border-none",
        className
      )}
      onClick={() => setIsOpen(false)}
      onKeyDown={handleKeyDown}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDialogElement>>) {
  const { isOpen, setIsOpen, direction } = useDrawer()
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  const directionClasses = {
    top: "inset-x-0 top-0 mb-24 max-h-[80vh] rounded-b-lg border-b",
    bottom: "inset-x-0 bottom-0 mt-24 max-h-[80vh] rounded-t-lg border-t",
    right: "inset-y-0 right-0 w-3/4 border-l sm:max-w-sm",
    left: "inset-y-0 left-0 w-3/4 border-r sm:max-w-sm",
  }

  const animationClasses = {
    top: "slide-in-from-top-2",
    bottom: "slide-in-from-bottom-2",
    right: "slide-in-from-right-2",
    left: "slide-in-from-left-2",
  }

  const content = (
    <dialog
      ref={dialogRef}
      onClose={() => setIsOpen(false)}
      className={classNames(
        "fixed z-50 m-0 p-0 bg-transparent border-none w-full h-full max-w-none max-h-none block backdrop:bg-black/50 overflow-hidden",
        className
      )}
      {...props}
    >
      <button
        type="button"
        className="absolute inset-0 h-full w-full bg-transparent border-none cursor-default"
        onClick={() => setIsOpen(false)}
        aria-label="Close drawer"
      />
      <div
        className="relative flex-1 overflow-hidden flex flex-col pointer-events-none"
      >
        <div
          className={classNames(
            "mt-auto bg-white flex flex-col h-auto animate-in pointer-events-auto",
            directionClasses[direction],
            animationClasses[direction]
          )}
        >
          {direction === "bottom" && (
            <div className="bg-gray-200 mx-auto mt-4 h-2 w-[100px] shrink-0 rounded-full" />
          )}
          {children}
        </div>
      </div>
    </dialog>
  )

  if (typeof document === "undefined") return null
  return createPortal(content, document.body)
}

function DrawerClose({
  children,
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLButtonElement>>) {
  const { setIsOpen } = useDrawer()

  return (
    <button
      type="button"
      data-slot="drawer-close"
      className={className}
      onClick={() => setIsOpen(false)}
      {...props}
    >
      {children}
    </button>
  )
}

function DrawerHeader({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  const { direction } = useDrawer()

  return (
    <div
      data-slot="drawer-header"
      className={`
        flex flex-col gap-2 p-4
        ${direction === "bottom" || direction === "top" ? "text-center" : "text-left"}
        ${className || ""}
      `}
      {...props}
    />
  )
}

function DrawerFooter({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      data-slot="drawer-footer"
      className={`mt-auto flex flex-col gap-2 p-4 ${className || ""}`}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  children,
  ...props
}: Readonly<React.HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h3
      data-slot="drawer-title"
      className={`font-semibold text-gray-900 ${className || ""}`}
      {...props}
    >
      {children}
    </h3>
  )
}

function DrawerDescription({
  className,
  children,
  ...props
}: Readonly<React.HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p
      data-slot="drawer-description"
      className={`text-sm text-gray-600 ${className || ""}`}
      {...props}
    >
      {children}
    </p>
  )
}

export {
  Drawer,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}