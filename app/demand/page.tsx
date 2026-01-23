'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Eye,
  BarChart3,
  Users,
  Lightbulb,
  FileText,
  Search,
  Download,
  ChevronDown,
  Check,
  Loader2,
  ArrowRight,
  Zap,
  TrendingUp,
  Target,
  RefreshCw,
} from 'lucide-react';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { fadeInUp, stagger, easeOut } from '@/lib/constants';
import { cn } from '@/lib/utils';

// ============================================================================
// TYPES
// ============================================================================

interface PlatformScore {
  platform: string;
  score: number;
  mentioned: boolean;
  queryCount: number;
  mentionCount: number;
}

interface VisibilityScores {
  overall: number;
  platforms: PlatformScore[];
  timestamp: string;
}

interface FormData {
  careHomeName: string;
  companyName: string;
  town: string;
  county: string;
  email: string;
  careTypes: string[];
}

type PageState = 'idle' | 'processing' | 'complete' | 'error';

// ============================================================================
// CONSTANTS
// ============================================================================

const CARE_TYPES = [
  { id: 'residential', label: 'Residential Care' },
  { id: 'dementia', label: 'Dementia Care' },
  { id: 'nursing', label: 'Nursing Care' },
  { id: 'respite', label: 'Respite Care' },
];

const PROCESSING_STEPS = [
  { icon: '🔍', label: 'Searching via Claude...', sublabel: 'with web search' },
  { icon: '🌐', label: 'Querying Gemini...', sublabel: 'with Google Search' },
  { icon: '🔎', label: 'Checking Perplexity...', sublabel: 'with web search' },
  { icon: '🧠', label: 'Searching via ChatGPT...', sublabel: 'with web search' },
  { icon: '📊', label: 'Analysing results...', sublabel: '' },
  { icon: '📄', label: 'Generating report...', sublabel: '' },
];

const FAQS = [
  {
    question: 'What AI platforms do you check?',
    answer: 'We query four major AI platforms: ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), and Perplexity. These represent the most popular AI assistants that families use when researching care options.',
  },
  {
    question: 'How long does the report take?',
    answer: 'The report typically takes 60-90 seconds to generate. We query multiple AI platforms in real-time and analyse the results to provide you with accurate visibility scores.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, absolutely. We only use your information to generate your report and may contact you about Maxxo services. We never sell your data to third parties. See our Privacy Policy for full details.',
  },
  {
    question: "What if I'm not appearing on any platforms?",
    answer: "Don't worry - you're not alone. Most care homes have low AI visibility because this is a new and rapidly growing channel. The good news is that there are specific strategies to improve your visibility, and early movers have a significant advantage.",
  },
  {
    question: 'How can I improve my visibility?',
    answer: 'AI platforms recommend care homes based on their digital presence, reviews, and structured data. Maxxo Demand helps you create the content and citations that AI models use to make recommendations. Book a call with our team to learn more.',
  },
];

// ============================================================================
// SIMPLE NAVIGATION (Logo Only)
// ============================================================================

function SimpleNavigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-5'
      )}
      style={{
        backgroundColor: scrolled ? 'rgba(246, 252, 252, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #CAF0F8' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        <a href="/" className="flex items-center">
          <Image
            src="/logo-full.svg"
            alt="Maxxo.ai"
            width={175}
            height={40}
            priority
          />
        </a>
      </div>
    </nav>
  );
}

// ============================================================================
// ANIMATED SECTION COMPONENT
// ============================================================================

function AnimatedSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: '-80px',
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={stagger}
      className={cn('relative', className)}
    >
      {children}
    </motion.section>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================

function HeroSection() {
  const stats = [
    { value: '59%', label: 'of AI queries', sublabel: 'have local intent (Nectiv)' },
    { value: '75%', label: 'of people use AI search', sublabel: 'more than a year ago (Yext)' },
    { value: '5×', label: 'higher conversion', sublabel: 'from AI search vs Google (Rankscience)' },
  ];

  return (
    <AnimatedSection className="pt-32 pb-20 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Floating decorative elements */}
        <motion.div
          className="absolute -top-10 -right-20 w-72 h-72 rounded-full bg-accent/5"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 -left-32 w-48 h-48 rounded-full bg-accent-secondary/10"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        <div className="text-center relative z-10">
          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Is AI Recommending{' '}
            <span className="gradient-text">Your Care Home?</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            When families ask ChatGPT, Claude, Gemini, or Perplexity for care home
            recommendations, someone gets mentioned. Find out if it's you — or your
            competitors.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center mb-16"
          >
            <Button
              size="lg"
              className="animate-pulse-glow"
              onClick={() => document.getElementById('get-report')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Free Report
              <ArrowRight size={20} />
            </Button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.div
                  className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg text-foreground font-medium">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ============================================================================
// WHAT YOU'LL DISCOVER SECTION
// ============================================================================

function DiscoverSection() {
  const cards = [
    {
      icon: Eye,
      title: 'Your Visibility Score',
      description: 'A single number showing how visible you are across AI platforms',
    },
    {
      icon: BarChart3,
      title: 'Platform Breakdown',
      description: 'See where you appear: ChatGPT, Claude, Gemini, Perplexity',
    },
    {
      icon: Users,
      title: 'Competitor Intelligence',
      description: 'Discover who AI is recommending instead of you',
    },
    {
      icon: Lightbulb,
      title: 'Actionable Recommendations',
      description: 'Get specific steps to improve your visibility',
    },
  ];

  return (
    <AnimatedSection className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What You'll Discover
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your free report includes everything you need to understand your AI presence
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full text-center p-6">
                <motion.div
                  className="w-14 h-14 rounded-xl gradient-bg-135 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <card.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============================================================================
// HOW IT WORKS SECTION
// ============================================================================

function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Enter your details',
      description: 'Tell us about your care home',
      icon: FileText,
    },
    {
      number: '2',
      title: 'We query AI platforms',
      description: 'We search ChatGPT, Claude, Gemini & Perplexity',
      icon: Search,
    },
    {
      number: '3',
      title: 'Get your report',
      description: 'Download your detailed PDF report instantly',
      icon: Download,
    },
  ];

  return (
    <AnimatedSection className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to your AI visibility report
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent-secondary to-accent transform -translate-y-1/2 z-0" />

          <motion.div
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                {/* Numbered circle */}
                <motion.div
                  className="w-20 h-20 rounded-full gradient-bg-135 flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="font-display text-3xl font-bold text-white">
                    {step.number}
                  </span>
                </motion.div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <step.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ============================================================================
// FORM SECTION
// ============================================================================

function FormSection({
  formData,
  setFormData,
  onSubmit,
  isSubmitting,
}: {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: () => void;
  isSubmitting: boolean;
}) {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleCareTypeChange = (typeId: string) => {
    setFormData(prev => ({
      ...prev,
      careTypes: prev.careTypes.includes(typeId)
        ? prev.careTypes.filter(t => t !== typeId)
        : [...prev.careTypes, typeId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const inputStyles = (fieldName: string) => cn(
    'w-full h-12 px-4 rounded-xl border bg-transparent text-foreground',
    'placeholder:text-muted-foreground/50 transition-all duration-300 focus:outline-none',
  );

  const inputFocusStyles = (fieldName: string) => ({
    borderColor: focusedField === fieldName ? '#01B5D8' : '#CAF0F8',
    boxShadow: focusedField === fieldName
      ? '0 0 0 3px rgba(1, 181, 216, 0.15), 0 4px 12px rgba(1, 181, 216, 0.1)'
      : 'none',
  });

  return (
    <AnimatedSection id="get-report" className="py-20 bg-muted">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          className="bg-card rounded-2xl p-8 md:p-10 shadow-xl border border-border"
        >
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Get Your Free AI Visibility Report
            </h2>
            <p className="text-muted-foreground">
              Takes 2 minutes.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Care Home Name */}
            <div>
              <label
                htmlFor="careHomeName"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                Care Home Name *
              </label>
              <motion.input
                type="text"
                id="careHomeName"
                value={formData.careHomeName}
                onChange={(e) => setFormData(prev => ({ ...prev, careHomeName: e.target.value }))}
                onFocus={() => setFocusedField('careHomeName')}
                onBlur={() => setFocusedField(null)}
                placeholder=""
                className={inputStyles('careHomeName')}
                style={inputFocusStyles('careHomeName')}
                required
                disabled={isSubmitting}
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Company/Group Name - Optional */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                Company/Group Name <span className="text-muted-foreground">(optional)</span>
              </label>
              <motion.input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                onFocus={() => setFocusedField('companyName')}
                onBlur={() => setFocusedField(null)}
                placeholder=""
                className={inputStyles('companyName')}
                style={inputFocusStyles('companyName')}
                disabled={isSubmitting}
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Town/City */}
            <div>
              <label
                htmlFor="town"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                Town/City *
              </label>
              <motion.input
                type="text"
                id="town"
                value={formData.town}
                onChange={(e) => setFormData(prev => ({ ...prev, town: e.target.value }))}
                onFocus={() => setFocusedField('town')}
                onBlur={() => setFocusedField(null)}
                placeholder=""
                className={inputStyles('town')}
                style={inputFocusStyles('town')}
                required
                disabled={isSubmitting}
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* County/Region */}
            <div>
              <label
                htmlFor="county"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                County/Region *
              </label>
              <motion.input
                type="text"
                id="county"
                value={formData.county}
                onChange={(e) => setFormData(prev => ({ ...prev, county: e.target.value }))}
                onFocus={() => setFocusedField('county')}
                onBlur={() => setFocusedField(null)}
                placeholder=""
                className={inputStyles('county')}
                style={inputFocusStyles('county')}
                required
                disabled={isSubmitting}
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                Email Address *
              </label>
              <motion.input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder=""
                className={inputStyles('email')}
                style={inputFocusStyles('email')}
                required
                disabled={isSubmitting}
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Care Types */}
            <div>
              <label className="block text-sm font-medium mb-3 text-foreground">
                Care Types Offered *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {CARE_TYPES.map((type) => (
                  <label
                    key={type.id}
                    className={cn(
                      'flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200',
                      formData.careTypes.includes(type.id)
                        ? 'border-accent bg-accent/5'
                        : 'border-border hover:border-accent/30'
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={formData.careTypes.includes(type.id)}
                      onChange={() => handleCareTypeChange(type.id)}
                      className="sr-only"
                      disabled={isSubmitting}
                    />
                    <div
                      className={cn(
                        'w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200',
                        formData.careTypes.includes(type.id)
                          ? 'bg-accent border-accent'
                          : 'border-border'
                      )}
                    >
                      {formData.careTypes.includes(type.id) && (
                        <Check className="text-white" size={14} />
                      )}
                    </div>
                    <span className="text-sm text-foreground">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className={cn('w-full mt-6', !isSubmitting && 'animate-pulse-glow')}
              disabled={
                isSubmitting ||
                !formData.careHomeName ||
                !formData.town ||
                !formData.county ||
                !formData.email ||
                formData.careTypes.length === 0
              }
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Generating Report...
                </>
              ) : (
                <>
                  Generate My Free Report
                  <ArrowRight size={20} />
                </>
              )}
            </Button>

            {/* Privacy text */}
            <p className="text-xs text-center text-muted-foreground mt-4">
              We'll email your report and may contact you about Maxxo. Unsubscribe anytime.
            </p>
          </form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============================================================================
// PROCESSING STATE
// ============================================================================

function ProcessingState({ currentStep }: { currentStep: number }) {
  const progress = ((currentStep + 1) / PROCESSING_STEPS.length) * 100;

  return (
    <AnimatedSection className="py-20 bg-muted min-h-[600px] flex items-center">
      <div className="max-w-2xl mx-auto px-6 w-full">
        <motion.div
          className="bg-card rounded-2xl p-8 md:p-10 shadow-xl border border-border"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Pulsing container */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(1, 181, 216, 0)',
                '0 0 0 15px rgba(1, 181, 216, 0.1)',
                '0 0 0 0 rgba(1, 181, 216, 0)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="rounded-2xl"
          >
            <div className="text-center mb-8">
              {/* Circular progress indicator */}
              <motion.div
                className="w-24 h-24 rounded-full gradient-bg-135 flex items-center justify-center mx-auto mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Search className="text-white" size={40} />
              </motion.div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Generating Your Report
              </h3>
              <p className="text-muted-foreground">
                This usually takes 60-90 seconds
              </p>
            </div>

            {/* Steps list */}
            <div className="space-y-4 mb-8">
              {PROCESSING_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: index <= currentStep ? 1 : 0.4,
                    x: 0,
                  }}
                  transition={{ delay: index * 0.2, duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    {index < currentStep ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                      >
                        <Check className="text-accent" size={20} />
                      </motion.div>
                    ) : index === currentStep ? (
                      <Loader2 className="text-accent animate-spin" size={20} />
                    ) : (
                      <span className="text-lg">{step.icon}</span>
                    )}
                  </div>
                  <div>
                    <div className="text-foreground font-medium">{step.label}</div>
                    {step.sublabel && (
                      <div className="text-sm text-muted-foreground">{step.sublabel}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full gradient-bg-135"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============================================================================
// RESULTS STATE
// ============================================================================

function ResultsState({
  scores,
  pdfUrl,
  careHomeName,
}: {
  scores: VisibilityScores;
  pdfUrl: string;
  careHomeName: string;
}) {
  const getScoreColor = (score: number) => {
    if (score >= 70) return '#10B981'; // Green
    if (score >= 40) return '#F59E0B'; // Amber
    return '#EF4444'; // Red
  };

  const getScoreLabel = (score: number) => {
    if (score >= 70) return 'Excellent visibility';
    if (score >= 40) return 'Room for improvement';
    return 'Urgent action needed';
  };

  const scoreColor = getScoreColor(scores.overall);
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (scores.overall / 100) * circumference;

  return (
    <AnimatedSection className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Score Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Your AI Visibility Score
            </h2>
            <p className="text-muted-foreground mb-8">for {careHomeName}</p>

            {/* Large Score Circle */}
            <div className="relative w-40 h-40 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="80"
                  cy="80"
                  r="45"
                  fill="none"
                  stroke="#CAF0F8"
                  strokeWidth="10"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="80"
                  cy="80"
                  r="45"
                  fill="none"
                  stroke={scoreColor}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="font-display text-5xl font-bold"
                  style={{ color: scoreColor }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  {scores.overall}
                </motion.span>
              </div>
            </div>

            <motion.p
              className="text-xl font-semibold mb-8"
              style={{ color: scoreColor }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {getScoreLabel(scores.overall)}
            </motion.p>

            {/* Platform Breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {scores.platforms.map((platform, index) => (
                <motion.div
                  key={platform.platform}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-muted rounded-xl p-4"
                >
                  <div className="text-sm text-muted-foreground mb-1">
                    {platform.platform}
                  </div>
                  <div
                    className="font-display text-2xl font-bold"
                    style={{ color: getScoreColor(platform.score) }}
                  >
                    {platform.score}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {platform.mentionCount}/{platform.queryCount} queries
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Button */}
            <Button
              size="lg"
              className="animate-pulse-glow"
              onClick={() => window.open(pdfUrl, '_blank')}
              disabled={!pdfUrl}
            >
              <Download size={20} />
              {pdfUrl ? 'Download Your Full Report' : 'Report unavailable'}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Your 7-page PDF includes competitor analysis, query-by-query results, and recommendations
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============================================================================
// UPSELL SECTION
// ============================================================================

function UpsellSection() {
  const options = [
    {
      icon: TrendingUp,
      title: 'Track Monthly',
      description: 'Monitor your visibility over time',
    },
    {
      icon: Zap,
      title: 'Done For You',
      description: 'We create the content to boost your visibility',
    },
  ];

  return (
    <AnimatedSection className="py-20 bg-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div variants={fadeInUp}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Improve Your AI Visibility?
          </h2>
          <p className="text-xl text-accent-secondary mb-12">
            Maxxo Demand can help you get recommended by AI platforms
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          {options.map((option, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
            >
              <option.icon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {option.title}
              </h3>
              <p className="text-accent-secondary">{option.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.location.href = '/#demo'}
            className="bg-white text-foreground hover:bg-white/90"
          >
            Talk to Us
            <ArrowRight size={20} />
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============================================================================
// FAQ SECTION
// ============================================================================

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AnimatedSection className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div variants={stagger} className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="font-display text-lg font-semibold text-foreground">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="text-accent" size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============================================================================
// ERROR STATE
// ============================================================================

function ErrorState({
  error,
  onRetry,
}: {
  error: string;
  onRetry: () => void;
}) {
  return (
    <AnimatedSection className="py-20 bg-muted min-h-[400px] flex items-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card rounded-2xl p-8 shadow-xl border border-border"
        >
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
            <RefreshCw className="text-red-500" size={32} />
          </div>
          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            Something Went Wrong
          </h3>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button onClick={onRetry}>
            <RefreshCw size={18} />
            Try Again
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function DemandPage() {
  const [pageState, setPageState] = useState<PageState>('idle');
  const [formData, setFormData] = useState<FormData>({
    careHomeName: '',
    companyName: '',
    town: '',
    county: '',
    email: '',
    careTypes: [],
  });
  const [processingStep, setProcessingStep] = useState(0);
  const [scores, setScores] = useState<VisibilityScores | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);
    setPageState('processing');
    setProcessingStep(0);
    setError('');

    // Simulate processing steps
    const stepInterval = setInterval(() => {
      setProcessingStep(prev => {
        if (prev < PROCESSING_STEPS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 2000);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_DEMAND_API_URL || 'https://app.maxxo.ai/api/demand/public';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      clearInterval(stepInterval);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate report');
      }

      // Wait a moment for the last step to show
      setProcessingStep(PROCESSING_STEPS.length - 1);
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (data.success) {
        // Transform API response to frontend format
        const transformedScores: VisibilityScores = {
          overall: data.scores.overall,
          platforms: [
            {
              platform: 'ChatGPT',
              score: data.scores.byPlatform.chatgpt,
              mentioned: data.scores.byPlatform.chatgpt > 0,
              queryCount: 7,
              mentionCount: Math.round((data.scores.byPlatform.chatgpt / 100) * 7),
            },
            {
              platform: 'Claude',
              score: data.scores.byPlatform.claude,
              mentioned: data.scores.byPlatform.claude > 0,
              queryCount: 7,
              mentionCount: Math.round((data.scores.byPlatform.claude / 100) * 7),
            },
            {
              platform: 'Gemini',
              score: data.scores.byPlatform.gemini,
              mentioned: data.scores.byPlatform.gemini > 0,
              queryCount: 7,
              mentionCount: Math.round((data.scores.byPlatform.gemini / 100) * 7),
            },
            {
              platform: 'Perplexity',
              score: data.scores.byPlatform.perplexity,
              mentioned: data.scores.byPlatform.perplexity > 0,
              queryCount: 7,
              mentionCount: Math.round((data.scores.byPlatform.perplexity / 100) * 7),
            },
          ],
          timestamp: new Date().toISOString(),
        };

        setScores(transformedScores);
        setPdfUrl(data.pdfUrl);
        setPageState('complete');
      }

      // Track analytics
      if (typeof window !== 'undefined') {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            event_category: 'AI Visibility Report',
            event_label: formData.careHomeName,
            value: data.scores.overall,
          });
        }

        if ((window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'AI Visibility Report',
            content_category: formData.careHomeName,
            value: data.scores.overall,
          });
        }
      }
    } catch (err) {
      clearInterval(stepInterval);
      setError(err instanceof Error ? err.message : 'Failed to generate report. Please try again.');
      setPageState('error');
      setIsSubmitting(false);
      console.error('Report generation error:', err);
    }
  };

  const handleRetry = () => {
    setPageState('idle');
    setError('');
    setIsSubmitting(false);
  };

  return (
    <>
      <SimpleNavigation />
      <main>
        <HeroSection />
        <DiscoverSection />
        <HowItWorksSection />

        {/* Conditional rendering based on state */}
        <AnimatePresence mode="wait">
          {pageState === 'idle' && (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FormSection
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </motion.div>
          )}

          {pageState === 'processing' && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProcessingState currentStep={processingStep} />
            </motion.div>
          )}

          {pageState === 'complete' && scores && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ResultsState
                scores={scores}
                pdfUrl={pdfUrl}
                careHomeName={formData.careHomeName}
              />
              <UpsellSection />
            </motion.div>
          )}

          {pageState === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ErrorState error={error} onRetry={handleRetry} />
            </motion.div>
          )}
        </AnimatePresence>

        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
