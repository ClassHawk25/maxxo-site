'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================================
// TYPES
// ============================================================================

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledEmail?: string;
  careHomeName?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  careHomeName: string;
  interestLevel: string;
  message: string;
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

// ============================================================================
// CONSTANTS
// ============================================================================

const INTEREST_LEVELS = [
  { value: '', label: 'Select your interest level...' },
  { value: 'exploring', label: 'Just exploring' },
  { value: 'monthly_tracking', label: 'Want monthly tracking' },
  { value: 'improve_visibility', label: 'Need help improving visibility' },
  { value: 'ready_to_start', label: 'Ready to get started' },
];

// ============================================================================
// INTEREST MODAL COMPONENT
// ============================================================================

export function InterestModal({
  isOpen,
  onClose,
  prefilledEmail = '',
  careHomeName = '',
}: InterestModalProps) {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: prefilledEmail,
    phone: '',
    careHomeName: careHomeName,
    interestLevel: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Update form when props change
  useEffect(() => {
    setFormState(prev => ({
      ...prev,
      email: prefilledEmail || prev.email,
      careHomeName: careHomeName || prev.careHomeName,
    }));
  }, [prefilledEmail, careHomeName]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitState('idle');
      setErrorMessage('');
    }
  }, [isOpen]);

  // Auto-close after success
  useEffect(() => {
    if (submitState === 'success') {
      const timer = setTimeout(() => {
        onClose();
        // Reset form after close
        setFormState({
          name: '',
          email: prefilledEmail,
          phone: '',
          careHomeName: careHomeName,
          interestLevel: '',
          message: '',
        });
        setSubmitState('idle');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitState, onClose, prefilledEmail, careHomeName]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/demand/interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      setSubmitState('success');
    } catch (err) {
      setSubmitState('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const inputStyles = cn(
    'w-full h-12 px-4 rounded-lg border border-[#CAF0F8] bg-white text-[#03045E]',
    'placeholder:text-gray-400 transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-[#01B5D8] focus:border-transparent'
  );

  const labelStyles = 'block text-sm font-medium text-[#03045E] mb-2';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Teal accent line */}
              <div className="h-1 bg-gradient-to-r from-[#01B5D8] to-[#0891B2]" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Content */}
              <div className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {submitState === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                        className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
                      >
                        <Check className="text-green-500" size={32} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-[#03045E] mb-2">
                        Thanks!
                      </h3>
                      <p className="text-gray-600">
                        We'll be in touch within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h2 className="text-2xl font-bold text-[#03045E] mb-2">
                        Let's Improve Your AI Visibility
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Tell us a bit more about your goals and we'll be in touch within 24 hours.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                          <label htmlFor="interest-name" className={labelStyles}>
                            Name *
                          </label>
                          <input
                            type="text"
                            id="interest-name"
                            value={formState.name}
                            onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                            className={inputStyles}
                            required
                            disabled={submitState === 'submitting'}
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="interest-email" className={labelStyles}>
                            Email *
                          </label>
                          <input
                            type="email"
                            id="interest-email"
                            value={formState.email}
                            onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                            className={inputStyles}
                            required
                            disabled={submitState === 'submitting'}
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="interest-phone" className={labelStyles}>
                            Phone <span className="text-gray-400">(optional)</span>
                          </label>
                          <input
                            type="tel"
                            id="interest-phone"
                            value={formState.phone}
                            onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                            className={inputStyles}
                            disabled={submitState === 'submitting'}
                          />
                        </div>

                        {/* Care Home Name */}
                        <div>
                          <label htmlFor="interest-care-home" className={labelStyles}>
                            Care Home Name
                          </label>
                          <input
                            type="text"
                            id="interest-care-home"
                            value={formState.careHomeName}
                            onChange={(e) => setFormState(prev => ({ ...prev, careHomeName: e.target.value }))}
                            className={cn(inputStyles, careHomeName && 'bg-gray-50')}
                            readOnly={!!careHomeName}
                            disabled={submitState === 'submitting'}
                          />
                        </div>

                        {/* Interest Level */}
                        <div>
                          <label htmlFor="interest-level" className={labelStyles}>
                            Interest Level *
                          </label>
                          <select
                            id="interest-level"
                            value={formState.interestLevel}
                            onChange={(e) => setFormState(prev => ({ ...prev, interestLevel: e.target.value }))}
                            className={cn(inputStyles, 'appearance-none cursor-pointer')}
                            required
                            disabled={submitState === 'submitting'}
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2303045E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'right 12px center',
                              backgroundSize: '20px',
                            }}
                          >
                            {INTEREST_LEVELS.map((level) => (
                              <option key={level.value} value={level.value}>
                                {level.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="interest-message" className={labelStyles}>
                            Message <span className="text-gray-400">(optional)</span>
                          </label>
                          <textarea
                            id="interest-message"
                            value={formState.message}
                            onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                            className={cn(inputStyles, 'h-24 py-3 resize-none')}
                            placeholder="Anything else you'd like us to know?"
                            disabled={submitState === 'submitting'}
                          />
                        </div>

                        {/* Error message */}
                        {submitState === 'error' && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm"
                          >
                            {errorMessage}
                          </motion.p>
                        )}

                        {/* Submit button */}
                        <button
                          type="submit"
                          disabled={submitState === 'submitting' || !formState.name || !formState.email || !formState.interestLevel}
                          className={cn(
                            'w-full h-12 rounded-xl font-semibold text-white',
                            'bg-gradient-to-r from-[#01B5D8] to-[#0891B2]',
                            'hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200',
                            'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none',
                            'flex items-center justify-center gap-2'
                          )}
                        >
                          {submitState === 'submitting' ? (
                            <>
                              <Loader2 className="animate-spin" size={20} />
                              Sending...
                            </>
                          ) : (
                            'Send Request'
                          )}
                        </button>

                        {/* Privacy note */}
                        <p className="text-xs text-center text-gray-500 mt-4">
                          No spam, no pressure. Just a friendly conversation.
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
