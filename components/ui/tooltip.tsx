"use client"

import * as React from "react"
import { classNames } from "@/utils/class-names"

type TooltipProviderContext = { delayDuration: number }
const TooltipCtx = React.createContext<TooltipProviderContext>({ delayDuration: 0 })

function TooltipProvider({ delayDuration = 0, children }: Readonly<{ delayDuration?: number; children?: React.ReactNode }>) {
  const value = React.useMemo(() => ({ delayDuration }), [delayDuration])
  return (
    <TooltipCtx.Provider value={value}>
      <div data-slot="tooltip-provider">{children}</div>
    </TooltipCtx.Provider>
  )
}

type TooltipContextValue = {
  open: boolean
  setOpen: (o: boolean) => void
  sideOffset: number
}
const TooltipContext = React.createContext<TooltipContextValue | null>(null)

function Tooltip({ children }: Readonly<{ children?: React.ReactNode }>) {
  const { delayDuration } = React.useContext(TooltipCtx)
  const [open, setOpen] = React.useState(false)
  const timer = React.useRef<NodeJS.Timeout | null>(null)

  const setWithDelay = React.useCallback((o: boolean) => {
    if (timer.current) globalThis.clearTimeout(timer.current)
    timer.current = globalThis.setTimeout(() => setOpen(o), o ? delayDuration : 0)
  }, [delayDuration])

  const contextValue = React.useMemo(() => ({
    open,
    setOpen: setWithDelay,
    sideOffset: 0
  }), [open, setWithDelay])

  return (
    <TooltipContext.Provider value={contextValue}>
      <span data-slot="tooltip" className="relative inline-block">
        {children}
      </span>
    </TooltipContext.Provider>
  )
}

type TriggerProps = React.HTMLAttributes<HTMLElement> & { asChild?: boolean }
function TooltipTrigger({ asChild, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }: Readonly<TriggerProps>) {
  const ctx = React.useContext(TooltipContext)
  const handlers = {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      onMouseEnter?.(e)
      ctx?.setOpen(true)
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      onMouseLeave?.(e)
      ctx?.setOpen(false)
    },
    onFocus: (e: React.FocusEvent<HTMLElement>) => {
      onFocus?.(e)
      ctx?.setOpen(true)
    },
    onBlur: (e: React.FocusEvent<HTMLElement>) => {
      onBlur?.(e)
      ctx?.setOpen(false)
    },
  }
  if (asChild) {
    return <span data-slot="tooltip-trigger" {...props} {...handlers} />
  }
  return <button type="button" data-slot="tooltip-trigger" className="inline" {...props} {...handlers} />
}

type ContentProps = React.HTMLAttributes<HTMLDivElement> & { sideOffset?: number }
function TooltipContent({ className, sideOffset = 0, children, ...props }: Readonly<ContentProps>) {
  const ctx = React.useContext(TooltipContext)
  if (!ctx?.open) return null
  return (
    <div
      data-slot="tooltip-content"
      className={classNames(
        "absolute left-1/2 top-[calc(100%+var(--offset))] -translate-x-1/2 bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
        className
      )}
      style={{
        // @ts-expect-error custom prop for CSS calc
        "--offset": `${sideOffset}px`,
      }}
      {...props}
    >
      {children}
      <span className="bg-primary z-50 absolute left-1/2 top-[calc(0px_-_2px)] size-2.5 -translate-x-1/2 rotate-45 rounded-[2px]" />
    </div>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
