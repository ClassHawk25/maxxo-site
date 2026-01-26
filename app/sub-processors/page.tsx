'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

// ============================================================================
// SUB-PROCESSORS PAGE
// ============================================================================

export default function SubProcessors() {
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
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">

              {/* Introduction */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <p className="text-muted-foreground leading-relaxed">
                  Maxxo.ai uses the following sub-processors to deliver our services. This list is maintained in accordance with our obligations under UK GDPR and our Data Processing Agreements with clients.
                </p>
              </section>

              {/* Infrastructure & Hosting */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-6 text-foreground">Infrastructure &amp; Hosting</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Sub-processor</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Purpose</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Data Processed</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Location</th>
                        <th className="text-left py-2 text-foreground font-medium">Transfer Mechanism</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 font-medium text-foreground">Supabase (AWS)</td>
                        <td className="py-3 pr-4">Database hosting, authentication, file storage</td>
                        <td className="py-3 pr-4">All platform data</td>
                        <td className="py-3 pr-4">EU (Frankfurt)</td>
                        <td className="py-3">N/A (EU)</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Vercel</td>
                        <td className="py-3 pr-4">Application hosting and CDN</td>
                        <td className="py-3 pr-4">Website traffic, application requests</td>
                        <td className="py-3 pr-4">Global (EU primary)</td>
                        <td className="py-3">UK SCCs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* AI & Machine Learning */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-6 text-foreground">AI &amp; Machine Learning</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Sub-processor</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Purpose</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Data Processed</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Location</th>
                        <th className="text-left py-2 text-foreground font-medium">Transfer Mechanism</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 font-medium text-foreground">Anthropic</td>
                        <td className="py-3 pr-4">AI conversation processing (Claude)</td>
                        <td className="py-3 pr-4">Conversation content, enquiry data</td>
                        <td className="py-3 pr-4">USA</td>
                        <td className="py-3">UK SCCs</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 font-medium text-foreground">OpenAI</td>
                        <td className="py-3 pr-4">Text embeddings for knowledge base search</td>
                        <td className="py-3 pr-4">Document content, conversation snippets</td>
                        <td className="py-3 pr-4">USA</td>
                        <td className="py-3">UK SCCs</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">ElevenLabs</td>
                        <td className="py-3 pr-4">Voice synthesis and speech processing</td>
                        <td className="py-3 pr-4">Voice call audio, transcripts</td>
                        <td className="py-3 pr-4">USA</td>
                        <td className="py-3">UK SCCs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Communications */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-6 text-foreground">Communications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Sub-processor</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Purpose</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Data Processed</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Location</th>
                        <th className="text-left py-2 text-foreground font-medium">Transfer Mechanism</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 font-medium text-foreground">Twilio</td>
                        <td className="py-3 pr-4">SMS and WhatsApp messaging</td>
                        <td className="py-3 pr-4">Phone numbers, message content</td>
                        <td className="py-3 pr-4">USA</td>
                        <td className="py-3">UK SCCs</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Resend</td>
                        <td className="py-3 pr-4">Transactional email delivery</td>
                        <td className="py-3 pr-4">Email addresses, notification content</td>
                        <td className="py-3 pr-4">USA</td>
                        <td className="py-3">UK SCCs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Payments */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-6 text-foreground">Payments</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Sub-processor</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Purpose</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Data Processed</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Location</th>
                        <th className="text-left py-2 text-foreground font-medium">Transfer Mechanism</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Stripe</td>
                        <td className="py-3 pr-4">Payment processing and billing</td>
                        <td className="py-3 pr-4">Billing contact details, payment methods</td>
                        <td className="py-3 pr-4">USA</td>
                        <td className="py-3">UK SCCs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Data Processing Details */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-6 text-foreground">Data Processing Details</h2>

                {/* Anthropic */}
                <div className="mb-6 p-4 bg-muted/30 rounded-xl">
                  <h3 className="font-display text-lg font-semibold mb-3 text-foreground">Anthropic (Claude AI)</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">What we send:</span> Conversation messages, knowledge base context, system instructions</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">What we receive:</span> AI-generated responses</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Retention:</span> No persistent storage; data processed in real-time only</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Security:</span> SOC 2 Type II certified, encrypted in transit</p>
                    </div>
                  </div>
                </div>

                {/* OpenAI */}
                <div className="mb-6 p-4 bg-muted/30 rounded-xl">
                  <h3 className="font-display text-lg font-semibold mb-3 text-foreground">OpenAI</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">What we send:</span> Text chunks for embedding generation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">What we receive:</span> Vector embeddings (numerical representations)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Retention:</span> No persistent storage; API data not used for training</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Security:</span> SOC 2 Type II certified, encrypted in transit</p>
                    </div>
                  </div>
                </div>

                {/* ElevenLabs */}
                <div className="mb-6 p-4 bg-muted/30 rounded-xl">
                  <h3 className="font-display text-lg font-semibold mb-3 text-foreground">ElevenLabs</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">What we send:</span> Text for speech synthesis, call audio for transcription</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">What we receive:</span> Audio files, transcripts</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Retention:</span> Temporary processing only</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Security:</span> Encrypted in transit and at rest</p>
                    </div>
                  </div>
                </div>

                {/* Twilio */}
                <div className="mb-6 p-4 bg-muted/30 rounded-xl">
                  <h3 className="font-display text-lg font-semibold mb-3 text-foreground">Twilio</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">What we send:</span> Phone numbers, message content</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">What we receive:</span> Delivery status, inbound messages</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Retention:</span> Message logs retained per our instructions</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Security:</span> SOC 2 Type II certified, ISO 27001</p>
                    </div>
                  </div>
                </div>

                {/* Supabase */}
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h3 className="font-display text-lg font-semibold mb-3 text-foreground">Supabase</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">What we store:</span> All platform data including accounts, care homes, conversations, documents</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Location:</span> AWS eu-central-1 (Frankfurt)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Retention:</span> As per our data retention policy</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Security:</span> SOC 2 Type II certified, encrypted at rest (AES-256)</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Changes to Sub-processors */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Changes to Sub-processors</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We will notify clients of any changes to this list at least 30 days before engaging a new sub-processor for processing client data. Clients may object to changes as set out in our Data Processing Agreement.
                </p>

                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Change Log</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Date</th>
                        <th className="text-left py-2 text-foreground font-medium">Change</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="py-2 pr-4">January 2025</td>
                        <td className="py-2">Initial list published</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Questions */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Questions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about our sub-processors or data processing practices, please contact us at <span className="text-foreground font-medium">legal@maxxo.ai</span>.
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
