import React from "react";

/**
 * Slot component - allows rendering a component as a child with merged props
 * Used in composable component patterns
 */
export const Slot = React.forwardRef<any, any>(({ children, ...props }, ref) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ...(children.props as any),
      ref: ref || (children as any).ref,
    } as any);
  }
  return children as React.ReactElement;
});

Slot.displayName = "Slot";
