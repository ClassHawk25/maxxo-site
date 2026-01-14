'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { stagger } from '@/lib/constants';
import { cn } from '@/lib/utils';

// ============================================================================
// ANIMATED SECTION WRAPPER
// ============================================================================

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  parallax?: boolean;
}

export function AnimatedSection({ children, className, id, parallax = false }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: '-80px'
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={stagger}
      className={cn('relative', className)}
      style={parallax ? { backgroundPositionY: backgroundY } : undefined}
    >
      {children}
    </motion.section>
  );
}
