'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

// ============================================================================
// TERMS OF USE PAGE
// ============================================================================

export default function TermsOfUse() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-accent font-medium mb-2">Legal</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Use
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">About These Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Use govern your access to and use of the Maxxo.ai platform. By creating an account, you agree to these terms.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  If you become a paying customer, your use of our services will be governed by our full commercial agreement, which will be provided to you separately.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Your Account</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account. You must provide accurate information when creating your account and keep it up to date.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You must be at least 18 years old to create an account. By creating an account, you confirm that you have the authority to accept these terms on behalf of yourself or your organisation.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Acceptable Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to use Maxxo.ai only for lawful purposes. You must not:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Use the platform in any way that violates applicable laws or regulations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Attempt to gain unauthorised access to any part of the platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Interfere with or disrupt the platform or its infrastructure</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Use the platform to transmit harmful, offensive, or illegal content</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Reverse engineer, decompile, or attempt to extract the source code</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Resell, sublicense, or share your account access with third parties</p>
                  </div>
                </div>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">AI-Generated Content</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Maxxo.ai uses artificial intelligence to generate responses. While we strive for accuracy, AI-generated content may occasionally be incorrect, incomplete, or inappropriate.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You are responsible for reviewing all AI-generated content before relying on it. AI outputs should not be used for decisions affecting individual health, safety, or wellbeing without appropriate human oversight.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Your Content</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You retain ownership of any content you upload to Maxxo.ai. By uploading content, you grant us a limited license to use it solely for providing our services to you.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You are responsible for ensuring you have the right to upload any content and that it does not infringe the rights of any third party.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Service Availability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We aim to keep Maxxo.ai available at all times but cannot guarantee uninterrupted access. We may modify, suspend, or discontinue any part of the platform at any time.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The platform is provided "as is" without warranties of any kind.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may close your account at any time through account settings. We may suspend or terminate your account if you breach these terms.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Upon termination, your right to access the platform will cease. We will delete your data in accordance with our <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a>.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, Maxxo.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Changes to These Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms of Use from time to time. We will notify you of material changes by email or through the platform. Continued use after changes constitutes acceptance.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by English law. Disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Use, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted/30 rounded-xl">
                  <p className="text-foreground font-medium">Email: legal@maxxo.ai</p>
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
