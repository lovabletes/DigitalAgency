
"use client";

import * as React from "react";
import { classNames } from "@/utils/class-names";

interface CarouselProps extends React.ComponentProps<"div"> {
  orientation?: "horizontal" | "vertical";
  className?: string;
  children?: React.ReactNode;
}

interface CarouselContextProps {
  currentIndex: number;
  totalSlides: number;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  goToSlide: (index: number) => void;
  orientation: "horizontal" | "vertical";
  setTotalSlides: (n: number) => void;
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

function Carousel({
  orientation = "horizontal",
  className,
  children,
  ...props
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [totalSlides, setTotalSlides] = React.useState(0);

  const canScrollPrev = currentIndex > 0;
  const canScrollNext = currentIndex < totalSlides - 1;

  const scrollPrev = React.useCallback(() => {
    if (canScrollPrev) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [canScrollPrev]);

  const scrollNext = React.useCallback(() => {
    if (canScrollNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [canScrollNext]);

  const goToSlide = React.useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentIndex(index);
      }
    },
    [totalSlides]
  );

  // totalSlides will be managed by CarouselContent when it mounts

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (
        (orientation === "horizontal" && event.key === "ArrowLeft") ||
        (orientation === "vertical" && event.key === "ArrowUp")
      ) {
        event.preventDefault();
        scrollPrev();
      } else if (
        (orientation === "horizontal" && event.key === "ArrowRight") ||
        (orientation === "vertical" && event.key === "ArrowDown")
      ) {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext, orientation]
  );

  return (
    <CarouselContext.Provider
      value={{
        currentIndex,
        totalSlides,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        goToSlide,
        orientation,
        setTotalSlides,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={classNames("relative group/carousel", className)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Carousel"
        tabIndex={0}
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { currentIndex, orientation, setTotalSlides } = useCarousel();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const slideRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    if (contentRef.current && slideRefs.current[currentIndex]) {
      const slide = slideRefs.current[currentIndex];
      if (slide) {
        contentRef.current.scrollTo({
          left: orientation === "horizontal" ? slide.offsetLeft : 0,
          top: orientation === "vertical" ? slide.offsetTop : 0,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex, orientation]);

  // Update slide refs when children change
  const setSlideRef = React.useCallback((index: number) => (el: HTMLDivElement | null) => {
    slideRefs.current[index] = el;
  }, []);

  // Define carousel item props interface
  interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
    'data-carousel-item'?: string;
    ref?: React.Ref<HTMLDivElement>;
  }

  // Get valid children that are CarouselItem components
  const { childrenWithRefs } = React.useMemo(() => {
    const validChildren = React.Children.toArray(props.children).filter(
      (child) => React.isValidElement(child) && child.type === CarouselItem
    ) as Array<React.ReactElement<CarouselItemProps>>;

    // Pass slide refs to children
    const childrenWithRefs = validChildren.map((child, index) => {
      const element = child as React.ReactElement<CarouselItemProps>;
      const newProps: CarouselItemProps = {
        ...element.props,
        'data-carousel-item': 'true',
      };
      
      // Add ref using Object.assign to avoid TypeScript errors
      Object.assign(newProps, { ref: setSlideRef(index) });
      
      return React.cloneElement(element, newProps);
    });

    return {
      childrenWithRefs
    };
  }, [props.children, setSlideRef]);

  React.useEffect(() => {
    setTotalSlides(childrenWithRefs.length);
  }, [childrenWithRefs.length, setTotalSlides]);

  if (childrenWithRefs.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 text-muted-foreground">
        No slides available
      </div>
    );
  }

  return (
    <div
      ref={contentRef}
      className={classNames("overflow-hidden")}
      data-slot="carousel-content"
    >
      <div
        className={classNames(
          "flex",
          orientation === "horizontal" ? "flex-row" : "flex-col",
          className
        )}
        style={{
          width: orientation === "horizontal" ? "100%" : "auto",
          height: orientation === "vertical" ? "100%" : "auto",
        }}
        {...props}
      >
        {childrenWithRefs}
      </div>
    </div>
  );
}

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function CarouselItem({ className, children, ...props }, ref) {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="tabpanel"
        aria-roledescription="slide"
        data-slot="carousel-item"
        className={classNames(
          "flex-shrink-0",
          orientation === "horizontal" ? "w-full" : "w-auto",
          "h-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

function CarouselPrevious({
  className,
  variant = "outline",
  ...props
}: React.ComponentProps<"button"> & { variant?: "default" | "outline" | "ghost" }) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      data-slot="carousel-previous"
      className={classNames(
        "absolute size-8 rounded-full flex items-center justify-center transition-colors",
        variant === "outline" && "border border-input bg-background",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "ghost" && "bg-transparent",
        canScrollPrev ? "hover:bg-accent" : "opacity-50 cursor-not-allowed",
        orientation === "horizontal"
          ? "top-1/2 left-4 -translate-y-1/2"
          : "top-4 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label="Previous slide"
      {...props}
    >
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      <span className="sr-only">Previous slide</span>
    </button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  ...props
}: React.ComponentProps<"button"> & { variant?: "default" | "outline" | "ghost" }) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      data-slot="carousel-next"
      className={classNames(
        "absolute size-8 rounded-full flex items-center justify-center transition-colors",
        variant === "outline" && "border border-input bg-background",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "ghost" && "bg-transparent",
        canScrollNext ? "hover:bg-accent" : "opacity-50 cursor-not-allowed",
        orientation === "horizontal"
          ? "top-1/2 right-4 -translate-y-1/2"
          : "bottom-4 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label="Next slide"
      {...props}
    >
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <span className="sr-only">Next slide</span>
    </button>
  );
}

function CarouselNav({
  className,
  variant = "overlay",
}: {
  className?: string
  variant?: "overlay" | "inline"
}) {
  // Renders standardized Previous/Next with consistent styles/positions
  const baseBtn = "h-10 w-10 rounded-full bg-white border border-border shadow-lg opacity-0 transition-opacity group-hover/carousel:opacity-100"
  const prevPos = "left-0 sm:left-2 top-auto bottom-2 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2"
  const nextPos = "right-0 sm:right-2 top-auto bottom-2 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2"
  const common = variant === "overlay" ? baseBtn : ""

  return (
    <>
      <CarouselPrevious className={classNames(common, prevPos, className)} />
      <CarouselNext className={classNames(common, nextPos, className)} />
    </>
  )
}

function CarouselDots({ className }: { className?: string }) {
  const { currentIndex, totalSlides, goToSlide } = useCarousel();

  if (totalSlides <= 1) return null;

  return (
    <div
      className={classNames(
        "flex justify-center gap-2 mt-4",
        className
      )}
      data-slot="carousel-dots"
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={classNames(
            "size-2 rounded-full transition-colors",
            index === currentIndex ? "bg-primary" : "bg-muted hover:bg-muted-foreground"
          )}
          onClick={() => goToSlide(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentIndex ? "true" : "false"}
        />
      ))}
    </div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  CarouselNav,
  useCarousel,
};
