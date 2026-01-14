'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, MessageSquare, Globe, Phone } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { fadeInUp } from '@/lib/constants';

// ============================================================================
// PLATFORM SECTION - Tabbed Showcase
// ============================================================================

const platforms = [
  {
    id: 'text',
    number: '01',
    tabLabel: 'Text Assistant',
    icon: MessageSquare,
    title: 'Text-Based Enquiry Assistant',
    subtitle: 'Instant Response to Every Online Enquiry',
    description: 'When a care seeker submits an enquiry through your website or third-party platforms like Carehome.co.uk, Autumna, or TrustedCare, Maxxo.ai responds within moments via SMS or WhatsApp. It acknowledges their enquiry, offers assistance, and opens a genuine two-way conversation.',
    features: [
      'Instant SMS or WhatsApp response to every enquiry',
      'Trained on your services, care types, location, values, and key benefits',
      'Engages naturally, answering questions about care needs, urgency, and availability',
      'Books tours directly into your calendar when they are ready',
      'Arranges callbacks if they prefer to speak with someone',
      'Sends brochures and continues gentle follow-up for those still exploring',
      'Removes the need for staff to manually chase every lead',
      'Works 24/7 including weekends and bank holidays',
    ],
    stats: [
      { value: '85%', label: 'Response Rate' },
      { value: '65%', label: 'Tour Booking Rate' },
      { value: '<10 min', label: 'Enquiry to Tour' },
    ],
  },
  {
    id: 'website',
    number: '02',
    tabLabel: 'Website Assistant',
    icon: Globe,
    title: 'Website Assistant',
    subtitle: 'A Digital Team Member on Your Website',
    description: 'Many care seekers browse your website without ever completing a form. Questions go unanswered and interest fades quietly. Our website assistant engages visitors in real time, not as a generic chatbot, but as a knowledgeable member of your team who understands your services inside out.',
    features: [
      'Engages visitors the moment they have a question',
      'Trained specifically on your services, care types, fees, and values',
      'Answers questions clearly, consistently, and with warmth',
      'Proactively offers help without being pushy',
      'Books tours and arranges calls directly from the chat',
      'Captures contact details from visitors who would otherwise leave',
      'Hands off to your team seamlessly when needed',
      'Available 24/7 so you never miss an opportunity',
    ],
  },
  {
    id: 'call',
    number: '03',
    tabLabel: 'Call Agent',
    icon: Phone,
    title: 'Call Agent & Missed Call Recovery',
    subtitle: 'No Phone Enquiry Is Ever Lost',
    description: 'Telephone enquiries show the highest intent, but they also carry the highest risk of loss. If no one answers, most callers do not leave a voicemail. That opportunity is gone forever. Maxxo.ai ensures every call is captured, transcribed, summarised, and followed up correctly.',
    features: [
      'Inbound calls automatically transcribed and summarised',
      'AI generates personalised follow-up emails ready for your team to send',
      'Contact records created in your CRM with full call notes',
      'Missed calls trigger an immediate SMS to the caller',
      'SMS reassures them and continues the conversation by text',
      'Qualifies their needs and books tours via text',
      'Turns missed calls into recovered opportunities',
      'Full visibility over all phone enquiries',
    ],
  },
];

export function PlatformSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activePlatform = platforms[activeTab];

  return (
    <AnimatedSection id="platform" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Three AI Assistants, <span className="gradient-text">One Platform</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Maxxo.ai manages the full enquiry journey, from first contact to booked appointment.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-card rounded-2xl p-2 shadow-lg border border-border">
            {platforms.map((platform, i) => (
              <button
                key={platform.id}
                onClick={() => setActiveTab(i)}
                className={`
                  relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300
                  ${activeTab === i
                    ? 'text-white'
                    : 'text-muted-foreground hover:text-foreground hover:-translate-y-0.5'
                  }
                `}
              >
                {/* Active background */}
                {activeTab === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 gradient-bg-135 rounded-xl"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="font-mono text-xs opacity-70">{platform.number}</span>
                  {platform.tabLabel}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Panel */}
        <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-5 gap-8 p-8 md:p-12"
            >
              {/* Left Content (60%) */}
              <div className="lg:col-span-3">
                {/* Title & Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-2 text-foreground">
                    {activePlatform.title}
                  </h3>
                  <p className="text-lg font-medium text-accent mb-6">
                    {activePlatform.subtitle}
                  </p>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-lg text-muted-foreground mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {activePlatform.description}
                </motion.p>

                {/* Features List - 2 columns on larger screens */}
                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {activePlatform.features.map((feature, j) => (
                    <motion.li
                      key={j}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + j * 0.03 }}
                    >
                      <CheckCircle className="flex-shrink-0 text-accent mt-0.5" size={18} />
                      <span className="text-foreground text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Stats badges - only for Text Assistant */}
                {activePlatform.stats && (
                  <motion.div
                    className="flex flex-wrap gap-3 mt-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    {activePlatform.stats.map((stat, k) => (
                      <div
                        key={k}
                        className="gradient-bg-135 rounded-full px-4 py-2 text-white"
                      >
                        <span className="font-bold text-sm">{stat.value}</span>
                        <span className="text-xs ml-1.5 opacity-90">{stat.label}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Right Visual (40%) */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <motion.div
                  className="relative w-full max-w-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {/* Visual container */}
                  <div className="bg-muted rounded-2xl p-8 relative overflow-hidden">
                    {/* Decorative gradient blurs */}
                    <div
                      className="absolute top-4 right-4 w-32 h-32 rounded-full opacity-30 blur-[60px]"
                      style={{ backgroundColor: '#01B5D8' }}
                    />
                    <div
                      className="absolute bottom-4 left-4 w-24 h-24 rounded-full opacity-20 blur-[40px]"
                      style={{ backgroundColor: '#90E0EF' }}
                    />

                    {/* Icon display */}
                    <div className="relative z-10 flex flex-col items-center justify-center py-8">
                      <div className="w-24 h-24 rounded-2xl gradient-bg-135 flex items-center justify-center mb-6 shadow-lg">
                        <activePlatform.icon className="text-white" size={48} />
                      </div>

                      {/* Mock UI elements based on type */}
                      {activePlatform.id === 'text' && (
                        <div className="w-full space-y-3">
                          <div className="bg-card rounded-xl p-3 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 rounded-full bg-green-400" />
                              <span className="text-xs text-muted-foreground">SMS sent</span>
                            </div>
                            <div className="h-2 bg-accent/20 rounded w-3/4" />
                          </div>
                          <div className="bg-accent/10 rounded-xl p-3 ml-4">
                            <div className="h-2 bg-accent/30 rounded w-full mb-2" />
                            <div className="h-2 bg-accent/30 rounded w-2/3" />
                          </div>
                        </div>
                      )}

                      {activePlatform.id === 'website' && (
                        <div className="w-full bg-card rounded-xl shadow-sm overflow-hidden">
                          <div className="bg-muted px-3 py-2 flex items-center gap-2">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 rounded-full bg-red-400" />
                              <div className="w-2 h-2 rounded-full bg-yellow-400" />
                              <div className="w-2 h-2 rounded-full bg-green-400" />
                            </div>
                            <div className="flex-1 bg-background rounded h-4" />
                          </div>
                          <div className="p-3">
                            <div className="h-2 bg-accent/20 rounded w-full mb-2" />
                            <div className="h-2 bg-accent/20 rounded w-3/4" />
                          </div>
                        </div>
                      )}

                      {activePlatform.id === 'call' && (
                        <div className="w-full space-y-3">
                          <div className="bg-card rounded-xl p-3 shadow-sm flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                              <Phone className="text-accent" size={20} />
                            </div>
                            <div className="flex-1">
                              <div className="h-2 bg-accent/30 rounded w-1/2 mb-1" />
                              <div className="h-2 bg-accent/20 rounded w-3/4" />
                            </div>
                          </div>
                          <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                            <span className="text-xs text-green-600 font-medium">Transcribed & Logged</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
}
