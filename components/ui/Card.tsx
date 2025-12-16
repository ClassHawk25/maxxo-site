'use client';

import { cn } from '@/lib/utils';

// ============================================================================
// CARD COMPONENT
// ============================================================================

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({ children, className, hover = true, gradient = false }: CardProps) {
  if (gradient) {
    return (
      <div className="p-[2px] rounded-2xl gradient-bg-135">
        <div className={cn(
          'bg-card rounded-[calc(1rem-2px)] p-8 h-full',
          className
        )}>
          {children}
        </div>
      </div>
    );
  }
  
  return (
    <div
      className={cn(
        'bg-card rounded-2xl border border-border p-8',
        'transition-all duration-300',
        hover && 'hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}
