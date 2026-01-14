'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';

// ============================================================================
// NAVIGATION COMPONENT
// ============================================================================

const navLinks = [
  { href: '/#team', label: 'About' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToDemo = () => {
    setMobileMenuOpen(false);
    // Navigate to /#demo - works from any page
    window.location.href = '/#demo';
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'py-3' : 'py-5'
        )}
        style={{
          backgroundColor: scrolled ? 'rgba(246, 252, 252, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #CAF0F8' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/logo-full.svg"
              alt="Maxxo.ai"
              width={175}
              height={40}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-foreground transition-colors hover:text-accent group"
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
            {/* Log In Button */}
            <a
              href="https://app.maxxo.ai"
              className="px-5 py-2.5 text-sm font-medium text-foreground border border-border rounded-xl hover:bg-muted/50 transition-colors"
            >
              Log In
            </a>
            {/* CTA Button with pulse glow */}
            <Button onClick={navigateToDemo} className="animate-pulse-glow">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-20 left-4 right-4 bg-card rounded-2xl shadow-xl p-6"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground py-2 border-b border-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <a
                    href="https://app.maxxo.ai"
                    className="w-full px-5 py-2.5 text-center text-sm font-medium text-foreground border border-border rounded-xl hover:bg-muted/50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log In
                  </a>
                  <Button onClick={navigateToDemo} className="w-full">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
