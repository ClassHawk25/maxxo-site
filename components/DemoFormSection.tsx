'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Loader2 } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './ui/Button';
import { fadeInUp, scaleIn } from '@/lib/constants';

// ============================================================================
// DEMO FORM SECTION (with Go High Level Integration)
// ============================================================================

interface FormData {
  fullName: string;
  company: string;
  jobTitle: string;
  mobile: string;
  email: string;
}

const initialFormData: FormData = {
  fullName: '',
  company: '',
  jobTitle: '',
  mobile: '',
  email: '',
};

const formFields = [
  { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
  { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Your Care Organisation' },
  { name: 'jobTitle', label: 'Job Title', type: 'text', placeholder: 'Operations Manager' },
  { name: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '07XXX XXXXXX' },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
];

const benefits = [
  'See a real enquiry handled live',
  'Understand the full platform',
  'Get answers to your questions',
  'No obligation or pressure',
];

export function DemoFormSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null); // Clear error on input change
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
      
      // Success!
      setIsSubmitted(true);
      setFormData(initialFormData);
      
      // Track conversion (if analytics are set up)
      if (typeof window !== 'undefined') {
        // Google Analytics 4
        if ((window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            event_category: 'Demo Request',
            event_label: formData.company,
          });
        }
        
        // Meta Pixel
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
              See Maxxo.ai in <span className="gradient-text">Action</span>
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Book a short demo and we'll show you exactly how Maxxo.ai engages enquiries,
              qualifies care seekers, and books appointments automatically.
            </p>
            
            <div className="space-y-4">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full gradient-bg-135 flex items-center justify-center">
                    <Check className="text-white" size={12} strokeWidth={3} />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Form Card */}
          <motion.div variants={scaleIn}>
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-xl border border-border">
              {isSubmitted ? (
                // Success State
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full gradient-bg-135 flex items-center justify-center mx-auto mb-6">
                    <Check className="text-white" size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your demo request has been submitted. Our team will be in touch within 24 hours to arrange a time that works for you.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                // Form State
                <>
                  <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
                    Book Your Demo
                  </h3>
                  
                  {error && (
                    <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {formFields.map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block text-sm font-medium mb-2 text-foreground"
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof FormData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full h-12 px-4 rounded-xl border border-border bg-transparent text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    ))}
                    
                    <Button
                      type="submit"
                      className="w-full mt-4"
                      disabled={isSubmitting}
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
                      By submitting, you agree to our privacy policy. We'll never spam you.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
