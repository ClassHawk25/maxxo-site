'use client';

import { Logo } from './Logo';

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
          <div className="flex items-center gap-3">
            <Logo size={32} />
            <span className="font-display text-lg font-bold text-foreground">
              maxxo<span className="gradient-text">.ai</span>
            </span>
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
        
        {/* Optional: Additional Links */}
        <div className="mt-8 pt-8 border-t border-border flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
          <a href="mailto:hello@maxxo.ai" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
