import React from 'react';
import PolicyLayout, { Section } from '@/components/legal/PolicyLayout';

export default function SubmissionConfidentiality() {
  return (
    <PolicyLayout title="Submission and Confidentiality Notice" effectiveDate="May 07, 2024" breadcrumb="Submission and Confidentiality Notice">
      <p className="text-gray-600 text-sm leading-relaxed">
        Unless Conefia has expressly agreed otherwise in a signed written nondisclosure agreement or services agreement, information you submit through the Site, including inquiries, ideas, concepts, project materials, feature suggestions, decks, product requests, business proposals, or technical materials, will not be treated as confidential.
      </p>

      <Section number="1" title="Non-Confidential Submissions">
        <p>Do not submit confidential, sensitive, regulated, proprietary, export-controlled, or third-party-restricted information through public forms unless an appropriate written agreement is already in place.</p>
      </Section>

      <Section number="2" title="No Obligation to Review">
        <p>Conefia has no obligation to review or compensate unsolicited submissions. Any ideas, suggestions, or materials you submit may be used by Conefia for any lawful purpose without compensation, attribution, or notice, unless otherwise agreed in writing.</p>
      </Section>

      <Section number="3" title="Written Agreements">
        <p>Confidential treatment of submitted materials requires a separate signed written nondisclosure or services agreement with Conefia. The act of submitting materials through the Site does not create such an agreement or any confidentiality obligation.</p>
      </Section>

      <Section number="4" title="Changes to This Notice">
        <p>We may update this notice from time to time. Updated versions will be posted on this page with a revised effective date.</p>
      </Section>
    </PolicyLayout>
  );
}