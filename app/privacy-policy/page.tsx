'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

// ============================================================================
// PRIVACY POLICY PAGE
// ============================================================================

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-accent font-medium mb-2">Legal</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Maxxo.ai ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our website and services.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We are registered in England and Wales and comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Data Controller</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Maxxo.ai is the data controller responsible for your personal data. If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted/30 rounded-xl">
                  <p className="text-foreground font-medium">Email: legal@maxxo.ai</p>
                </div>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">What Data We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect the following personal data when you interact with our website and services:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Contact information:</span> Name, email address, phone number, company name, job title</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Technical data:</span> IP address, browser type, device information, pages visited</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Usage data:</span> How you interact with our website and services</p>
                  </div>
                </div>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">How We Use Your Data</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your personal data for the following purposes:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">To respond to your demo requests and enquiries</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">To provide and improve our services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">To send you relevant information about our products (where you have consented)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">To analyse website usage and improve user experience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">To comply with legal obligations</p>
                  </div>
                </div>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Legal Basis for Processing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We process your personal data on the following legal grounds:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Consent:</span> Where you have given clear consent for us to process your data for a specific purpose</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Contract:</span> Where processing is necessary for a contract we have with you</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Legitimate interests:</span> Where processing is necessary for our legitimate business interests, provided these do not override your rights</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Legal obligation:</span> Where we need to comply with a legal requirement</p>
                  </div>
                </div>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal data. We may share your data with:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Service providers:</span> Third parties who help us deliver our services (e.g., hosting, analytics). These providers are bound by data processing agreements.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Legal requirements:</span> Where required by law or to protect our legal rights</p>
                  </div>
                </div>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. When data is no longer needed, we securely delete or anonymise it.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under UK GDPR, you have the following rights regarding your personal data:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right of access:</span> Request a copy of the data we hold about you</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right to rectification:</span> Request correction of inaccurate data</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right to erasure:</span> Request deletion of your data in certain circumstances</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right to restrict processing:</span> Request limitation of how we use your data</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right to data portability:</span> Request transfer of your data to another organisation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right to object:</span> Object to processing based on legitimate interests</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right to withdraw consent:</span> Withdraw consent at any time where we rely on consent to process your data</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at legal@maxxo.ai. We will respond within one month.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction. This includes encryption, secure hosting, and access controls.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies to improve your experience on our website. For detailed information about the cookies we use and how to manage them, please see our <a href="/cookie-policy" className="text-accent hover:underline">Cookie Policy</a>.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Complaints</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you are unhappy with how we have handled your data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):
                </p>
                <div className="mt-4 p-4 bg-muted/30 rounded-xl">
                  <p className="text-foreground font-medium">Website: ico.org.uk</p>
                  <p className="text-muted-foreground">Helpline: 0303 123 1113</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
