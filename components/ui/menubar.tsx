"use client";

import * as React from "react";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "@/components/icons/icons";
import { classNames } from "@/utils/class-names";

// Menubar context to manage state
type MenubarContextValue = {
  openMenu: string | null;
  setOpenMenu: (value: string | null) => void;
  activeItem: string | null;
  setActiveItem: (value: string | null) => void;
  radioGroups: Record<string, string>;
  setRadioValue: (group: string, value: string) => void;
  checkboxValues: Record<string, boolean>;
  toggleCheckbox: (value: string) => void;
};

const MenubarContext = React.createContext<MenubarContextValue>({
  openMenu: null,
  setOpenMenu: () => { },
  activeItem: null,
  setActiveItem: () => { },
  radioGroups: {},
  setRadioValue: () => { },
  checkboxValues: {},
  toggleCheckbox: () => { },
});

// Menubar root component
function Menubar({ className, children, ...props }: React.ComponentProps<"div">) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const [radioGroups, setRadioGroups] = React.useState<Record<string, string>>({});
  const [checkboxValues, setCheckboxValues] = React.useState<Record<string, boolean>>({});

  const setRadioValue = (group: string, value: string) => {
    setRadioGroups((prev) => ({ ...prev, [group]: value }));
  };

  const toggleCheckbox = (value: string) => {
    setCheckboxValues((prev) => ({ ...prev, [value]: !prev[value] }));
  };

  return (
    <MenubarContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        activeItem,
        setActiveItem,
        radioGroups,
        setRadioValue,
        checkboxValues,
        toggleCheckbox,
      }}
    >
      <div
        data-slot="menubar"
        className={classNames(
          "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </MenubarContext.Provider>
  );
}

// Menubar menu component
function MenubarMenu({ children }: { children: React.ReactNode }) {
  return <div data-slot="menubar-menu">{children}</div>;
}

// Menubar group component
function MenubarGroup({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="menubar-group" {...props}>
      {children}
    </div>
  );
}

// Menubar portal (simplified, no portal needed)
function MenubarPortal({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="menubar-portal" {...props}>
      {children}
    </div>
  );
}

// Menubar radio group component
function MenubarRadioGroup({
  value,
  onValueChange,
  children,
}: {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      data-slot="menubar-radio-group"
      onClick={() => onValueChange && value && onValueChange(value)}
    >
      {children}
    </div>
  );
}

// Menubar trigger component
function MenubarTrigger({
  className,
  children,
  value,
  ...props
}: React.ComponentProps<"button"> & { value: string }) {
  const { openMenu, setOpenMenu, setActiveItem } = React.useContext(MenubarContext);
  const isOpen = openMenu === value;
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setOpenMenu(isOpen ? null : value);
    setActiveItem(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenMenu(isOpen ? null : value);
      setActiveItem(null);
    }
  };

  return (
    <button
      ref={ref}
      data-slot="menubar-trigger"
      data-state={isOpen ? "open" : "closed"}
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </button>
  );
}

// Menubar content component
function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "end" | "center";
  alignOffset?: number;
  sideOffset?: number;
}) {
  const { openMenu, setOpenMenu, setActiveItem } = React.useContext(MenubarContext);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close menu on click outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setActiveItem(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpenMenu, setActiveItem]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpenMenu(null);
      setActiveItem(null);
    }
  };

  if (!openMenu) return null;

  return (
    <div
      ref={ref}
      data-slot="menubar-content"
      className={classNames(
        "bg-popover text-popover-foreground absolute z-50 min-w-[12rem] rounded-md border p-1 shadow-md transition-opacity duration-200",
        align === "start" ? "left-0" : align === "end" ? "right-0" : "left-1/2 -translate-x-1/2",
        className
      )}
      style={{ top: `calc(100% + ${sideOffset}px)`, transform: `translateX(${alignOffset}px)` }}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </div>
  );
}

// Menubar item component
function MenubarItem({
  className,
  inset,
  variant = "default",
  onSelect,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  inset?: boolean;
  variant?: "default" | "destructive";
  onSelect?: (e: Event) => void;
}) {
  const { setOpenMenu, setActiveItem } = React.useContext(MenubarContext);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    onSelect?.(e as unknown as Event);
    setOpenMenu(null);
    setActiveItem(null);
  };

  return (
    <div
      ref={ref}
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
}

// Menubar checkbox item component
function MenubarCheckboxItem({
  className,
  children,
  checked,
  onCheckedChange,
  value,
  ...props
}: React.ComponentProps<"div"> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  value: string;
}) {
  const { toggleCheckbox } = React.useContext(MenubarContext);
  const isChecked = checked ?? false;

  const handleClick = () => {
    toggleCheckbox(value);
    onCheckedChange?.(!isChecked);
  };

  return (
    <div
      data-slot="menubar-checkbox-item"
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        {isChecked && <CheckIcon className="size-4" />}
      </span>
      {children}
    </div>
  );
}

// Menubar radio item component
function MenubarRadioItem({
  className,
  children,
  value,
  group,
  ...props
}: React.ComponentProps<"div"> & { value: string; group: string }) {
  const { radioGroups, setRadioValue } = React.useContext(MenubarContext);
  const isChecked = radioGroups[group] === value;

  const handleClick = () => {
    setRadioValue(group, value);
  };

  return (
    <div
      data-slot="menubar-radio-item"
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        {isChecked && <CircleIcon className="size-2 fill-current" />}
      </span>
      {children}
    </div>
  );
}

// Menubar label component
function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<"div"> & { inset?: boolean }) {
  return (
    <div
      data-slot="menubar-label"
      data-inset={inset}
      className={classNames(
        "px-2 py-1.5 text-sm font-medium",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  );
}

// Menubar separator component
function MenubarSeparator({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="menubar-separator"
      className={classNames("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

// Menubar shortcut component
function MenubarShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={classNames(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

// Menubar sub component
function MenubarSub({
  children,
}: { children: React.ReactNode }) {
  return <div data-slot="menubar-sub">{children}</div>;
}

// Menubar sub trigger component
function MenubarSubTrigger({
  className,
  inset,
  children,
  value,
  ...props
}: React.ComponentProps<"div"> & { inset?: boolean; value: string }) {
  const { setOpenMenu, openMenu } = React.useContext(MenubarContext);
  const isOpen = openMenu === value;

  const handleClick = () => {
    setOpenMenu(isOpen ? null : value);
  };

  return (
    <div
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      data-state={isOpen ? "open" : "closed"}
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none",
        inset && "pl-8",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </div>
  );
}

// Menubar sub content component
function MenubarSubContent({ className, children, ...props }: React.ComponentProps<"div">) {
  const { openMenu } = React.useContext(MenubarContext);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close sub-menu on click outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        // Do not close sub-menu immediately to allow interaction
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!openMenu) return null;

  return (
    <div
      ref={ref}
      data-slot="menubar-sub-content"
      className={classNames(
        "bg-popover text-popover-foreground absolute z-50 min-w-[8rem] rounded-md border p-1 shadow-lg transition-opacity duration-200 left-full top-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
};