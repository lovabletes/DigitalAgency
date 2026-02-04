/**
 * Utility function to combine Tailwind CSS class names
 * Similar to clsx or classnames package - commonly used as 'cn' in Tailwind projects
 */
export function cn(
  ...args: Array<string | undefined | false | null | Record<string, boolean>>
): string {
  return args
    .flatMap((arg) => {
      if (typeof arg === "string") {
        return arg;
      }
      if (arg && typeof arg === "object" && !Array.isArray(arg)) {
        return Object.entries(arg)
          .filter(([, value]) => value)
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(" ");
}
