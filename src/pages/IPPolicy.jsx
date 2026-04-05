import React from 'react';
import PolicyLayout, { Section, BulletList } from '@/components/legal/PolicyLayout';

export default function IPPolicy() {
  return (
    <PolicyLayout title="Intellectual Property Policy" effectiveDate="May 07, 2024" breadcrumb="IP Policy">
      <p className="text-gray-600 text-sm leading-relaxed">
        This Intellectual Property Policy explains Conefia's ownership position regarding its Site, proprietary materials, AI systems, software, and client work.
      </p>

      <Section number="1" title="Conefia Ownership">
        <p>Conefia retains all right, title, and interest in and to its pre-existing and independently developed materials, and all modifications, derivatives, updates, configurations, and improvements thereto ("Background IP"), including without limitation:</p>
        <BulletList items={[
          'Software; source code and object code; libraries; frameworks; APIs and SDKs;',
          'Prompts, prompt libraries, and system instructions;',
          'Models, model configurations, and tuning approaches;',
          'Workflows and automations; methodologies and playbooks;',
          'Evaluation systems and testing approaches; agent architectures and orchestration systems;',
          'Product strategy and go-to-market strategy; marketing systems; app-development systems;',
          'Analytics systems and dashboards; templates and documentation; internal tools;',
          'Datasets owned or controlled by Conefia;',
          'Inventions, discoveries, patentable concepts, trade secrets, and know-how.',
        ]} />
      </Section>

      <Section number="2" title="Website Content">
        <p>All Site content is owned by Conefia or its licensors. No Site content may be copied, reproduced, distributed, modified, republished, adapted, displayed, transmitted, stored, extracted, used for model training, or otherwise exploited without prior written permission, except as permitted by law.</p>
      </Section>

      <Section number="3" title="No Implied Transfer">
        <p>No license, assignment, waiver, or transfer of any Conefia intellectual property rights arises by implication, estoppel, course of dealing, access to the Site, access to a demo, proposal review, discovery calls, partial performance, partial payment, pilot work, prototype access, or project discussions.</p>
      </Section>

      <Section number="4" title="Client Deliverables">
        <p>Unless expressly stated in a signed written agreement, Conefia retains ownership of all intellectual property it develops, uses, or provides. No ownership transfers to any client by default. Any client rights are limited to the license expressly granted in the applicable written agreement.</p>
        <p className="mt-2">If Conefia expressly agrees in writing to transfer ownership of project-specific deliverables to a client, that transfer applies only to the specifically identified deliverables and excludes all Background IP unless the agreement explicitly states otherwise.</p>
      </Section>

      <Section number="5" title="Embedded Background IP">
        <p>Where Conefia Background IP is incorporated into, embedded in, used to create, or necessary to operate any client deliverable, Conefia retains ownership of that Background IP. Any client right to use such embedded Background IP is limited to the license expressly granted in the governing written agreement.</p>
      </Section>

      <Section number="6" title="Patent and Invention Reservation">
        <p>Except where expressly assigned in a signed written agreement, Conefia retains all rights in inventions, discoveries, methods, systems, designs, concepts, improvements, and patentable subject matter created, conceived, reduced to practice, or developed by Conefia, whether or not incorporated into a client project.</p>
      </Section>

      <Section number="7" title="Benchmarking, Extraction, and Training Restrictions">
        <p>You may not use Conefia content, outputs, prompts, models, workflows, demos, tools, or systems to benchmark, reverse engineer, train, fine-tune, validate, evaluate, or improve any competing technology, model, workflow, service, or dataset without Conefia's prior written consent.</p>
      </Section>

      <Section number="8" title="Equitable Relief">
        <p>Unauthorized use or disclosure of Conefia intellectual property may cause irreparable harm for which monetary damages may be inadequate. Conefia reserves the right to seek injunctive or other equitable relief, in addition to all other remedies available at law or in equity.</p>
      </Section>

      <Section number="9" title="Trademarks">
        <p>"Conefia" and "Conefia Technologies," together with associated logos, slogans, service names, product names, and branding elements, are trademarks, trade names, or trade dress of Conefia. All goodwill arising from use of the Conefia Technologies name inures exclusively to Conefia LLC.</p>
      </Section>

      <Section number="10" title="Reporting Infringement">
        <p>If you believe Conefia intellectual property is being infringed or misused, <a href="#contact" className="underline hover:text-[#DBFE01] transition-colors">contact us</a>.</p>
      </Section>
    </PolicyLayout>
  );
}