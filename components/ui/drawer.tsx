"use client"

import * as React from "react"

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
}: DrawerProps) {
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

  // Close drawer on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, setIsOpen])

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

  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen, direction }}>
      {children}
    </DrawerContext.Provider>
  )
}

function DrawerTrigger({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { setIsOpen } = useDrawer()

  return (
    <div
      data-slot="drawer-trigger"
      className={className}
      onClick={() => setIsOpen(true)}
      {...props}
    >
      {children}
    </div>
  )
}

function DrawerOverlay({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen, setIsOpen } = useDrawer()

  if (!isOpen) return null

  return (
    <div
      data-slot="drawer-overlay"
      className={`
        fixed inset-0 z-50 bg-black/50
        animate-in fade-in-0
        ${className || ""}
      `}
      onClick={() => setIsOpen(false)}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen, direction } = useDrawer()
  const contentRef = React.useRef<HTMLDivElement>(null)

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

  return (
    <>
      <DrawerOverlay />
      <div
        ref={contentRef}
        data-slot="drawer-content"
        className={`
          fixed z-50 flex h-auto flex-col bg-white
          ${directionClasses[direction]}
          animate-in ${animationClasses[direction]}
          ${className || ""}
        `}
        {...props}
      >
        {direction === "bottom" && (
          <div className="bg-gray-200 mx-auto mt-4 h-2 w-[100px] shrink-0 rounded-full" />
        )}
        {children}
      </div>
    </>
  )
}

function DrawerClose({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const { setIsOpen } = useDrawer()

  return (
    <button
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
}: React.HTMLAttributes<HTMLDivElement>) {
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
}: React.HTMLAttributes<HTMLDivElement>) {
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
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="drawer-title"
      className={`font-semibold text-gray-900 ${className || ""}`}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="drawer-description"
      className={`text-sm text-gray-600 ${className || ""}`}
      {...props}
    />
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