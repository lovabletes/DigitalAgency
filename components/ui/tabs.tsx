"use client"

import * as React from "react"

import { classNames } from "@/utils/class-names"

type TabsContextType = {
  value: string | undefined
  setValue: (v: string) => void
}

const TabsCtx = React.createContext<TabsContextType | null>(null)

type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: string
  defaultValue?: string
  onValueChange?: (v: string) => void
}

function Tabs({ className, value, defaultValue, onValueChange, children, ...rest }: TabsProps) {
  const isControlled = value !== undefined
  const [internal, setInternal] = React.useState<string | undefined>(defaultValue)
  const current = isControlled ? value : internal

  const setValue = React.useCallback(
    (v: string) => {
      if (!isControlled) setInternal(v)
      onValueChange?.(v)
    },
    [isControlled, onValueChange]
  )

  const ctx = React.useMemo(() => ({ value: current, setValue }), [current, setValue])

  return (
    <TabsCtx.Provider value={ctx}>
      <div data-slot="tabs" className={classNames("flex flex-col gap-2", className)} {...rest}>
        {children}
      </div>
    </TabsCtx.Provider>
  )
}

function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="tablist"
      data-slot="tabs-list"
      className={classNames(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

type TabsTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string
}

function TabsTrigger({ className, value, ...props }: TabsTriggerProps) {
  const ctx = React.useContext(TabsCtx)
  if (!ctx) throw new Error("TabsTrigger must be used within <Tabs>")
  const active = ctx.value === value
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      data-state={active ? "active" : "inactive"}
      onClick={() => ctx.setValue(value)}
      className={classNames(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

type TabsContentProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string
}

function TabsContent({ className, value, children, ...props }: TabsContentProps) {
  const ctx = React.useContext(TabsCtx)
  if (!ctx) throw new Error("TabsContent must be used within <Tabs>")
  const active = ctx.value === value
  return (
    <div
      role="tabpanel"
      hidden={!active}
      data-state={active ? "active" : "inactive"}
      data-slot="tabs-content"
      className={classNames("flex-1 outline-none", className)}
      {...props}
    >
      {active ? children : null}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
