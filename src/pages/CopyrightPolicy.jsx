import React from 'react';
import PolicyLayout, { Section, BulletList } from '@/components/legal/PolicyLayout';

export default function CopyrightPolicy() {
  return (
    <PolicyLayout title="Copyright Policy & DMCA Notice" effectiveDate="May 07, 2024" breadcrumb="Copyright Policy">
      <p className="text-gray-600 text-sm leading-relaxed">
        Conefia respects the intellectual property rights of others and expects users of the Site to do the same. If you believe that content on the Site infringes your copyright, you may send a notice under the Digital Millennium Copyright Act ("DMCA").
      </p>

      <Section number="1" title="Designated Agent">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800 mb-3">
          <strong>Note:</strong> Publish the agent details below only after Conefia has registered its designated agent with the U.S. Copyright Office.
        </div>
        <BulletList items={[
          'Designated Agent: [Insert Name]',
          'Company: Conefia LLC, d/b/a Conefia Technologies',
          'Address: 6272 Saginaw Road #1136, Grand Blanc, MI 48439, United States',
          'Email: info@conefia.com',
        ]} />
      </Section>

      <Section number="2" title="Notice Requirements">
        <p>A DMCA takedown notice must include:</p>
        <BulletList items={[
          'Identification of the copyrighted work claimed to be infringed;',
          'Identification of the allegedly infringing material and its location on the Site;',
          'Your contact information;',
          'A statement that you have a good-faith belief the use is not authorized by the copyright owner, its agent, or the law;',
          'A statement, under penalty of perjury, that the information in the notice is accurate and that you are authorized to act;',
          'Your physical or electronic signature.',
        ]} />
      </Section>

      <Section number="3" title="Counter-Notice">
        <p>A counter-notice must include:</p>
        <BulletList items={[
          'Identification of the removed material and its prior location;',
          'Your contact information;',
          'A statement under penalty of perjury that you believe removal was a mistake or misidentification;',
          'A statement consenting to the jurisdiction of the appropriate court;',
          'Your physical or electronic signature.',
        ]} />
      </Section>

      <Section number="4" title="Repeat Infringers">
        <p>Where appropriate, Conefia may suspend or terminate access for repeat infringers.</p>
      </Section>

      <Section number="5" title="Misrepresentations">
        <p>Any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability.</p>
      </Section>
    </PolicyLayout>
  );
}