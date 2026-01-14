'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useConsent } from '@/lib/useConsent';

// ============================================================================
// COOKIE CONSENT BANNER
// ============================================================================

export function CookieConsent() {
  const {
    hasConsented,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
    closePreferences,
    isPreferencesOpen,
    preferences,
  } = useConsent();

  const [showBanner, setShowBanner] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  // Show banner after a brief delay if no consent
  useEffect(() => {
    if (!hasConsented) {
      const timer = setTimeout(() => setShowBanner(true), 500);
      return () => clearTimeout(timer);
    } else {
      setShowBanner(false);
    }
  }, [hasConsented]);

  // Sync toggle states with preferences when opening modal
  useEffect(() => {
    if (isPreferencesOpen && preferences) {
      setAnalyticsEnabled(preferences.analytics);
      setMarketingEnabled(preferences.marketing);
    }
  }, [isPreferencesOpen, preferences]);

  const handleSavePreferences = () => {
    savePreferences({
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    });
  };

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && !isPreferencesOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <p className="text-foreground flex-1">
                  We use cookies to improve your experience and analyse site traffic.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={openPreferences}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors underline underline-offset-2"
                  >
                    Manage Preferences
                  </button>
                  <button
                    onClick={rejectAll}
                    className="px-5 py-2.5 text-sm font-medium text-foreground border border-border rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2.5 text-sm font-medium text-white rounded-xl gradient-bg-135 hover:opacity-90 transition-opacity"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Modal */}
      <AnimatePresence>
        {isPreferencesOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePreferences}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 max-w-lg w-full max-h-[90vh] overflow-auto"
            >
              <div className="bg-card rounded-2xl border border-border shadow-xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Cookie Preferences
                  </h2>
                  <button
                    onClick={closePreferences}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Cookie Options */}
                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">Necessary cookies</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Essential for the website to function properly.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-7 bg-accent/30 rounded-full relative cursor-not-allowed">
                        <div className="absolute right-1 top-1 w-5 h-5 bg-accent rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">Analytics cookies</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Help us understand how visitors use our website.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                        className={`w-12 h-7 rounded-full relative transition-colors ${
                          analyticsEnabled ? 'bg-accent' : 'bg-muted'
                        }`}
                      >
                        <motion.div
                          className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm"
                          animate={{ left: analyticsEnabled ? '1.25rem' : '0.25rem' }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">Marketing cookies</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Used to deliver relevant advertisements.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => setMarketingEnabled(!marketingEnabled)}
                        className={`w-12 h-7 rounded-full relative transition-colors ${
                          marketingEnabled ? 'bg-accent' : 'bg-muted'
                        }`}
                      >
                        <motion.div
                          className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm"
                          animate={{ left: marketingEnabled ? '1.25rem' : '0.25rem' }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={rejectAll}
                    className="flex-1 px-5 py-2.5 text-sm font-medium text-foreground border border-border rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 px-5 py-2.5 text-sm font-medium text-white rounded-xl gradient-bg-135 hover:opacity-90 transition-opacity"
                  >
                    Save Preferences
                  </button>
                </div>

                {/* Privacy Policy Link */}
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Learn more in our{' '}
                  <a href="/privacy-policy" className="text-accent hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/cookie-policy" className="text-accent hover:underline">
                    Cookie Policy
                  </a>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ============================================================================
// COOKIE SETTINGS BUTTON (for Footer)
// ============================================================================

export function CookieSettingsButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="hover:text-accent transition-colors">
        Cookie Settings
      </button>
    );
  }

  return <CookieSettingsButtonInner />;
}

function CookieSettingsButtonInner() {
  const { openPreferences } = useConsent();

  return (
    <button
      onClick={openPreferences}
      className="hover:text-accent transition-colors"
    >
      Cookie Settings
    </button>
  );
}
