'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

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
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">

              {/* 1. Introduction and Acceptance */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">1. Introduction and Acceptance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Use (&quot;Terms&quot;) constitute a legally binding agreement between you and Maxxo.ai (&quot;Maxxo&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) governing your access to and use of the Maxxo platform, including our website (maxxo.ai), web application (app.maxxo.ai), APIs, and related services (collectively, the &quot;Platform&quot;).
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  By creating an account, accessing, or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>. If you do not agree to these Terms, you must not use the Platform.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  If you are entering into these Terms on behalf of an organisation, you represent and warrant that you have the authority to bind that organisation to these Terms. In such cases, &quot;you&quot; and &quot;your&quot; refer to that organisation.
                </p>
                <div className="mt-4 p-4 bg-muted/30 rounded-xl">
                  <p className="text-foreground font-medium">For Paying Customers:</p>
                  <p className="text-muted-foreground mt-1">If you become a paying customer, your use of the Platform will also be governed by a separate commercial agreement (the &quot;Subscription Agreement&quot;), which will prevail over these Terms to the extent of any inconsistency.</p>
                </div>
              </section>

              {/* 2. Definitions */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">2. Definitions</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">In these Terms:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">&quot;AI Assistants&quot;</span> means our artificial intelligence-powered features including Website Assistant, Text Assistant, Voice Assistant, and any other AI-driven functionality.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">&quot;Care Home&quot;</span> means a residential care facility, nursing home, or similar establishment registered with the Care Quality Commission or equivalent regulatory body.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">&quot;Client&quot;</span> means a Care Home or organisation that has entered into a Subscription Agreement with Maxxo.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">&quot;Enquirer&quot;</span> means a prospective resident, family member, or other individual who interacts with a Care Home through the Platform.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">&quot;Enquiry Data&quot;</span> means personal data and information submitted by or relating to Enquirers through the Platform.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">&quot;Fees&quot;</span> means the charges payable for use of the Platform as set out in the Subscription Agreement.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">&quot;Knowledge Base&quot;</span> means the content, documents, and information uploaded by you to train and inform the AI Assistants.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">&quot;User&quot;</span> means any individual who accesses or uses the Platform, including account holders and team members.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">&quot;Your Content&quot;</span> means all data, information, documents, and materials you upload, submit, or transmit through the Platform.</p>
                  </div>
                </div>
              </section>

              {/* 3. Eligibility and Account Registration */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">3. Eligibility and Account Registration</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">3.1 Eligibility</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">To use the Platform, you must:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Be at least 18 years of age</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Have the legal capacity to enter into binding contracts</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Not be prohibited from using the Platform under applicable law</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">If acting on behalf of an organisation, have authority to bind that organisation</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">3.2 Account Registration</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  When creating an account, you must provide accurate, current, and complete information. You agree to promptly update your account information to keep it accurate and complete.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">You are responsible for:</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Maintaining the confidentiality of your account credentials</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">All activities that occur under your account</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Immediately notifying us of any unauthorised use of your account</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We reserve the right to refuse registration, suspend, or terminate accounts at our discretion.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">3.3 Team Members</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">If you invite team members to access your account, you are responsible for:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Ensuring they comply with these Terms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Their actions on the Platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Promptly removing access when team members leave your organisation</p>
                  </div>
                </div>
              </section>

              {/* 4. Licence and Access */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">4. Licence and Access</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">4.1 Licence Grant</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Platform solely for your internal business purposes in connection with managing Care Home enquiries.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">4.2 Licence Restrictions</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">You must not:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Sublicense, sell, resell, transfer, assign, or distribute the Platform or any rights to it</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Modify, copy, or create derivative works based on the Platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Reverse engineer, disassemble, decompile, or otherwise attempt to derive the source code of the Platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Access the Platform to build a competitive product or service</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Use the Platform on behalf of any third party without our prior written consent</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Remove, obscure, or alter any proprietary notices on the Platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Access the Platform through any automated means (bots, scrapers) except through our published APIs</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">4.3 Usage Limits</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of the Platform may be subject to usage limits specified in your Subscription Agreement, including limits on conversations, homes, team members, or features.
                </p>
              </section>

              {/* 5. Acceptable Use */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">5. Acceptable Use</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">5.1 General Conduct</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You agree to use the Platform only for lawful purposes and in accordance with these Terms. You must not use the Platform in any way that:
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Violates any applicable law, regulation, or third-party rights</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Is fraudulent, false, misleading, or deceptive</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Is defamatory, obscene, offensive, or promotes hatred or discrimination</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Infringes any intellectual property, privacy, or other proprietary rights</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Introduces viruses, malware, or other harmful code</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Interferes with or disrupts the Platform or its infrastructure</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Attempts to gain unauthorised access to any part of the Platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Places unreasonable load on our systems or infrastructure</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">5.2 Prohibited Uses</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">Without limiting the above, you must not use the Platform to:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Provide medical, clinical, or healthcare advice to Enquirers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Make representations about Care Home services that are false or misleading</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Discriminate against Enquirers on any protected grounds</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Collect or process data about Enquirers for purposes unrelated to Care Home services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Send unsolicited marketing communications (spam) through our messaging features</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Harass, threaten, or intimidate any person</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Impersonate any person or entity</p>
                  </div>
                </div>
              </section>

              {/* 6. Care Sector Obligations */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">6. Care Sector Obligations</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">6.1 Regulatory Compliance</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">You acknowledge and agree that:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">You are solely responsible for ensuring your use of the Platform complies with all applicable laws, regulations, and regulatory requirements, including but not limited to Care Quality Commission (CQC) standards and requirements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">The Platform is a tool to assist with enquiry management and does not replace your obligations as a registered Care Home provider</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">You must maintain appropriate human oversight of all AI-generated communications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">You are responsible for the accuracy and appropriateness of information in your Knowledge Base</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">AI Assistants are not a substitute for professional care assessments, and you must conduct appropriate assessments before admitting any resident</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">6.2 Enquirer Interactions</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">When using AI Assistants to communicate with Enquirers, you must:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Ensure Enquirers are informed they are interacting with AI where required by law or regulation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Review AI-generated content for accuracy and appropriateness</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Maintain records of communications as required by CQC or other regulators</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Promptly escalate matters requiring human intervention</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Not use AI Assistants for emergency or safeguarding situations that require immediate human response</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">6.3 Data Protection</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You are the data controller for Enquiry Data processed through the Platform. You are responsible for:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Having a lawful basis for collecting and processing Enquiry Data</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Providing appropriate privacy notices to Enquirers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Responding to data subject requests relating to Enquiry Data</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Ensuring your use of the Platform complies with UK GDPR and the Data Protection Act 2018</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our data processing activities as your processor are governed by our Data Processing Agreement.
                </p>
              </section>

              {/* 7. AI-Generated Content and Automated Services */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">7. AI-Generated Content and Automated Services</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">7.1 Nature of AI Services</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The Platform uses artificial intelligence to generate responses, analyse data, and automate communications. You acknowledge and agree that:
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">AI-generated content may occasionally be inaccurate, incomplete, inappropriate, or out of date</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">AI outputs are generated based on patterns in training data and your Knowledge Base, and may not reflect current facts or circumstances</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">The quality of AI outputs depends significantly on the quality and completeness of your Knowledge Base</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">We continuously develop and update our AI systems, which may affect their behaviour</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">7.2 Your Responsibilities</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">You are solely responsible for:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Reviewing all AI-generated content before relying on it or allowing it to be sent to Enquirers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Maintaining accurate and up-to-date information in your Knowledge Base</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Configuring AI Assistants appropriately for your needs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Implementing appropriate human oversight and intervention processes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Any decisions made based on AI-generated content or recommendations</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">7.3 Voice Assistant Specific Terms</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">If you use our Voice Assistant:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Call recordings are made for quality assurance and transcription purposes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Callers are informed of recording at the start of each call</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">You are responsible for complying with call recording laws in your jurisdiction</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Voice synthesis is used to generate spoken responses, and callers are informed they are speaking with an AI</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">7.4 No Warranties on AI Output</h3>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">
                    WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE ACCURACY, COMPLETENESS, RELIABILITY, OR SUITABILITY OF AI-GENERATED CONTENT FOR ANY PURPOSE. AI OUTPUTS ARE PROVIDED &quot;AS IS&quot; AND SHOULD NOT BE RELIED UPON FOR DECISIONS AFFECTING HEALTH, SAFETY, LEGAL RIGHTS, OR FINANCIAL INTERESTS WITHOUT INDEPENDENT VERIFICATION AND APPROPRIATE PROFESSIONAL ADVICE.
                  </p>
                </div>
              </section>

              {/* 8. Your Content and Data */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">8. Your Content and Data</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">8.1 Ownership</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  You retain all ownership rights in Your Content. Nothing in these Terms transfers ownership of Your Content to us.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">8.2 Licence to Your Content</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  By uploading Your Content to the Platform, you grant us a limited, non-exclusive, worldwide, royalty-free licence to use, copy, store, process, and display Your Content solely for the purposes of:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Providing the Platform and services to you</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Improving the Platform (using aggregated, anonymised data only)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Complying with legal obligations</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This licence continues only for as long as necessary to provide the services and fulfil our legal obligations.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">8.3 Your Representations</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">You represent and warrant that:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">You own or have all necessary rights to Your Content</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Your Content does not infringe any third party&apos;s intellectual property, privacy, or other rights</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Your Content does not violate any applicable law</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">You have obtained all necessary consents from individuals whose personal data is included in Your Content</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">8.4 Content Monitoring</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We do not routinely monitor Your Content but reserve the right to review, remove, or disable access to any content that we reasonably believe violates these Terms or applicable law.
                </p>
              </section>

              {/* 9. Intellectual Property */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">9. Intellectual Property</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">9.1 Our Intellectual Property</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Platform, including its software, design, graphics, user interface, content, and all related intellectual property rights, is owned by or licensed to Maxxo and is protected by copyright, trademark, patent, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Maxxo name, logo, and all related names, logos, product and service names, designs, and slogans are our trademarks. You must not use these marks without our prior written consent.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">9.2 Feedback</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you provide suggestions, ideas, or feedback about the Platform (&quot;Feedback&quot;), you grant us a perpetual, irrevocable, worldwide, royalty-free licence to use, modify, and incorporate such Feedback into the Platform without any obligation to you.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">9.3 Reservation of Rights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All rights not expressly granted to you in these Terms are reserved by us.
                </p>
              </section>

              {/* 10. Third-Party Services */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">10. Third-Party Services</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">10.1 Third-Party Integrations</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Platform integrates with and relies upon third-party services, including cloud infrastructure providers, AI model providers, communication services (SMS, WhatsApp, voice), and payment processors.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">10.2 Third-Party Terms</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your use of the Platform may be subject to the terms and conditions of these third-party services. You are responsible for complying with any applicable third-party terms.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">10.3 No Liability for Third Parties</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We are not responsible for the availability, accuracy, or reliability of third-party services. We shall have no liability for any failure, interruption, or degradation of the Platform caused by third-party service issues.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">10.4 External Links</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Platform may contain links to third-party websites or services. These links are provided for convenience only, and we do not endorse or accept responsibility for their content or practices.
                </p>
              </section>

              {/* 11. Fees and Payment */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">11. Fees and Payment</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">11.1 Subscription Fees</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you are a paying Client, Fees and payment terms are set out in your Subscription Agreement.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">11.2 Taxes</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  All Fees are exclusive of VAT and other applicable taxes unless stated otherwise. You are responsible for paying all applicable taxes.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">11.3 Payment Failure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If payment fails, we may suspend or restrict your access to the Platform until payment is received. We reserve the right to charge interest on overdue amounts at 4% above the Bank of England base rate.
                </p>
              </section>

              {/* 12. Confidentiality */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">12. Confidentiality</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">12.1 Confidential Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Each party may receive confidential information from the other party in connection with these Terms. &quot;Confidential Information&quot; includes non-public information about the disclosing party&apos;s business, technology, pricing, customers, and any information marked confidential.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">12.2 Obligations</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">The receiving party agrees to:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Keep Confidential Information confidential using at least the same degree of care it uses for its own confidential information</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Use Confidential Information only for purposes related to these Terms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Not disclose Confidential Information to third parties except to employees, contractors, or advisors who need to know and are bound by confidentiality obligations</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">12.3 Exceptions</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">Confidentiality obligations do not apply to information that:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Is or becomes publicly available through no fault of the receiving party</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Was already known to the receiving party before disclosure</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Is independently developed by the receiving party</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Is disclosed with the prior written consent of the disclosing party</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Must be disclosed by law or regulatory requirement (with prompt notice to the disclosing party where permitted)</p>
                  </div>
                </div>
              </section>

              {/* 13. Service Availability */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">13. Service Availability</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">13.1 Availability</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We aim to maintain high availability of the Platform but do not guarantee uninterrupted access. The Platform may be unavailable due to:
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Scheduled maintenance (we will endeavour to provide advance notice)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Emergency maintenance or security updates</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Factors outside our reasonable control</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Third-party service outages</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">13.2 Service Levels</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you are a paying Client, service level commitments may be set out in your Subscription Agreement.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">13.3 Modifications</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may modify, update, or discontinue any feature of the Platform at any time. We will provide reasonable notice of material changes that negatively affect your use of the Platform.
                </p>
              </section>

              {/* 14. Disclaimer of Warranties */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">14. Disclaimer of Warranties</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">14.1 &quot;As Is&quot; Basis</h3>
                <div className="p-4 bg-muted/30 rounded-xl mb-6">
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE PLATFORM IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY.
                  </p>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">14.2 Specific Disclaimers</h3>
                <div className="p-4 bg-muted/30 rounded-xl mb-6">
                  <p className="text-muted-foreground text-sm uppercase tracking-wide mb-3">
                    WITHOUT LIMITING THE FOREGOING, WE SPECIFICALLY DISCLAIM ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide mb-2">WE DO NOT WARRANT THAT:</p>
                  <ul className="text-muted-foreground text-sm uppercase tracking-wide space-y-1 list-disc list-inside">
                    <li>THE PLATFORM WILL MEET YOUR REQUIREMENTS</li>
                    <li>THE PLATFORM WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE</li>
                    <li>THE RESULTS OBTAINED FROM THE PLATFORM WILL BE ACCURATE OR RELIABLE</li>
                    <li>ANY ERRORS IN THE PLATFORM WILL BE CORRECTED</li>
                  </ul>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">14.3 Statutory Rights</h3>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">
                    NOTHING IN THESE TERMS AFFECTS ANY STATUTORY RIGHTS THAT CANNOT BE WAIVED OR LIMITED BY CONTRACT UNDER APPLICABLE LAW.
                  </p>
                </div>
              </section>

              {/* 15. Limitation of Liability */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">15. Limitation of Liability</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">15.1 Exclusion of Certain Damages</h3>
                <div className="p-4 bg-muted/30 rounded-xl mb-6">
                  <p className="text-muted-foreground text-sm uppercase tracking-wide mb-3">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MAXXO, ITS DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY:
                  </p>
                  <ul className="text-muted-foreground text-sm uppercase tracking-wide space-y-1 list-disc list-inside mb-3">
                    <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                    <li>LOSS OF PROFITS, REVENUE, BUSINESS, OR ANTICIPATED SAVINGS</li>
                    <li>LOSS OF DATA OR GOODWILL</li>
                    <li>COSTS OF PROCUREMENT OF SUBSTITUTE SERVICES</li>
                  </ul>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">
                    WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  </p>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">15.2 Liability Cap</h3>
                <div className="p-4 bg-muted/30 rounded-xl mb-6">
                  <p className="text-muted-foreground text-sm uppercase tracking-wide mb-3">
                    SUBJECT TO SECTION 15.4, OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE PLATFORM SHALL NOT EXCEED THE GREATER OF:
                  </p>
                  <ul className="text-muted-foreground text-sm uppercase tracking-wide space-y-1 list-disc list-inside">
                    <li>THE TOTAL FEES PAID BY YOU TO US IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE CLAIM; OR</li>
                    <li>ONE HUNDRED POUNDS (£100)</li>
                  </ul>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">15.3 Application</h3>
                <div className="p-4 bg-muted/30 rounded-xl mb-6">
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">
                    THE LIMITATIONS IN THIS SECTION APPLY EVEN IF ANY REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
                  </p>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">15.4 Exclusions</h3>
                <div className="p-4 bg-muted/30 rounded-xl mb-6">
                  <p className="text-muted-foreground text-sm uppercase tracking-wide mb-3">
                    NOTHING IN THESE TERMS SHALL LIMIT OR EXCLUDE LIABILITY FOR:
                  </p>
                  <ul className="text-muted-foreground text-sm uppercase tracking-wide space-y-1 list-disc list-inside">
                    <li>DEATH OR PERSONAL INJURY CAUSED BY NEGLIGENCE</li>
                    <li>FRAUD OR FRAUDULENT MISREPRESENTATION</li>
                    <li>ANY OTHER LIABILITY THAT CANNOT BE LIMITED OR EXCLUDED BY APPLICABLE LAW</li>
                  </ul>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">15.5 Allocation of Risk</h3>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">
                    YOU ACKNOWLEDGE THAT THE FEES REFLECT THE ALLOCATION OF RISK SET FORTH IN THESE TERMS AND THAT WE WOULD NOT ENTER INTO THESE TERMS WITHOUT THESE LIMITATIONS ON LIABILITY.
                  </p>
                </div>
              </section>

              {/* 16. Indemnification */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">16. Indemnification</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">16.1 Your Indemnification Obligations</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You agree to indemnify, defend, and hold harmless Maxxo, its director, officers, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to:
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Your use of the Platform in violation of these Terms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Your breach of any representation or warranty in these Terms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Your Content, including any claim that Your Content infringes third-party rights</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Your violation of any applicable law or regulation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Your interactions with Enquirers through the Platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Any claim by an Enquirer relating to your Care Home&apos;s services or your use of the Platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Any regulatory investigation, enforcement action, or penalty arising from your use of the Platform</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">16.2 Indemnification Process</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We will promptly notify you of any claim subject to indemnification, allow you to control the defence (provided you do not settle without our consent), and provide reasonable assistance at your expense.
                </p>
              </section>

              {/* 17. Term and Termination */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">17. Term and Termination</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">17.1 Term</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  These Terms commence when you create an account or first access the Platform and continue until terminated.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">17.2 Termination by You</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  You may request termination of your account at any time by contacting us at support@maxxo.ai. For paying Clients, termination is subject to the terms of your Subscription Agreement, including any minimum commitment periods.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">17.3 Termination by Us</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">We may suspend or terminate your access to the Platform immediately if:</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">You breach any material provision of these Terms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">You fail to pay Fees when due (for paying Clients)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">We are required to do so by law</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">We reasonably believe your use of the Platform poses a security risk or may harm other users</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Your account has been inactive for an extended period</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We may also terminate these Terms for convenience upon thirty (30) days&apos; written notice.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">17.4 Effect of Termination</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">Upon termination:</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Your right to access and use the Platform ceases immediately</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">You must cease all use of the Platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Any outstanding Fees become immediately due (for paying Clients)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">We may delete Your Content and data in accordance with our Privacy Policy and any applicable data retention requirements</p>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">17.5 Survival</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sections that by their nature should survive termination will survive, including Sections 8 (Your Content), 9 (Intellectual Property), 10 (Third-Party Services), 12 (Confidentiality), 14 (Disclaimer of Warranties), 15 (Limitation of Liability), 16 (Indemnification), 18 (General Provisions), and 19 (Governing Law).
                </p>
              </section>

              {/* 18. General Provisions */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">18. General Provisions</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">18.1 Entire Agreement</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  These Terms, together with the Privacy Policy and any Subscription Agreement, constitute the entire agreement between you and Maxxo regarding your use of the Platform and supersede all prior agreements and understandings.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">18.2 Amendments</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We may amend these Terms at any time by posting the updated Terms on our website. We will notify you of material changes by email or through the Platform at least thirty (30) days before they take effect. Your continued use of the Platform after the effective date constitutes acceptance of the amended Terms. If you do not agree to the amended Terms, you must stop using the Platform.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">18.3 Assignment</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  You may not assign or transfer these Terms or any rights or obligations hereunder without our prior written consent. We may assign these Terms without your consent in connection with a merger, acquisition, corporate reorganisation, or sale of all or substantially all of our assets.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">18.4 Waiver</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  No waiver of any provision of these Terms shall be effective unless in writing and signed by the waiving party. No failure or delay in exercising any right shall operate as a waiver or preclude any future exercise of that right.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">18.5 Severability</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its intent.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">18.6 No Partnership</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship between you and Maxxo.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">18.7 Third-Party Rights</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  These Terms do not confer any rights on any third party under the Contracts (Rights of Third Parties) Act 1999 or otherwise.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">18.8 Force Majeure</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including natural disasters, war, terrorism, strikes, government actions, or failures of third-party services or infrastructure.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">18.9 Notices</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notices to Maxxo must be sent to legal@maxxo.ai. Notices to you will be sent to the email address associated with your account. Notices are deemed received when sent by email.
                </p>
              </section>

              {/* 19. Governing Law and Disputes */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">19. Governing Law and Disputes</h2>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">19.1 Governing Law</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  These Terms and any disputes arising out of or in connection with them shall be governed by and construed in accordance with the laws of England and Wales.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">19.2 Jurisdiction</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The courts of England and Wales shall have exclusive jurisdiction to settle any dispute arising out of or in connection with these Terms.
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">19.3 Informal Resolution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Before initiating any formal dispute resolution, you agree to contact us at legal@maxxo.ai to attempt to resolve any dispute informally. We will attempt to resolve disputes within thirty (30) days of receipt of notice.
                </p>
              </section>

              {/* 20. Contact Us */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">20. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <p className="text-foreground font-medium">Email: legal@maxxo.ai</p>
                  <p className="text-muted-foreground mt-2"><span className="text-foreground font-medium">For Support:</span> support@maxxo.ai</p>
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
