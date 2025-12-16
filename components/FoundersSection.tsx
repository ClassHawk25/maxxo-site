'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { Card } from './ui/Card';
import { fadeInUp } from '@/lib/constants';

// ============================================================================
// FOUNDERS SECTION
// ============================================================================

const founders = [
  {
    name: 'Simon Parker',
    role: 'CEO, Care Leaders Network',
    bio: 'Over a decade working closely with care providers to help them adapt, innovate and grow.',
    initials: 'SP',
  },
  {
    name: 'Josh Carter',
    role: 'AI & Digital Growth',
    bio: 'Over 17 years of experience in digital growth. An expert in systems that convert enquiries into outcomes.',
    initials: 'JC',
  },
];

export function FoundersSection() {
  return (
    <AnimatedSection id="team" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Built by People Who <span className="gradient-text">Understand Care</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="text-center">
                <div className="w-20 h-20 rounded-full gradient-bg-135 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{founder.initials}</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-1 text-foreground">
                  {founder.name}
                </h3>
                <p className="text-sm font-medium mb-4 text-accent">
                  {founder.role}
                </p>
                <p className="text-muted-foreground">{founder.bio}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
