'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stagger } from '@/lib/constants';
import { cn } from '@/lib/utils';

// ============================================================================
// ANIMATED SECTION WRAPPER
// ============================================================================

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.15,
    margin: '-60px'
  });
  
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={stagger}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}
