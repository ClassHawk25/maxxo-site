'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, PhoneMissed, FileQuestion, HelpCircle, CalendarX, Phone, FileCheck, MessageCircle, CalendarCheck } from 'lucide-react';

// ============================================================================
// HERO VISUAL - Before/After Comparison
// ============================================================================

const withoutMaxxo = [
  { icon: PhoneMissed, text: '3 missed calls', color: 'text-red-500' },
  { icon: FileQuestion, text: '4 forms waiting for a response', color: 'text-red-500' },
  { icon: HelpCircle, text: 'Website visitors leaving with questions', color: 'text-red-500' },
  { icon: CalendarX, text: '0 tours booked', color: 'text-red-500' },
];

const withMaxxo = [
  { icon: Phone, text: 'All calls handled', color: 'text-green-600' },
  { icon: FileCheck, text: 'Forms responded in under 2 minutes', color: 'text-green-600' },
  { icon: MessageCircle, text: 'Website visitors getting answers', color: 'text-green-600' },
  { icon: CalendarCheck, text: 'tours booked', color: 'text-green-600', counter: true },
];

const easeOut = [0.16, 1, 0.3, 1];

export function HeroVisual() {
  const [showWithMaxxo, setShowWithMaxxo] = useState(false);
  const [toursCount, setToursCount] = useState(3);

  // Trigger "With Maxxo" panel after left panel animates
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWithMaxxo(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Occasionally tick up the tours counter
  useEffect(() => {
    if (!showWithMaxxo) return;

    const interval = setInterval(() => {
      setToursCount((prev) => {
        if (prev >= 5) return 3;
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [showWithMaxxo]);

  return (
    <div className="relative w-full flex items-center justify-center gap-4 lg:gap-6">
      {/* Left Panel - Without Maxxo */}
      <motion.div
        className="flex-1 max-w-[280px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        {/* Label */}
        <motion.p
          className="text-xs font-medium text-muted-foreground mb-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Without Maxxo
        </motion.p>

        {/* Card */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-red-100 shadow-lg">
          <div className="space-y-3">
            {withoutMaxxo.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5, ease: easeOut }}
              >
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-red-400" size={16} />
                </div>
                <span className="text-sm text-muted-foreground">{item.text}</span>
                <X className="w-4 h-4 text-red-400 ml-auto flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Panel - With Maxxo */}
      <motion.div
        className="flex-1 max-w-[280px]"
        initial={{ opacity: 0, x: 30 }}
        animate={showWithMaxxo ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        {/* Label */}
        <motion.p
          className="text-xs font-medium text-accent mb-3 text-center"
          initial={{ opacity: 0 }}
          animate={showWithMaxxo ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          With Maxxo
        </motion.p>

        {/* Card */}
        <motion.div
          className="bg-white rounded-2xl p-5 border border-green-100 shadow-xl"
          animate={
            showWithMaxxo
              ? {
                  boxShadow: [
                    '0 10px 40px rgba(16, 185, 129, 0.1)',
                    '0 10px 50px rgba(16, 185, 129, 0.2)',
                    '0 10px 40px rgba(16, 185, 129, 0.1)',
                  ],
                }
              : {}
          }
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="space-y-3">
            {withMaxxo.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={showWithMaxxo ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: easeOut }}
              >
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-green-600" size={16} />
                </div>
                <span className="text-sm text-foreground font-medium">
                  {item.counter ? (
                    <>
                      <motion.span
                        key={toursCount}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block"
                      >
                        {toursCount}
                      </motion.span>
                      {' '}{item.text}
                    </>
                  ) : (
                    item.text
                  )}
                </span>
                <motion.div
                  className="ml-auto flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={showWithMaxxo ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.15,
                    type: 'spring',
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  <Check className="w-4 h-4 text-green-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
