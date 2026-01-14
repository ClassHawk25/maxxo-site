'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { fadeInUp, slideInLeft, easeOut } from '@/lib/constants';

// ============================================================================
// STORY SECTION - "You're Not the Only Option"
// ============================================================================

const paragraphs = [
  "Every family that contacts you has probably contacted two or three other homes as well. Same enquiry. Same questions. Same urgency.",
  "They're not waiting to hear back from everyone. They're waiting to see who responds first.",
  "The first home to reply gets the conversation. The first home to be helpful books the tour.",
];

type TimelineItemType = 'start' | 'winner' | 'muted' | 'success' | 'too-late';

interface TimelineItem {
  time: string;
  event: string;
  type: TimelineItemType;
  badge?: string;
  extraGap?: boolean;
}

const timelineItems: TimelineItem[] = [
  { time: 'Sunday 8:00pm', event: 'Enquiry sent to 3 homes', type: 'start' },
  { time: 'Sunday 8:02pm', event: 'Home A responds', type: 'winner', badge: 'First response' },
  { time: 'Monday 9:15am', event: 'Home B responds', type: 'muted', extraGap: true },
  { time: 'Monday 2:30pm', event: 'Home C responds', type: 'muted' },
  { time: 'Tuesday', event: 'Tour booked with Home A', type: 'success' },
  { time: '', event: 'Home B', type: 'too-late' },
  { time: '', event: 'Home C', type: 'too-late' },
];

export function StorySection() {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: '-100px' });

  return (
    <AnimatedSection id="story" className="py-20 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Narrative */}
          <motion.div variants={fadeInUp}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
              You're Not the{' '}
              <span className="gradient-text">Only Option</span>
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
              The others? They never hear back. Because they never responded in time.
            </motion.p>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            ref={timelineRef}
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                The Race Against Time
              </h3>

              {/* Timeline */}
              <div className="relative">
                {/* Animated vertical line that draws itself */}
                <motion.div
                  className="absolute left-4 top-2 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-muted-foreground/20"
                  initial={{ height: 0 }}
                  animate={isTimelineInView ? { height: 'calc(100% - 16px)' } : { height: 0 }}
                  transition={{ duration: 1.4, ease: easeOut, delay: 0.3 }}
                />

                <div className="space-y-4">
                  {timelineItems.map((item, i) => {
                    const isWinner = item.type === 'winner';
                    const isMuted = item.type === 'muted';
                    const isSuccess = item.type === 'success';
                    const isTooLate = item.type === 'too-late';
                    const isStart = item.type === 'start';

                    return (
                      <motion.div
                        key={i}
                        className={`relative flex items-start gap-4 pl-10 ${item.extraGap ? 'mt-8' : ''}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: 0.4 + i * 0.15, duration: 0.5, ease: easeOut }}
                      >
                        {/* Timeline dot */}
                        <motion.div
                          className={`absolute left-0 top-1.5 w-8 h-8 rounded-full flex items-center justify-center ${
                            isWinner
                              ? 'bg-green-500'
                              : isSuccess
                              ? 'bg-green-500'
                              : isTooLate
                              ? 'bg-muted-foreground/20'
                              : isStart
                              ? 'gradient-bg-135'
                              : 'bg-card border-2 border-border'
                          }`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.5 + i * 0.15,
                            type: 'spring',
                            stiffness: 300,
                            damping: 15,
                          }}
                        >
                          {(isWinner || isSuccess) && (
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          )}
                          {isStart && <div className="w-2 h-2 rounded-full bg-white" />}
                          {isTooLate && <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />}
                        </motion.div>

                        {/* Highlight glow for winner */}
                        {isWinner && (
                          <motion.div
                            className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-green-500"
                            initial={{ opacity: 0 }}
                            whileInView={{
                              opacity: [0, 0.6, 0],
                              scale: [1, 1.8, 2],
                            }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + i * 0.15, duration: 0.8 }}
                          />
                        )}

                        {/* Content */}
                        <div
                          className={`flex-1 ${
                            isSuccess ? 'bg-green-50 rounded-lg p-3 -m-3' : ''
                          }`}
                        >
                          {item.time && (
                            <p
                              className={`text-sm font-mono ${
                                isWinner
                                  ? 'text-green-600 font-semibold'
                                  : isMuted || isTooLate
                                  ? 'text-muted-foreground/60'
                                  : isSuccess
                                  ? 'text-green-600 font-semibold'
                                  : 'text-muted-foreground'
                              }`}
                            >
                              {item.time}
                            </p>
                          )}
                          <div className="flex items-center gap-2">
                            <p
                              className={`text-base ${
                                isWinner
                                  ? 'text-foreground font-bold'
                                  : isMuted
                                  ? 'text-muted-foreground/70'
                                  : isSuccess
                                  ? 'text-green-700 font-bold'
                                  : isTooLate
                                  ? 'text-muted-foreground/50 line-through'
                                  : 'text-foreground'
                              }`}
                            >
                              {item.event}
                            </p>
                            {isTooLate && (
                              <span className="text-xs text-muted-foreground/50 font-medium">
                                Too late
                              </span>
                            )}
                          </div>
                          {item.badge && (
                            <motion.span
                              className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded-full"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.9 + i * 0.15, type: 'spring' }}
                            >
                              {item.badge}
                            </motion.span>
                          )}
                        </div>

                        {/* Success checkmark */}
                        {isSuccess && (
                          <motion.div
                            className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 1.2,
                              type: 'spring',
                              stiffness: 400,
                              damping: 12,
                            }}
                          >
                            <motion.div
                              initial={{ scale: 1 }}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ delay: 1.5, duration: 0.5, repeat: 2 }}
                            >
                              <Check className="w-5 h-5 text-white" strokeWidth={3} />
                            </motion.div>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
