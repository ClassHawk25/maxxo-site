'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

// ============================================================================
// COOKIE CONSENT MANAGEMENT
// ============================================================================

const CONSENT_KEY = 'maxxo-cookie-consent';

export interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface ConsentContextType {
  preferences: ConsentPreferences | null;
  hasConsented: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: Omit<ConsentPreferences, 'necessary'>) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  isPreferencesOpen: boolean;
}

const defaultPreferences: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<ConsentPreferences | null>(null);
  const [hasConsented, setHasConsented] = useState(true); // Default to true to prevent flash
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ConsentPreferences;
        setPreferences(parsed);
        setHasConsented(true);
      } catch {
        setHasConsented(false);
      }
    } else {
      setHasConsented(false);
    }
    setIsLoaded(true);
  }, []);

  // Load analytics scripts when consent is given
  useEffect(() => {
    if (!isLoaded || !preferences) return;

    if (preferences.analytics) {
      loadGoogleAnalytics();
    }

    if (preferences.marketing) {
      loadMetaPixel();
    }
  }, [preferences, isLoaded]);

  const saveToStorage = useCallback((prefs: ConsentPreferences) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setHasConsented(true);
  }, []);

  const acceptAll = useCallback(() => {
    saveToStorage({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    setIsPreferencesOpen(false);
  }, [saveToStorage]);

  const rejectAll = useCallback(() => {
    saveToStorage({
      necessary: true,
      analytics: false,
      marketing: false,
    });
    setIsPreferencesOpen(false);
  }, [saveToStorage]);

  const savePreferences = useCallback((prefs: Omit<ConsentPreferences, 'necessary'>) => {
    saveToStorage({
      necessary: true,
      ...prefs,
    });
    setIsPreferencesOpen(false);
  }, [saveToStorage]);

  const openPreferences = useCallback(() => {
    setIsPreferencesOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setIsPreferencesOpen(false);
  }, []);

  // Don't render until loaded to prevent hydration mismatch
  if (!isLoaded) {
    return <>{children}</>;
  }

  return (
    <ConsentContext.Provider
      value={{
        preferences,
        hasConsented,
        acceptAll,
        rejectAll,
        savePreferences,
        openPreferences,
        closePreferences,
        isPreferencesOpen,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

// Default context for SSR and when used outside provider
const defaultContextValue: ConsentContextType = {
  preferences: null,
  hasConsented: true,
  acceptAll: () => {},
  rejectAll: () => {},
  savePreferences: () => {},
  openPreferences: () => {},
  closePreferences: () => {},
  isPreferencesOpen: false,
};

export function useConsent() {
  const context = useContext(ConsentContext);
  // Return default context during SSR or when outside provider
  // This prevents build errors while maintaining functionality client-side
  if (context === undefined) {
    return defaultContextValue;
  }
  return context;
}

// ============================================================================
// ANALYTICS LOADING FUNCTIONS
// ============================================================================

function loadGoogleAnalytics() {
  // Check if already loaded
  if (document.getElementById('ga-script')) return;

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  if (!GA_ID) {
    console.log('Google Analytics ID not configured');
    return;
  }

  // Load gtag.js
  const script = document.createElement('script');
  script.id = 'ga-script';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  const inlineScript = document.createElement('script');
  inlineScript.id = 'ga-inline';
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `;
  document.head.appendChild(inlineScript);

  console.log('Google Analytics loaded');
}

function loadMetaPixel() {
  // Check if already loaded
  if (document.getElementById('meta-pixel-script')) return;

  const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!PIXEL_ID) {
    console.log('Meta Pixel ID not configured');
    return;
  }

  const script = document.createElement('script');
  script.id = 'meta-pixel-script';
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${PIXEL_ID}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);

  console.log('Meta Pixel loaded');
}
