import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Terms of Use</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: April 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Conefia's website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Services</h2>
            <p>Conefia provides digital product development, AI MVP building, mobile app development, and growth marketing services. Specific deliverables, timelines, and pricing are defined in individual project agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, and code — is the property of Conefia and protected by applicable intellectual property laws. Upon full payment, clients receive ownership of custom deliverables as specified in their project contract.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Limitation of Liability</h2>
            <p>Conefia shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability is limited to the amount paid for the specific service in question.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Confidentiality</h2>
            <p>Both parties agree to keep confidential any non-public information shared during the engagement. This obligation survives the termination of any agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Governing Law</h2>
            <p>These terms are governed by the laws of the State of North Carolina, USA, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:hello@conefia.com" className="text-[#1a1a1a] underline hover:text-[#DBFE01] transition-colors">hello@conefia.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}