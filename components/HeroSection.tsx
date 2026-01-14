'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';
import { HeroVisual } from './HeroVisual';
import { fadeInUp, scaleIn, stagger, easeOut } from '@/lib/constants';

// ============================================================================
// HERO SECTION
// ============================================================================

// Page load stagger for hero content
const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  },
};

const heroFadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOut }
  },
};

export function HeroSection() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStory = () => {
    const storySection = document.getElementById('story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-background">
      {/* Background Decorative Elements with subtle animation */}
      <motion.div
        className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[150px]"
        style={{ backgroundColor: '#01B5D8' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          opacity: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[120px]"
        style={{ backgroundColor: '#90E0EF' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.15, 1],
        }}
        transition={{
          opacity: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          scale: { duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 },
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content with enhanced page load animation */}
        <motion.div variants={heroStagger} initial="hidden" animate="visible">
          <motion.h1
            variants={heroFadeInUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 text-foreground"
          >
            Never miss an opportunity to{' '}
            <motion.span
              className="gradient-text inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: easeOut }}
            >
              connect.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={heroFadeInUp}
            className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-10"
          >
            Whether families are browsing your website, submitting an enquiry,
            or picking up the phone, Maxxo.ai ensures you're there. Every
            channel. Every hour.
          </motion.p>

          <motion.div variants={heroFadeInUp} className="flex flex-wrap gap-4">
            {/* Primary CTA with attention glow */}
            <Button onClick={scrollToDemo} className="animate-pulse-glow">
              Book a Demo
              <ArrowRight size={20} />
            </Button>
            <Button variant="secondary" onClick={scrollToStory}>
              See the Problem We Solve
              <ArrowDown size={20} />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right - Animated Enquiry Flow Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: easeOut }}
          className="relative hidden lg:block"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
