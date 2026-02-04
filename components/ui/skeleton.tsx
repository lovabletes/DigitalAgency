"use client"

import { classNames } from "@/utils/class-names"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={classNames(
        "bg-gray-100 dark:bg-gray-800 rounded-md",
        "animate-pulse",
        "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800",
        "bg-[length:200%_100%]",
        "transition-all duration-1000 ease-in-out",
        className
      )}
      style={{
        animation: 'shimmer 2s infinite linear',
      }}
      {...props}
    >
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  )
}

export { Skeleton }
