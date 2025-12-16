'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Globe, Phone, Building2, CheckCircle2, ChevronDown } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { fadeInUp } from '@/lib/constants';

// ============================================================================
// SOLUTION SECTION - Clean Ecosystem Overview
// ============================================================================

const products = [
  {
    icon: MessageSquare,
    title: 'Text Assistant',
    description: 'Instant SMS/WhatsApp response to every enquiry',
  },
  {
    icon: Globe,
    title: 'Website Assistant',
    description: 'Engages visitors browsing your site in real time',
  },
  {
    icon: Phone,
    title: 'Call Agent',
    description: 'Captures and recovers every phone enquiry',
  },
];

export function SolutionSection() {
  const scrollToPlatform = () => {
    document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatedSection id="solution" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            One Ecosystem. <span className="gradient-text">Every Enquiry Covered.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maxxo.ai is a complete enquiry management operating system. Three intelligent products working together to ensure no opportunity is ever missed.
          </p>
        </motion.div>

        {/* Clean Flow Diagram */}
        <div className="flex flex-col items-center gap-8 mb-16">
          {/* Top - Your Care Business (Navy) */}
          <motion.div
            className="flex items-center gap-3 bg-foreground text-white px-8 py-4 rounded-full shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Building2 size={22} />
            <span className="font-semibold">Your Care Business</span>
          </motion.div>

          {/* Subtle down indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ChevronDown className="text-muted-foreground/50" size={24} />
          </motion.div>

          {/* Three Product Cards */}
          <div className="grid md:grid-cols-3 gap-6 w-full">
            {products.map((product, i) => (
              <motion.button
                key={i}
                onClick={scrollToPlatform}
                className="text-center p-6 rounded-2xl border border-border bg-card hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl gradient-bg-135 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <product.icon className="text-white" size={26} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Subtle down indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <ChevronDown className="text-muted-foreground/50" size={24} />
          </motion.div>

          {/* Bottom - Tours Booked (Green) */}
          <motion.div
            className="flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <CheckCircle2 size={22} />
            <span className="font-semibold">Tours Booked</span>
          </motion.div>
        </div>

        {/* Bottom Tagline */}
        <motion.p
          className="text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          All three products share the same AI brain, trained on your services, values, and availability.
        </motion.p>
      </div>
    </AnimatedSection>
  );
}
