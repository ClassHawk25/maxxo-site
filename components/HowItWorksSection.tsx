'use client';

import { motion } from 'framer-motion';
import { Lightbulb, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { fadeInUp, easeOut } from '@/lib/constants';

// ============================================================================
// HOW IT WORKS SECTION
// ============================================================================

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'We learn about your care home',
    description:
      'Your services, values, availability, what makes you different. Everything a family might ask about.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'We handle enquiries across every channel',
    description:
      'Website visitors, phone calls, form submissions. Day and night. Weekends and bank holidays.',
  },
  {
    number: '03',
    icon: Calendar,
    title: 'Tours get booked. Your team stays focused.',
    description:
      "You get notified when it matters. Families get helped when they need it. Everyone wins.",
  },
];

export function HowItWorksSection() {
  return (
    <AnimatedSection className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            How It <span className="gradient-text">Works</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: easeOut }}
            >
              {/* Card */}
              <div className="bg-card rounded-2xl p-8 border border-border h-full relative overflow-hidden group hover:border-accent/30 transition-colors duration-300">
                {/* Large background number */}
                <motion.span
                  className="absolute -top-4 -right-2 text-[120px] font-display font-bold text-muted/50 leading-none select-none pointer-events-none"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                >
                  {step.number}
                </motion.span>

                {/* Content */}
                <div className="relative z-10">
                  {/* Number badge */}
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-bg-135 text-white font-bold text-lg mb-6"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + i * 0.2,
                      type: 'spring',
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <step.icon size={24} />
                  </motion.div>

                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-accent/5 to-transparent" />
              </div>

              {/* Connector line (hidden on mobile and last item) */}
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent/50 to-accent/20"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
                  style={{ originX: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6, ease: easeOut }}
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
