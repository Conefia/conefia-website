import React from 'react';

export default function CopyrightPolicy() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Copyright Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: April 2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Copyright Notice</h2>
            <p>All content on this website — including but not limited to text, graphics, logos, icons, images, audio clips, and software — is the property of Conefia and is protected by United States and international copyright laws.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Permitted Use</h2>
            <p>You may view, download, and print content from this website solely for personal, non-commercial use, provided you do not modify the content and retain all copyright and proprietary notices.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Prohibited Use</h2>
            <p>You may not reproduce, distribute, publicly display, transmit, or create derivative works from any content on this website without prior written permission from Conefia.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. DMCA Takedown Requests</h2>
            <p>If you believe that your copyrighted work has been reproduced on our website in a way that constitutes copyright infringement, please send a written notice to <a href="mailto:hello@conefia.com" className="underline hover:text-[#DBFE01] transition-colors">hello@conefia.com</a> including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>A description of the copyrighted work you claim has been infringed.</li>
              <li>The URL(s) where the alleged infringement occurs.</li>
              <li>Your contact information.</li>
              <li>A statement of good faith belief that the use is not authorized.</li>
              <li>Your physical or electronic signature.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Contact</h2>
            <p>For copyright concerns, contact us at <a href="mailto:hello@conefia.com" className="underline hover:text-[#DBFE01] transition-colors">hello@conefia.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}