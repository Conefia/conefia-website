import React from 'react';

export default function IPPolicy() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Intellectual Property Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: April 2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Ownership of Work Product</h2>
            <p>Upon receipt of full payment for a project, the client receives ownership of all custom deliverables created specifically for them under the project agreement. This includes source code, design assets, and documentation explicitly listed in the scope of work.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Conefia's Pre-Existing IP</h2>
            <p>Any frameworks, tools, libraries, templates, or methodologies developed by Conefia prior to or independently of the project remain the exclusive property of Conefia. Clients are granted a non-exclusive, perpetual license to use such components as incorporated into their deliverables.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Third-Party Components</h2>
            <p>Where open-source or third-party licensed components are used in project deliverables, such components remain subject to their respective licenses. Conefia will inform clients of any third-party components and their licensing terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Portfolio Rights</h2>
            <p>Unless otherwise agreed in writing, Conefia reserves the right to reference completed projects in its portfolio, case studies, and marketing materials. This includes displaying general project descriptions and anonymized metrics.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Infringement Claims</h2>
            <p>If you believe any content on our website or in our deliverables infringes your intellectual property rights, please contact us promptly at <a href="mailto:hello@conefia.com" className="underline hover:text-[#DBFE01] transition-colors">hello@conefia.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact</h2>
            <p>For IP-related inquiries, reach us at <a href="mailto:hello@conefia.com" className="underline hover:text-[#DBFE01] transition-colors">hello@conefia.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}