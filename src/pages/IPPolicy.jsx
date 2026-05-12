import React from 'react';
import PolicyLayout, { Section, BulletList } from '@/components/legal/PolicyLayout';

export default function IPPolicy() {
  return (
    <PolicyLayout title="Intellectual Property Policy" effectiveDate="May 07, 2024" breadcrumb="IP Policy">
      <p className="text-gray-600 text-sm leading-relaxed">
        This Intellectual Property Policy explains Conefia's ownership position regarding its Site, proprietary materials, AI systems, software, client work, statements of work, and project deliverables.
      </p>

      <Section number="1" title="Conefia Ownership">
        <p>Conefia retains and shall own all right, title, and interest in and to all intellectual property, proprietary materials, and technology developed, created, modified, configured, enhanced, supplied, used, or made available by Conefia, whether before, during, or after any client engagement, including without limitation:</p>
        <BulletList items={[
          'Software; source code and object code; repositories; libraries; frameworks; APIs and SDKs;',
          'Prompts, prompt libraries, and system instructions;',
          'Models, model configurations, and tuning approaches;',
          'AI workflows and automations; methodologies and playbooks;',
          'Evaluation systems and testing approaches; agent architectures and orchestration systems;',
          'Product strategy and go-to-market strategy; marketing systems; app-development systems;',
          'Analytics systems and dashboards; templates and documentation; internal tools;',
          'Datasets owned or controlled by Conefia;',
          'Inventions, discoveries, patentable concepts, trade secrets, and know-how;',
          'All modifications, derivatives, updates, configurations, improvements, and related intellectual property rights.',
        ]} />
        <p className="mt-3">These materials are collectively referred to as "Conefia IP."</p>
      </Section>

      <Section number="2" title="Website Content">
        <p>All Site content is owned by Conefia or its licensors. No Site content may be copied, reproduced, distributed, modified, republished, adapted, displayed, transmitted, stored, extracted, used for model training, or otherwise exploited without prior written permission, except as permitted by law.</p>
      </Section>

      <Section number="3" title="Applicability to Statements of Work">
        <p>This Intellectual Property Policy applies to all statements of work, proposals, order forms, project schedules, purchase orders, invoices, task authorizations, project authorizations, service engagements, and related client documents signed, accepted, performed, or fulfilled by Conefia, including any such document that is silent regarding intellectual property rights.</p>
        <p className="mt-2">Any statement of work or related project document that does not expressly address intellectual property rights shall be deemed subject to this Intellectual Property Policy. Silence regarding intellectual property does not assign, transfer, waive, or limit Conefia's ownership of Conefia IP.</p>
        <p className="mt-2">Any client purchase order, vendor onboarding document, form agreement, instruction, email, portal term, or administrative request that purports to transfer ownership of Conefia IP, expand the client's rights beyond the license stated in this policy, or restrict Conefia's reuse, commercialization, patenting, licensing, or resale of Conefia IP is rejected and shall have no effect unless Conefia expressly accepts it in a written agreement signed by Conefia's authorized officer.</p>
      </Section>

      <Section number="4" title="Client Deliverables and Client License">
        <p>Conefia owns all project deliverables, software, code, systems, workflows, configurations, documentation, AI systems, automations, designs, outputs, and other materials created, developed, modified, configured, or delivered by Conefia.</p>
        <p className="mt-2">Subject to full payment and compliance with applicable terms, the client receives a non-exclusive, perpetual, non-transferable, non-sublicensable, worldwide license to use the final project deliverables solely for the client's internal business operations and intended project purpose.</p>
        <p className="mt-2">The client does not receive ownership of any Conefia IP. The client may not sell, resell, transfer, assign, sublicense, distribute, publish, commercialize, reverse engineer, extract, separate, benchmark, train on, or reuse Conefia IP except as expressly permitted by Conefia in writing.</p>
      </Section>

      <Section number="5" title="Embedded, Reusable, and Independently Developed IP">
        <p>Any Conefia IP incorporated into, embedded in, used to create, connected to, or necessary to operate any client deliverable remains the exclusive property of Conefia.</p>
        <p className="mt-2">Conefia retains the unrestricted right to use, reuse, modify, improve, adapt, commercialize, license, resell, distribute, patent, or otherwise exploit any software, source code, object code, frameworks, libraries, APIs, prompts, models, workflows, methodologies, systems, agent designs, strategies, inventions, discoveries, improvements, and know-how developed, created, learned, or used in connection with any client project, provided that Conefia does not disclose the client's confidential information or personal data.</p>
      </Section>

      <Section number="6" title="Repository, Credentials, and Operational Access">
        <p>Providing a client with access to a repository, codebase, deployment environment, API, database, admin panel, third-party account, analytics account, hosting account, or other operational system does not transfer ownership of any Conefia IP. Any such access is provided solely to support the client's authorized use of the applicable project deliverables and remains subject to Conefia's ownership rights, license restrictions, confidentiality protections, and acceptable use requirements.</p>
      </Section>

      <Section number="7" title="Patent, Invention, and Commercialization Reservation">
        <p>Conefia retains all rights in inventions, discoveries, systems, methods, designs, processes, architectures, concepts, improvements, and patentable subject matter created, conceived, reduced to practice, developed, modified, or improved by Conefia, whether or not such materials are used in, connected to, or inspired by a client project.</p>
        <p className="mt-2">Conefia may file, prosecute, maintain, own, license, enforce, sell, or otherwise commercialize patents, patent applications, copyrights, trade secrets, and other intellectual property rights relating to Conefia IP without client approval, provided that Conefia does not disclose the client's confidential information or personal data.</p>
      </Section>

      <Section number="8" title="No Implied Transfer">
        <p>No license, assignment, waiver, or transfer of any Conefia intellectual property rights arises by implication, estoppel, course of dealing, access to the Site, access to a demo, proposal review, discovery calls, partial performance, partial payment, pilot work, prototype access, repository access, credential transfer, operational handoff, project discussions, or use of deliverables.</p>
      </Section>

      <Section number="9" title="Vendor Access and Third-Party Maintenance">
        <p>A client may not provide Conefia IP, source code, repositories, prompts, workflows, models, frameworks, documentation, or other proprietary materials to another vendor, contractor, consultant, developer, or service provider except solely for maintaining the client's licensed use of the project deliverables and only if that third party is bound by written confidentiality and use restrictions at least as protective as Conefia's policies. No such third party may reuse Conefia IP for any other client, product, service, model, dataset, or commercial purpose.</p>
      </Section>

      <Section number="10" title="Benchmarking, Extraction, and Training Restrictions">
        <p>You may not use Conefia content, outputs, prompts, models, workflows, demos, tools, systems, code, repositories, or documentation to benchmark, reverse engineer, train, fine-tune, validate, evaluate, or improve any competing technology, model, workflow, service, or dataset without Conefia's prior written consent.</p>
      </Section>

      <Section number="11" title="Equitable Relief">
        <p>Unauthorized use or disclosure of Conefia IP may cause irreparable harm for which monetary damages may be inadequate. Conefia reserves the right to seek injunctive or other equitable relief, in addition to all other remedies available at law or in equity.</p>
      </Section>

      <Section number="12" title="Trademarks">
        <p>"Conefia" and "Conefia Technologies," together with associated logos, slogans, service names, product names, and branding elements, are trademarks, trade names, or trade dress of Conefia. All goodwill arising from use of the Conefia Technologies name inures exclusively to Conefia LLC.</p>
      </Section>

      <Section number="13" title="Reporting Infringement">
        <p>If you believe Conefia intellectual property is being infringed or misused, <a href="mailto:info@conefia.com" className="underline hover:text-[#DBFE01] transition-colors">contact us</a>.</p>
      </Section>
    </PolicyLayout>
  );
}