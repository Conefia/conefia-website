import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const policies = [
  { label: 'Terms of Service', path: '/terms', desc: 'Rules and conditions governing the use of Conefia services.' },
  { label: 'Privacy Policy', path: '/privacy', desc: 'How we collect, use, and protect your personal data.' },
  { label: 'Intellectual Property Policy', path: '/ip-policy', desc: 'Ownership rights for work product and pre-existing IP.' },
  { label: 'Cookie Policy', path: '/cookies', desc: 'How we use cookies and similar tracking technologies.' },
  { label: 'Copyright Policy', path: '/copyright-policy', desc: 'Copyright notices, permitted use, and DMCA takedown process.' },
];

export default function Legal() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Legal</h1>
        <p className="text-gray-500 text-sm mb-10">All Conefia legal documents in one place.</p>
        <div className="divide-y divide-gray-100">
          {policies.map((p) => (
            <Link
              key={p.path}
              to={p.path}
              className="flex items-center justify-between py-5 group"
            >
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-[#1a1a1a] transition-colors">{p.label}</p>
                <p className="text-sm text-gray-500 mt-0.5">{p.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1a1a1a] flex-shrink-0 ml-4 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}