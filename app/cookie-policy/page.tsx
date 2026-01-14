'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

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

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This Cookie Policy explains how Maxxo.ai uses cookies and similar technologies on our website.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Types of Cookies We Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the following categories of cookies:
                </p>
                <div className="space-y-6">
                  <div className="p-4 bg-muted/30 rounded-xl">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Strictly Necessary Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies are essential for the website to function properly. They enable basic features like page navigation and access to secure areas. The website cannot function properly without these cookies.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-xl">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Analytics Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and your experience.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-xl">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Functional Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies enable enhanced functionality and personalisation, such as remembering your preferences. They may be set by us or by third-party providers whose services we have added to our pages.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Specific Cookies We Use</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 text-foreground font-medium">Cookie Name</th>
                        <th className="text-left py-3 px-2 text-foreground font-medium">Purpose</th>
                        <th className="text-left py-3 px-2 text-foreground font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-2">_ga</td>
                        <td className="py-3 px-2">Google Analytics - Distinguishes users</td>
                        <td className="py-3 px-2">2 years</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-2">_gid</td>
                        <td className="py-3 px-2">Google Analytics - Distinguishes users</td>
                        <td className="py-3 px-2">24 hours</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-2">_gat</td>
                        <td className="py-3 px-2">Google Analytics - Throttles request rate</td>
                        <td className="py-3 px-2">1 minute</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  Note: We may update this list as our website evolves and we add new features.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some cookies are placed by third-party services that appear on our pages. We do not control the dissemination of these cookies. You should check the relevant third party&apos;s website for more information about these cookies.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Third parties we may use include:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Google Analytics:</span> For website usage analysis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Vercel:</span> For website hosting and performance</p>
                  </div>
                </div>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and parts of our website may no longer be fully accessible.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <span className="text-foreground font-medium">Browser Controls:</span> Most browsers allow you to view, manage, delete and block cookies for a website. Be aware that if you delete all cookies, any preferences you have set will be lost.
                </p>
                <div className="mt-4 p-4 bg-muted/30 rounded-xl space-y-2">
                  <p className="text-muted-foreground">Google Chrome: Settings → Privacy and Security → Cookies</p>
                  <p className="text-muted-foreground">Mozilla Firefox: Options → Privacy & Security → Cookies</p>
                  <p className="text-muted-foreground">Safari: Preferences → Privacy → Cookies</p>
                  <p className="text-muted-foreground">Microsoft Edge: Settings → Privacy & Services → Cookies</p>
                </div>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Opting Out of Analytics</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on, available at:{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    tools.google.com/dlpage/gaoptout
                  </a>
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted/30 rounded-xl">
                  <p className="text-foreground font-medium">Email: legal@maxxo.ai</p>
                </div>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">More Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For more information about cookies and how to manage them, visit{' '}
                  <a
                    href="https://www.allaboutcookies.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    www.allaboutcookies.org
                  </a>
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
