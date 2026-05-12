import React from 'react';
import PolicyLayout, { Section, BulletList } from '@/components/legal/PolicyLayout';

export default function CopyrightPolicy() {
  return (
    <PolicyLayout title="Copyright Policy & DMCA Notice" effectiveDate="May 07, 2024" breadcrumb="Copyright Policy">
      <p className="text-gray-600 text-sm leading-relaxed">
        Conefia respects the intellectual property rights of others and expects users of the Site to do the same.
      </p>

      <Section number="1" title="Conefia Copyright Ownership">
        <p>All copyrightable materials created, developed, authored, modified, configured, compiled, arranged, or delivered by Conefia are owned by Conefia, including without limitation website content, copy, graphics, designs, documentation, software, source code, object code, prompts, workflows, models, templates, dashboards, reports, marketing materials, product materials, AI-assisted outputs, and project deliverables.</p>
        <p className="mt-2">Where a statement of work, proposal, order form, invoice, purchase order, or project document is silent regarding copyright ownership, this Copyright Policy and Conefia's Intellectual Property Policy apply. Delivery, access, payment, deployment, repository access, credential transfer, handoff, or operational use does not transfer copyright ownership to any client or third party.</p>
        <p className="mt-2">Subject to full payment and compliance with applicable terms, a client receives only a non-exclusive, perpetual, non-transferable, non-sublicensable license to use the final project deliverables for the client's internal business operations and intended project purpose.</p>
        <p className="mt-2">Conefia reserves the right to reuse, modify, adapt, improve, commercialize, license, resell, distribute, and create derivative works from any code, software, prompts, workflows, models, templates, methods, frameworks, systems, and other copyrightable materials created, developed, or used by Conefia, provided that Conefia does not disclose the client's confidential information or personal data.</p>
      </Section>

      <Section number="2" title="DMCA Notices">
        <p>If you believe that content on the Site infringes your copyright, you may send a notice under the Digital Millennium Copyright Act ("DMCA").</p>
      </Section>

      <Section number="3" title="Designated Agent">
        <BulletList items={[
          'Designated Agent: Yassen Eltayeb',
          'Company: Conefia LLC, d/b/a Conefia Technologies',
          'Address: 6272 Saginaw Road #1136, Grand Blanc, MI 48439, United States',
          'Email: info@conefia.com',
        ]} />
      </Section>

      <Section number="4" title="Notice Requirements">
        <p>A DMCA notice should include:</p>
        <BulletList items={[
          'Identification of the copyrighted work claimed to be infringed;',
          'Identification of the allegedly infringing material and its location on the Site;',
          'Your contact information;',
          'A statement that you have a good-faith belief the use is not authorized by the copyright owner, its agent, or the law;',
          'A statement, under penalty of perjury, that the information in the notice is accurate and that you are authorized to act;',
          'Your physical or electronic signature.',
        ]} />
      </Section>

      <Section number="5" title="Counter-Notice">
        <p>If you believe material was removed or disabled by mistake or misidentification, you may send a counter-notice including:</p>
        <BulletList items={[
          'Identification of the removed material and its prior location;',
          'Your contact information;',
          'A statement under penalty of perjury that you believe removal was a mistake or misidentification;',
          'A statement consenting to the jurisdiction of the appropriate court;',
          'Your physical or electronic signature.',
        ]} />
      </Section>

      <Section number="6" title="Repeat Infringers">
        <p>Where appropriate, Conefia may suspend or terminate access for repeat infringers.</p>
      </Section>

      <Section number="7" title="Misrepresentations">
        <p>Any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability.</p>
      </Section>
    </PolicyLayout>
  );
}