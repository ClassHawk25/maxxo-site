'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

// ============================================================================
// BUTTON COMPONENT
// ============================================================================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',
      'transition-all duration-300 cursor-pointer',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'
    );
    
    const variants = {
      primary: cn(
        'gradient-bg-135 text-white',
        'shadow-lg hover:shadow-xl hover:-translate-y-0.5',
        'active:scale-[0.98]'
      ),
      secondary: cn(
        'bg-white border-2 border-border text-foreground',
        'hover:border-accent/30 hover:bg-muted/50',
        'active:scale-[0.98]'
      ),
      ghost: cn(
        'bg-transparent text-foreground',
        'hover:bg-muted/50'
      ),
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      default: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg',
    };
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
