"use client"

import * as React from "react"
import { createPortal } from "react-dom"

import { classNames } from "@/utils/class-names"

type Side = "top" | "bottom" | "left" | "right"
type Align = "start" | "center" | "end"

type HoverCardContextValue = {
  open: boolean
  setOpen: (v: boolean) => void
  triggerRef: React.RefObject<HTMLElement | null>
  side: Side
  align: Align
  sideOffset: number
  openDelay: number
  closeDelay: number
}

const HoverCardCtx = React.createContext<HoverCardContextValue | null>(null)

type HoverCardProps = {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  openDelay?: number
  closeDelay?: number
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

function HoverCard({
  open,
  defaultOpen,
  onOpenChange,
  openDelay = 0,
  closeDelay = 0,
  children,
  className,
  ...props
}: Readonly<HoverCardProps>) {
  const isControlled = open !== undefined
  const [internalOpen, setInternalOpen] = React.useState<boolean>(defaultOpen ?? false)
  const isOpen = isControlled ? !!open : internalOpen

  const setOpen = React.useCallback((v: boolean) => {
    if (!isControlled) setInternalOpen(v)
    onOpenChange?.(v)
  }, [isControlled, onOpenChange])

  const triggerRef = React.useRef<HTMLElement | null>(null)

  const contextValue = React.useMemo<HoverCardContextValue>(() => ({
    open: isOpen,
    setOpen,
    triggerRef,
    side: "top" as Side,
    align: "center" as Align,
    sideOffset: 4,
    openDelay,
    closeDelay
  }), [isOpen, setOpen, openDelay, closeDelay])

  return (
    <HoverCardCtx.Provider value={contextValue}>
      <div data-slot="hover-card" className={className} {...props}>
        {children}
      </div>
    </HoverCardCtx.Provider>
  )
}

type HoverCardTriggerProps = {
  asChild?: boolean
  children: React.ReactElement
} & React.HTMLAttributes<HTMLElement>

function HoverCardTrigger({ asChild, children, className, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }: Readonly<HoverCardTriggerProps>) {
  const ctx = React.useContext(HoverCardCtx)
  if (!ctx) throw new Error("HoverCardTrigger must be used within HoverCard")
  const { setOpen, openDelay, closeDelay, triggerRef, open } = ctx
  const openTimer = React.useRef<NodeJS.Timeout | null>(null)
  const closeTimer = React.useRef<NodeJS.Timeout | null>(null)

  const clearTimers = React.useCallback(() => {
    if (openTimer.current) globalThis.clearTimeout(openTimer.current)
    if (closeTimer.current) globalThis.clearTimeout(closeTimer.current)
    openTimer.current = null
    closeTimer.current = null
  }, [])

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    onMouseEnter?.(e)
    if (e.defaultPrevented) return
    clearTimers()
    openTimer.current = globalThis.setTimeout(() => setOpen(true), openDelay)
  }
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    onMouseLeave?.(e)
    if (e.defaultPrevented) return
    clearTimers()
    closeTimer.current = globalThis.setTimeout(() => setOpen(false), closeDelay)
  }
  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    onFocus?.(e)
    if (e.defaultPrevented) return
    clearTimers()
    openTimer.current = globalThis.setTimeout(() => setOpen(true), openDelay)
  }
  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    onBlur?.(e)
    if (e.defaultPrevented) return
    clearTimers()
    closeTimer.current = globalThis.setTimeout(() => setOpen(false), closeDelay)
  }

  React.useEffect(() => () => clearTimers(), [clearTimers])

  const triggerProps = {
    ref: (node: HTMLElement | null) => {
      if (triggerRef && typeof triggerRef === 'object') {
        (triggerRef as any).current = node
      }
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    className: classNames((children as React.ReactElement<{ className?: string }>).props?.className, className),
    "data-slot": "hover-card-trigger",
    "aria-expanded": open,
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, triggerProps)
  }

  return <span {...triggerProps} {...props} />
}

type HoverCardContentProps = React.HTMLAttributes<HTMLDivElement> & {
  align?: Align
  side?: Side
  sideOffset?: number
}

function HoverCardContent({ className, align = "center", side = "top", sideOffset = 4, style, ...props }: Readonly<HoverCardContentProps>) {
  const ctx = React.useContext(HoverCardCtx)
  if (!ctx) throw new Error("HoverCardContent must be used within HoverCard")
  const { open, triggerRef } = ctx
  const contentRef = React.useRef<HTMLDialogElement>(null)
  const [position, setPosition] = React.useState<React.CSSProperties | undefined>(undefined)

  const updatePosition = React.useCallback(() => {
    const trigger = triggerRef.current
    const content = contentRef.current
    if (!trigger || !content) return

    const rect = trigger.getBoundingClientRect()
    const cRect = content.getBoundingClientRect()
    let top = 0, left = 0

    // Calculate primary side position
    if (side === "top") top = rect.top - cRect.height - sideOffset
    else if (side === "bottom") top = rect.bottom + sideOffset
    else if (side === "left") left = rect.left - cRect.width - sideOffset
    else if (side === "right") left = rect.right + sideOffset

    // Calculate alignment
    if (side === "top" || side === "bottom") {
      if (align === "start") left = rect.left
      else if (align === "center") left = rect.left + rect.width / 2 - cRect.width / 2
      else left = rect.right - cRect.width
    } else if (align === "start") {
      top = rect.top
    } else if (align === "center") {
      top = rect.top + rect.height / 2 - cRect.height / 2
    } else {
      top = rect.bottom - cRect.height
    }

    setPosition({ position: "fixed", top, left, zIndex: 50 })
  }, [side, sideOffset, align, triggerRef])

  React.useEffect(() => {
    if (!open) return
    updatePosition()
    globalThis.addEventListener("resize", updatePosition)
    globalThis.addEventListener("scroll", updatePosition, true)
    return () => {
      globalThis.removeEventListener("resize", updatePosition)
      globalThis.removeEventListener("scroll", updatePosition, true)
    }
  }, [open, updatePosition])

  if (!open) return null

  const body = (
    <dialog
      ref={contentRef}
      open={open}
      aria-modal="false"
      data-slot="hover-card-content"
      data-state={open ? "open" : "closed"}
      data-side={side}
      data-align={align}
      style={{ ...position, ...style }}
      className={classNames(
        "bg-transparent border-none p-0 overflow-visible fixed z-50 pointer-events-none block",
        className
      )}
    >
      <div className={classNames(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-64 rounded-md border p-4 shadow-md outline-hidden pointer-events-auto"
      )}
        {...props}>
        {props.children}
      </div>
    </dialog>
  )

  const portal = (
    <div data-slot="hover-card-portal">{body}</div>
  )

  if (typeof document === "undefined") return portal

  return createPortal(portal, document.body)
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
