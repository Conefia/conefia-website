import React from 'react';
import PolicyLayout, { Section, BulletList } from '@/components/legal/PolicyLayout';

export default function Privacy() {
  return (
    <PolicyLayout title="Privacy Policy" effectiveDate="May 07, 2024" breadcrumb="Privacy Policy">
      <p className="text-gray-600 text-sm leading-relaxed">
        This Privacy Policy explains how Conefia collects, uses, discloses, stores, and otherwise processes personal information in connection with the Site and related online interactions.
      </p>

      <Section number="1" title="Scope">
        <p>This Privacy Policy applies to personal information collected through the Site, online forms, newsletter sign-ups, scheduling pages, downloads, sales inquiries, and similar online interactions.</p>
        <p className="mt-2">It does not govern information processed by Conefia solely on behalf of clients under separate service agreements, where Conefia acts as a processor, contractor, service provider, or vendor.</p>
      </Section>

      <Section number="2" title="Information We Collect">
        <p className="font-semibold text-gray-800 mb-1">A. Information You Provide Directly</p>
        <BulletList items={['Full name', 'Email address', 'Telephone number', 'Company name', 'Job title', 'Country, state, province, or region', 'Project details and inquiry details', 'Files, documents, and materials you choose to submit', 'Communications and other information you provide to us']} />
        <p className="font-semibold text-gray-800 mt-4 mb-1">B. Information Collected Automatically</p>
        <BulletList items={['IP address', 'Device type and device identifiers', 'Browser type and version', 'Operating system', 'Language preferences', 'Referring URLs', 'Pages viewed and time spent', 'Clicks, scrolling, session information, and interaction data', 'Approximate geolocation derived from IP address', 'Cookies, pixels, tags, and similar identifiers']} />
        <p className="font-semibold text-gray-800 mt-4 mb-1">C. Information from Third Parties</p>
        <p>We may receive personal information from analytics providers, CRM systems, scheduling tools, payment processors, advertising platforms, business partners, referral sources, and public professional sources.</p>
      </Section>

      <Section number="3" title="How We Use Personal Information">
        <BulletList items={[
          'Operate, maintain, secure, and improve the Site;',
          'Respond to inquiries and communicate with you;',
          'Book meetings, demos, or consultations;',
          'Provide proposals, services, support, or onboarding;',
          'Personalize content and improve user experience;',
          'Analyze traffic, conversions, campaign effectiveness, and business development performance;',
          'Send newsletters, updates, and marketing communications where permitted by law;',
          'Detect, prevent, investigate, and respond to fraud, misuse, or security incidents;',
          'Comply with legal obligations;',
          'Establish, exercise, or defend legal claims.',
        ]} />
      </Section>

      <Section number="4" title="Legal Bases for Processing">
        <BulletList items={[
          'Your consent;',
          'Performance of a contract or steps taken at your request before entering into a contract;',
          'Our legitimate interests in operating, securing, and improving our business;',
          'Compliance with legal obligations.',
        ]} />
      </Section>

      <Section number="5" title="Cookies and Similar Technologies">
        <p>We use cookies, pixels, tags, scripts, SDKs, and similar technologies for essential Site functions, security, analytics, performance measurement, functionality, personalization, and advertising or remarketing where permitted by law. You can manage cookies through your browser settings and, where available, through our cookie preference tools.</p>
      </Section>

      <Section number="6" title="How We Share Personal Information">
        <BulletList items={[
          'Hosting, cloud, analytics, CRM, scheduling, communications, customer support, security, development, and marketing vendors;',
          'Payment, invoicing, accounting, and bookkeeping providers;',
          'Legal, tax, audit, insurance, and other professional advisors;',
          'Affiliates, successors, acquirers, or counterparties in connection with a financing, reorganization, merger, acquisition, or sale of assets;',
          'Regulators, law enforcement, courts, or government authorities when required by law.',
        ]} />
        <p className="mt-3">We do not represent that we never "sell" or "share" personal information under every jurisdiction's statutory definitions. Where applicable law grants opt-out rights, we will honor those rights as required.</p>
      </Section>

      <Section number="7" title="International Transfers">
        <p>Personal information may be transferred to and processed in the United States and other jurisdictions where Conefia or its service providers operate. Where required by applicable law, we will use appropriate safeguards for cross-border transfers.</p>
      </Section>

      <Section number="8" title="Data Retention">
        <p>We retain personal information for as long as reasonably necessary for the purposes described in this Privacy Policy, including to provide services, maintain business records, comply with legal obligations, resolve disputes, and enforce agreements.</p>
      </Section>

      <Section number="9" title="Data Security">
        <p>We use commercially reasonable administrative, technical, and organizational safeguards designed to protect personal information. However, no method of transmission, storage, or security is perfect, and we cannot guarantee absolute security.</p>
      </Section>

      <Section number="10" title="Children's Privacy">
        <p>The Site is not directed to children under 13, and we do not knowingly collect personal information from children under 13 through the Site.</p>
      </Section>

      <Section number="11" title="Your Privacy Rights">
        <BulletList items={[
          'Request access to personal information;',
          'Request correction of inaccurate personal information;',
          'Request deletion of personal information;',
          'Object to or restrict certain processing;',
          'Withdraw consent where processing is based on consent;',
          'Request portability where applicable;',
          'Opt out of certain marketing communications or targeted-advertising uses.',
        ]} />
        <p className="mt-3">To exercise privacy rights, contact us at <a href="mailto:info@conefia.com" className="underline hover:text-[#DBFE01] transition-colors">info@conefia.com</a>. We may need to verify your identity before processing your request.</p>
      </Section>

      <Section number="12" title="EEA, UK, and Similar Jurisdictions">
        <p>If you are located in the EEA, UK, or another jurisdiction with similar privacy protections, you may have rights to access, rectify, erase, restrict, object to processing, and request portability of your personal data, subject to applicable law. You may also have the right to lodge a complaint with your local supervisory authority.</p>
      </Section>

      <Section number="13" title="California Privacy Notice">
        <p>If you are a California resident, you may have rights under California privacy law, including rights to know, delete, correct, and opt out of certain sales or sharing.</p>
        <p className="font-semibold text-gray-800 mt-3 mb-1">Categories of Personal Information We May Collect</p>
        <BulletList items={['Identifiers', 'Internet or electronic network activity information', 'Commercial information', 'Approximate geolocation derived from IP address', 'Professional or employment-related information', 'Communications content', 'Inferences drawn from browsing or engagement behavior']} />
        <p className="mt-3">California residents may submit requests to <a href="mailto:info@conefia.com" className="underline hover:text-[#DBFE01] transition-colors">info@conefia.com</a>.</p>
      </Section>

      <Section number="14" title="Marketing Communications">
        <p>You may opt out of promotional emails by using the unsubscribe link in the message or by contacting us at <a href="mailto:info@conefia.com" className="underline hover:text-[#DBFE01] transition-colors">info@conefia.com</a>. Transactional or relationship messages may still be sent where permitted.</p>
      </Section>

      <Section number="15" title="Do Not Track and Preference Signals">
        <p>Our Site may not respond to browser "Do Not Track" signals consistently. Where required by applicable law and implemented technically, we may honor recognized opt-out preference signals.</p>
      </Section>

      <Section number="16" title="Third-Party Sites">
        <p>This Privacy Policy does not apply to third-party websites, services, or content that may be linked from the Site.</p>
      </Section>

      <Section number="17" title="Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. Updated versions will be posted on this page with a revised effective date or last updated date.</p>
      </Section>
    </PolicyLayout>
  );
}