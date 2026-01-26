'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

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

              {/* 1. Introduction */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Maxxo.ai (&quot;Maxxo&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) provides AI-powered enquiry management software for UK care homes. This Privacy Policy explains how we collect, use, store, and protect personal data when you use our website (maxxo.ai) and services.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We are registered in England and Wales and comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
              </section>

              {/* 2. Our Role: Data Controller and Data Processor */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">2. Our Role: Data Controller and Data Processor</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Maxxo operates in two distinct capacities depending on the data involved:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-xl">
                    <p className="text-foreground font-medium">As a Data Controller:</p>
                    <p className="text-muted-foreground mt-1">We are the data controller for personal data we collect directly from you, including account registration details, billing information, and marketing communications.</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-xl">
                    <p className="text-foreground font-medium">As a Data Processor:</p>
                    <p className="text-muted-foreground mt-1">When care homes use Maxxo to handle enquiries from prospective residents and their families, we process that data on behalf of the care home. In this context, the care home is the data controller and Maxxo is the data processor. Our processing is governed by our Data Processing Agreement with each care home client.</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  If you are a prospective resident or family member who has interacted with a care home through our platform, the care home&apos;s privacy policy governs how your data is used. Please contact the care home directly for information about their data practices.
                </p>
              </section>

              {/* 3. What Data We Collect */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">3. What Data We Collect</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">3.1 Data We Collect as a Controller</h3>

                <p className="text-muted-foreground leading-relaxed mb-3 font-medium">Account and Billing Data:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Name, email address, phone number</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Company/organisation name and role</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Billing address and payment information</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Account preferences and settings</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-3 font-medium">Website and Marketing Data:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">IP address, browser type, device information</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Pages visited and interaction data</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Marketing preferences and consent records</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Demo request information</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">3.2 Data We Process on Behalf of Care Homes</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  When care homes use our services, we process enquiry data on their behalf, which may include:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Names and contact details of prospective residents and family members</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Enquiry content and conversation transcripts</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Care requirements and preferences discussed</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Booking and tour scheduling information</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Call recordings (Voice Assistant only, where enabled)</p>
                  </div>
                </div>
              </section>

              {/* 4. How We Use Your Data */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">4. How We Use Your Data</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">4.1 As a Data Controller</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">We use data we control for:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Providing and maintaining your Maxxo account</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Processing payments and managing billing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Responding to support requests and enquiries</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Sending service updates and essential communications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Sending marketing communications (where you have consented)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Analysing usage to improve our services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Complying with legal obligations</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">4.2 As a Data Processor</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We process enquiry data strictly in accordance with our care home clients&apos; instructions and our Data Processing Agreement. This includes:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Operating AI assistants to respond to enquiries</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Storing and displaying conversation data in the dashboard</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Generating analytics and reports for care homes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Sending notifications to care home staff</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Processing bookings and scheduling tours</p>
                  </div>
                </div>
              </section>

              {/* 5. Artificial Intelligence and Automated Processing */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">5. Artificial Intelligence and Automated Processing</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">Our services use artificial intelligence to:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Respond to enquiries via chat, SMS/WhatsApp, and voice</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Extract and summarise information from conversations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Generate follow-up messages and recommendations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Analyse conversation sentiment and topics</p>
                  </div>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <p className="text-foreground font-medium">Important:</p>
                  <p className="text-muted-foreground mt-1">Our AI systems assist care home staff but do not make decisions with legal or similarly significant effects on individuals. All AI-assisted communications are clearly identifiable, and human staff can review and intervene at any time. Care homes control how AI is used in their enquiry handling.</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Where our Voice Assistant is enabled, calls may be recorded for quality assurance and to provide transcripts. Callers are informed of this at the start of each call.
                </p>
              </section>

              {/* 6. Legal Basis for Processing */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">6. Legal Basis for Processing</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">6.1 Data We Control</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">We process personal data on the following legal bases:</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Contract:</span> Processing necessary to provide our services to you, including account management and billing.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Legitimate Interests:</span> Processing necessary for our legitimate business interests, such as improving our services, preventing fraud, and ensuring security, where these do not override your rights.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Consent:</span> Where you have given clear consent, such as for marketing communications. You can withdraw consent at any time.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Legal Obligation:</span> Where we need to comply with legal requirements, such as tax and accounting obligations.</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">6.2 Data We Process for Care Homes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a data processor, we process enquiry data based on the instructions of our care home clients. Care homes are responsible for ensuring they have a valid legal basis for collecting and processing enquiry data.
                </p>
              </section>

              {/* 7. Data Sharing and Sub-processors */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">7. Data Sharing and Sub-processors</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We do not sell personal data.</p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">7.1 Sub-processors</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">We use the following sub-processors to deliver our services:</p>

                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Sub-processor</th>
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Purpose</th>
                        <th className="text-left py-2 text-foreground font-medium">Location</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">Supabase (AWS)</td>
                        <td className="py-2 pr-4">Database hosting and authentication</td>
                        <td className="py-2">EU (Frankfurt)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">Vercel</td>
                        <td className="py-2 pr-4">Website and application hosting</td>
                        <td className="py-2">Global (EU primary)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">Anthropic</td>
                        <td className="py-2 pr-4">AI conversation processing</td>
                        <td className="py-2">USA</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">OpenAI</td>
                        <td className="py-2 pr-4">AI embeddings and processing</td>
                        <td className="py-2">USA</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">ElevenLabs</td>
                        <td className="py-2 pr-4">Voice AI and speech synthesis</td>
                        <td className="py-2">USA</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">Twilio</td>
                        <td className="py-2 pr-4">SMS and WhatsApp messaging</td>
                        <td className="py-2">USA</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">Resend</td>
                        <td className="py-2 pr-4">Transactional email delivery</td>
                        <td className="py-2">USA</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">Stripe</td>
                        <td className="py-2 pr-4">Payment processing</td>
                        <td className="py-2">USA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  For an always-current list, see <Link href="/sub-processors" className="text-accent hover:underline">/sub-processors</Link>.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">7.2 Other Disclosures</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">We may also share data:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">With professional advisors (lawyers, accountants) under confidentiality obligations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Where required by law, regulation, or court order</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">To protect our legal rights or the safety of others</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">In connection with a business transfer (merger, acquisition, or sale)</p>
                  </div>
                </div>
              </section>

              {/* 8. International Data Transfers */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">8. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Some of our sub-processors are located in the United States. When we transfer personal data outside the UK, we ensure appropriate safeguards are in place:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Standard Contractual Clauses (SCCs):</span> We use UK-approved International Data Transfer Agreements with US-based processors.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Supplementary Measures:</span> We implement additional technical and organisational measures where appropriate, including encryption in transit and at rest.</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  You can request a copy of the relevant transfer mechanism by contacting us at legal@maxxo.ai.
                </p>
              </section>

              {/* 9. Data Retention */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">9. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We retain personal data only as long as necessary for the purposes described in this policy:
                </p>

                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 text-foreground font-medium">Data Type</th>
                        <th className="text-left py-2 text-foreground font-medium">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">Account data</td>
                        <td className="py-2">Duration of account plus 6 years</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">Billing and invoices</td>
                        <td className="py-2">6 years (legal requirement)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">Enquiry data (processor)</td>
                        <td className="py-2">As instructed by care home client</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">Marketing contacts</td>
                        <td className="py-2">Until consent withdrawn or 2 years of inactivity</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">Website analytics</td>
                        <td className="py-2">26 months</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">Support communications</td>
                        <td className="py-2">3 years from resolution</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  When data is no longer needed, we securely delete or anonymise it.
                </p>
              </section>

              {/* 10. Your Rights */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">10. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under UK GDPR, you have the following rights regarding personal data we control:
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right of Access:</span> Request a copy of the data we hold about you.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right to Rectification:</span> Request correction of inaccurate or incomplete data.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right to Erasure:</span> Request deletion of your data in certain circumstances.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right to Restrict Processing:</span> Request that we limit how we use your data.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right to Data Portability:</span> Request your data in a portable format.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right to Object:</span> Object to processing based on legitimate interests or for direct marketing.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Right to Withdraw Consent:</span> Withdraw consent at any time where processing is based on consent.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Rights Related to Automated Decision-Making:</span> You have the right not to be subject to decisions based solely on automated processing that produce legal or similarly significant effects. Our AI systems do not make such decisions.</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">10.1 Exercising Your Rights</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To exercise any of these rights, contact us at <span className="text-foreground font-medium">legal@maxxo.ai</span>. We will respond within one month. We may ask for verification of your identity before processing your request.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">10.2 Erasure Requests and Contract Obligations</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">Please note that we may decline or delay erasure requests where:</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Data retention is necessary for the performance of an active contract</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">We are required to retain data for legal or regulatory compliance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Data is needed to establish, exercise, or defend legal claims</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In such cases, we will explain the reason and, where applicable, confirm when deletion will occur.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">10.3 Enquiry Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you have interacted with a care home through our platform and wish to exercise your rights regarding that data, please contact the care home directly. As a data processor, we act on their instructions regarding enquiry data.
                </p>
              </section>

              {/* 11. Data Security */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">11. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organisational measures to protect personal data, including:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Encryption of data in transit (TLS 1.2+) and at rest (AES-256)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Access controls and authentication requirements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Regular security assessments and monitoring</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Staff training on data protection</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Incident response procedures</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to maintaining industry-standard security practices and are working towards Cyber Essentials Plus certification.
                </p>
              </section>

              {/* 12. Cookies */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">12. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar technologies to improve your experience on our website. For detailed information about the cookies we use and how to manage them, please see our <Link href="/cookie-policy" className="text-accent hover:underline">Cookie Policy</Link>.
                </p>
              </section>

              {/* 13. Children's Data */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">13. Children&apos;s Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed at children under 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately.
                </p>
              </section>

              {/* 14. Changes to This Policy */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">14. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. Material changes will be communicated via email to account holders or through a prominent notice on our website. The &quot;Last updated&quot; date at the top indicates when the policy was last revised.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage you to review this policy periodically.
                </p>
              </section>

              {/* 15. Contact Us */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">15. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact:
                </p>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <p className="text-foreground font-medium">Email: legal@maxxo.ai</p>
                  <p className="text-muted-foreground mt-2"><span className="text-foreground font-medium">Data Protection Matters:</span> For data protection specific queries, please include &quot;Data Protection&quot; in your email subject line.</p>
                </div>
              </section>

              {/* 16. Complaints */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">16. Complaints</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you are unhappy with how we have handled your data, we encourage you to contact us first so we can try to resolve your concern.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO):
                </p>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <p className="text-foreground font-medium">Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ico.org.uk</a></p>
                  <p className="text-muted-foreground mt-1">Helpline: 0303 123 1113</p>
                  <p className="text-muted-foreground mt-1">Address: Information Commissioner&apos;s Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
                </div>
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
