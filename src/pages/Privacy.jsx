import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: April 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>Conefia ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or engage our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Contact information (name, email, phone number) when you submit a form or book a call.</li>
              <li>Usage data and analytics about how you interact with our website.</li>
              <li>Cookies and tracking technologies (see Cookie Policy).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to inquiries and schedule consultations.</li>
              <li>Improve our website and services.</li>
              <li>Send relevant communications (you may opt out at any time).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Sharing</h2>
            <p>We do not sell your personal data. We may share information with trusted third-party service providers (e.g., Calendly, analytics tools) strictly for the purpose of delivering our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Your Rights</h2>
            <p>You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, contact us at <a href="mailto:hello@conefia.com" className="text-[#1a1a1a] underline hover:text-[#DBFE01] transition-colors">hello@conefia.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact</h2>
            <p>For privacy-related questions, please reach us at <a href="mailto:hello@conefia.com" className="text-[#1a1a1a] underline hover:text-[#DBFE01] transition-colors">hello@conefia.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}