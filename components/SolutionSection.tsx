'use client';

import { motion } from 'framer-motion';
import { Zap, Clock, Calendar, ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { fadeInUp, easeOut } from '@/lib/constants';

// ============================================================================
// SOLUTION SECTION - Complete Rewrite
// ============================================================================

const pillars = [
  {
    icon: Zap,
    title: 'Immediate Response',
    description: 'Every enquiry acknowledged within minutes, not hours.',
  },
  {
    icon: Clock,
    title: '24/7 Coverage',
    description: 'Nights, weekends, bank holidays. Always on, always professional.',
  },
  {
    icon: Calendar,
    title: 'Automatic Booking',
    description: "Tours and calls scheduled without adding to your team's workload.",
  },
];

export function SolutionSection() {
  return (
    <AnimatedSection id="solution" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle gradient mesh background */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[150px]"
        style={{ backgroundColor: '#01B5D8' }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px]"
        style={{ backgroundColor: '#90E0EF' }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.12, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            We've <span className="gradient-text">Solved This.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maxxo.ai is a complete enquiry management system built specifically
            for care providers. Every channel. Every hour. Every enquiry handled
            instantly and professionally.
          </p>
        </motion.div>

        {/* Three Pillars with scale animation */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: easeOut }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl gradient-bg-135 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card rounded-2xl p-8 border border-border group-hover:border-transparent transition-colors h-full">
                {/* Icon with gentle pulse */}
                <motion.div
                  className="w-14 h-14 rounded-xl gradient-bg-135 flex items-center justify-center mb-6 shadow-lg"
                  animate={{
                    boxShadow: [
                      '0 10px 25px rgba(1, 181, 216, 0.2)',
                      '0 10px 40px rgba(1, 181, 216, 0.4)',
                      '0 10px 25px rgba(1, 181, 216, 0.2)',
                    ],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                >
                  <pillar.icon className="text-white" size={28} />
                </motion.div>

                <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          className="text-center text-lg text-muted-foreground mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          One system. Every channel.{' '}
          <span className="text-foreground font-semibold">
            Complete peace of mind.
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6, ease: easeOut }}
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent font-medium transition-colors group"
          >
            Book a Demo
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
