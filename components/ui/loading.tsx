'use client'

import { ReactNode } from 'react'
import Image from 'next/image'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingSpinner({ size = 'md', className = '' }: Readonly<LoadingSpinnerProps>) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <output
        className={`${sizeClasses[size]} border-2 border-primary/20 border-t-primary rounded-full animate-spin block`}
        aria-label="Loading"
      />
    </div>
  )
}

interface LoadingFallbackProps {
  height?: string
  className?: string
  children?: ReactNode
}

export function LoadingFallback({
  height = 'h-24',
  className = '',
  children
}: Readonly<LoadingFallbackProps>) {
  return (
    <div className={`${height} bg-muted/20 animate-pulse rounded-lg flex items-center justify-center ${className}`}>
      {children || <LoadingSpinner size="sm" />}
    </div>
  )
}

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false
}: Readonly<OptimizedImageProps>) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  )
}
