'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

// ============================================================================
// LEGAL - SUB-PROCESSORS PAGE
// ============================================================================

export default function Legal() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-accent font-medium mb-2">Legal</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sub-processors
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Maxxo.ai uses third-party service providers (sub-processors) to help deliver our services. This page lists the sub-processors we use and their purposes.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We maintain appropriate data processing agreements with all sub-processors to ensure your data is handled securely and in compliance with applicable data protection laws.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Current Sub-processors</h2>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm mt-4">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 font-semibold text-foreground">Sub-processor</th>
                        <th className="text-left py-3 font-semibold text-foreground">Purpose</th>
                        <th className="text-left py-3 font-semibold text-foreground">Location</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-medium text-foreground">Supabase Inc</td>
                        <td className="py-3">Database and authentication</td>
                        <td className="py-3">EU (Frankfurt)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-medium text-foreground">Anthropic</td>
                        <td className="py-3">AI conversation processing</td>
                        <td className="py-3">United States</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-medium text-foreground">OpenAI</td>
                        <td className="py-3">AI embeddings and search</td>
                        <td className="py-3">United States</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-medium text-foreground">ElevenLabs</td>
                        <td className="py-3">Voice synthesis</td>
                        <td className="py-3">United States</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-medium text-foreground">Twilio</td>
                        <td className="py-3">SMS and WhatsApp messaging</td>
                        <td className="py-3">United States</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-medium text-foreground">Resend</td>
                        <td className="py-3">Transactional email</td>
                        <td className="py-3">United States</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-foreground">Vercel</td>
                        <td className="py-3">Website and application hosting</td>
                        <td className="py-3">United States</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Changes to Sub-processors</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our sub-processors from time to time. In accordance with our Data Processing Agreement, we will provide customers with at least 30 days written notice before engaging any new sub-processor.
                </p>
              </section>

              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about our sub-processors or data processing practices, please contact us:
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
