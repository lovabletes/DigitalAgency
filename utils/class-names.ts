/**
 * Utility function to combine class names conditionally
 * Similar to clsx or classnames package
 */
export function classNames(
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
