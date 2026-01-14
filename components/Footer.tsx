'use client';

import Image from 'next/image';
import { CookieSettingsButton } from './CookieConsent';

// ============================================================================
// FOOTER COMPONENT
// ============================================================================

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo-full.svg"
              alt="Maxxo.ai"
              width={140}
              height={32}
            />
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground text-center">
            Maximum Occupancy. That's exactly what we help you achieve.
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Maxxo.ai. All rights reserved.
          </p>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-border flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="/cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</a>
          <CookieSettingsButton />
        </div>
      </div>
    </footer>
  );
}
