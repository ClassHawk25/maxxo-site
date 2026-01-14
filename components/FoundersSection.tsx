'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { Card } from './ui/Card';
import { fadeInUp, easeOut } from '@/lib/constants';

// ============================================================================
// FOUNDERS SECTION - "Built for Care. Not Adapted for It."
// Combined with WhyMaxxo content
// ============================================================================

const founders = [
  {
    name: 'Simon Parker',
    role: 'CEO, Care Leaders Network',
    bio: 'Over a decade working closely with care providers, helping them adapt, innovate, and grow. Simon brings the sector knowledge that shapes everything Maxxo does.',
    initials: 'SP',
  },
  {
    name: 'Josh Carter',
    role: 'AI & Digital Growth',
    bio: '17 years building digital systems that convert enquiries into outcomes. Josh brings the technical expertise to make it all work, seamlessly.',
    initials: 'JC',
  },
];

export function FoundersSection() {
  return (
    <AnimatedSection id="team" className="py-20 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main headline and opening copy */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Built for Care.{' '}
            <span className="gradient-text">Not Adapted for It.</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: easeOut }}
            >
              Generic tools don't understand the care sector. They don't know
              the difference between residential and nursing. They can't handle
              the sensitivity these conversations require.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: easeOut }}
            >
              <span className="text-foreground font-semibold">
                Maxxo.ai was built from the ground up for UK care providers.
              </span>{' '}
              Every detail is designed for how your families actually enquire
              and what they need to hear.
            </motion.p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-24 h-1 mx-auto mb-16 rounded-full gradient-bg-135"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5, ease: easeOut }}
        />

        {/* Subheadline and founders intro */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6, ease: easeOut }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Care Expertise Meets{' '}
            <span className="gradient-text">Technology</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building something like this takes two things: a deep understanding
            of how care really works, and the technical expertise to build
            systems that deliver. We brought both.
          </p>
        </motion.div>

        {/* Founder cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: -2, y: 30 }}
              whileInView={{ opacity: 1, rotate: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + i * 0.2, duration: 0.7, ease: easeOut }}
            >
              <Card className="text-center">
                {/* Initials circle with rotating gradient */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  {/* Rotating gradient ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, #01B5D8, #90E0EF, #01B5D8)',
                      padding: '3px',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-card" />
                  </motion.div>

                  {/* Inner circle with gradient */}
                  <div className="absolute inset-1 rounded-full gradient-bg-135 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{founder.initials}</span>
                  </div>
                </div>

                <motion.h4
                  className="font-display text-2xl font-bold mb-1 text-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                >
                  {founder.name}
                </motion.h4>
                <motion.p
                  className="text-sm font-medium mb-4 text-accent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + i * 0.2 }}
                >
                  {founder.role}
                </motion.p>
                <motion.p
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 + i * 0.2 }}
                >
                  {founder.bio}
                </motion.p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
