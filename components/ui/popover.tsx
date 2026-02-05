"use client"

import * as React from "react"
import { createPortal } from "react-dom"

import { classNames } from "@/utils/class-names"

type Side = "top" | "right" | "bottom" | "left"
type Align = "start" | "center" | "end"

type PopoverContextValue = {
  open: boolean
  setOpen: (v: boolean) => void
  triggerRef: React.RefObject<HTMLElement | null>
  side: Side
  align: Align
  sideOffset: number
}

const PopoverCtx = React.createContext<PopoverContextValue | null>(null)

type PopoverProps = {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

function Popover({ open, defaultOpen, onOpenChange, children }: Readonly<PopoverProps>) {
  const isControlled = open !== undefined
  const [internalOpen, setInternalOpen] = React.useState<boolean>(defaultOpen ?? false)
  const triggerRef = React.useRef<HTMLElement | null>(null)

  const setOpen = React.useCallback((v: boolean) => {
    if (!isControlled) setInternalOpen(v)
    onOpenChange?.(v)
  }, [isControlled, onOpenChange])

  const value = React.useMemo<PopoverContextValue>(
    () => ({
      open: isControlled ? !!open : internalOpen,
      setOpen,
      triggerRef,
      side: "bottom",
      align: "center",
      sideOffset: 4
    }),
    [isControlled, open, internalOpen, setOpen]
  )

  return <PopoverCtx.Provider value={value}>{children}</PopoverCtx.Provider>
}

function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return (value: T) => {
    for (const ref of refs) {
      if (!ref) continue
      if (typeof ref === "function") {
        ref(value)
      } else if (ref && typeof ref === "object") {
        (ref as any).current = value
      }
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

function PopoverTrigger({ asChild, children, className, ...props }: Readonly<PopoverTriggerProps>) {
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
      ref={triggerRef as React.Ref<HTMLButtonElement>}
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
  align?: Align
  side?: Side
  sideOffset?: number
}

const PopoverContent = React.forwardRef<HTMLDivElement, Readonly<PopoverContentProps>>(
  ({ className, align = "center", side = "bottom", sideOffset = 4, style, ...props }, ref) => {
    const ctx = React.useContext(PopoverCtx)
    if (!ctx) throw new Error("PopoverContent must be used within Popover")
    const { open, setOpen, triggerRef } = ctx
    const contentRef = React.useRef<HTMLElement | null>(null)

    // Close on outside click / Escape / Scroll / Resize
    React.useEffect(() => {
      if (!open) return
      const onDocClick = (e: MouseEvent) => {
        const t = e.target as Node
        if (contentRef.current?.contains(t)) return
        if (triggerRef.current?.contains(t)) return
        setOpen(false)
      }
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false)
      }
      const onScroll = (e: Event) => {
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
      globalThis.addEventListener("resize", onResize)
      return () => {
        document.removeEventListener("mousedown", onDocClick)
        document.removeEventListener("keydown", onKey)
        document.removeEventListener("scroll", onScroll, true)
        globalThis.removeEventListener("resize", onResize)
      }
    }, [open, setOpen, triggerRef])

    const [pos, setPos] = React.useState<{ top: number; left: number } | null>(null)

    const updatePosition = React.useCallback(() => {
      const el = triggerRef.current
      const content = contentRef.current
      if (!el || !content) return
      const rect = el.getBoundingClientRect()
      const cRect = content.getBoundingClientRect()
      let top = 0
      let left = 0
      const offset = sideOffset
      const padding = 10

      switch (side) {
        case "bottom": top = rect.bottom + offset; break;
        case "top": top = rect.top - cRect.height - offset; break;
        case "right":
        case "left":
          top = rect.top + (rect.height - cRect.height) / 2;
          break;
      }

      if (side === "bottom" || side === "top") {
        if (align === "start") left = rect.left
        else if (align === "center") left = rect.left + rect.width / 2 - cRect.width / 2
        else left = rect.right - cRect.width
      } else if (side === "right") {
        left = rect.right + offset
      } else {
        left = rect.left - cRect.width - offset
      }

      const viewportWidth = globalThis.innerWidth
      const viewportHeight = globalThis.innerHeight

      left = Math.max(padding, Math.min(left, viewportWidth - cRect.width - padding))
      top = Math.max(padding, Math.min(top, viewportHeight - cRect.height - padding))

      setPos({ top, left })
    }, [side, align, sideOffset, triggerRef])

    React.useLayoutEffect(() => {
      if (open) updatePosition()
    }, [open, updatePosition])

    if (!open) return null

    const dialogContent = (
      <dialog
        ref={(node) => {
          contentRef.current = node
          if (typeof ref === "function") ref(node as any)
          else if (ref && typeof ref === "object") {
            (ref as any).current = node
          }
        }}
        data-slot="popover-content"
        data-state={open ? "open" : "closed"}
        data-side={side}
        open={open}
        className={classNames(
          "fixed z-[9999] rounded-lg border bg-card p-0 shadow-xl outline-none block border-none bg-transparent",
          className
        )}
        style={{ top: pos?.top, left: pos?.left, ...style }}
        {...(props as React.DialogHTMLAttributes<HTMLDialogElement>)}
      >
        <div className="bg-card rounded-lg border shadow-xl">
          {props.children}
        </div>
      </dialog>
    )

    if (typeof document === "undefined") return dialogContent

    return createPortal(dialogContent, document.body)
  }
)
PopoverContent.displayName = "PopoverContent"

export { Popover, PopoverTrigger, PopoverContent }
