"use client"

import * as React from "react"

import { classNames } from "@/utils/class-names"

interface DropdownMenuProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

interface DropdownMenuContextProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  subMenuOpen: { [key: string]: boolean }
  setSubMenuOpen: (id: string, open: boolean) => void
}

const DropdownMenuContext = React.createContext<DropdownMenuContextProps | null>(null)

function useDropdownMenu() {
  const context = React.useContext(DropdownMenuContext)

  if (!context) {
    throw new Error("useDropdownMenu must be used within a <DropdownMenu />")
  }

  return context
}

function DropdownMenu({
  children,
  open: controlledOpen,
  onOpenChange,
}: Readonly<DropdownMenuProps>) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false)
  const [subMenuOpen, setSubMenuOpenState] = React.useState<{ [key: string]: boolean }>({})
  const menuRef = React.useRef<HTMLDivElement>(null)

  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen

  const setIsOpen = React.useCallback(
    (open: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(open)
        if (!open) {
          // Close all submenus when main menu closes
          setSubMenuOpenState({})
        }
      }
      onOpenChange?.(open)
    },
    [isControlled, onOpenChange]
  )

  const setSubMenuOpen = React.useCallback((id: string, open: boolean) => {
    setSubMenuOpenState(prev => ({ ...prev, [id]: open }))
  }, [])

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, setIsOpen])

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, setIsOpen])

  const contextValue = React.useMemo(() => ({
    isOpen,
    setIsOpen,
    subMenuOpen,
    setSubMenuOpen
  }), [isOpen, setIsOpen, subMenuOpen, setSubMenuOpen])

  return (
    <DropdownMenuContext.Provider value={contextValue}>
      <div ref={menuRef} className="relative inline-block">
        {children}
      </div>
    </DropdownMenuContext.Provider>
  )
}

function DropdownMenuTrigger({
  children,
  className,
  onKeyDown,
  ...props
}: Readonly<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  const { isOpen, setIsOpen } = useDropdownMenu()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(e)
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen(!isOpen)
    }
  }

  return (
    <button
      type="button"
      data-slot="dropdown-menu-trigger"
      className={classNames("w-full text-left bg-transparent border-none p-0 cursor-default", className)}
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={handleKeyDown}
      aria-haspopup="true"
      aria-expanded={isOpen}
      {...props}
    >
      {children}
    </button>
  )
}

function DropdownMenuContent({
  className,
  children,
  sideOffset = 4,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement> & { sideOffset?: number }>) {
  const { isOpen } = useDropdownMenu()

  if (!isOpen) return null

  return (
    <div
      data-slot="dropdown-menu-content"
      role="menu"
      className={classNames(
        "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-md animate-in fade-in-0 zoom-in-95",
        className
      )}
      style={{ marginTop: `${sideOffset}px` }}
      {...props}
    >
      {children}
    </div>
  )
}

function DropdownMenuGroup({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      data-slot="dropdown-menu-group"
      className={className}
      {...props}
    />
  )
}

const createHandleKeyDown = (
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void,
  onAction?: (e: React.KeyboardEvent<HTMLDivElement>) => void
) => (e: React.KeyboardEvent<HTMLDivElement>) => {
  onKeyDown?.(e)
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    onAction?.(e)
  }
}

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean
  variant?: "default" | "destructive"
  disabled?: boolean
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  disabled,
  onClick,
  onKeyDown,
  ...props
}: Readonly<DropdownMenuItemProps>) {
  const { setIsOpen } = useDropdownMenu()

  const handleAction = () => {
    if (disabled) return
    setIsOpen(false)
  }

  const handleKeyDown = createHandleKeyDown(onKeyDown, handleAction)

  return (
    <div
      data-slot="dropdown-menu-item"
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      data-inset={inset}
      data-variant={variant}
      aria-disabled={disabled}
      className={classNames(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none",
        !disabled && "hover:bg-gray-100 focus:bg-gray-100",
        variant === "destructive" ? "text-red-600 hover:bg-red-50 focus:bg-red-50" : "",
        inset ? "pl-8" : "",
        disabled ? "pointer-events-none opacity-50" : "",
        className
      )}
      onClick={(e) => {
        onClick?.(e)
        handleAction()
      }}
      onKeyDown={handleKeyDown}
      {...props}
    />
  )
}

interface DropdownMenuCheckboxItemProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
  disabled?: boolean
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  disabled,
  onClick,
  onKeyDown,
  ...props
}: Readonly<DropdownMenuCheckboxItemProps>) {
  const { setIsOpen } = useDropdownMenu()

  const handleAction = () => {
    if (disabled) return
    setIsOpen(false)
  }

  const handleKeyDown = createHandleKeyDown(onKeyDown, handleAction)

  return (
    <div
      data-slot="dropdown-menu-checkbox-item"
      role="menuitemcheckbox"
      aria-checked={checked}
      tabIndex={disabled ? -1 : 0}
      className={classNames(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none",
        !disabled && "hover:bg-gray-100 focus:bg-gray-100",
        disabled ? "pointer-events-none opacity-50" : "",
        className
      )}
      onClick={(e) => {
        onClick?.(e)
        handleAction()
      }}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {checked && (
        <span className="absolute left-2 flex size-3.5 items-center justify-center">
          <CheckIcon className="size-4" />
        </span>
      )}
      {children}
    </div>
  )
}

function DropdownMenuRadioGroup({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      data-slot="dropdown-menu-radio-group"
      className={className}
      {...props}
    />
  )
}

interface DropdownMenuRadioItemProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
  disabled?: boolean
}

function DropdownMenuRadioItem({
  className,
  children,
  checked,
  disabled,
  onClick,
  onKeyDown,
  ...props
}: Readonly<DropdownMenuRadioItemProps>) {
  const { setIsOpen } = useDropdownMenu()

  const handleAction = () => {
    if (disabled) return
    setIsOpen(false)
  }

  const handleKeyDown = createHandleKeyDown(onKeyDown, handleAction)

  return (
    <div
      data-slot="dropdown-menu-radio-item"
      role="menuitemradio"
      aria-checked={checked}
      tabIndex={disabled ? -1 : 0}
      className={classNames(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none",
        !disabled && "hover:bg-gray-100 focus:bg-gray-100",
        disabled ? "pointer-events-none opacity-50" : "",
        className
      )}
      onClick={(e) => {
        onClick?.(e)
        handleAction()
      }}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {checked && (
        <span className="absolute left-2 flex size-3.5 items-center justify-center">
          <CircleIcon className="size-2 fill-current" />
        </span>
      )}
      {children}
    </div>
  )
}

interface DropdownMenuLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: Readonly<DropdownMenuLabelProps>) {
  return (
    <div
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={classNames(
        "px-2 py-1.5 text-sm font-medium text-gray-500",
        inset ? "pl-8" : "",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLHRElement>>) {
  return (
    <hr
      data-slot="dropdown-menu-separator"
      className={classNames("my-1 h-px border-gray-200", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLSpanElement>>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={classNames("ml-auto text-xs text-gray-500", className)}
      {...props}
    />
  )
}

function DropdownMenuSub({
  children,
  id,
}: Readonly<{
  children: React.ReactNode
  id: string
}>) {
  const { subMenuOpen, setSubMenuOpen } = useDropdownMenu()
  const isOpen = subMenuOpen[id] || false

  return (
    <div className="relative">
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? (() => {
            type SubChildProps = { isOpen?: boolean; onOpenChange?: (open: boolean) => void }
            const el = child as React.ReactElement<SubChildProps>
            return React.cloneElement(el, {
              isOpen,
              onOpenChange: (open: boolean) => setSubMenuOpen(id, open),
            })
          })()
          : child
      )}
    </div>
  )
}

interface DropdownMenuSubTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  isOpen,
  onOpenChange,
  onKeyDown,
  ...props
}: Readonly<DropdownMenuSubTriggerProps>) {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(e)
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
      e.preventDefault()
      onOpenChange?.(true)
    }
  }

  return (
    <div
      data-slot="dropdown-menu-sub-trigger"
      role="menuitem"
      aria-haspopup="true"
      aria-expanded={isOpen}
      tabIndex={0}
      className={classNames(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none hover:bg-gray-100 focus:bg-gray-100",
        inset ? "pl-8" : "",
        className
      )}
      onMouseEnter={() => onOpenChange?.(true)}
      onClick={() => onOpenChange?.(!isOpen)}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </div>
  )
}

interface DropdownMenuSubContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
}

function DropdownMenuSubContent({
  className,
  children,
  isOpen,
  ...props
}: Readonly<DropdownMenuSubContentProps>) {
  if (!isOpen) return null

  return (
    <div
      data-slot="dropdown-menu-sub-content"
      role="menu"
      className={classNames(
        "absolute left-full top-0 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-md animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Simple icon components
function CheckIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function CircleIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="8" />
    </svg>
  )
}

function ChevronRightIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}