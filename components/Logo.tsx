'use client';

// ============================================================================
// LOGO COMPONENT
// ============================================================================

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function Logo({ size = 64, className, showText = false }: LogoProps) {
  const scale = size / 64;
  const width = showText ? 280 * scale : 64 * scale;
  const height = 64 * scale;

  return (
    <svg
      width={width}
      height={height}
      viewBox={showText ? '0 0 280 64' : '0 0 64 64'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Icon */}
      <rect width="64" height="64" rx="14" fill="#03045E" />
      <path
        d="M16 43V21L32 34L48 21V43"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="51" cy="13" r="7" fill="#01B5D8" stroke="#03045E" strokeWidth="3" />

      {/* Text: maxxo.ai */}
      {showText && (
        <text
          x="80"
          y="46"
          fontFamily="var(--font-jakarta), Plus Jakarta Sans, system-ui, sans-serif"
          fontWeight="800"
          fontSize="42"
          letterSpacing="-1.2"
          fill="#03045E"
        >
          maxxo<tspan fill="#01B5D8">.ai</tspan>
        </text>
      )}
    </svg>
  );
}

// ============================================================================
// LOGO WITH TEXT (convenience wrapper)
// ============================================================================

interface LogoWithTextProps {
  size?: number;
  className?: string;
}

export function LogoWithText({ size = 48, className }: LogoWithTextProps) {
  return <Logo size={size} showText className={className} />;
}
