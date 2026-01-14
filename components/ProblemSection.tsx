'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Globe, PhoneOff, Clock, ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { fadeInUp, easeOut } from '@/lib/constants';

// ============================================================================
// PROBLEM SECTION - Clean, Centered Layout
// ============================================================================

const problems = [
  {
    icon: Mail,
    title: 'Emails sit unread',
    description:
      'Enquiries arrive when teams are stretched. Hours pass. Families move on.',
  },
  {
    icon: Globe,
    title: 'Website visitors leave',
    description:
      "They have questions. No one's there to answer. They find someone who is.",
  },
  {
    icon: PhoneOff,
    title: 'Calls go unanswered',
    description:
      "If no one picks up, most callers don't leave a message. That opportunity is gone.",
  },
  {
    icon: Clock,
    title: 'Follow-up falls through',
    description:
      'A good first response means nothing if the second one never comes.',
  },
];

export function ProblemSection() {
  const particlesRef = useRef(null);
  const isInView = useInView(particlesRef, { once: true });

  return (
    <AnimatedSection className="relative py-20 overflow-hidden bg-foreground">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Subtle floating particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {isInView && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/10"
            initial={{
              x: `${20 + (i * 15)}%`,
              y: '110%',
              opacity: 0,
            }}
            animate={{
              y: '-10%',
              opacity: [0, 0.3, 0.3, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              delay: i * 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header - Centered */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            The Result? Opportunities{' '}
            <span className="gradient-text">Slip Away.</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Not because your care isn't excellent. Not because your team doesn't
            try. Simply because the systems aren't built for how modern enquiries
            actually work.
          </p>
        </motion.div>

        {/* Problem Cards - 2x2 Grid with stagger and icon bounce */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: easeOut }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.12,
                    type: 'spring',
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  <problem.icon className="text-red-400" size={24} />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1">
                    {problem.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout with animated shimmer border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease: easeOut }}
        >
          <div className="relative p-[1px] rounded-2xl overflow-hidden">
            {/* Animated shimmer border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'linear',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20" />

            <div className="relative bg-foreground/90 backdrop-blur-sm rounded-[calc(1rem-1px)] py-8 px-6 text-center">
              <p className="text-xl md:text-2xl text-white/80">
                You don't have a shortage of enquiries.{' '}
                <span className="text-white font-semibold">
                  You have a shortage of time and systems.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional closing line */}
        <motion.p
          className="mt-8 text-center text-white/50 text-sm max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          And these moments compound. Across a month, a group, a year. The
          missed opportunities add up in ways you'll never fully see.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6, ease: easeOut }}
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors group"
          >
            Book a Demo
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
