import React from 'react';
import PolicyLayout, { Section, BulletList } from '@/components/legal/PolicyLayout';

export default function AiNotice() {
  return (
    <PolicyLayout title="AI and Automated Systems Notice" effectiveDate="May 07, 2024" breadcrumb="AI and Automated Systems Notice">
      <p className="text-gray-600 text-sm leading-relaxed">
        Conefia may use artificial intelligence, machine learning, automation, and software-assisted workflows in connection with the Site, content creation, product demonstrations, analytics, communications, and service delivery.
      </p>

      <Section number="1" title="Use of AI-Assisted Materials">
        <p>Unless a signed written agreement states otherwise:</p>
        <BulletList items={[
          'AI-assisted materials are provided for informational and business purposes only;',
          'Outputs may contain inaccuracies, omissions, or outdated information;',
          'Users and clients are responsible for reviewing outputs before relying on them;',
          'Conefia retains ownership of its underlying tools, prompts, models, workflows, methodologies, and systems;',
          'No right is granted to extract, copy, reuse, benchmark, reverse engineer, or train on Conefia AI systems or outputs except as expressly agreed in writing.',
        ]} />
      </Section>

      <Section number="2" title="No Guarantees">
        <p>Conefia does not guarantee that any AI-assisted output is error-free, fit for a particular purpose, or compliant with any specific legal, regulatory, or professional standard. You are solely responsible for evaluating and verifying any AI-assisted output before relying on it.</p>
      </Section>

      <Section number="3" title="Ownership of AI Systems">
        <p>All underlying AI models, prompts, workflows, agent architectures, fine-tuned models, datasets, and related systems developed or used by Conefia remain the exclusive intellectual property of Conefia. No use of the Site or engagement with Conefia services transfers any right, title, or interest in these systems.</p>
      </Section>

      <Section number="4" title="Changes to This Notice">
        <p>We may update this notice from time to time. Updated versions will be posted on this page with a revised effective date.</p>
      </Section>
    </PolicyLayout>
  );
}