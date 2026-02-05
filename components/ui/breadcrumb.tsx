"use client"

import * as React from "react"
import { ChevronRightIcon, MoreHorizontalIcon } from "@/components/icons/icons"
import { classNames } from "@/utils/class-names"

function Breadcrumb({ ...props }: Readonly<React.ComponentProps<"nav">>) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: Readonly<React.ComponentProps<"ol">>) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={classNames(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: Readonly<React.ComponentProps<"li">>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={classNames("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

type BreadcrumbLinkProps = React.ComponentProps<"a"> & {
  asChild?: boolean
}

function BreadcrumbLink({
  asChild,
  className,
  children,
  ...props
}: Readonly<BreadcrumbLinkProps>) {
  const computed = classNames("hover:text-foreground transition-colors", className)
  if (asChild && React.isValidElement(children)) {
    type AnchorChildProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { className?: string;['data-slot']?: string }
    const { ...rest } = props
    const child = children as React.ReactElement<AnchorChildProps>
    return React.cloneElement(child, {
      ...(rest as AnchorChildProps),
      className: classNames(child.props?.className, computed),
      "data-slot": "breadcrumb-link",
    })
  }
  return (
    <a data-slot="breadcrumb-link" className={computed} {...props}>
      {children}
    </a>
  )
}

function BreadcrumbPage({ className, children, ...props }: Readonly<React.ComponentProps<"span">>) {
  return (
    <span
      data-slot="breadcrumb-page"
      aria-disabled="true"
      aria-current="page"
      className={classNames("text-foreground font-normal", className)}
      {...props}
    >
      {children}
    </span>
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: Readonly<React.ComponentProps<"li">>) {
  return (
    <li
      data-slot="breadcrumb-separator"
      aria-hidden="true"
      className={classNames("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: Readonly<React.ComponentProps<"span">>) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      aria-hidden="true"
      className={classNames("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
