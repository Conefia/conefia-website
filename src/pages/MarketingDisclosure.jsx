import React from 'react';
import PolicyLayout, { Section, BulletList } from '@/components/legal/PolicyLayout';

export default function MarketingDisclosure() {
  return (
    <PolicyLayout title="Marketing and Testimonials Disclosure Policy" effectiveDate="May 07, 2024" breadcrumb="Marketing and Testimonials Disclosure">
      <p className="text-gray-600 text-sm leading-relaxed">
        Conefia strives to ensure that statements on the Site and in its digital marketing are truthful, not misleading, and appropriately qualified.
      </p>

      <Section number="1" title="General Disclosures">
        <p>Case studies, testimonials, portfolio examples, timelines, growth metrics, conversion figures, projections, and results shown on the Site are illustrative unless expressly stated otherwise. Past performance does not guarantee future results.</p>
      </Section>

      <Section number="2" title="Client Results">
        <p>Any client outcome described on the Site depends on numerous variables, including project scope, implementation quality, market conditions, staffing, compliance requirements, ad spend, timing, customer behavior, and client responsiveness.</p>
        <p className="mt-2">Results described reflect individual engagements and are not a promise or guarantee of similar outcomes for any current or future client.</p>
      </Section>

      <Section number="3" title="Testimonials and Endorsements">
        <p>Testimonials reflect individual experiences and may not be representative of all clients. If any endorsement, testimonial, affiliate mention, or review is compensated, incentivized, or provided by a person with a material connection to Conefia, we will disclose that connection as required by applicable law.</p>
      </Section>

      <Section number="4" title="Projections and Forward-Looking Statements">
        <p>Any projections, estimates, timelines, or forward-looking statements on the Site are based on assumptions and are subject to risk and uncertainty. They are not guarantees of future performance, revenue, or outcomes.</p>
      </Section>

      <Section number="5" title="Accuracy and Updates">
        <p>We make reasonable efforts to keep the Site accurate and current. However, content may become outdated, and we make no representation that all information is current, complete, or error-free at any given time.</p>
      </Section>

      <Section number="6" title="Changes to This Policy">
        <p>We may update this policy from time to time. Updated versions will be posted on this page with a revised effective date.</p>
      </Section>
    </PolicyLayout>
  );
}