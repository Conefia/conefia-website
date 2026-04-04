import React from 'react';
import PolicyLayout, { Section } from '@/components/legal/PolicyLayout';

export default function ContactLegal() {
  return (
    <PolicyLayout title="Contact and Legal Notice" effectiveDate="May 07, 2024" breadcrumb="Contact and Legal Notice">
      <p className="text-gray-600 text-sm leading-relaxed">
        Conefia LLC, d/b/a Conefia Technologies, is a Michigan limited liability company authorized to transact business in North Carolina.
      </p>

      <Section number="1" title="Business Address">
        <p>6272 Saginaw Road #1136<br />Grand Blanc, MI 48439<br />United States</p>
      </Section>

      <Section number="2" title="General, Legal, and Privacy Contact">
        <p><a href="mailto:info@conefia.com" className="underline hover:text-[#DBFE01] transition-colors">info@conefia.com</a></p>
      </Section>

      <Section number="3" title="DMCA Notices">
        <p><a href="mailto:info@conefia.com" className="underline hover:text-[#DBFE01] transition-colors">info@conefia.com</a></p>
      </Section>
    </PolicyLayout>
  );
}