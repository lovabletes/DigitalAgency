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
}: HoverCardProps) {
  const isControlled = open !== undefined
  const [internalOpen, setInternalOpen] = React.useState<boolean>(defaultOpen ?? false)
  const isOpen = isControlled ? !!open : internalOpen
  const setOpen = (v: boolean) => {
    if (!isControlled) setInternalOpen(v)
    onOpenChange?.(v)
  }
  const triggerRef = React.useRef<HTMLElement | null>(null)
  return (
    <HoverCardCtx.Provider
      value={{ open: isOpen, setOpen, triggerRef, side: "top", align: "center", sideOffset: 4, openDelay, closeDelay }}
    >
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

function HoverCardTrigger({ asChild, children, className, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }: HoverCardTriggerProps) {
  const ctx = React.useContext(HoverCardCtx)
  if (!ctx) throw new Error("HoverCardTrigger must be used within HoverCard")
  const { setOpen, openDelay, closeDelay, triggerRef, open } = ctx
  const openTimer = React.useRef<number | null>(null)
  const closeTimer = React.useRef<number | null>(null)

  const clearTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current)
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    openTimer.current = null
    closeTimer.current = null
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    onMouseEnter?.(e)
    if (e.defaultPrevented) return
    clearTimers()
    openTimer.current = window.setTimeout(() => setOpen(true), openDelay)
  }
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    onMouseLeave?.(e)
    if (e.defaultPrevented) return
    clearTimers()
    closeTimer.current = window.setTimeout(() => setOpen(false), closeDelay)
  }
  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    onFocus?.(e)
    if (e.defaultPrevented) return
    clearTimers()
    openTimer.current = window.setTimeout(() => setOpen(true), openDelay)
  }
  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    onBlur?.(e)
    if (e.defaultPrevented) return
    clearTimers()
    closeTimer.current = window.setTimeout(() => setOpen(false), closeDelay)
  }

  React.useEffect(() => () => clearTimers(), [])

  const triggerProps = {
    ref: (node: HTMLElement | null) => { triggerRef.current = node },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    className: [ (children as React.ReactElement<{ className?: string }>).props?.className, className ].filter(Boolean).join(" "),
    "data-slot": "hover-card-trigger",
    "aria-expanded": open,
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, triggerProps)
  }

  return React.createElement("span", { ...triggerProps, ...props })
}

type HoverCardContentProps = React.HTMLAttributes<HTMLDivElement> & {
  align?: Align
  side?: Side
  sideOffset?: number
}

function HoverCardContent({ className, align = "center", side = "top", sideOffset = 4, style, ...props }: HoverCardContentProps) {
  const ctx = React.useContext(HoverCardCtx)
  if (!ctx) throw new Error("HoverCardContent must be used within HoverCard")
  const { open, triggerRef } = ctx
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState<React.CSSProperties | undefined>(undefined)

  React.useEffect(() => {
    if (!open) return
    const update = () => {
      const trigger = triggerRef.current
      const content = contentRef.current
      if (!trigger || !content) return
      const rect = trigger.getBoundingClientRect()
      const cRect = content.getBoundingClientRect()
      let top = 0, left = 0
      const offset = sideOffset
      switch (side) {
        case "top":
          top = rect.top - cRect.height - offset
          break
        case "bottom":
          top = rect.bottom + offset
          break
        case "left":
          left = rect.left - cRect.width - offset
          break
        case "right":
          left = rect.right + offset
          break
      }
      if (side === "top" || side === "bottom") {
        if (align === "start") left = rect.left
        if (align === "center") left = rect.left + rect.width / 2 - cRect.width / 2
        if (align === "end") left = rect.right - cRect.width
      } else {
        if (align === "start") top = rect.top
        if (align === "center") top = rect.top + rect.height / 2 - cRect.height / 2
        if (align === "end") top = rect.bottom - cRect.height
      }
      setPosition({ position: "fixed", top, left, zIndex: 50 })
    }
    update()
    window.addEventListener("resize", update)
    window.addEventListener("scroll", update, true)
    return () => {
      window.removeEventListener("resize", update)
      window.removeEventListener("scroll", update, true)
    }
  }, [open, align, side, sideOffset, triggerRef])

  if (!open) return null

  const body = (
    <div
      ref={contentRef}
      role="dialog"
      data-slot="hover-card-content"
      data-state={open ? "open" : "closed"}
      data-side={side}
      data-align={align}
      style={{ ...position, ...style }}
      className={classNames(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      )}
      {...props}
    />
  )

  const portal = (
    <div data-slot="hover-card-portal">{body}</div>
  )

  return typeof document !== "undefined" ? createPortal(portal, document.body) : portal
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
