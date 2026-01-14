import type { Metadata } from 'next';
import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { siteConfig, chatWidgetConfig } from '@/lib/constants';
import Script from 'next/script';
import { ConsentProvider } from '@/lib/useConsent';
import { CookieConsent } from '@/components/CookieConsent';
import './globals.css';

// ============================================================================
// FONTS
// ============================================================================

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

// ============================================================================
// METADATA (SEO)
// ============================================================================

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | AI That Converts Care Enquiries Into Admissions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  
  // Manifest
  manifest: '/site.webmanifest',
};

// ============================================================================
// JSON-LD STRUCTURED DATA
// ============================================================================

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Book a free demo',
  },
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '50',
  },
};

// ============================================================================
// ROOT LAYOUT
// ============================================================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${dmSans.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://botdisplay.com" />
        <link rel="dns-prefetch" href="https://botdisplay.com" />
      </head>
      
      <body className="font-sans">
        <ConsentProvider>
          {children}

          {/* Cookie Consent Banner */}
          <CookieConsent />
        </ConsentProvider>

        {/* ============================================================== */}
        {/* CHAT WIDGET - BotDisplay */}
        {/* ============================================================== */}
        <Script
          src={chatWidgetConfig.src}
          strategy="lazyOnload"
          data-color={chatWidgetConfig.color}
          data-assistant-id={chatWidgetConfig.assistantId}
          data-account-id={chatWidgetConfig.accountId}
          data-position={chatWidgetConfig.position}
          data-theme={chatWidgetConfig.theme}
          data-show-prompt={chatWidgetConfig.showPrompt.toString()}
          data-prompt-message={chatWidgetConfig.promptMessage}
          data-startup-message={chatWidgetConfig.startupMessage}
          data-assistant-name={chatWidgetConfig.assistantName}
          data-button-icon={chatWidgetConfig.buttonIcon}
          data-greeting-message={chatWidgetConfig.greetingMessage}
        />

        {/* ============================================================== */}
        {/* ANALYTICS - Loaded dynamically by useConsent based on user consent */}
        {/* Google Analytics and Meta Pixel are now loaded via the consent system */}
        {/* Set NEXT_PUBLIC_GA_ID and NEXT_PUBLIC_META_PIXEL_ID in your .env */}
        {/* ============================================================== */}
      </body>
    </html>
  );
}
