"use client";

import * as React from "react";
import { ChevronDownIcon } from "@/components/icons/icons";
import { classNames } from "@/utils/class-names";

// Types
type NavigationMenuContextType = {
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
  timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>;
};

const NavigationMenuContext = React.createContext<NavigationMenuContextType>({
  openItem: null,
  setOpenItem: () => { },
  timeoutRef: { current: null },
});

// Root Component
export function NavigationMenu({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <NavigationMenuContext.Provider value={{ openItem, setOpenItem, timeoutRef }}>
      <div
        ref={menuRef}
        className={classNames("navigation-menu relative flex items-center", className)}
        {...props}
      >
        {children}
      </div>
    </NavigationMenuContext.Provider>
  );
}

// List Component
export function NavigationMenuList({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={classNames("flex items-center gap-1", className)} {...props}>
      {children}
    </ul>
  );
}

// Item Component
export function NavigationMenuItem({
  children,
  value,
  className,
  ...props
}: { value: string } & React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={classNames("relative navigation-menu-item", className)}
      {...props}
    >
      {children}
    </li>
  );
}

// Trigger Component
interface NavigationMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
}

export function NavigationMenuTrigger({
  children,
  className,
  value,
  ...props
}: NavigationMenuTriggerProps) {
  const { openItem, setOpenItem, timeoutRef } = React.useContext(NavigationMenuContext);
  const isOpen = openItem === value;

  const handleClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Toggle open state on click
    setOpenItem(isOpen && value ? null : value || null);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenItem(value || null);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenItem(null);
    }, 150);
  };

  return (
    <button
      className={classNames(
        "group relative flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:bg-green-100 hover:text-foreground focus:outline-none",
        isOpen && "bg-green-100 text-foreground",
        className
      )}
      data-value={value}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-1">
        {children}
        <ChevronDownIcon
          className={classNames(
            "h-3.5 w-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </span>
    </button>
  );
}

// Content Component
export function NavigationMenuContent({
  children,
  value,
  className,
  ...props
}: { value: string } & React.HTMLAttributes<HTMLDivElement>) {
  const { openItem, setOpenItem, timeoutRef } = React.useContext(NavigationMenuContext);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenItem(null);
    }, 150); // Close on hover out with 150ms delay
  };

  if (openItem !== value) {
    return null;
  }

  return (
    <div
      className={classNames(
        "navigation-menu-content z-dropdown absolute left-0 top-full z-50 mt-0 min-w-[200px] rounded-md border bg-popover text-popover-foreground p-1.5 shadow-lg animate-in fade-in zoom-in-95 duration-200",
        className
      )}
      data-state="open"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}

// Link Component
export function NavigationMenuLink({
  children,
  className,
  active,
  ...props
}: { active?: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={classNames(
        "group relative flex w-full cursor-pointer select-none items-center rounded-full px-3 py-1.5 text-sm outline-none transition-colors hover:bg-green-100 hover:text-foreground focus:outline-none",
        active && "bg-green-100 text-foreground",
        className
      )}
      data-active={active ? "true" : undefined}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </a>
  );
}

// Viewport Component
export function NavigationMenuViewport({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classNames("navigation-menu-viewport relative z-50", className)}
      {...props}
    >
      {children}
    </div>
  );
}