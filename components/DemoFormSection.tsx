'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader2, Sparkles, Check } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './ui/Button';
import { fadeInUp, easeOut } from '@/lib/constants';

// ============================================================================
// DEMO FORM SECTION (with Go High Level Integration)
// ============================================================================

interface FormData {
  fullName: string;
  company: string;
  jobTitle: string;
  mobile: string;
  email: string;
  privacyConsent: boolean;
}

type TextFieldName = 'fullName' | 'company' | 'jobTitle' | 'mobile' | 'email';

const initialFormData: FormData = {
  fullName: '',
  company: '',
  jobTitle: '',
  mobile: '',
  email: '',
  privacyConsent: false,
};

const formFields = [
  { name: 'fullName', label: 'Full Name', type: 'text', placeholder: '' },
  { name: 'company', label: 'Company Name', type: 'text', placeholder: '' },
  { name: 'jobTitle', label: 'Job Title', type: 'text', placeholder: '' },
  { name: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '' },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: '' },
];


// Confetti particle component
function ConfettiParticle({ index }: { index: number }) {
  const colors = ['#01B5D8', '#90E0EF', '#10B981', '#F59E0B'];
  const randomColor = colors[index % colors.length];
  const randomX = (Math.random() - 0.5) * 200;
  const randomDelay = Math.random() * 0.3;

  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{ backgroundColor: randomColor, left: '50%', top: '30%' }}
      initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      animate={{
        opacity: [1, 1, 0],
        x: randomX,
        y: [0, -80, 120],
        scale: [1, 1.2, 0.5],
        rotate: [0, 360, 720],
      }}
      transition={{
        duration: 1.2,
        delay: randomDelay,
        ease: 'easeOut',
      }}
    />
  );
}

export function DemoFormSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/submit-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
      setFormData(initialFormData);

      if (typeof window !== 'undefined') {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            event_category: 'Demo Request',
            event_label: formData.company,
          });
        }

        if ((window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'Demo Request',
            content_category: formData.company,
          });
        }
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection id="demo" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div variants={fadeInUp}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              How Many Enquiries Slipped Through{' '}
              <span className="gradient-text">This Week?</span>
            </h2>
            <div className="space-y-6 text-xl text-muted-foreground">
              <p>
                You'll never know for sure. But every week without a system in
                place is another week of missed calls, slow responses, and tours
                that went to someone else.
              </p>
              <p className="text-foreground font-semibold">
                20 minutes. That's all it takes to see if Maxxo.ai is right for
                you. We'll tailor the demo to one of your care homes and show
                you exactly how it would work.
              </p>
            </div>
          </motion.div>

          {/* Form Card with floating animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <motion.div
              className="bg-card rounded-2xl p-8 md:p-10 shadow-xl border border-border relative overflow-hidden"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  // Success State with confetti
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-8 relative"
                  >
                    {/* Confetti particles */}
                    {[...Array(12)].map((_, i) => (
                      <ConfettiParticle key={i} index={i} />
                    ))}

                    <motion.div
                      className="w-20 h-20 rounded-full gradient-bg-135 flex items-center justify-center mx-auto mb-6 relative"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 15,
                        delay: 0.1,
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4, type: 'spring' }}
                      >
                        <Check className="text-white" size={40} />
                      </motion.div>

                      {/* Sparkle effects */}
                      <motion.div
                        className="absolute -top-1 -right-1"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Sparkles className="text-accent" size={20} />
                      </motion.div>
                    </motion.div>

                    <motion.h3
                      className="font-display text-2xl font-bold mb-4 text-foreground"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Thank You!
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Your demo request has been submitted. Our team will be in touch within 24 hours to arrange a time that works for you.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button
                        variant="secondary"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Submit Another Request
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  // Form State
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
                      Book Your Demo
                    </h3>

                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm"
                        >
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {formFields.map((field, i) => (
                        <motion.div
                          key={field.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.08, duration: 0.4 }}
                        >
                          <label
                            htmlFor={field.name}
                            className="block text-sm font-medium mb-2 text-foreground"
                          >
                            {field.label}
                          </label>
                          <motion.input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name as TextFieldName]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            placeholder={field.placeholder}
                            className="w-full h-12 px-4 rounded-xl border bg-transparent text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:outline-none"
                            style={{
                              borderColor: focusedField === field.name ? '#01B5D8' : '#CAF0F8',
                              boxShadow: focusedField === field.name
                                ? '0 0 0 3px rgba(1, 181, 216, 0.15), 0 4px 12px rgba(1, 181, 216, 0.1)'
                                : 'none',
                            }}
                            required
                            disabled={isSubmitting}
                            whileFocus={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                          />
                        </motion.div>
                      ))}

                      {/* Privacy Policy Checkbox */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: formFields.length * 0.08, duration: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <input
                          type="checkbox"
                          id="privacyConsent"
                          name="privacyConsent"
                          checked={formData.privacyConsent}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent focus:ring-offset-0 cursor-pointer"
                          required
                          disabled={isSubmitting}
                        />
                        <label
                          htmlFor="privacyConsent"
                          className="text-sm text-muted-foreground cursor-pointer"
                        >
                          I agree to the{' '}
                          <a
                            href="/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline"
                          >
                            Privacy Policy
                          </a>
                        </label>
                      </motion.div>

                      {/* Submit button with glow */}
                      <Button
                        type="submit"
                        className={`w-full mt-4 ${!isSubmitting ? 'animate-pulse-glow' : ''}`}
                        disabled={isSubmitting || !formData.privacyConsent}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin" size={20} />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Book My Demo
                            <ArrowRight size={20} />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground mt-4">
                        We&apos;ll never spam you or share your data.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
