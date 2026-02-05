"use client"

import * as React from "react"

import { classNames } from "@/utils/class-names"

function Table({ className, ...props }: Readonly<React.ComponentProps<"table">>) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={classNames("w-full caption-bottom text-sm", className)}
        {...props}
      >
        <caption className="sr-only">Data Table</caption>
        {props.children}
      </table>
    </div>
  )
}

function TableHeader({ className, ...props }: Readonly<React.ComponentProps<"thead">>) {
  return (
    <thead
      data-slot="table-header"
      className={classNames("[&_tr]:border-b font-medium", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: Readonly<React.ComponentProps<"tbody">>) {
  return (
    <tbody
      data-slot="table-body"
      className={classNames("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: Readonly<React.ComponentProps<"tfoot">>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={classNames(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: Readonly<React.ComponentProps<"tr">>) {
  return (
    <tr
      data-slot="table-row"
      className={classNames(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: Readonly<React.ComponentProps<"th">>) {
  return (
    <th
      data-slot="table-head"
      scope="col"
      className={classNames(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: Readonly<React.ComponentProps<"td">>) {
  return (
    <td
      data-slot="table-cell"
      className={classNames(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: Readonly<React.ComponentProps<"caption">>) {
  return (
    <caption
      data-slot="table-caption"
      className={classNames("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
