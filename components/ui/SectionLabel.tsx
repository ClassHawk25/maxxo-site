'use client';

import { cn } from '@/lib/utils';

// ============================================================================
// SECTION LABEL COMPONENT
// ============================================================================

interface SectionLabelProps {
  children: React.ReactNode;
  pulse?: boolean;
  className?: string;
}

export function SectionLabel({ children, pulse = false, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 rounded-full px-5 py-2 mb-6',
        'border border-accent/30 bg-accent/5',
        className
      )}
    >
      <span
        className={cn(
          'h-2 w-2 rounded-full bg-accent',
          pulse && 'animate-pulse'
        )}
      />
      <span className="font-mono text-xs uppercase tracking-widest text-accent">
        {children}
      </span>
    </div>
  );
}
