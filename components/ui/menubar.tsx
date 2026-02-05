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

const createHandleKbd = (
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void,
  onAction?: () => void
) => (e: React.KeyboardEvent<HTMLDivElement>) => {
  onKeyDown?.(e)
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    onAction?.()
  }
}

// Menubar root component
function Menubar({ className, children, ...props }: Readonly<React.ComponentProps<"div">>) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const [radioGroups, setRadioGroups] = React.useState<Record<string, string>>({});
  const [checkboxValues, setCheckboxValues] = React.useState<Record<string, boolean>>({});

  const handleSetRadioValue = React.useCallback((group: string, value: string) => {
    setRadioGroups((prev) => ({ ...prev, [group]: value }));
  }, []);

  const handleToggleCheckbox = React.useCallback((value: string) => {
    setCheckboxValues((prev) => ({ ...prev, [value]: !prev[value] }));
  }, []);

  const handleSetOpenMenu = React.useCallback((val: string | null) => {
    setOpenMenu(val);
  }, []);

  const handleSetActiveItem = React.useCallback((val: string | null) => {
    setActiveItem(val);
  }, []);

  const contextValue = React.useMemo(() => ({
    openMenu,
    setOpenMenu: handleSetOpenMenu,
    activeItem,
    setActiveItem: handleSetActiveItem,
    radioGroups,
    setRadioValue: handleSetRadioValue,
    checkboxValues,
    toggleCheckbox: handleToggleCheckbox,
  }), [openMenu, handleSetOpenMenu, activeItem, handleSetActiveItem, radioGroups, handleSetRadioValue, checkboxValues, handleToggleCheckbox]);

  return (
    <MenubarContext.Provider value={contextValue}>
      <div
        data-slot="menubar"
        role="menubar"
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
function MenubarMenu({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div data-slot="menubar-menu">{children}</div>;
}

// Menubar group component
function MenubarGroup({ children, ...props }: Readonly<React.ComponentProps<"div">>) {
  return (
    <div data-slot="menubar-group" {...props}>
      {children}
    </div>
  );
}

// Menubar portal (simplified, no portal needed)
function MenubarPortal({ children, ...props }: Readonly<React.ComponentProps<"div">>) {
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
}: Readonly<{
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}>) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (onValueChange && value) onValueChange(value)
    }
  }

  return (
    <div
      data-slot="menubar-radio-group"
      role="radiogroup"
      tabIndex={onValueChange ? 0 : -1}
      onClick={() => onValueChange && value && onValueChange(value)}
      onKeyDown={handleKeyDown}
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
}: Readonly<React.ComponentProps<"button"> & { value: string }>) {
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
      type="button"
      data-slot="menubar-trigger"
      data-state={isOpen ? "open" : "closed"}
      aria-haspopup="menu"
      aria-expanded={isOpen}
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
}: Readonly<React.ComponentProps<"div"> & {
  align?: "start" | "end" | "center";
  alignOffset?: number;
  sideOffset?: number;
}>) {
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

  let alignmentClass = "left-1/2 -translate-x-1/2"
  if (align === "start") alignmentClass = "left-0"
  else if (align === "end") alignmentClass = "right-0"

  return (
    <div
      ref={ref}
      data-slot="menubar-content"
      role="menu"
      tabIndex={-1}
      className={classNames(
        "bg-popover text-popover-foreground absolute z-50 min-w-[12rem] rounded-md border p-1 shadow-md transition-opacity duration-200 focus:outline-none",
        alignmentClass,
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
  onClick,
  onKeyDown,
  children,
  ...props
}: Readonly<React.ComponentProps<"div"> & {
  inset?: boolean;
  variant?: "default" | "destructive";
  onSelect?: (e: Event) => void;
}>) {
  const { setOpenMenu, setActiveItem } = React.useContext(MenubarContext);

  const handleAction = (e: React.MouseEvent | React.KeyboardEvent) => {
    onSelect?.(e as unknown as Event);
    setOpenMenu(null);
    setActiveItem(null);
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e)
    handleAction(e)
  };

  const handleKbd = createHandleKbd(onKeyDown, () => handleAction({} as React.MouseEvent))

  return (
    <div
      role="menuitem"
      tabIndex={0}
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKbd}
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
  onKeyDown,
  value,
  ...props
}: Readonly<React.ComponentProps<"div"> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  value: string;
}>) {
  const { toggleCheckbox } = React.useContext(MenubarContext);
  const isChecked = checked ?? false;

  const handleClick = () => {
    toggleCheckbox(value);
    onCheckedChange?.(!isChecked);
  };

  const handleKbd = createHandleKbd(handleClick)

  return (
    <div
      data-slot="menubar-checkbox-item"
      role="menuitemcheckbox"
      aria-checked={isChecked}
      tabIndex={0}
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKbd}
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
  onKeyDown,
  ...props
}: Readonly<React.ComponentProps<"div"> & { value: string; group: string }>) {
  const { radioGroups, setRadioValue } = React.useContext(MenubarContext);
  const isChecked = radioGroups[group] === value;

  const handleClick = () => {
    setRadioValue(group, value);
  };

  const handleKbd = createHandleKbd(handleClick)

  return (
    <div
      data-slot="menubar-radio-item"
      role="menuitemradio"
      aria-checked={isChecked}
      tabIndex={0}
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKbd}
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
}: Readonly<React.ComponentProps<"div"> & { inset?: boolean }>) {
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
function MenubarSeparator({ className, ...props }: Readonly<React.ComponentProps<"hr">>) {
  return (
    <hr
      data-slot="menubar-separator"
      className={classNames("bg-border -mx-1 my-1 h-px border-none", className)}
      {...props}
    />
  );
}

// Menubar shortcut component
function MenubarShortcut({ className, ...props }: Readonly<React.ComponentProps<"span">>) {
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
}: Readonly<{ children: React.ReactNode }>) {
  return <div data-slot="menubar-sub">{children}</div>;
}

// Menubar sub trigger component
function MenubarSubTrigger({
  className,
  inset,
  children,
  value,
  onKeyDown,
  ...props
}: Readonly<React.ComponentProps<"div"> & { inset?: boolean; value: string }>) {
  const { setOpenMenu, openMenu } = React.useContext(MenubarContext);
  const isOpen = openMenu === value;

  const handleClick = () => {
    setOpenMenu(isOpen ? null : value);
  };

  const handleKbd = (e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(e)
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
      e.preventDefault()
      setOpenMenu(value)
    }
  }

  return (
    <div
      data-slot="menubar-sub-trigger"
      role="menuitem"
      aria-haspopup="menu"
      aria-expanded={isOpen}
      tabIndex={0}
      data-inset={inset}
      data-state={isOpen ? "open" : "closed"}
      className={classNames(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none",
        inset && "pl-8",
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKbd}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </div>
  );
}

// Menubar sub content component
function MenubarSubContent({ className, children, ...props }: Readonly<React.ComponentProps<"div">>) {
  const { openMenu } = React.useContext(MenubarContext);
  const ref = React.useRef<HTMLDivElement>(null);

  if (!openMenu) return null;

  return (
    <div
      ref={ref}
      data-slot="menubar-sub-content"
      role="menu"
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