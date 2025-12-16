# Maxxo.ai Landing Page

A premium, high-converting landing page for Maxxo.ai built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- ⚡ **Fast** — Static generation with edge caching
- 🎯 **SEO Optimised** — Full meta tags, Open Graph, JSON-LD schema
- 🎨 **Premium Design** — Smooth animations, gradient accents, dark sections
- 📱 **Fully Responsive** — Mobile-first design
- 💬 **Chat Widget** — BotDisplay integration
- 📝 **CRM Integration** — Go High Level webhook for demo requests
- 📊 **Analytics Ready** — GA4 and Meta Pixel support

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Required for form submission:
- `GHL_WEBHOOK_URL` — Your Go High Level webhook URL

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repo
4. Add environment variables in the Vercel dashboard
5. Deploy!

### Option 2: Deploy via CLI

```bash
npm i -g vercel
vercel
```

### Pointing Your Domain

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your domain (e.g., `maxxo.ai`)
3. Update your DNS records:
   - **A Record**: Point `@` to `76.76.21.21`
   - **CNAME**: Point `www` to `cname.vercel-dns.com`

## Go High Level Setup

### Creating a Webhook

1. Log into Go High Level
2. Go to **Automation** → **Workflows**
3. Create a new workflow triggered by **Webhook**
4. Copy the webhook URL
5. Add it to your `.env.local` as `GHL_WEBHOOK_URL`

### Workflow Actions

Your GHL workflow should:
1. Create/Update Contact with the form data
2. Add tags: "Website Lead", "Demo Request"
3. Trigger any follow-up sequences you want

### Field Mapping

The form sends these fields to GHL:
- `firstName` / `lastName` / `name`
- `email`
- `phone`
- `companyName` / `company_name`
- `jobTitle` / `job_title`
- `source` ("Website - Demo Form")
- `tags` (["Website Lead", "Demo Request"])

## Chat Widget Configuration

The BotDisplay chat widget is configured in `lib/constants.ts`:

```typescript
export const chatWidgetConfig = {
  color: '#01B5D8', // Maxxo cyan
  assistantId: 'YOUR_ASSISTANT_ID',
  accountId: 'YOUR_ACCOUNT_ID',
  assistantName: 'Maxxo',
  // ... other options
};
```

Update these values if you need to change the chat configuration.

## Analytics Setup

### Google Analytics 4

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy your Measurement ID (starts with `G-`)
3. Add to `.env.local` as `NEXT_PUBLIC_GA4_ID`

### Meta Pixel

1. Create a pixel at [business.facebook.com](https://business.facebook.com/events_manager)
2. Copy your Pixel ID
3. Add to `.env.local` as `NEXT_PUBLIC_META_PIXEL_ID`

## Customisation

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  background: '#F6FCFC',
  foreground: '#03045E',
  accent: {
    DEFAULT: '#01B5D8',
    secondary: '#90E0EF',
  },
  // ...
}
```

### Content

Section content is defined directly in each component file in `/components/`. Edit:
- `HeroSection.tsx` — Headlines, subheadlines
- `ProblemSection.tsx` — Problem stats and descriptions
- `PlatformSection.tsx` — Platform features
- etc.

### Logo

The logo is an SVG component in `/components/Logo.tsx`. Replace with your own SVG or image.

## File Structure

```
maxxo-site/
├── app/
│   ├── api/
│   │   └── submit-demo/
│   │       └── route.ts      # GHL webhook endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with SEO
│   └── page.tsx              # Main landing page
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── SectionLabel.tsx
│   ├── AnimatedSection.tsx
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── ProblemSection.tsx
│   ├── SolutionSection.tsx
│   ├── PlatformSection.tsx
│   ├── StatsSection.tsx
│   ├── WhyNowSection.tsx
│   ├── FoundersSection.tsx
│   ├── DemoFormSection.tsx
│   ├── Footer.tsx
│   └── Logo.tsx
├── lib/
│   ├── constants.ts          # Config and design tokens
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── .env.example              # Environment variables template
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Support

If you have questions about customising this landing page, reach out to your developer or refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
