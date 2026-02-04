"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNav } from "@/components/ui/carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons/icons"

// Types for different carousel configurations
export type CarouselType = "default" | "custom-scroll"

export interface GenericCarouselProps {
  /** Type of carousel implementation */
  type?: CarouselType
  /** Items to display in the carousel */
  items: React.ReactNode[]
  /** Custom className for the carousel container */
  className?: string
  /** Custom className for carousel content */
  contentClassName?: string
  /** Custom className for carousel items */
  itemClassName?: string
  /** Show navigation buttons */
  showNavigation?: boolean
  /** Custom previous button content */
  previousButton?: React.ReactNode
  /** Custom next button content */
  nextButton?: React.ReactNode
  /** Navigation button className */
  navigationClassName?: string
  /** Enable auto-scroll */
  autoScroll?: boolean
  /** Auto-scroll interval in milliseconds */
  autoScrollInterval?: number
  /** Scroll behavior */
  scrollBehavior?: ScrollBehavior
  /** Items per view on different screen sizes */
  itemsPerView?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  /** Gap between items */
  gap?: number
  /** Enable hover effects for cards */
  enableHoverEffects?: boolean
  /** Equalize item heights by forcing children to h-full */
  equalizeHeights?: boolean
  /** Hover effect variant for cards */
  hoverVariant?: "translate" | "scale" | "none"
  /** Add default inner paddings for content */
  defaultContentPadding?: boolean
  /** Add end padding based on gap for custom-scroll */
  edgePadding?: boolean
  /** Rounded radius class to apply to hover wrapper */
  roundedClassName?: string
  /** Custom scroll function for custom scroll type */
  onScroll?: (direction: -1 | 1) => void
}

/**
{{ ... }}
 * GenericCarousel - A unified carousel component that supports both shadcn/ui carousel
 * and custom horizontal scrolling implementations
 */
export const GenericCarousel = React.forwardRef<HTMLDivElement, GenericCarouselProps>(
  ({
    type = "default",
    items,
    className,
    contentClassName,
    itemClassName,
    showNavigation = true,
    previousButton,
    nextButton,
    navigationClassName,
    autoScroll = false,
    autoScrollInterval = 5000,
    scrollBehavior = "smooth" as ScrollBehavior,
    itemsPerView = { default: 1, sm: 1, md: 2, lg: 3, xl: 4 },
    gap = 16,
    enableHoverEffects = true,
    equalizeHeights = true,
    hoverVariant = "translate",
    defaultContentPadding = true,
    edgePadding = true,
    roundedClassName = "rounded-xl",
    onScroll,
    ...props
  }, ref) => {
    // Ensure children fill height to avoid uneven card heights causing background to show
    const renderWithFullHeight = useCallback((node: React.ReactNode) => {
      if (!equalizeHeights) return node
      if (React.isValidElement(node)) {
        const el = node as React.ReactElement<{ className?: string }>
        const existingClass = el.props?.className || ""
        return React.cloneElement(el, {
          className: cn("h-full flex flex-col", existingClass)
        })
      }
      return node
    }, [equalizeHeights])
    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null)

    // Calculate responsive basis classes
    const getBasisClass = useCallback(() => {
      const basis = itemsPerView
      const classes = []

      if (basis.default) classes.push(`basis-${basis.default}`)
      if (basis.sm) classes.push(`sm:basis-${basis.sm}`)
      if (basis.md) classes.push(`md:basis-${basis.md}`)
      if (basis.lg) classes.push(`lg:basis-${basis.lg}`)
      if (basis.xl) classes.push(`xl:basis-${basis.xl}`)

      return classes.join(" ")
    }, [itemsPerView])

    // Auto-scroll functionality
    useEffect(() => {
      if (autoScroll && type === "custom-scroll" && items.length > 1) {
        autoScrollRef.current = setInterval(() => {
          setCurrentIndex(prev => {
            const next = (prev + 1) % items.length
            if (containerRef.current) {
              const itemWidth = containerRef.current.scrollWidth / items.length
              containerRef.current.scrollTo({
                left: next * itemWidth,
                behavior: scrollBehavior
              })
            }
            return next
          })
        }, autoScrollInterval)

        return () => {
          if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current)
          }
        }
      }
    }, [autoScroll, autoScrollInterval, items.length, scrollBehavior, type])

    // Custom scroll navigation
    const scrollByItems = useCallback((direction: -1 | 1) => {
      if (type === "default") {
        // Use carousel context for navigation
        return
      }

      if (onScroll) {
        onScroll(direction)
        return
      }

      if (containerRef.current) {
        const container = containerRef.current
        const itemWidth = container.scrollWidth / items.length
        const scrollAmount = itemWidth * Math.abs(direction)

        container.scrollBy({
          left: direction * scrollAmount,
          behavior: scrollBehavior
        })

        setCurrentIndex(prev => {
          const newIndex = prev + direction
          return Math.max(0, Math.min(items.length - 1, newIndex))
        })
      }
    }, [type, onScroll, items.length, scrollBehavior])


    // Render based on carousel type
    if (type === "default") {
      return (
        <div ref={ref} className={cn("relative w-full", className)} {...props}>
          <Carousel className="w-full">
            <CarouselContent className={cn("-ml-2 md:-ml-4 items-stretch", defaultContentPadding && "py-3 px-3 sm:px-4", contentClassName)}>
              {items.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    "pl-2 md:pl-4 h-full",
                    getBasisClass(),
                    itemClassName
                  )}
                >
                  {enableHoverEffects ? (
                    <div className="h-full group">
                      <div className={cn(
                        "h-full w-full transition-all duration-300 group-hover:shadow-lg group-hover:z-10 relative transform-gpu will-change-transform overflow-visible",
                        roundedClassName,
                        hoverVariant === "translate" && "group-hover:-translate-y-1",
                        hoverVariant === "scale" && "group-hover:scale-[1.02]",
                        hoverVariant === "none" && ""
                      )}>
                        {renderWithFullHeight(item)}
                      </div>
                    </div>
                  ) : (
                    renderWithFullHeight(item)
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            {showNavigation && <CarouselNav className={navigationClassName} />}
          </Carousel>
        </div>
      )
    }

    // Custom scroll implementation
    return (
      <div ref={ref} className={cn("relative w-full", className)} {...props}>
        {showNavigation && (
          <>
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByItems(-1)}
              className={cn(
                "hidden sm:flex items-center justify-center absolute -left-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full border border-border bg-background/90 shadow hover:bg-accent transition-all",
                "disabled:opacity-0 disabled:cursor-not-allowed",
                navigationClassName
              )}
              disabled={currentIndex === 0}
            >
              {previousButton || <ChevronLeftIcon className="w-5 h-5" />}
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollByItems(1)}
              className={cn(
                "hidden sm:flex items-center justify-center absolute -right-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full border border-border bg-background/90 shadow hover:bg-accent transition-all",
                "disabled:opacity-0 disabled:cursor-not-allowed",
                navigationClassName
              )}
              disabled={currentIndex >= items.length - 1}
            >
              {nextButton || <ChevronRightIcon className="w-5 h-5" />}
            </button>
          </>
        )}

        <div
          ref={containerRef}
          className={cn(
            "overflow-x-auto overflow-y-visible w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory",
            contentClassName
          )}
          style={{
            scrollBehavior: scrollBehavior === "instant" ? "auto" : scrollBehavior,
            scrollPaddingInline: gap / 4
          }}
          aria-label="Carousel content"
        >
          <div
            className={cn("flex w-max items-stretch", defaultContentPadding && "py-3 px-3 sm:px-4")}
            style={{ gap: `${gap}px`, paddingInlineEnd: edgePadding ? gap : undefined }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "snap-start flex-none flex h-full",
                  itemClassName
                )}
              >
                {enableHoverEffects ? (
                  <div className="h-full group flex-1">
                    <div className={cn(
                      "h-full w-full transition-all duration-300 group-hover:shadow-lg group-hover:z-10 relative transform-gpu will-change-transform overflow-visible",
                      roundedClassName,
                      hoverVariant === "translate" && "group-hover:-translate-y-1",
                      hoverVariant === "scale" && "group-hover:scale-[1.02]",
                      hoverVariant === "none" && ""
                    )}>
                      {renderWithFullHeight(item)}
                    </div>
                  </div>
                ) : (
                  renderWithFullHeight(item)
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
)

GenericCarousel.displayName = "GenericCarousel"

export default GenericCarousel
