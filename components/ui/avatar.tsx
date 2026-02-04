"use client"

import * as React from "react"
import Image from "next/image"

import { classNames } from "@/utils/class-names"

function Avatar({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar"
      className={classNames(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function AvatarImage({
  className,
  alt = "",
  src,
  ...props
}: {
  className?: string;
  alt?: string;
  src?: string;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>) {
  return (
    <Image
      data-slot="avatar-image"
      className={classNames("aspect-square size-full", className)}
      alt={alt}
      fill
      src={src || ""}
      {...(props as Record<string, unknown>)}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="avatar-fallback"
      className={classNames(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
