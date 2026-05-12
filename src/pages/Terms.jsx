import React from 'react';
import PolicyLayout, { Section, BulletList } from '@/components/legal/PolicyLayout';

export default function Terms() {
  return (
    <PolicyLayout title="Terms of Use" effectiveDate="May 07, 2024" breadcrumb="Terms of Use">
      <p className="text-gray-600 text-sm leading-relaxed">
        These Terms of Use ("Terms") govern your access to and use of Conefia's website, landing pages, forms, downloads, dashboards, demos, content, and related digital properties (collectively, the "Site"). By accessing or using the Site, you agree to these Terms. If you do not agree, do not use the Site.
      </p>

      <Section number="1" title="Eligibility">
        <p>You must be at least 18 years old and capable of entering into a legally binding agreement to use the Site.</p>
      </Section>

      <Section number="2" title="Purpose of the Site">
        <p>The Site is provided for informational, educational, marketing, lead-generation, communication, and business-development purposes. Any professional services offered by Conefia, including software development, AI development, product strategy, digital marketing, analytics, support, or consulting, are governed by the applicable written agreement, statement of work, order form, proposal, or project authorization, together with Conefia's published policies to the extent referenced, incorporated, or applicable by their terms.</p>
      </Section>

      <Section number="3" title="Intellectual Property Ownership">
        <p>All content, materials, deliverables, technology, and functionality on or made available through the Site or in connection with Conefia services, including without limitation text, copy, graphics, designs, user interfaces, page layouts, videos, audio, logos, trade names, trademarks, service marks, trade dress, case studies, blog posts, white papers, proposals, documentation, software, source code, object code, APIs, SDKs, prompts, prompt libraries, models, configurations, workflows, agent architectures, methodologies, templates, playbooks, tools, dashboards, datasets owned or controlled by Conefia, and all related intellectual property rights, are owned by Conefia or its licensors and are protected by copyright, trademark, trade secret, patent, and other applicable laws.</p>
        <p className="mt-2">Except for the limited license expressly granted to a client for final project deliverables, nothing on the Site, in any proposal, in any statement of work, in any handoff, or in any operational access grants any assignment, waiver, ownership interest, or other right in or to Conefia intellectual property.</p>
      </Section>

      <Section number="4" title="Limited License">
        <p>Subject to these Terms, Conefia grants you a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to access and use the Site solely for your internal informational and business-evaluation purposes. You may not:</p>
        <BulletList items={[
          'Copy, reproduce, republish, upload, post, transmit, distribute, display, sell, license, rent, lease, or otherwise exploit any portion of the Site except as expressly permitted in writing by Conefia;',
          'Modify, adapt, translate, create derivative works from, reverse engineer, decompile, disassemble, decode, or attempt to derive source code, model behavior, prompts, system instructions, workflows, or underlying structure from the Site or any software, tools, or systems made available through it;',
          'Scrape, crawl, spider, harvest, mirror, frame, or use bots, agents, or automated means to access or extract Site content, except standard search-engine indexing expressly permitted by us;',
          'Use the Site or its contents to train, fine-tune, benchmark, improve, validate, or support any competing product, model, workflow, dataset, or service;',
          'Remove, obscure, or alter any copyright, trademark, confidentiality, or proprietary notices.',
        ]} />
      </Section>

      <Section number="5" title="No Reliance; No Professional Advice">
        <p>The Site is for general informational purposes only and does not constitute legal, tax, accounting, medical, regulatory, compliance, investment, cybersecurity, or other professional advice. You are solely responsible for evaluating any information before relying on it.</p>
      </Section>

      <Section number="6" title="Client Work, Statements of Work, and Conefia IP">
        <p>Conefia's Intellectual Property Policy applies to all statements of work, proposals, order forms, project authorizations, invoices, purchase orders, service engagements, and related client documents signed, accepted, performed, or fulfilled by Conefia, including any such document that does not expressly mention intellectual property rights. Silence in a statement of work or related project document regarding intellectual property does not transfer, assign, waive, or limit Conefia's intellectual property rights.</p>
        <p className="mt-2">For purposes of these Terms, "Conefia IP" means all intellectual property, technology, software, source code, object code, repositories, configurations, workflows, prompts, models, methodologies, tools, frameworks, libraries, templates, documentation, strategies, know-how, inventions, discoveries, improvements, and other proprietary materials developed, created, modified, configured, enhanced, supplied, used, or made available by Conefia, whether before, during, or after any client engagement.</p>
        <p className="mt-2">Conefia owns all Conefia IP and all project deliverables developed, created, configured, modified, or provided by Conefia. Subject to full payment of all applicable fees and compliance with the applicable agreement, the client receives only a non-exclusive, perpetual, non-transferable, non-sublicensable, worldwide license to use the final project deliverables solely for the client's internal business operations and intended project purpose.</p>
        <p className="mt-2">No statement of work, purchase order, client form, repository access, credential transfer, delivery, deployment, operational handoff, payment, or course of dealing shall be interpreted as an assignment, transfer, waiver, exclusive license, or relinquishment of Conefia IP.</p>
        <p className="mt-2">Conefia retains the unrestricted right to reuse, adapt, improve, modify, commercialize, license, resell, distribute, patent, or otherwise exploit any software, code, tools, frameworks, libraries, workflows, prompts, models, methodologies, agent designs, strategies, inventions, discoveries, improvements, know-how, and general capabilities developed, learned, created, or used in connection with any client engagement, provided that Conefia does not disclose the client's confidential information or personal data.</p>
      </Section>

      <Section number="7" title="Repository, Credentials, and Operational Access">
        <p>Providing a client with access to a repository, codebase, deployment environment, API, database, admin panel, third-party account, analytics account, hosting account, or other operational system does not transfer ownership of any Conefia IP. Any such access is provided solely to support the client's authorized use of the applicable project deliverables and remains subject to Conefia's ownership rights, license restrictions, confidentiality protections, and acceptable use requirements.</p>
      </Section>

      <Section number="8" title="Prohibited Conduct">
        <p>You may not use the Site to:</p>
        <BulletList items={[
          'Violate any applicable law, regulation, or third-party right;',
          'Infringe intellectual property, privacy, publicity, confidentiality, or contractual rights;',
          'Submit false, deceptive, unlawful, defamatory, abusive, hateful, discriminatory, infringing, or harmful content;',
          'Transmit malware, viruses, spyware, ransomware, or malicious code;',
          'Interfere with, disable, overburden, or disrupt Site functionality, security, or availability;',
          'Gain or attempt to gain unauthorized access to any portion of the Site, related systems, or connected networks;',
          'Test vulnerabilities, probe defenses, or conduct penetration testing without our prior written consent;',
          'Impersonate any person or entity or misrepresent your affiliation with any person or entity;',
          'Facilitate fraud, spam, phishing, unlawful surveillance, deceptive marketing, or harmful automated decision-making.',
        ]} />
      </Section>

      <Section number="9" title="User Submissions">
        <p>Except where a separate signed agreement states otherwise, any information, content, data, files, ideas, suggestions, comments, or feedback you submit through the Site will be deemed non-confidential and non-proprietary.</p>
        <p className="mt-2">You represent that you have the right to submit any materials you provide and that your submissions will not violate any law or third-party right.</p>
      </Section>

      <Section number="10" title="Feedback License">
        <p>If you provide suggestions, comments, ideas, enhancement requests, or other feedback regarding the Site or Conefia services, you grant Conefia a perpetual, irrevocable, worldwide, royalty-free, fully paid-up right to use, reproduce, modify, adapt, disclose, and incorporate such feedback for any lawful purpose without compensation or attribution.</p>
      </Section>

      <Section number="11" title="Third-Party Links and Tools">
        <p>The Site may contain links to third-party websites, applications, or tools. Conefia does not control and is not responsible for third-party content, products, services, availability, policies, or practices.</p>
      </Section>

      <Section number="12" title="International Access">
        <p>The Site may be accessed worldwide. You are responsible for compliance with the laws of the jurisdiction from which you access or use the Site.</p>
      </Section>

      <Section number="13" title="Disclaimer of Warranties">
        <p className="uppercase text-xs tracking-wide text-gray-500">To the maximum extent permitted by law, the Site is provided "as is" and "as available." Conefia disclaims all warranties, express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, accuracy, availability, security, and quiet enjoyment. Conefia does not warrant that the Site will be uninterrupted, error-free, secure, or free of harmful components, or that any content is complete, accurate, or current.</p>
      </Section>

      <Section number="14" title="Limitation of Liability">
        <p className="uppercase text-xs tracking-wide text-gray-500">To the maximum extent permitted by law, Conefia shall not be liable for any indirect, incidental, special, exemplary, consequential, or punitive damages, or for any loss of profits, revenue, data, business opportunity, goodwill, or use, arising out of or related to the Site or these Terms, even if advised of the possibility of such damages. To the maximum extent permitted by law, Conefia's total liability for any claim arising out of or related to the Site or these Terms shall not exceed one hundred U.S. dollars (US $100).</p>
      </Section>

      <Section number="15" title="Indemnification">
        <p>You agree to indemnify, defend, and hold harmless Conefia and its officers, managers, members, employees, contractors, affiliates, licensors, successors, and assigns from and against any claims, losses, liabilities, damages, judgments, costs, and expenses, including reasonable attorneys' fees, arising out of or related to your use of the Site, your violation of these Terms, or your violation of any law or third-party right.</p>
      </Section>

      <Section number="16" title="Privacy">
        <p>Your use of the Site is also subject to our Privacy Policy and Cookie Policy.</p>
      </Section>

      <Section number="17" title="Termination">
        <p>We may suspend, restrict, or terminate access to the Site at any time, with or without notice, if we believe you violated these Terms or if necessary to protect the Site, Conefia, or others.</p>
      </Section>

      <Section number="18" title="Governing Law and Venue">
        <p>These Terms are governed by the laws of the State of Michigan, U.S.A., without regard to conflict-of-law principles. Any dispute arising out of or relating to the Site or these Terms shall be brought exclusively in the state or federal courts located in Michigan, and you consent to their jurisdiction and venue, except where mandatory consumer-protection law requires otherwise.</p>
      </Section>

      <Section number="19" title="Changes to These Terms">
        <p>We may update these Terms from time to time. Updated versions will be posted on this page with a revised effective date or last updated date. Your continued use of the Site after changes become effective means you accept the updated Terms.</p>
      </Section>
    </PolicyLayout>
  );
}