"use client"

import * as React from "react";
import { GripVerticalIcon } from "@/components/icons/icons";
import { classNames } from "@/utils/class-names";

// Resizable panel context to manage state
type ResizablePanelContextValue = {
  direction: "horizontal" | "vertical";
  panelSizes: number[];
  setPanelSizes: (sizes: number[]) => void;
  registerPanel: (id: string, options: { defaultSize?: number; minSize?: number }) => void;
  panelConstraints: Record<string, { minSize?: number }>;
};

const ResizablePanelContext = React.createContext<ResizablePanelContextValue>({
  direction: "horizontal",
  panelSizes: [],
  setPanelSizes: () => { },
  registerPanel: () => { },
  panelConstraints: {},
});

// Resizable panel group component
function ResizablePanelGroup({
  className,
  direction = "horizontal",
  children,
  ...props
}: Readonly<React.ComponentProps<"div"> & {
  direction?: "horizontal" | "vertical";
}>) {
  const [panelSizes, setPanelSizes] = React.useState<number[]>([]);
  const [panelConstraints, setPanelConstraints] = React.useState<
    Record<string, { minSize?: number }>
  >({});
  const panelIds = React.useRef<string[]>([]);

  const registerPanel = React.useCallback((
    id: string,
    options: { defaultSize?: number; minSize?: number }
  ) => {
    if (!panelIds.current.includes(id)) {
      panelIds.current.push(id);
      setPanelSizes((prev) => [...prev, options.defaultSize ?? 100]);
      setPanelConstraints((prev) => ({ ...prev, [id]: { minSize: options.minSize } }));
    }
  }, []);

  const handleSetPanelSizes = React.useCallback((sizes: number[]) => {
    setPanelSizes(sizes)
  }, [])

  const contextValue = React.useMemo<ResizablePanelContextValue>(() => ({
    direction,
    panelSizes,
    setPanelSizes: handleSetPanelSizes,
    registerPanel,
    panelConstraints,
  }), [direction, panelSizes, handleSetPanelSizes, registerPanel, panelConstraints])

  return (
    <ResizablePanelContext.Provider value={contextValue}>
      <div
        data-slot="resizable-panel-group"
        data-panel-group-direction={direction}
        className={classNames(
          "flex h-full w-full",
          direction === "vertical" ? "flex-col" : "flex-row",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </ResizablePanelContext.Provider>
  );
}

// Resizable panel component
function ResizablePanel({
  defaultSize,
  minSize,
  className,
  ...props
}: Readonly<React.ComponentProps<"div"> & {
  defaultSize?: number;
  minSize?: number;
}>) {
  const { direction, panelSizes, registerPanel } = React.useContext(ResizablePanelContext);
  const id = React.useId();
  const elRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    registerPanel(id, { defaultSize, minSize });
  }, [id, defaultSize, minSize, registerPanel]);

  const index = React.useRef<number>(-1);
  React.useEffect(() => {
    const node = elRef.current;
    if (!node) return;
    const parent = node.parentElement;
    if (!parent) return;
    const panels = Array.from(parent.children).filter(
      (c) => (c as HTMLElement).dataset.slot === "resizable-panel"
    );
    index.current = panels.indexOf(node);
  }, []);

  const size = panelSizes[index.current] ?? 100;

  return (
    <div
      ref={elRef}
      data-slot="resizable-panel"
      className={classNames("flex-1", className)}
      style={{
        flex: `${size} 1 0%`,
        minWidth: direction === "horizontal" ? `${minSize ?? 0}%` : undefined,
        minHeight: direction === "vertical" ? `${minSize ?? 0}%` : undefined,
      }}
      {...props}
    />
  );
}

// Resizable handle component
function ResizableHandle({
  withHandle,
  className,
  onKeyDown,
  ...props
}: Readonly<React.ComponentProps<"div"> & {
  withHandle?: boolean;
}>) {
  const { direction, panelSizes, setPanelSizes, panelConstraints } =
    React.useContext(ResizablePanelContext);
  const ref = React.useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.type === 'mousedown') e.preventDefault();
    setIsDragging(true);
  };

  const handleDrag = React.useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging || !ref.current) return;

    const groupRect = ref.current.parentElement?.getBoundingClientRect();
    if (!groupRect) return;

    const container = ref.current.parentElement;
    const group = container?.parentElement;
    if (!group) return;
    const groupChildren = Array.from(group.children);
    const containerIdx = groupChildren.indexOf(container);
    const panelIdx = containerIdx - 1;

    const prevSize = panelSizes[panelIdx] || 0;
    const nextSize = panelSizes[panelIdx + 1] || 0;

    let delta: number;
    if ("touches" in e) {
      const touch = e.touches[0];
      if (!touch) return;
      delta =
        direction === "horizontal"
          ? touch.clientX - groupRect.left
          : touch.clientY - groupRect.top;
    } else {
      delta =
        direction === "horizontal" ? e.clientX - groupRect.left : e.clientY - groupRect.top;
    }

    const totalSize = direction === "horizontal" ? groupRect.width : groupRect.height;
    const deltaPercent = (delta / totalSize) * 100;

    const panelKeys = Object.keys(panelConstraints)
    const prevMinSize = panelConstraints[panelKeys[panelIdx] || ""]?.minSize ?? 0;
    const nextMinSize = panelConstraints[panelKeys[panelIdx + 1] || ""]?.minSize ?? 0;

    const newPrevSize = Math.max(prevMinSize, prevSize + deltaPercent);
    const newNextSize = Math.max(nextMinSize, nextSize - deltaPercent);

    if (newPrevSize + newNextSize <= 100) {
      const newSizes = [...panelSizes];
      newSizes[panelIdx] = newPrevSize;
      newSizes[panelIdx + 1] = newNextSize;
      setPanelSizes(newSizes);
    }
  }, [isDragging, direction, panelSizes, panelConstraints, setPanelSizes]);

  const handleDragEnd = React.useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      globalThis.addEventListener("mousemove", handleDrag);
      globalThis.addEventListener("touchmove", handleDrag);
      globalThis.addEventListener("mouseup", handleDragEnd);
      globalThis.addEventListener("touchend", handleDragEnd);
      return () => {
        globalThis.removeEventListener("mousemove", handleDrag);
        globalThis.removeEventListener("touchmove", handleDrag);
        globalThis.removeEventListener("mouseup", handleDragEnd);
        globalThis.removeEventListener("touchend", handleDragEnd);
      };
    }
  }, [isDragging, handleDrag, handleDragEnd]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Need to cast to any to pass to div's onKeyDown if needed, or just handle it here
    const container = ref.current?.parentElement;
    const group = container?.parentElement;
    const index = Array.from(group?.children || []).indexOf(container!) - 1;
    if (index < 0) return

    let delta = 0
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') delta = -1
    else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') delta = 1

    if (delta !== 0) {
      e.preventDefault()
      const newSizes = [...panelSizes]
      newSizes[index] = (newSizes[index] || 0) + delta
      newSizes[index + 1] = (newSizes[index + 1] || 0) - delta
      setPanelSizes(newSizes)
    }
  }

  return (
    <div
      data-slot="resizable-handle-container"
      className={classNames(
        "relative flex items-center justify-center",
        direction === "horizontal" ? "w-px h-full cursor-col-resize" : "h-px w-full cursor-row-resize",
        className
      )}
    >
      <input
        ref={ref}
        type="range"
        min={0}
        max={100}
        value={50}
        aria-label="Resize handle"
        aria-orientation={direction}
        className="absolute inset-0 z-10 opacity-0 cursor-inherit"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onKeyDown={handleKeyDown}
        onChange={() => { }}
      />
      <div
        aria-hidden="true"
        className={classNames(
          "bg-border pointer-events-none flex h-full w-full items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-4 after:-translate-x-1/2",
          direction === "vertical" && "after:left-0 after:h-4 after:w-full after:translate-x-0 after:-translate-y-1/2"
        )}
      >
        {withHandle && (
          <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
            <GripVerticalIcon className="size-2.5" />
          </div>
        )}
      </div>
    </div>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };