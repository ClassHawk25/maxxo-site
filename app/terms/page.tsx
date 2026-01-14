'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

// ============================================================================
// TERMS & CONDITIONS PAGE
// ============================================================================

export default function Terms() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-accent font-medium mb-2">Legal</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">

              {/* Section 1 */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">1. Getting Started</h2>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Agreement Duration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This Agreement begins on the earlier of the date of last signature or Start Date stated in Order Form. It will remain in effect until (i) either party gives the other at least 90 days' written notice of their intention to terminate the Agreement, such notice period to expire no earlier than the date that all Order Forms have come to an end, or (ii) until terminated by one of the parties in accordance with this Agreement.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Order Form Duration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each Order Form signed by the parties begins on the Start Date and continues for the Initial Term. After that, unless otherwise specified, each Order Form will automatically renew for successive terms of the greater of the Initial Term or 12 months (each, a "Renewal Term") unless either party provides written notice of its intent not to renew at least ninety (90) days prior to the expiration of the then-current term.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Definitions and Interpretation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Capitalised terms used in this Agreement are defined at the end of these Terms & Conditions.
                </p>
              </section>

              {/* Section 2 */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">2. Provision and Use of Products and Services</h2>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Subscription</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Subject to the terms of the Agreement, Maxxo will make its Subscription Services available to the Customer during the Term.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Account and Users</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Customer is responsible for managing its User accounts, safeguarding authentication credentials, and all User activity, except to the extent caused by Maxxo's breach of this Agreement.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Customer General Responsibilities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customer will not exceed the maximum Care Service number stated in the Order Form. Customer is solely responsible for the accuracy, quality and legality of Customer Content and for its use of Outputs. The Customer shall ensure that it and its Users comply with this Agreement.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The Customer shall not (a) represent AI-generated Outputs as human-authored content; or (b) use the Outputs for fully automated decisions affecting individual rights, safety, or well-being without qualified human oversight.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Technology Improvement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maxxo may modify Products and Services to improve them or to reflect changes to its technology, information security practices and to comply with any legal requirements. Maxxo will notify Customer in advance of any material changes which may materially and adversely affect the Service.
                </p>
              </section>

              {/* Section 3 */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">3. Intellectual Property Rights</h2>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Product Licenses</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Subject to the payment of all applicable Fees and during the Term, Maxxo grants Customer a limited, revocable, non-exclusive, non-transferable license, without right to sub-license, to access and use the Products and Services solely in accordance with this Agreement and for Customer's internal business purposes.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Ownership of Underlying Intellectual Property</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nothing in this Agreement transfers to Customer any Intellectual Property Rights in the Maxxo Products, Services and the Maxxo Confidential Information, which are owned by or retained by Maxxo or its licensors.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Ownership of Customer Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customer retains all Intellectual Property Rights in and to Customer Content and its Confidential Information. No ownership interest in Customer Content is transferred to Maxxo by virtue of this Agreement.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Ownership of Inputs and Outputs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customer retains all right, title, and interests in and to all Customer Content (Inputs and Outputs). Maxxo assigns to Customer any right, title, or interest it may have in the Outputs, to the extent created specifically for Customer through Customer's authorised use of the Services.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Restrictions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customer will not and will not permit any third party to: reverse engineer, disassemble, or decompile the Products; modify or create derivative works; remove any proprietary notices; access the Products to build a competing product; or represent Outputs generated by the Services as human-authored when they are not.
                </p>
              </section>

              {/* Section 4 */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">4. Outputs and Human Oversight</h2>

                <p className="text-muted-foreground leading-relaxed">
                  The Outputs are produced by the Products through generative AI large language models, and with all generative AI tools, the technology may sometimes produce incorrect, incomplete, or inaccurate results. All Outputs should be carefully reviewed and vetted by the Customer before use.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Human Oversight</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Customer shall ensure that appropriate and timely human oversight is maintained with respect to all Customer Content such that qualified human professionals review all Outputs before any decision-making that could affect individual rights, safety, well-being or legal status.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The Customer specifically acknowledges that Outputs may not be used for fully automated decision-making without qualified human review and final decision authority.
                </p>
              </section>

              {/* Section 5 */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">5. Fees & Payment</h2>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Fees</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Customer's Fees for the Services are set out in each Order Form. Maxxo will issue invoices for the Fees for each Billing Period stated in the Order Form. If the Customer upgrades any Services during the Term, Fees will be prorated from the effective date of the upgrade.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Payment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customer shall pay Maxxo the Fees as set out in each Order Form without any set-off or deductions. Unless stated otherwise, the Customer will make all payments within 30 days of the relevant invoice date.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Taxes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fees stated in the Order Form are exclusive of all applicable taxes and duties, including Value Added Tax. The Customer is responsible for all such taxes, except for taxes on Maxxo's income.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Overdue Payments</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If the Customer fails to make any payment by the due date, Maxxo may suspend delivery of the Services until outstanding Fees are paid, and charge interest on the overdue amount at a rate of 4% above the Bank of England base rate.
                </p>
              </section>

              {/* Section 6 */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">6. Termination</h2>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Termination for Cause</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate this Agreement immediately by written notice if: (a) the other party commits material breach which is not capable of being remedied; (b) the other party fails to cure any remediable material breach within 30 days of being notified; (c) the other party repeatedly breaches this Agreement; (d) the other party becomes insolvent.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Post Termination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Following termination: (a) the Customer will immediately pay all outstanding Fees; (b) all rights and licenses shall cease; (c) the parties shall return or destroy all Intellectual Property of the other party. Unless otherwise instructed, within 30 days following termination, Maxxo will permanently delete any Customer Content in its possession.
                </p>
              </section>

              {/* Section 7 */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">7. Warranties & Disclaimers</h2>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Warranties</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maxxo warrants that: (a) the Products will conform in all material respects with the Agreement; (b) Maxxo will use commercially reasonable efforts to ensure Products contain no malicious code; (c) Services will be performed with reasonable skill and care; (d) provision of Products will not infringe third-party Intellectual Property Rights; (e) Services will comply with applicable laws.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Disclaimer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Except where stated otherwise: neither party makes any representations or warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose or non-infringement. None of the Outputs or Services constitute or replace medical, clinical, or healthcare advice and must not be relied upon as such without appropriate professional oversight.
                </p>
              </section>

              {/* Section 8 */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">8. Confidentiality</h2>

                <p className="text-muted-foreground leading-relaxed">
                  When one party receives Confidential Information (the "Recipient"), they may use it only for the purposes for which it was provided. The Recipient can only share Confidential Information with their employees or contractors who are bound by confidentiality restrictions, and only for the purposes for which it was provided under the Agreement.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Exceptions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These obligations do not apply to information that: (a) the Recipient obtained without breaching confidentiality obligations; (b) becomes publicly known without the Recipient's involvement; (c) the Recipient independently develops; or (d) the Recipient is legally required to disclose.
                </p>
              </section>

              {/* Section 9 */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">9. Data Protection</h2>

                <p className="text-muted-foreground leading-relaxed">
                  Each party will comply with applicable data protection, privacy, and security laws, including the Data Protection Legislation, in connection with its performance under this Agreement.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Consent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Customer represents and warrants that it has all necessary rights, consents, and authorisations to provide personal data to Maxxo and to permit its processing under this Agreement.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Data Processing Addendum</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This Agreement includes the Data Processing Addendum which sets out the scope, nature and purpose of processing by Maxxo of any personal data on the Customer's behalf. Maxxo will only process personal data in accordance with this Data Processing Addendum.
                </p>
              </section>

              {/* Section 10 */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">10. Limitation of Liability</h2>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Limitations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Customer is solely responsible for any use it makes of the Maxxo Products and Services. The Customer assumes sole responsibility for the Outputs obtained and any conclusions drawn or decisions made based upon such Outputs.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Exceptions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nothing in this Agreement excludes liability for: death or personal injury caused by negligence; fraud or fraudulent misrepresentation; breach of Intellectual Property Rights; payment of fees properly due; and any matter which cannot be excluded by law.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Exclusion of Certain Claims</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Neither party will be liable to the other for: loss of profits; loss of business; depletion of goodwill; loss or corruption of data; pure economic loss; loss of use; or any special, indirect or consequential loss.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-foreground">Liability Cap</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties' total aggregate liability shall not exceed the total amount of fees paid or payable by Customer in the 12 months immediately preceding the event giving rise to the liability.
                </p>
              </section>

              {/* Section 11 */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">11. General Provisions</h2>

                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-foreground">Entire Agreement:</strong> This Agreement contains all terms agreed between the parties and supersedes all previous agreements relating to its subject matter.</p>

                  <p><strong className="text-foreground">Amendments:</strong> Any amendment must be in writing (excluding email), expressly state it is amending this Agreement, and be signed by the parties.</p>

                  <p><strong className="text-foreground">Assignment:</strong> A party may not assign its rights or obligations without prior written consent, except to a successor following a change of control.</p>

                  <p><strong className="text-foreground">Severability:</strong> If any part is invalid, illegal, or unenforceable, the rest remains unaffected.</p>

                  <p><strong className="text-foreground">No Waiver:</strong> Neither party waives any rights by not exercising them immediately or delaying their exercise.</p>

                  <p><strong className="text-foreground">No Agency:</strong> This Agreement does not create any agency, partnership, or joint venture between the parties.</p>

                  <p><strong className="text-foreground">Force Majeure:</strong> A party is not liable for non-performance caused by events beyond its reasonable control.</p>

                  <p><strong className="text-foreground">Notices:</strong> All notices must be in English, sent to legal@maxxo.ai for Maxxo, or to the Customer Contact in the most recently signed Order Form.</p>

                  <p><strong className="text-foreground">Governing Law:</strong> This Agreement is governed by English law, with disputes subject to the exclusive jurisdiction of the English courts.</p>
                </div>
              </section>

              {/* Definitions */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">12. Definitions</h2>

                <div className="space-y-3 text-muted-foreground text-sm">
                  <p><strong className="text-foreground">"Agreement"</strong> means these Terms & Conditions, any Order Form, Policies and the Data Processing Addendum.</p>

                  <p><strong className="text-foreground">"Billing Period"</strong> is the time period stated in the relevant Order Form.</p>

                  <p><strong className="text-foreground">"Care Service"</strong> means each individual care home, home care branch, supported living facility or similar.</p>

                  <p><strong className="text-foreground">"Confidential Information"</strong> means the terms of this Agreement and any information disclosed by one party to the other that is marked as confidential or might reasonably be considered confidential.</p>

                  <p><strong className="text-foreground">"Customer Content"</strong> means any Branding, Inputs and Outputs.</p>

                  <p><strong className="text-foreground">"Fee"</strong> means the fees for the Services payable by the Customer at rates set out on the Order Form.</p>

                  <p><strong className="text-foreground">"Initial Term"</strong> is the time period stated in the relevant Order Form.</p>

                  <p><strong className="text-foreground">"Input"</strong> means any data or materials submitted by the Customer to the Products for processing.</p>

                  <p><strong className="text-foreground">"Intellectual Property Rights"</strong> means all trade secrets, patents, trademarks, copyrights, and all other intellectual property rights.</p>

                  <p><strong className="text-foreground">"Order Form"</strong> means any Order Form signed by the parties describing the Services, Fees, duration and other matters.</p>

                  <p><strong className="text-foreground">"Output"</strong> means any final output provided to the Customer arising from any Input.</p>

                  <p><strong className="text-foreground">"Products"</strong> means Maxxo's proprietary software, modules and associated configuration.</p>

                  <p><strong className="text-foreground">"Services"</strong> means the applicable Subscription Services.</p>

                  <p><strong className="text-foreground">"Term"</strong> is either an Initial Term or Renewal Term.</p>

                  <p><strong className="text-foreground">"User"</strong> means any individual who uses any features and functionality of the Maxxo Products or Services.</p>
                </div>
              </section>

              {/* Contact */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms & Conditions, please contact us:
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
