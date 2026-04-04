import React from 'react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: April 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help us understand how visitors interact with our site and improve user experience.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand traffic patterns and user behavior (e.g., Google Analytics).</li>
              <li><strong>Marketing Cookies:</strong> Used to track visits and deliver relevant advertising (e.g., Google Tag Manager, Meta Pixel).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How to Control Cookies</h2>
            <p>You can manage or disable cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website. For more information, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a] underline hover:text-[#DBFE01] transition-colors">allaboutcookies.org</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Cookies</h2>
            <p>We use third-party services such as Google Analytics and Calendly, which may set their own cookies. These are governed by the respective providers' privacy policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact</h2>
            <p>For cookie-related questions, contact us at <a href="mailto:hello@conefia.com" className="text-[#1a1a1a] underline hover:text-[#DBFE01] transition-colors">hello@conefia.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}