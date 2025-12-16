'use client';

import Image from 'next/image';

// ============================================================================
// LOGO COMPONENT
// ============================================================================

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Maxxo.ai Logo"
      width={size}
      height={size}
      className={className}
    />
  );
}

// ============================================================================
// LOGO WITH TEXT
// ============================================================================

interface LogoWithTextProps {
  size?: number;
  className?: string;
}

export function LogoWithText({ size = 48, className }: LogoWithTextProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo size={size} />
      <span className="font-display text-xl font-bold text-foreground">
        maxxo<span className="gradient-text">.ai</span>
      </span>
    </div>
  );
}