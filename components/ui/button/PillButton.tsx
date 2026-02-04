import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'default' | 'ghost' | 'outline' | 'secondary';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

const getButtonStyles = (variant: ButtonVariant = 'default', size: ButtonSize = 'default') => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  };
  
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-full px-3',
    lg: 'h-11 rounded-full px-8',
    icon: 'h-10 w-10',
  };
  
  return cn(
    baseStyles,
    variants[variant] || variants.default,
    sizes[size] || sizes.default
  );
};

export interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const PillButton = forwardRef<HTMLButtonElement, PillButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild, ...props }, ref) => {
    if (asChild) {
      // When asChild is true, clone the child element with button styles and props
      const child = React.Children.only(props.children) as React.ReactElement;
      return React.cloneElement(child, {
        className: cn(getButtonStyles(variant, size), className, (child.props as { className?: string })?.className),
        ref,
        ...props,
      } as React.HTMLAttributes<HTMLElement>);
    }

    return (
      <button
        className={cn(getButtonStyles(variant, size), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
PillButton.displayName = 'PillButton';

export { PillButton };
