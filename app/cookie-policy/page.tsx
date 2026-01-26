'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

// ============================================================================
// COOKIE POLICY PAGE
// ============================================================================

export default function CookiePolicy() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-accent font-medium mb-2">Legal</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">

              {/* 1. Introduction */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Cookie Policy explains how Maxxo.ai (&quot;Maxxo&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) uses cookies and similar tracking technologies when you visit our website (maxxo.ai) and web application (app.maxxo.ai).
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We comply with the UK Privacy and Electronic Communications Regulations (PECR) and the UK General Data Protection Regulation (UK GDPR) in our use of cookies.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  By using our cookie consent controls, you can choose which non-essential cookies you accept. We will not place non-essential cookies on your device without your consent.
                </p>
              </section>

              {/* 2. What Are Cookies? */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">2. What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide information to website owners.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">Similar technologies include:</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Local storage:</span> Data stored in your browser that persists until cleared</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Session storage:</span> Data stored temporarily for a single browser session</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Pixels/beacons:</span> Small images that track page views and user behaviour</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  This policy covers all these technologies, referred to collectively as &quot;cookies.&quot;
                </p>
              </section>

              {/* 3. How We Use Cookies */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">3. How We Use Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">We use cookies for the following purposes:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Essential operation:</span> To make our website and application function correctly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Authentication:</span> To keep you logged in and secure your session</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Preferences:</span> To remember your settings and choices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Analytics:</span> To understand how visitors use our website so we can improve it</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Performance:</span> To monitor and improve website speed and reliability</p>
                  </div>
                </div>
              </section>

              {/* 4. Cookie Categories and Consent */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">4. Cookie Categories and Consent</h2>

                <div className="space-y-6">
                  <div className="p-4 bg-muted/30 rounded-xl">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">4.1 Strictly Necessary Cookies (No Consent Required)</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies are essential for the website to function. They enable core functionality such as security, authentication, and accessibility. You cannot opt out of these cookies as the website cannot function properly without them.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="text-foreground font-medium">Legal basis:</span> Legitimate interest — these cookies are strictly necessary for the service you have requested.
                    </p>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-xl">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">4.2 Analytics Cookies (Consent Required)</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies help us understand how visitors interact with our website by collecting anonymous, aggregated information. They help us improve our website and your experience.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="text-foreground font-medium">Legal basis:</span> Consent — we only set these cookies after you have given consent through our cookie banner.
                    </p>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-xl">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">4.3 Functional Cookies (Consent Required)</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies enable enhanced functionality and personalisation beyond what is strictly necessary, such as remembering non-essential preferences.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="text-foreground font-medium">Legal basis:</span> Consent — we only set these cookies after you have given consent through our cookie banner.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. Cookies We Use */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-6 text-foreground">5. Cookies We Use</h2>

                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">5.1 Strictly Necessary Cookies</h3>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Cookie Name</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Provider</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Purpose</th>
                        <th className="text-left py-2 text-foreground font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-sm">sb-access-token</td>
                        <td className="py-2 pr-4">Supabase</td>
                        <td className="py-2 pr-4">Authentication token for logged-in users</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-sm">sb-refresh-token</td>
                        <td className="py-2 pr-4">Supabase</td>
                        <td className="py-2 pr-4">Refreshes authentication token</td>
                        <td className="py-2">7 days</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-sm">sb-auth-token</td>
                        <td className="py-2 pr-4">Supabase</td>
                        <td className="py-2 pr-4">Contains authenticated session</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-sm">cookie_consent</td>
                        <td className="py-2 pr-4">Maxxo</td>
                        <td className="py-2 pr-4">Stores your cookie consent preferences</td>
                        <td className="py-2">1 year</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-sm">__vercel_live_token</td>
                        <td className="py-2 pr-4">Vercel</td>
                        <td className="py-2 pr-4">Required for application hosting</td>
                        <td className="py-2">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">5.2 Analytics Cookies</h3>
                <p className="text-muted-foreground mb-4">These cookies are only set if you consent to analytics cookies.</p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Cookie Name</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Provider</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Purpose</th>
                        <th className="text-left py-2 text-foreground font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-sm">_ga</td>
                        <td className="py-2 pr-4">Google Analytics</td>
                        <td className="py-2 pr-4">Distinguishes unique users</td>
                        <td className="py-2">2 years</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-sm">_ga_*</td>
                        <td className="py-2 pr-4">Google Analytics</td>
                        <td className="py-2 pr-4">Maintains session state</td>
                        <td className="py-2">2 years</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-sm">_gid</td>
                        <td className="py-2 pr-4">Google Analytics</td>
                        <td className="py-2 pr-4">Distinguishes unique users</td>
                        <td className="py-2">24 hours</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-sm">_gat</td>
                        <td className="py-2 pr-4">Google Analytics</td>
                        <td className="py-2 pr-4">Throttles request rate</td>
                        <td className="py-2">1 minute</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">5.3 Functional Cookies</h3>
                <p className="text-muted-foreground mb-4">These cookies are only set if you consent to functional cookies.</p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Cookie Name</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Provider</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Purpose</th>
                        <th className="text-left py-2 text-foreground font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-sm">theme</td>
                        <td className="py-2 pr-4">Maxxo</td>
                        <td className="py-2 pr-4">Remembers your display preferences</td>
                        <td className="py-2">1 year</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-sm">dismissed_banners</td>
                        <td className="py-2 pr-4">Maxxo</td>
                        <td className="py-2 pr-4">Remembers dismissed notifications</td>
                        <td className="py-2">30 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-muted-foreground text-sm">
                  <span className="text-foreground font-medium">Note:</span> This list reflects cookies in use at the time of publication. We update this list as our website evolves. The cookie consent tool on our website provides the most current information.
                </p>
              </section>

              {/* 6. Third-Party Cookies */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">6. Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. The third parties we use include:
                </p>

                <div className="space-y-6">
                  <div className="p-4 bg-muted/30 rounded-xl">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Google Analytics</h3>
                    <p className="text-muted-foreground mb-3">
                      We use Google Analytics to understand how visitors use our website. Google Analytics uses cookies to collect anonymous information about page views, traffic sources, and user behaviour.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      Google may transfer data to servers outside the UK. Google is certified under approved data transfer mechanisms.
                    </p>
                    <div className="space-y-1 text-sm">
                      <p className="text-muted-foreground">
                        <span className="text-foreground font-medium">Privacy policy:</span>{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">policies.google.com/privacy</a>
                      </p>
                      <p className="text-muted-foreground">
                        <span className="text-foreground font-medium">Opt-out:</span>{' '}
                        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">tools.google.com/dlpage/gaoptout</a>
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-xl">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Vercel</h3>
                    <p className="text-muted-foreground mb-3">
                      Our website is hosted on Vercel. Vercel may use cookies for performance monitoring and security.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="text-foreground font-medium">Privacy policy:</span>{' '}
                      <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">vercel.com/legal/privacy-policy</a>
                    </p>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-xl">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Supabase</h3>
                    <p className="text-muted-foreground mb-3">
                      Our application uses Supabase for authentication and database services. Supabase cookies are strictly necessary for the application to function.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="text-foreground font-medium">Privacy policy:</span>{' '}
                      <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">supabase.com/privacy</a>
                    </p>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-xl">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Stripe</h3>
                    <p className="text-muted-foreground mb-3">
                      If you make a payment, Stripe may set cookies for fraud prevention and payment processing. These are strictly necessary for payment functionality.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="text-foreground font-medium">Privacy policy:</span>{' '}
                      <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">stripe.com/privacy</a>
                    </p>
                  </div>
                </div>
              </section>

              {/* 7. Managing Your Cookie Preferences */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">7. Managing Your Cookie Preferences</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">7.1 Our Cookie Consent Tool</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you first visit our website, you will see a cookie banner that allows you to accept or reject non-essential cookies. You can change your preferences at any time by clicking &quot;Cookie Settings&quot; in the footer of our website.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your consent preferences are stored in the <span className="font-mono text-sm">cookie_consent</span> cookie on your device.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">7.2 Browser Controls</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You can also control cookies through your browser settings. Most browsers allow you to:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">View what cookies are stored</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Delete individual cookies or all cookies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Block cookies from specific websites</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Block all third-party cookies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Block all cookies (note: this may break website functionality)</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-3 font-medium">How to manage cookies in common browsers:</p>
                <div className="p-4 bg-muted/30 rounded-xl space-y-2 mb-6">
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">Google Chrome:</span> Settings → Privacy and Security → Cookies and other site data</p>
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">Mozilla Firefox:</span> Settings → Privacy &amp; Security → Cookies and Site Data</p>
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">Safari:</span> Preferences → Privacy → Manage Website Data</p>
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">Microsoft Edge:</span> Settings → Cookies and site permissions → Cookies and site data</p>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">7.3 Opting Out of Google Analytics</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">You can opt out of Google Analytics specifically by:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Using our cookie consent tool to reject analytics cookies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Installing the{' '}
                      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Analytics Opt-out Browser Add-on</a>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Enabling &quot;Do Not Track&quot; in your browser (we honour this signal)</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">7.4 Impact of Rejecting Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">If you reject or block cookies:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Strictly necessary cookies:</span> Cannot be blocked; doing so via browser may prevent the website from functioning</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Analytics cookies:</span> We will not collect analytics data about your visit</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Functional cookies:</span> Some preferences and enhanced features may not work</p>
                  </div>
                </div>
              </section>

              {/* 8. Cookies in Our Web Application */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">8. Cookies in Our Web Application</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you log in to the Maxxo application (app.maxxo.ai), additional cookies are used for authentication and session management. These are strictly necessary for the application to function and are covered by the Supabase cookies listed above.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The application does not use analytics or advertising cookies beyond those listed in this policy.
                </p>
              </section>

              {/* 9. Do Not Track */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">9. Do Not Track</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not want to be tracked. We honour DNT signals and will not set analytics cookies if your browser sends a DNT signal.
                </p>
              </section>

              {/* 10. Changes to This Policy */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We will post any changes on this page with an updated revision date. If we make material changes, we will reset your cookie consent preferences so you can make a new informed choice.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage you to review this policy periodically.
                </p>
              </section>

              {/* 11. More Information */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">11. More Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For more information about cookies and online privacy, visit:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-medium">Information Commissioner&apos;s Office (ICO):</span>{' '}
                      <a href="https://ico.org.uk/for-the-public/online/cookies" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ico.org.uk/for-the-public/online/cookies</a>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-medium">All About Cookies:</span>{' '}
                      <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">allaboutcookies.org</a>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-medium">Your Online Choices:</span>{' '}
                      <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">youronlinechoices.com</a>
                    </p>
                  </div>
                </div>
              </section>

              {/* 12. Contact Us */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <p className="text-foreground font-medium">Email: legal@maxxo.ai</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  For data protection queries, please see our <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>.
                </p>
              </section>

              {/* Copyright */}
              <div className="text-center text-muted-foreground text-sm pt-8">
                <p>&copy; 2025 Maxxo.ai. All rights reserved.</p>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
