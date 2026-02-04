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
}: React.ComponentProps<"div"> & {
  direction?: "horizontal" | "vertical";
}) {
  const [panelSizes, setPanelSizes] = React.useState<number[]>([]);
  const [panelConstraints, setPanelConstraints] = React.useState<
    Record<string, { minSize?: number }>
  >({});
  const panelIds = React.useRef<string[]>([]);

  const registerPanel = (
    id: string,
    options: { defaultSize?: number; minSize?: number }
  ) => {
    if (!panelIds.current.includes(id)) {
      panelIds.current.push(id);
      setPanelSizes((prev) => [...prev, options.defaultSize ?? 100 / panelIds.current.length]);
      setPanelConstraints((prev) => ({ ...prev, [id]: { minSize: options.minSize } }));
    }
  };

  return (
    <ResizablePanelContext.Provider
      value={{
        direction,
        panelSizes,
        setPanelSizes,
        registerPanel,
        panelConstraints,
      }}
    >
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
}: React.ComponentProps<"div"> & {
  defaultSize?: number;
  minSize?: number;
}) {
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
  ...props
}: React.ComponentProps<"div"> & {
  withHandle?: boolean;
}) {
  const { direction, panelSizes, setPanelSizes, panelConstraints } =
    React.useContext(ResizablePanelContext);
  const ref = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDrag = React.useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging || !ref.current) return;

    const groupRect = ref.current.parentElement?.getBoundingClientRect();
    if (!groupRect) return;

    const index = Array.from(ref.current.parentElement?.children || []).indexOf(ref.current) - 1;
    const prevSize = panelSizes[index] || 0;
    const nextSize = panelSizes[index + 1] || 0;

    let delta: number;
    if ("touches" in e) {
      delta =
        direction === "horizontal"
          ? e.touches[0].clientX - groupRect.left
          : e.touches[0].clientY - groupRect.top;
    } else {
      delta =
        direction === "horizontal" ? e.clientX - groupRect.left : e.clientY - groupRect.top;
    }

    const totalSize = direction === "horizontal" ? groupRect.width : groupRect.height;
    const deltaPercent = (delta / totalSize) * 100;

    const prevMinSize = panelConstraints[Object.keys(panelConstraints)[index]]?.minSize ?? 0;
    const nextMinSize = panelConstraints[Object.keys(panelConstraints)[index + 1]]?.minSize ?? 0;

    const newPrevSize = Math.max(prevMinSize, prevSize + deltaPercent);
    const newNextSize = Math.max(nextMinSize, nextSize - deltaPercent);

    if (newPrevSize + newNextSize <= 100) {
      const newSizes = [...panelSizes];
      newSizes[index] = newPrevSize;
      newSizes[index + 1] = newNextSize;
      setPanelSizes(newSizes);
    }
  }, [isDragging, direction, panelSizes, panelConstraints, setPanelSizes]);

  const handleDragEnd = React.useCallback(() => {
    setIsDragging(false);
  }, [setIsDragging]);

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDrag);
      window.addEventListener("touchmove", handleDrag);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchend", handleDragEnd);
      return () => {
        window.removeEventListener("mousemove", handleDrag);
        window.removeEventListener("touchmove", handleDrag);
        window.removeEventListener("mouseup", handleDragEnd);
        window.removeEventListener("touchend", handleDragEnd);
      };
    }
  }, [isDragging, handleDrag, handleDragEnd]);

  return (
    <div
      ref={ref}
      data-slot="resizable-handle"
      className={classNames(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden",
        direction === "vertical" &&
        "h-px w-full after:left-0 after:h-1 after:w-full after:translate-x-0 after:-translate-y-1/2",
        className
      )}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </div>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };