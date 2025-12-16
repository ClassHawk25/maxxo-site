'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { fadeInUp, scaleIn, stagger } from '@/lib/constants';

// ============================================================================
// HERO SECTION
// ============================================================================

const messages = [
  { from: 'user', text: "Hi, I'm looking for care for my mother..." },
  { from: 'ai', text: "I'd be happy to help. What type of care are you considering?" },
  { from: 'user', text: "Residential care, she needs 24/7 support" },
  { from: 'ai', text: "I understand. We have availability. Would you like to book a tour?" },
];

// Animation steps for natural conversation flow:
// 0: User message 1
// 1: User message 1 + AI typing...
// 2: User message 1 + AI message 1
// 3: User message 1 + AI message 1 + User message 2
// 4: User message 1 + AI message 1 + User message 2 + AI typing...
// 5: All 4 messages shown
const getAnimationState = (step: number) => {
  switch (step) {
    case 0: return { messageCount: 1, showTyping: false };
    case 1: return { messageCount: 1, showTyping: true };
    case 2: return { messageCount: 2, showTyping: false };
    case 3: return { messageCount: 3, showTyping: false };
    case 4: return { messageCount: 3, showTyping: true };
    case 5: return { messageCount: 4, showTyping: false };
    default: return { messageCount: 1, showTyping: false };
  }
};

export function HeroSection() {
  const [animationStep, setAnimationStep] = useState(0);
  const { messageCount, showTyping } = getAnimationState(animationStep);

  useEffect(() => {
    // Different timing: typing indicators show for less time
    const isTypingStep = animationStep === 1 || animationStep === 4;
    const delay = isTypingStep ? 1200 : 2000;

    const timer = setTimeout(() => {
      setAnimationStep((prev) => (prev + 1) % 6);
    }, delay);
    return () => clearTimeout(timer);
  }, [animationStep]);
  
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-background">
      {/* Background Decorative Elements */}
      <div 
        className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[150px]"
        style={{ backgroundColor: '#01B5D8' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[120px]"
        style={{ backgroundColor: '#90E0EF' }}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 text-foreground"
          >
            Convert More Enquiries Into{' '}
            <span className="gradient-text">Admissions</span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-10 leading-relaxed max-w-xl text-muted-foreground"
          >
            We help care seekers book tours faster. Our AI engages every enquiry instantly, qualifying needs, answering questions, and booking visits before your competitors even respond.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Button onClick={scrollToDemo}>
              Demo
              <ArrowRight size={20} />
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}>
              See How It Works
            </Button>
          </motion.div>
          
          {/* Trust Indicator */}
          <motion.p variants={fadeInUp} className="mt-12 text-lg text-muted-foreground">
            Trusted by care providers across the UK
          </motion.p>
        </motion.div>
        
        {/* Right - Animated Chat Visual */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative hidden lg:block"
        >
          <div className="relative">
            {/* Main Chat Window */}
            <div className="animate-float rounded-3xl p-6 shadow-2xl bg-card">
              {/* Chat Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-border">
                <div className="w-12 h-12 rounded-full gradient-bg-135 flex items-center justify-center">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Maxxo AI Assistant</p>
                  <p className="text-sm flex items-center gap-2 text-accent">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Online now
                  </p>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="py-6 space-y-4 min-h-[280px]">
                {messages.slice(0, messageCount).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        msg.from === 'user' ? 'rounded-br-sm bg-muted text-foreground' : 'rounded-bl-sm gradient-bg-135 text-white'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
                {/* AI Typing Indicator - only shows before AI messages */}
                {showTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="px-4 py-3 rounded-2xl rounded-bl-sm gradient-bg-135">
                      <div className="flex gap-1">
                        {[0, 150, 300].map((delay) => (
                          <span
                            key={delay}
                            className="w-2 h-2 rounded-full bg-white/60 animate-bounce"
                            style={{ animationDelay: `${delay}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="animate-float-delayed absolute -right-16 -top-4 z-10 rounded-xl p-4 shadow-lg bg-card">
              <p className="text-2xl font-bold gradient-text">85%</p>
              <p className="text-xs text-muted-foreground">Response Rate</p>
            </div>
            <div className="animate-float absolute -left-16 -bottom-12 z-10 rounded-xl p-4 shadow-lg bg-card">
              <p className="text-2xl font-bold gradient-text">65%</p>
              <p className="text-xs text-muted-foreground">Tour Booking Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
