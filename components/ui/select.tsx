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
}: Readonly<SelectProps>) {
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

  const collectItems = (nodes: React.ReactNode): React.ReactElement<SelectItemProps>[] => {
    const items: React.ReactElement<SelectItemProps>[] = []
    const traverse = (n: React.ReactNode) => {
      React.Children.forEach(n, (child) => {
        if (React.isValidElement(child) && child.type === SelectItem) {
          items.push(child as React.ReactElement<SelectItemProps>)
        } else if (React.isValidElement(child) && (child.props as any).children) {
          traverse((child.props as any).children)
        }
      })
    }
    traverse(nodes)
    return items
  }

  const items = collectItems(children)
  const selectedItem = items.find((item) => item.props.value === selectedValue)
  const selectedLabel = selectedItem?.props.children

  const handleSelect = (newValue: string) => {
    setSelectedValue(newValue)
    onValueChange?.(newValue)
    setIsOpen(false)
  }

  return (
    <div ref={selectRef} className="relative w-full" data-slot="select">
      {/* Hidden native select for accessibility compliance and form submission */}
      <select
        name={name}
        value={selectedValue}
        onChange={(e) => handleSelect(e.target.value)}
        disabled={disabled}
        tabIndex={-1}
        className="sr-only"
        aria-label={placeholder}
      >
        <option value="" disabled>{placeholder}</option>
        {items.map((item) => (
          <option key={item.props.value} value={item.props.value}>
            {typeof item.props.children === 'string' ? item.props.children : item.props.value}
          </option>
        ))}
      </select>

      <div aria-hidden="true">
        <SelectTrigger
          onClick={() => !disabled && setIsOpen((prev) => !prev)}
          isOpen={isOpen}
          selectedValue={selectedValue}
          selectedLabel={selectedLabel}
          disabled={disabled}
          placeholder={placeholder}
          className={className}
        >
          {React.Children.toArray(children).find(
            (child) => React.isValidElement(child) && child.type === SelectValue
          )}
        </SelectTrigger>

        {isOpen && (
          <SelectContent onSelect={handleSelect} selectedValue={selectedValue}>
            {children}
          </SelectContent>
        )}
      </div>
    </div>
  )
}

interface SelectTriggerProps {
  children?: React.ReactNode
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
}: Readonly<SelectTriggerProps>) {
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
      tabIndex={-1}
    >
      {child || (
        <span className="truncate text-muted-foreground">
          {selectedLabel || selectedValue || placeholder}
        </span>
      )}
      <ChevronDownIcon
        className={classNames(
          "h-4 w-4 opacity-50 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
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

export const SelectContent = React.forwardRef<HTMLDivElement, Readonly<SelectContentProps>>(
  ({ children, className, onSelect, selectedValue }, ref) => {
    const localRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      const el = localRef.current
      if (!el) return
      const selected = el.querySelector('[data-selected="true"]')
      if (selected) selected.scrollIntoView({ block: "nearest" })
    }, [selectedValue])

    const setRef = (node: HTMLDivElement | null) => {
      (localRef as any).current = node
      if (typeof ref === "function") ref(node)
      else if (ref) (ref as any).current = node
    }

    return (
      <div
        data-slot="select-content"
        ref={setRef}
        className={classNames(
          "z-dropdown absolute mt-1 w-full min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 max-h-60 overflow-y-auto",
          className
        )}
      >
        <div className="p-1">
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child) && child.type === SelectItem) {
              return React.cloneElement(child as React.ReactElement<SelectItemProps>, {
                key: (child as any).key ?? index,
                onSelect,
                isSelected: (child as any).props.value === selectedValue,
              })
            }
            return child
          })}
        </div>
      </div>
    )
  }
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

export function SelectItem({
  children,
  className,
  value,
  disabled,
  onSelect,
  isSelected,
}: Readonly<SelectItemProps>) {
  return (
    <button
      type="button"
      data-slot="select-item"
      data-selected={isSelected}
      data-value={value}
      tabIndex={-1}
      className={classNames(
        "relative flex w-full cursor-default select-none items-center justify-between rounded-sm py-2 px-3 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50",
        isSelected && "bg-accent text-accent-foreground font-medium",
        className
      )}
      onClick={() => !disabled && onSelect?.(value)}
    >
      <span className="truncate flex-1 text-left">{children}</span>
      {isSelected && (
        <span className="ml-2 flex h-4 w-4 items-center justify-center">
          <CheckIcon className="h-4 w-4" />
        </span>
      )}
    </button>
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
}: Readonly<SelectValueProps>) {
  return (
    <span data-slot="select-value" className={classNames("truncate", className)} {...props}>
      {selectedLabel || selectedValue || children || placeholder || null}
    </span>
  )
}
