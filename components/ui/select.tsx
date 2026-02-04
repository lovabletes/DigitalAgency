"use client"

import * as React from "react"
import { CheckIcon, ChevronDownIcon } from "@/components/icons/icons"
import { classNames } from "@/utils/class-names"

interface SelectProps {
  children: React.ReactNode
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  name?: string
  placeholder?: string
  className?: string
}

export function Select({
  children,
  value,
  defaultValue,
  onValueChange,
  disabled,
  name,
  placeholder = "Select an option",
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(defaultValue ?? value ?? "")
  const selectRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current?.contains(event.target as Node)) return
      setIsOpen(false)
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isSelectTrigger = (child: React.ReactNode): child is React.ReactElement<SelectTriggerProps> =>
    React.isValidElement(child) && child.type === SelectTrigger
  const isSelectContent = (child: React.ReactNode): child is React.ReactElement<SelectContentProps> =>
    React.isValidElement(child) && child.type === SelectContent
  const isSelectItem = (child: React.ReactNode): child is React.ReactElement<SelectItemProps> =>
    React.isValidElement(child) && child.type === SelectItem

  const childrenArray = React.Children.toArray(children)
  const triggerChild = childrenArray.find(isSelectTrigger)
  const contentChild = childrenArray.find(isSelectContent)

  const resolveSelectedLabel = () => {
    const items: React.ReactElement<SelectItemProps>[] = []

    const collectItems = (nodes: React.ReactNode) => {
      React.Children.forEach(nodes, (child) => {
        if (isSelectItem(child)) items.push(child)
      })
    }

    if (contentChild) collectItems(contentChild.props.children)
    else collectItems(children)

    const match = items.find((item) => item.props.value === selectedValue)
    return match?.props.children
  }

  const selectedLabel = resolveSelectedLabel()

  const handleSelect = (newValue: string) => {
    setSelectedValue(newValue)
    onValueChange?.(newValue)
    setIsOpen(false)
  }

  const defaultTrigger = (
    <button
      data-slot="select-trigger"
      data-size="default"
      type="button"
      disabled={disabled}
      className={classNames(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-left",
        className,
      )}
      onClick={() => !disabled && setIsOpen((prev) => !prev)}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      <span className="truncate text-foreground">
        {selectedLabel || selectedValue || placeholder}
      </span>
      <ChevronDownIcon className={classNames(
        "h-4 w-4 opacity-50 transition-transform duration-200",
        isOpen && "rotate-180",
      )} />
    </button>
  )

  const defaultContent = (
    <div
      data-slot="select-content"
      className="z-dropdown absolute left-0 right-0 mt-1 min-w-[8rem] rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 max-h-60 overflow-y-auto"
      role="listbox"
    >
      <div className="p-1">
        {childrenArray.map((child, index) => {
          if (isSelectItem(child)) {
            return React.cloneElement(child, {
              key: child.key ?? index,
              isSelected: child.props.value === selectedValue,
              onSelect: handleSelect,
            })
          }
          return null
        })}
      </div>
    </div>
  )

  const renderedTrigger = triggerChild
    ? React.cloneElement(triggerChild, {
      onClick: () => !disabled && setIsOpen((prev) => !prev),
      isOpen,
      selectedValue,
      selectedLabel,
      disabled,
      placeholder,
    })
    : defaultTrigger

  const renderedContent = contentChild
    ? React.cloneElement(contentChild, {
      onSelect: handleSelect,
      selectedValue,
      className: classNames("absolute left-0 right-0 mt-1", contentChild.props.className),
    })
    : defaultContent

  return (
    <div ref={selectRef} className="relative w-full" data-slot="select">
      {name ? <input type="hidden" name={name} value={selectedValue} /> : null}
      {renderedTrigger}
      {isOpen ? renderedContent : null}
    </div>
  )
}

interface SelectTriggerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "default"
  isOpen?: boolean
  selectedValue?: string
  selectedLabel?: React.ReactNode
  disabled?: boolean
  placeholder?: string
  onClick?: () => void
  id?: string
}

export function SelectTrigger({
  children,
  className,
  size = "default",
  onClick,
  isOpen,
  selectedValue,
  selectedLabel,
  disabled,
  placeholder = "Select an option",
  id,
  ...props
}: SelectTriggerProps) {
  // Inject selectedValue into SelectValue child if present
  const child =
    React.isValidElement(children) && children.type === SelectValue
      ? React.cloneElement(children as React.ReactElement<SelectValueProps>, {
        selectedValue,
        selectedLabel,
      })
      : children

  return (
    <button
      id={id}
      data-slot="select-trigger"
      data-size={size}
      disabled={disabled}
      className={classNames(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-left",
        className
      )}
      onClick={onClick}
      type="button"
      {...props}
    >
      {child || (
        <span className="truncate text-muted-foreground">
          {selectedLabel || selectedValue || placeholder}
        </span>
      )}
      <ChevronDownIcon
        className={classNames("h-4 w-4 opacity-50 transition-transform duration-200", isOpen && "rotate-180")}
      />
    </button>
  )
}

interface SelectContentProps {
  children: React.ReactNode
  className?: string
  onSelect?: (value: string) => void
  selectedValue?: string
}

// Forward the ref so the parent can detect outside clicks in non-portal mode.
export const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ children, className, onSelect, selectedValue }, ref) => {
    const localRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      const el = localRef.current
      if (!el) return
      const selected = el.querySelector('[data-selected="true"]') as HTMLElement | null
      selected?.scrollIntoView({ block: "nearest" })
    }, [selectedValue])

    const setRef = (node: HTMLDivElement | null) => {
      localRef.current = node
      if (typeof ref === "function") ref(node)
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
    }

    const isSelectItem = (child: React.ReactNode): child is React.ReactElement<SelectItemProps> =>
      React.isValidElement(child) && child.type === SelectItem

    return (
      <div
        data-slot="select-content"
        ref={setRef}
        className={classNames(
          "z-dropdown absolute mt-1 w-full min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 max-h-60 overflow-y-auto",
          className,
        )}
        role="listbox"
      >
        <div className="p-1">
          {React.Children.map(children, (child, index) => {
            if (isSelectItem(child)) {
              return React.cloneElement(child, {
                key: child.key ?? index,
                onSelect,
                isSelected: child.props.value === selectedValue,
              })
            }
            return child
          })}
        </div>
      </div>
    )
  },
)

SelectContent.displayName = "SelectContent"

interface SelectItemProps {
  children: React.ReactNode
  className?: string
  value: string
  disabled?: boolean
  onSelect?: (value: string) => void
  isSelected?: boolean
}

export function SelectItem({ children, className, value, disabled, onSelect, isSelected }: SelectItemProps) {
  return (
    <div
      data-slot="select-item"
      data-selected={isSelected}
      data-value={value}
      className={classNames(
        "relative flex w-full cursor-default select-none items-center justify-between rounded-sm py-2 px-3 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        isSelected && "bg-accent text-accent-foreground font-medium",
        disabled && "pointer-events-none opacity-50",
        className
      )}
      onClick={() => !disabled && onSelect?.(value)}
      role="option"
      aria-selected={!!isSelected}
    >
      <span className="truncate flex-1">{children}</span>
      {isSelected && (
        <span className="ml-2 flex h-4 w-4 items-center justify-center">
          <CheckIcon className="h-4 w-4" />
        </span>
      )}
    </div>
  )
}

interface SelectValueProps {
  children?: React.ReactNode
  placeholder?: string
  selectedValue?: string
  selectedLabel?: React.ReactNode
  className?: string
}

export function SelectValue({
  children,
  placeholder,
  selectedValue,
  selectedLabel,
  className,
  ...props
}: SelectValueProps) {
  return (
    <span data-slot="select-value" className={classNames("truncate", className)} {...props}>
      {selectedLabel || selectedValue || children || placeholder || null}
    </span>
  )
}
