'use client';

import { motion } from 'framer-motion';
import { Mail, PhoneOff, Clock, TrendingDown } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { fadeInUp } from '@/lib/constants';

// ============================================================================
// PROBLEM SECTION - Clean, Centered Layout
// ============================================================================

const problems = [
  {
    icon: Mail,
    title: 'Emails sit unread',
    description: 'Enquiries arrive when teams are stretched. Forms wait in inboxes for hours or days.',
  },
  {
    icon: PhoneOff,
    title: 'Calls go unanswered',
    description: 'If no one picks up, most callers never leave a voicemail. That lead is lost.',
  },
  {
    icon: Clock,
    title: 'Follow-up takes too long',
    description: 'By the time staff respond, families have already moved on to competitors.',
  },
  {
    icon: TrendingDown,
    title: 'Marketing spend is wasted',
    description: 'You pay to generate enquiries. When they are not converted, that investment disappears.',
  },
];

export function ProblemSection() {
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

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header - Centered */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Why Enquiries <span className="gradient-text">Slip Through the Cracks</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Care seekers reach out at critical moments. The reality of enquiry handling often falls short.
          </p>
        </motion.div>

        {/* Problem Cards - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <problem.icon className="text-red-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1">{problem.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-white/20 via-white/10 to-white/20">
            <div className="bg-foreground/80 backdrop-blur-sm rounded-[calc(1rem-1px)] py-8 px-6 text-center">
              <p className="text-xl md:text-2xl text-white/80">
                You do not have a shortage of enquiries.{' '}
                <span className="text-white font-semibold">You have a shortage of time and systems.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
