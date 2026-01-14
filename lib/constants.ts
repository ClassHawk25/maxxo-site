// ============================================================================
// SITE CONFIGURATION
// ============================================================================

export const siteConfig = {
  name: 'Maxxo.ai',
  description: 'Human-Like AI That Converts Care Enquiries Into Admissions. Maxxo.ai helps care organisations maximise occupancy by ensuring every care enquiry is handled instantly, compassionately and professionally.',
  url: 'https://maxxo.ai', // Update with your actual domain
  ogImage: '/og-image.jpg',
  keywords: [
    'care home AI',
    'care enquiry management',
    'care home occupancy',
    'AI for care homes',
    'care sector automation',
    'care enquiry conversion',
    'home care leads',
    'care home marketing',
    'missed call recovery',
    'care home CRM',
  ],
  authors: [
    { name: 'Simon Parker' },
    { name: 'Josh Carter' },
  ],
  creator: 'Maxxo.ai',
};

// ============================================================================
// GO HIGH LEVEL CONFIGURATION
// ============================================================================

export const ghlConfig = {
  // Replace with your actual GHL webhook URL
  webhookUrl: process.env.GHL_WEBHOOK_URL || 'YOUR_GHL_WEBHOOK_URL_HERE',
  
  // Optional: Location ID if using GHL API directly
  locationId: process.env.GHL_LOCATION_ID || '',
  
  // Optional: API Key if using GHL API directly
  apiKey: process.env.GHL_API_KEY || '',
};

// ============================================================================
// CHAT WIDGET CONFIGURATION
// ============================================================================

export const chatWidgetConfig = {
  src: 'https://botdisplay.com/chat-widget.js',
  color: '#01B5D8', // Updated to Maxxo cyan
  assistantId: '1750674602976x990351207181582300', // Your assistant ID
  accountId: 'GjAS8HZEbEu7gMvrgs2q', // Your account ID
  position: 'bottom-right',
  theme: 'light',
  showPrompt: true,
  promptMessage: 'Chat with our AI',
  startupMessage: 'How can I help you today?',
  assistantName: 'Maxxo',
  buttonIcon: 'chat',
  greetingMessage: "👋 Hi! I'm Maxxo, your AI assistant. Ask me anything about how we can help your care organisation convert more enquiries.",
};

// ============================================================================
// ANALYTICS CONFIGURATION
// ============================================================================

export const analyticsConfig = {
  // Google Analytics 4
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_ID || '', // e.g., 'G-XXXXXXXXXX'
  
  // Meta Pixel
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '', // e.g., '1234567890'
  
  // Google Tag Manager (alternative to direct GA4)
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || '', // e.g., 'GTM-XXXXXXX'
};

// ============================================================================
// DESIGN TOKENS
// ============================================================================

export const colors = {
  background: '#F6FCFC',
  foreground: '#03045E',
  muted: '#CAF0F8',
  mutedForeground: 'rgba(3, 4, 94, 0.6)',
  accent: '#01B5D8',
  accentSecondary: '#90E0EF',
  accentForeground: '#FFFFFF',
  card: '#FFFFFF',
  border: '#CAF0F8',
};

// ============================================================================
// ANIMATION VARIANTS (for Framer Motion)
// ============================================================================

export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut }
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: easeOut }
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut }
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut }
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut }
  },
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -2, y: 20 },
  visible: {
    opacity: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const bounceIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
};
