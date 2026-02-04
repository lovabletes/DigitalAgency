import * as React from "react"

import { classNames } from "@/utils/class-names"

type CardVariant = "default" | "elevated-gradient" | "elevated"

interface CardProps extends React.ComponentProps<"div"> {
  variant?: CardVariant
}

function Card({ className, variant = "default", ...props }: CardProps) {
  const base = "text-card-foreground flex flex-col gap-6 rounded-xl border py-6"
  const variants: Record<CardVariant, string> = {
    default: classNames("bg-card shadow-sm"),
    elevated: classNames(
      "bg-card shadow-sm hover:shadow-md transition-shadow duration-300",
      "border-border/60"
    ),
    "elevated-gradient": classNames(
      // Subtle professional gradient with good dark-mode
      "bg-gradient-to-br from-indigo-50 via-white to-white",
      "dark:from-slate-800 dark:via-slate-900 dark:to-slate-950",
      // Border + soft elevation
      "border-border/50 shadow-sm hover:shadow-md",
      // Smooth interactions
      "transition-colors transition-shadow duration-300"
    ),
  }

  return (
    <div
      data-slot="card"
      className={classNames(base, variants[variant], className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={classNames(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={classNames("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={classNames("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={classNames(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={classNames("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={classNames("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
