import React from 'react';
import PolicyLayout, { Section, BulletList } from '@/components/legal/PolicyLayout';

export default function AcceptableUsePolicy() {
  return (
    <PolicyLayout title="Acceptable Use Policy" effectiveDate="May 07, 2024" breadcrumb="Acceptable Use Policy">
      <p className="text-gray-600 text-sm leading-relaxed">
        This Acceptable Use Policy governs your use of the Site and any related demos, forms, downloads, portals, sandboxes, or trial experiences made available by Conefia.
      </p>

      <Section number="1" title="Prohibited Uses">
        <p>You may not use the Site or related services to:</p>
        <BulletList items={[
          'Violate any law or regulation;',
          'Infringe intellectual property, privacy, publicity, or other rights;',
          'Submit unlawful, deceptive, fraudulent, harassing, hateful, abusive, or harmful content;',
          'Send spam, phishing messages, malware, or malicious code;',
          'Scrape or extract data without authorization;',
          'Gain unauthorized access to any system or network;',
          'Interfere with performance, integrity, or security;',
          'Impersonate another person or entity;',
          'Benchmark, train, improve, or build competing systems using Conefia content or systems;',
          'Facilitate discrimination, unlawful surveillance, exploitation, or harmful automated decision-making.',
        ]} />
      </Section>

      <Section number="2" title="Enforcement">
        <p>Conefia may investigate suspected violations and suspend, restrict, or terminate access without notice. We reserve the right to report violations to law enforcement or regulatory authorities where appropriate.</p>
      </Section>

      <Section number="3" title="Changes to This Policy">
        <p>We may update this policy from time to time. Updated versions will be posted on this page with a revised effective date. Continued use of the Site after changes become effective constitutes acceptance of the updated policy.</p>
      </Section>
    </PolicyLayout>
  );
}