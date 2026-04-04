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
        <p>The Site is provided for informational, educational, marketing, lead-generation, communication, and business-development purposes. Any professional services offered by Conefia, including software development, AI development, product strategy, digital marketing, analytics, support, or consulting, are governed only by a separate written agreement signed by Conefia.</p>
      </Section>

      <Section number="3" title="Intellectual Property Ownership">
        <p>All content, materials, and functionality on or made available through the Site — including text, copy, graphics, designs, user interfaces, videos, audio, logos, trademarks, case studies, blog posts, white papers, proposals, documentation, software, source code, APIs, SDKs, prompts, models, configurations, workflows, agent architectures, methodologies, templates, playbooks, tools, dashboards, and datasets — are owned by Conefia or its licensors and protected by applicable law.</p>
        <p className="mt-2">Except as expressly stated in a signed written agreement, nothing on the Site grants any license, assignment, waiver, or other right in or to Conefia intellectual property.</p>
      </Section>

      <Section number="4" title="Limited License">
        <p>Subject to these Terms, Conefia grants you a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to access and use the Site solely for your internal informational and business-evaluation purposes. You may not:</p>
        <BulletList items={[
          'Copy, reproduce, republish, upload, post, transmit, distribute, display, sell, license, rent, or otherwise exploit any portion of the Site except as expressly permitted in writing by Conefia;',
          'Modify, adapt, translate, create derivative works, reverse engineer, decompile, or attempt to derive source code, model behavior, prompts, or system instructions;',
          'Scrape, crawl, spider, harvest, mirror, frame, or use bots or automated means to access or extract Site content;',
          'Use the Site or its contents to train, fine-tune, benchmark, or support any competing product, model, workflow, dataset, or service;',
          'Remove, obscure, or alter any copyright, trademark, confidentiality, or proprietary notices.',
        ]} />
      </Section>

      <Section number="5" title="No Reliance; No Professional Advice">
        <p>The Site is for general informational purposes only and does not constitute legal, tax, accounting, medical, regulatory, compliance, investment, cybersecurity, or other professional advice. You are solely responsible for evaluating any information before relying on it.</p>
      </Section>

      <Section number="6" title="Client Work and Background IP">
        <p>Unless expressly stated in a signed written agreement, Conefia retains all right, title, and interest in and to its pre-existing and independently developed materials ("Background IP"), including software, source code, libraries, frameworks, APIs, SDKs, prompts, models, workflows, methodologies, strategies, marketing systems, and other proprietary materials. No content on the Site transfers ownership of Conefia Background IP.</p>
      </Section>

      <Section number="7" title="Prohibited Conduct">
        <BulletList items={[
          'Violate any applicable law, regulation, or third-party right;',
          'Infringe intellectual property, privacy, publicity, confidentiality, or contractual rights;',
          'Submit false, deceptive, unlawful, defamatory, abusive, hateful, discriminatory, infringing, or harmful content;',
          'Transmit malware, viruses, spyware, ransomware, or malicious code;',
          'Interfere with, disable, overburden, or disrupt Site functionality, security, or availability;',
          'Gain or attempt to gain unauthorized access to any portion of the Site, related systems, or connected networks;',
          'Impersonate any person or entity or misrepresent your affiliation with any person or entity;',
          'Facilitate fraud, spam, phishing, unlawful surveillance, or deceptive marketing.',
        ]} />
      </Section>

      <Section number="8" title="User Submissions">
        <p>Except where a separate signed agreement states otherwise, any information, content, data, files, ideas, suggestions, comments, or feedback you submit through the Site will be deemed non-confidential and non-proprietary. You represent that you have the right to submit any materials you provide.</p>
      </Section>

      <Section number="9" title="Feedback License">
        <p>If you provide suggestions, comments, ideas, or other feedback regarding the Site or Conefia services, you grant Conefia a perpetual, irrevocable, worldwide, royalty-free right to use, reproduce, modify, adapt, and incorporate such feedback for any lawful purpose without compensation or attribution.</p>
      </Section>

      <Section number="10" title="Third-Party Links and Tools">
        <p>The Site may contain links to third-party websites, applications, or tools. Conefia does not control and is not responsible for third-party content, products, services, availability, policies, or practices.</p>
      </Section>

      <Section number="11" title="International Access">
        <p>The Site may be accessed worldwide. You are responsible for compliance with the laws of the jurisdiction from which you access or use the Site.</p>
      </Section>

      <Section number="12" title="Disclaimer of Warranties">
        <p className="uppercase text-xs tracking-wide text-gray-500">To the maximum extent permitted by law, the Site is provided "as is" and "as available." Conefia disclaims all warranties, express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, accuracy, availability, security, and quiet enjoyment. Conefia does not warrant that the Site will be uninterrupted, error-free, secure, or free of harmful components.</p>
      </Section>

      <Section number="13" title="Limitation of Liability">
        <p className="uppercase text-xs tracking-wide text-gray-500">To the maximum extent permitted by law, Conefia shall not be liable for any indirect, incidental, special, exemplary, consequential, or punitive damages, or for any loss of profits, revenue, data, business opportunity, goodwill, or use. Conefia's total liability for any claim shall not exceed one hundred U.S. dollars (US $100).</p>
      </Section>

      <Section number="14" title="Indemnification">
        <p>You agree to indemnify, defend, and hold harmless Conefia and its officers, managers, members, employees, contractors, affiliates, licensors, successors, and assigns from and against any claims, losses, liabilities, damages, judgments, costs, and expenses, including reasonable attorneys' fees, arising out of or related to your use of the Site, your violation of these Terms, or your violation of any law or third-party right.</p>
      </Section>

      <Section number="15" title="Privacy">
        <p>Your use of the Site is also subject to our Privacy Policy and Cookie Policy.</p>
      </Section>

      <Section number="16" title="Termination">
        <p>We may suspend, restrict, or terminate access to the Site at any time, with or without notice, if we believe you violated these Terms or if necessary to protect the Site, Conefia, or others.</p>
      </Section>

      <Section number="17" title="Governing Law and Venue">
        <p>These Terms are governed by the laws of the State of Michigan, U.S.A., without regard to conflict-of-law principles. Any dispute arising out of or relating to the Site or these Terms shall be brought exclusively in the state or federal courts located in Michigan, and you consent to their jurisdiction and venue, except where mandatory consumer-protection law requires otherwise.</p>
      </Section>

      <Section number="18" title="Changes to These Terms">
        <p>We may update these Terms from time to time. Updated versions will be posted on this page with a revised effective date. Your continued use of the Site after changes become effective means you accept the updated Terms.</p>
      </Section>
    </PolicyLayout>
  );
}