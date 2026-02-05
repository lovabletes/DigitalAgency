"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { CheckCircleIcon, CheckIcon, ChevronRightIcon, } from "@/components/icons/icons"
import { classNames } from "@/utils/class-names"

type CtxValue = {
  open: boolean
  setOpen: (v: boolean) => void
  pos: { x: number; y: number }
  setPos: (p: { x: number; y: number }) => void
}

const Ctx = React.createContext<CtxValue | null>(null)

function useCtx() {
  const c = React.useContext(Ctx)
  if (!c) throw new Error("ContextMenu components must be used within <ContextMenu>")
  return c
}

interface ContextMenuProps {
  children: React.ReactNode
}

function ContextMenu({ children }: Readonly<ContextMenuProps>) {
  const [open, setOpen] = React.useState(false)
  const [pos, setPos] = React.useState({ x: 0, y: 0 })

  const contextValue = React.useMemo(() => ({
    open,
    setOpen,
    pos,
    setPos
  }), [open, pos])

  return <Ctx.Provider value={contextValue}>{children}</Ctx.Provider>
}

function ContextMenuTrigger({ children, className, onKeyDown, ...props }: Readonly<React.HTMLAttributes<HTMLElement>>) {
  const { setOpen, setPos } = useCtx()

  const onContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    setPos({ x: e.clientX, y: e.clientY })
    setOpen(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    onKeyDown?.(e)
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
      setPos({ x: rect.left, y: rect.bottom })
      setOpen(true)
    }
  }

  return (
    <button
      type="button"
      data-slot="context-menu-trigger"
      className={classNames("w-full text-left", className)}
      onContextMenu={onContextMenu}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </button>
  )
}

function ContextMenuGroup(props: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return <div data-slot="context-menu-group" {...props} />
}

function ContextMenuPortal({ children }: Readonly<{ children: React.ReactNode }>) {
  if (typeof document === "undefined") return null
  return createPortal(<>{children}</>, document.body)
}

function ContextMenuSub(props: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  // Simple wrapper; nested menus not implemented
  return <div data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup(props: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return <div data-slot="context-menu-radio-group" {...props} />
}

interface ContextMenuSubTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean
}

function ContextMenuSubTrigger({ className, inset, children, ...props }: Readonly<ContextMenuSubTriggerProps>) {
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

function ContextMenuSubContent({ className, ...props }: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
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

function ContextMenuContent({ className, style, children, ...props }: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
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
      role="menu"
      {...props}
    >
      {children}
    </div>
  )
  if (typeof document === "undefined") return base
  return createPortal(base, document.body)
}

function useMenuItemCommon(onClick?: (e: React.MouseEvent<HTMLDivElement>) => void, onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void) {
  const { setOpen } = useCtx()

  const handleClick = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e)
    setOpen(false)
  }, [onClick, setOpen])

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(e)
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpen(false)
      const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
      e.currentTarget.dispatchEvent(clickEvent)
    }
  }, [onKeyDown, setOpen])

  return { handleClick, handleKeyDown }
}

interface ContextMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean
  "data-variant"?: "default" | "destructive"
}

function ContextMenuItem({ className, inset, onClick, onKeyDown, "data-variant": dataVariant, ...props }: Readonly<ContextMenuItemProps>) {
  const { handleClick, handleKeyDown } = useMenuItemCommon(onClick, onKeyDown)

  return (
    <div
      role="menuitem"
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={dataVariant}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8",
        dataVariant === "destructive" ? "text-destructive" : "",
        className
      )}
      {...props}
    />
  )
}

interface ContextMenuCheckboxItemProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
}

function ContextMenuCheckboxItem({ className, children, checked = false, onClick, onKeyDown, ...props }: Readonly<ContextMenuCheckboxItemProps>) {
  const { handleClick, handleKeyDown } = useMenuItemCommon(onClick, onKeyDown)

  return (
    <div
      role="menuitemcheckbox"
      aria-checked={checked}
      data-slot="context-menu-checkbox-item"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
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

interface ContextMenuRadioItemProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
}

function ContextMenuRadioItem({ className, children, checked = false, onClick, onKeyDown, ...props }: Readonly<ContextMenuRadioItemProps>) {
  const { handleClick, handleKeyDown } = useMenuItemCommon(onClick, onKeyDown)

  return (
    <div
      role="menuitemradio"
      aria-checked={checked}
      data-slot="context-menu-radio-item"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
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

interface ContextMenuLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean
}

function ContextMenuLabel({ className, inset, children, ...props }: Readonly<ContextMenuLabelProps>) {
  return (
    <div
      data-slot="context-menu-label"
      data-inset={inset}
      className={classNames("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      {...props}
    >
      {children}
    </div>
  )
}

function ContextMenuSeparator({ className, ...props }: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return <div data-slot="context-menu-separator" className={classNames("bg-border -mx-1 my-1 h-px", className)} {...props} />
}

function ContextMenuShortcut({ className, children, ...props }: Readonly<React.HTMLAttributes<HTMLSpanElement>>) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={classNames("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props}
    >
      {children}
    </span>
  )
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
