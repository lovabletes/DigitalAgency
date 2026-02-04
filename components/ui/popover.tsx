"use client"

import * as React from "react"
import { createPortal } from "react-dom"

import { classNames } from "@/utils/class-names"

type PopoverContextValue = {
  open: boolean
  setOpen: (v: boolean) => void
  triggerRef: React.RefObject<HTMLElement | null>
  side: "top" | "right" | "bottom" | "left"
  align: "start" | "center" | "end"
  sideOffset: number
}

const PopoverCtx = React.createContext<PopoverContextValue | null>(null)

type PopoverProps = {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

function Popover({ open, defaultOpen, onOpenChange, children }: PopoverProps) {
  const isControlled = open !== undefined
  const [internalOpen, setInternalOpen] = React.useState<boolean>(defaultOpen ?? false)
  const triggerRef = React.useRef<HTMLElement | null>(null)

  const setOpen = React.useCallback((v: boolean) => {
    if (!isControlled) setInternalOpen(v)
    onOpenChange?.(v)
  }, [isControlled, onOpenChange])
  const value = React.useMemo(
    () => ({ open: isControlled ? !!open : internalOpen, setOpen, triggerRef, side: "bottom" as const, align: "center" as const, sideOffset: 4 }),
    [isControlled, open, internalOpen, setOpen]
  )

  return <PopoverCtx.Provider value={value}>{children}</PopoverCtx.Provider>
}

function mergeRefs<T = unknown>(...refs: Array<React.Ref<T> | undefined>) {
  return (value: T) => {
    for (const ref of refs) {
      if (!ref) continue
      if (typeof ref === "function") ref(value)
      else try {
        (ref as unknown as React.MutableRefObject<T | null>).current = value
      } catch {}
    }
  }
}

type ChildProps = React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement> & {
  className?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  ['data-slot']?: string
  ['aria-expanded']?: boolean
  ['aria-haspopup']?: string
}

type PopoverTriggerProps = React.HTMLAttributes<HTMLElement> & {
  asChild?: boolean
  children: React.ReactElement<ChildProps>
}

function PopoverTrigger({ asChild, children, className, ...props }: PopoverTriggerProps) {
  const ctx = React.useContext(PopoverCtx)
  if (!ctx) throw new Error("PopoverTrigger must be used within Popover")
  const { setOpen, triggerRef, open } = ctx

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    props.onClick?.(e)
    if (e.defaultPrevented) return
    setOpen(!open)
  }

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<ChildProps>
    return React.cloneElement(child, {
      ref: mergeRefs<HTMLElement | null>(triggerRef),
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        child.props?.onClick?.(e)
        handleClick(e)
      },
      className: classNames(child.props?.className, className),
      "data-slot": "popover-trigger",
      "aria-expanded": open,
      "aria-haspopup": "dialog",
    })
  }

  return (
    <button
      ref={triggerRef as unknown as React.Ref<HTMLButtonElement>}
      type="button"
      onClick={handleClick}
      className={classNames(className)}
      data-slot="popover-trigger"
      aria-expanded={open}
      aria-haspopup="dialog"
      {...props}
    >
      {children}
    </button>
  )
}

type PopoverContentProps = React.HTMLAttributes<HTMLDivElement> & {
  align?: "start" | "center" | "end"
  side?: "top" | "right" | "bottom" | "left"
  sideOffset?: number
}

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, align = "center", side = "bottom", sideOffset = 4, style, ...props }, ref) => {
    const ctx = React.useContext(PopoverCtx)
    if (!ctx) throw new Error("PopoverContent must be used within Popover")
    const { open, setOpen, triggerRef } = ctx
    const contentRef = React.useRef<HTMLDivElement | null>(null)

    // Close on outside click / Escape / Scroll / Resize
    React.useEffect(() => {
      if (!open) return
      const onDocClick = (e: MouseEvent) => {
        const t = e.target as Node
        if (contentRef.current?.contains(t)) return
        if (triggerRef.current?.contains(t as Node)) return
        setOpen(false)
      }
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false)
      }
      const onScroll = (e: Event) => {
        // Close if scrolling outside the popover content
        if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
          setOpen(false)
        }
      }
      const onResize = () => {
        setOpen(false)
      }
      document.addEventListener("mousedown", onDocClick)
      document.addEventListener("keydown", onKey)
      document.addEventListener("scroll", onScroll, true)
      window.addEventListener("resize", onResize)
      return () => {
        document.removeEventListener("mousedown", onDocClick)
        document.removeEventListener("keydown", onKey)
        document.removeEventListener("scroll", onScroll, true)
        window.removeEventListener("resize", onResize)
      }
    }, [open, setOpen, triggerRef])

    // Simple positioning near trigger with collision detection
    const [pos, setPos] = React.useState<{ top: number; left: number } | null>(null)
    React.useLayoutEffect(() => {
      if (!open) return
      const el = triggerRef.current
      const content = contentRef.current
      if (!el || !content) return
      const rect = el.getBoundingClientRect()
      const cRect = content.getBoundingClientRect()
      let top = 0
      let left = 0
      const offset = sideOffset
      const padding = 10 // viewport padding
      
      if (side === "bottom") top = rect.bottom + offset
      if (side === "top") top = rect.top - cRect.height - offset
      if (side === "right") top = rect.top + (rect.height - cRect.height) / 2
      if (side === "left") top = rect.top + (rect.height - cRect.height) / 2

      if (side === "bottom" || side === "top") {
        if (align === "start") left = rect.left
        if (align === "center") left = rect.left + rect.width / 2 - cRect.width / 2
        if (align === "end") left = rect.right - cRect.width
      } else {
        if (side === "right") left = rect.right + offset
        if (side === "left") left = rect.left - cRect.width - offset
      }
      
      // Collision detection - keep within viewport
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      
      // Prevent overflow on right
      if (left + cRect.width > viewportWidth - padding) {
        left = viewportWidth - cRect.width - padding
      }
      // Prevent overflow on left
      if (left < padding) {
        left = padding
      }
      // Prevent overflow on bottom
      if (top + cRect.height > viewportHeight - padding) {
        top = viewportHeight - cRect.height - padding
      }
      // Prevent overflow on top
      if (top < padding) {
        top = padding
      }
      
      setPos({ top, left })
    }, [open, align, side, sideOffset, triggerRef])

    if (!open) return null

    const content = (
      <div
        ref={(node) => {
          ;(contentRef as unknown as React.MutableRefObject<HTMLDivElement | null>).current = node
          if (typeof ref === "function") ref(node as HTMLDivElement)
          else if (ref && typeof ref === "object") (ref as unknown as React.MutableRefObject<HTMLDivElement | null>).current = node
        }}
        data-slot="popover-content"
        data-state={open ? "open" : "closed"}
        data-side={side}
        className={classNames(
          "z-[9999] rounded-lg border bg-card shadow-xl outline-none",
          className
        )}
        style={{ position: "fixed", top: pos?.top, left: pos?.left, ...style }}
        role="dialog"
        {...props}
      />
    )

    // Portal to body
    return typeof document !== "undefined"
      ? createPortal(content, document.body)
      : content
  }
)
PopoverContent.displayName = "PopoverContent"

export { Popover, PopoverTrigger, PopoverContent }
