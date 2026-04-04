import React from 'react';
import PolicyLayout, { Section, BulletList } from '@/components/legal/PolicyLayout';

export default function Cookies() {
  return (
    <PolicyLayout title="Cookie Policy" effectiveDate="May 07, 2024" breadcrumb="Cookie Policy">
      <p className="text-gray-600 text-sm leading-relaxed">
        This Cookie Policy explains how Conefia uses cookies and similar technologies on the Site.
      </p>

      <Section number="1" title="What Are Cookies">
        <p>Cookies are small text files stored on your device. We may also use pixels, tags, scripts, SDKs, local storage, and similar technologies.</p>
      </Section>

      <Section number="2" title="Types of Cookies We Use">
        <p>We may use:</p>
        <BulletList items={[
          'Strictly Necessary Cookies — for core Site operation, security, fraud prevention, and administration;',
          'Analytics Cookies — to understand traffic, engagement, and performance;',
          'Functional Cookies — to remember preferences and settings;',
          'Advertising Cookies — to support campaign measurement, attribution, remarketing, and similar marketing uses where permitted by law.',
        ]} />
      </Section>

      <Section number="3" title="Why We Use Them">
        <BulletList items={[
          'Keep the Site working properly;',
          'Secure the Site and protect against abuse;',
          'Understand Site usage and improve performance;',
          'Remember preferences;',
          'Measure the effectiveness of campaigns and content.',
        ]} />
      </Section>

      <Section number="4" title="Your Choices">
        <p>You may block or delete cookies through your browser settings. If we make a cookie banner or preference center available, you may manage non-essential cookies there as well.</p>
        <p className="mt-2">Disabling certain cookies may affect Site functionality.</p>
      </Section>

      <Section number="5" title="Third-Party Technologies">
        <p>Some cookies or similar technologies may be placed by third-party providers such as analytics, scheduling, CRM, marketing, embedded media, or advertising vendors, subject to their own policies.</p>
      </Section>

      <Section number="6" title="Changes">
        <p>We may update this Cookie Policy from time to time by posting a revised version on the Site.</p>
      </Section>
    </PolicyLayout>
  );
}