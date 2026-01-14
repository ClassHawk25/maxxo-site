'use client';

import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { fadeInUp, slideInLeft, easeOut } from '@/lib/constants';

// ============================================================================
// LIMITS SECTION - "Even the Best Teams Have Limits"
// ============================================================================

type CoverageStatus = 'covered' | 'varies' | 'stretched';

const coverageItems: { label: string; status: CoverageStatus }[] = [
  { label: 'Monday-Friday 9-5', status: 'covered' },
  { label: 'Evenings', status: 'varies' },
  { label: 'Weekends', status: 'varies' },
  { label: 'Bank Holidays', status: 'varies' },
  { label: 'During busy periods', status: 'stretched' },
];

const paragraphs = [
  'Some care groups handle enquiries brilliantly. Fast responses, warm follow-ups, high conversion rates.',
  "But there's always a ceiling. Staff can only answer one call at a time. Form submissions wait during busy periods. And every team has moments when demand outpaces capacity.",
  "The question isn't whether your team is good. It's whether your systems can match the speed that care seekers now expect.",
];

export function LimitsSection() {
  return (
    <AnimatedSection className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Headline and Narrative */}
          <motion.div variants={fadeInUp}>
            {/* Headline aligned with left column */}
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Even the Best Teams Have{' '}
              <span className="gradient-text">Limits</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  variants={slideInLeft}
                  custom={i}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.p
              className="mt-8 text-xl font-semibold text-foreground border-l-4 border-accent pl-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7, ease: easeOut }}
            >
              Great people can only take you so far. Great systems take you
              further.
            </motion.p>
          </motion.div>

          {/* Right - Coverage Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: easeOut }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                Common Pressure Points
              </h3>

              <div className="space-y-4">
                {coverageItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease: easeOut }}
                  >
                    <span
                      className={`text-base ${
                        item.status === 'covered'
                          ? 'text-foreground font-medium'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </span>

                    {item.status === 'covered' ? (
                      <motion.div
                        className="flex items-center gap-2"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.12, type: 'spring', stiffness: 300 }}
                      >
                        <span className="text-sm text-green-600 font-medium">
                          Usually covered
                        </span>
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </motion.div>
                    ) : item.status === 'stretched' ? (
                      <motion.div
                        className="flex items-center gap-2"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.12 }}
                      >
                        <span className="text-sm text-amber-600 font-medium">
                          Often stretched
                        </span>
                        <motion.div
                          className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-2 h-2 rounded-full bg-amber-500" />
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        className="flex items-center gap-2"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.12 }}
                      >
                        <span className="text-sm text-muted-foreground">
                          Varies
                        </span>
                        <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center">
                          <Minus className="w-4 h-4 text-amber-400" />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Bottom message */}
              <motion.p
                className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                When capacity is full, something has to give.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
