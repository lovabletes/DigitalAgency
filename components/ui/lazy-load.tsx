'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyLoadProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  rootMargin?: string
  threshold?: number
  className?: string
}

export function LazyLoad({
  children,
  fallback = null,
  rootMargin = '50px',
  threshold = 0.1,
  className = ''
}: Readonly<LazyLoadProps>) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setIsLoaded(true)
          observer.disconnect()
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [rootMargin, threshold])

  // Show loading state until component is ready
  if (!isLoaded) {
    return (
      <div ref={ref} className={className}>
        {fallback}
      </div>
    )
  }

  return (
    <div className={className}>
      {isVisible ? children : fallback}
    </div>
  )
}

// Optimized version for critical content
export function LazyLoadCritical({
  children,
  fallback,
  className = ''
}: Readonly<{
  children: React.ReactNode
  fallback?: React.ReactNode
  className?: string
}>) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadComponent = () => setIsLoaded(true)

    if ('requestIdleCallback' in globalThis) {
      globalThis.requestIdleCallback(loadComponent, { timeout: 2000 })
    } else {
      // Fallback for browsers without requestIdleCallback
      globalThis.setTimeout(loadComponent, 100)
    }
  }, [])

  return (
    <div className={className}>
      {isLoaded ? children : fallback}
    </div>
  )
}
