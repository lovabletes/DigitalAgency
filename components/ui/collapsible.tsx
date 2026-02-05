"use client"

import * as React from "react"

type CollapsibleCtxValue = {
  open: boolean
  setOpen: (v: boolean) => void
  disabled?: boolean
}

const CollapsibleCtx = React.createContext<CollapsibleCtxValue | null>(null)

type CollapsibleProps = {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  disabled?: boolean
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

function Collapsible({ open, defaultOpen, onOpenChange, disabled, children, className, ...props }: Readonly<CollapsibleProps>) {
  const isControlled = open !== undefined
  const [internalOpen, setInternalOpen] = React.useState<boolean>(defaultOpen ?? false)
  const isOpen = isControlled ? !!open : internalOpen

  const setOpen = React.useCallback((v: boolean) => {
    if (!isControlled) setInternalOpen(v)
    onOpenChange?.(v)
  }, [isControlled, onOpenChange])

  const contextValue = React.useMemo(() => ({
    open: isOpen,
    setOpen,
    disabled
  }), [isOpen, setOpen, disabled])

  return (
    <CollapsibleCtx.Provider value={contextValue}>
      <div
        data-slot="collapsible"
        data-state={isOpen ? "open" : "closed"}
        aria-disabled={disabled || undefined}
        className={className}
        {...props}
      >
        {children}
      </div>
    </CollapsibleCtx.Provider>
  )
}

type CollapsibleTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  children: React.ReactElement<React.HTMLAttributes<HTMLElement> & { className?: string;['data-slot']?: string }> | React.ReactNode
}

function CollapsibleTrigger({ asChild, children, className, onClick, ...props }: Readonly<CollapsibleTriggerProps>) {
  const ctx = React.useContext(CollapsibleCtx)
  if (!ctx) throw new Error("CollapsibleTrigger must be used within Collapsible")
  const { open, setOpen, disabled } = ctx

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    if (disabled) return
    setOpen(!open)
  }

  if (asChild && React.isValidElement(children)) {
    type ChildProps = React.HTMLAttributes<HTMLElement> & {
      className?: string
      ['data-slot']?: string
      ['data-state']?: string
      ['aria-expanded']?: boolean
      ['aria-disabled']?: boolean
    }
    const child = children as React.ReactElement<ChildProps>
    return React.cloneElement(child, {
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        child.props?.onClick?.(e)
        if (e.defaultPrevented) return
        if (disabled) return
        setOpen(!open)
      },
      className: [child.props?.className, className].filter(Boolean).join(" "),
      "data-slot": "collapsible-trigger",
      "data-state": open ? "open" : "closed",
      "aria-expanded": open,
      "aria-disabled": disabled || undefined,
    })
  }

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={className}
      data-slot="collapsible-trigger"
      data-state={open ? "open" : "closed"}
      aria-expanded={open}
      aria-disabled={disabled || undefined}
      {...props}
    >
      {children}
    </button>
  )
}

type CollapsibleContentProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}

function CollapsibleContent({ asChild, children, className, ...props }: Readonly<CollapsibleContentProps>) {
  const ctx = React.useContext(CollapsibleCtx)
  if (!ctx) throw new Error("CollapsibleContent must be used within Collapsible")
  const { open } = ctx

  const commonProps = {
    "data-slot": "collapsible-content",
    "data-state": open ? "open" : "closed",
    hidden: !open,
    className,
    role: "region",
  } as const

  if (asChild && React.isValidElement(children)) {
    type ChildProps = React.HTMLAttributes<HTMLElement> & {
      className?: string
      ['data-slot']?: string
      ['data-state']?: string
      hidden?: boolean
      role?: string
    }
    const child = children as React.ReactElement<ChildProps>
    return React.cloneElement(child, {
      ...commonProps,
      className: [child.props?.className, className].filter(Boolean).join(" "),
    })
  }

  return (
    <div {...commonProps} {...props}>
      {children}
    </div>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
