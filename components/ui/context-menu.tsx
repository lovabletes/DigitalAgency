"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { CheckCircleIcon, CheckIcon, ChevronRightIcon,  } from "@/components/icons/icons"
import { classNames } from "@/utils/class-names"

type Ctx = {
  open: boolean
  setOpen: (v: boolean) => void
  pos: { x: number; y: number }
  setPos: (p: { x: number; y: number }) => void
}

const Ctx = React.createContext<Ctx | null>(null)

function useCtx() {
  const c = React.useContext(Ctx)
  if (!c) throw new Error("ContextMenu components must be used within <ContextMenu>")
  return c
}

function ContextMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [pos, setPos] = React.useState({ x: 0, y: 0 })
  return <Ctx.Provider value={{ open, setOpen, pos, setPos }}>{children}</Ctx.Provider>
}

function ContextMenuTrigger({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const { setOpen, setPos } = useCtx()
  function onContextMenu(e: React.MouseEvent) {
    e.preventDefault()
    setPos({ x: e.clientX, y: e.clientY })
    setOpen(true)
  }
  return (
    <div data-slot="context-menu-trigger" className={className} onContextMenu={onContextMenu} {...props}>
      {children}
    </div>
  )
}

function ContextMenuGroup(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="context-menu-group" {...props} />
}

function ContextMenuPortal({ children }: { children: React.ReactNode }) {
  if (typeof document === "undefined") return null
  return createPortal(<>{children}</>, document.body)
}

function ContextMenuSub(props: React.HTMLAttributes<HTMLDivElement>) {
  // Simple wrapper; nested menus not implemented
  return <div data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="context-menu-radio-group" {...props} />
}

function ContextMenuSubTrigger({ className, inset, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  return (
    <div
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </div>
  )
}

function ContextMenuSubContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="context-menu-sub-content"
      className={classNames(
        "bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuContent({ className, style, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open, setOpen, pos } = useCtx()
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [setOpen])

  if (!open) return null
  const base = (
    <div
      ref={ref}
      data-slot="context-menu-content"
      style={{ position: "fixed", left: pos.x, top: pos.y, ...style }}
      className={classNames(
        "bg-popover text-popover-foreground z-50 min-w-[8rem] max-h-[var(--available-height,400px)] overflow-y-auto rounded-md border p-1 shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
  if (typeof document === "undefined") return base
  return createPortal(base, document.body)
}

function ContextMenuItem({ className, inset, onClick, "data-variant": dataVariant, ...props }: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean; "data-variant"?: "default" | "destructive" }) {
  const { setOpen } = useCtx()
  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    onClick?.(e)
    setOpen(false)
  }
  return (
    <div
      role="menuitem"
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={dataVariant}
      tabIndex={0}
      onClick={handleClick}
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8",
        dataVariant === "destructive" ? "text-destructive" : "",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({ className, children, checked = false, onClick, ...props }: React.HTMLAttributes<HTMLDivElement> & { checked?: boolean }) {
  const { setOpen } = useCtx()
  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    onClick?.(e)
    setOpen(false)
  }
  return (
    <div
      role="menuitemcheckbox"
      aria-checked={checked}
      data-slot="context-menu-checkbox-item"
      onClick={handleClick}
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        {checked ? <CheckIcon className="size-4" /> : null}
      </span>
      {children}
    </div>
  )
}

function ContextMenuRadioItem({ className, children, checked = false, onClick, ...props }: React.HTMLAttributes<HTMLDivElement> & { checked?: boolean }) {
  const { setOpen } = useCtx()
  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    onClick?.(e)
    setOpen(false)
  }
  return (
    <div
      role="menuitemradio"
      aria-checked={checked}
      data-slot="context-menu-radio-item"
      onClick={handleClick}
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        {checked ? <CheckCircleIcon className="size-2 fill-current" /> : null}
      </span>
      {children}
    </div>
  )
}

function ContextMenuLabel({ className, inset, ...props }: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  return (
    <div
      data-slot="context-menu-label"
      data-inset={inset}
      className={classNames("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      {...props}
    />
  )
}

function ContextMenuSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="context-menu-separator" className={classNames("bg-border -mx-1 my-1 h-px", className)} {...props} />
}

function ContextMenuShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span data-slot="context-menu-shortcut" className={classNames("text-muted-foreground ml-auto text-xs tracking-widest", className)} {...props} />
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
