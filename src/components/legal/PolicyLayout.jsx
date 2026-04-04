import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PolicyLayout({ title, effectiveDate, breadcrumb, children }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Branded hero header */}
      <div className="bg-stone-950 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #DBFE01 0%, transparent 50%), radial-gradient(circle at 80% 20%, #DBFE01 0%, transparent 40%)' }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-[#DBFE01] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/legal" className="hover:text-[#DBFE01] transition-colors">Legal</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">{breadcrumb || title}</span>
          </nav>
          <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#DBFE01]/10 text-[#DBFE01] border border-[#DBFE01]/20">
            Legal Document
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{title}</h1>
          <p className="text-white/50 text-sm">CONEFIA LLC, d/b/a Conefia Technologies &nbsp;·&nbsp; Effective Date: {effectiveDate}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10 text-gray-700 leading-relaxed">
          {children}
        </div>

        {/* Contact card */}
        <div className="mt-16 p-6 rounded-2xl border border-gray-100 bg-gray-50">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Contact</p>
          <p className="font-semibold text-gray-900">Conefia LLC, d/b/a Conefia Technologies</p>
          <p className="text-sm text-gray-600 mt-1">6272 Saginaw Road #1136, Grand Blanc, MI 48439, United States</p>
          <a href="mailto:info@conefia.com" className="inline-block mt-2 text-sm font-medium text-[#1a1a1a] underline underline-offset-2 hover:text-[#DBFE01] transition-colors">
            info@conefia.com
          </a>
        </div>
      </div>
    </div>
  );
}

export function Section({ number, title, children }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
        {number && <span className="text-[#DBFE01] bg-stone-950 rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{number}</span>}
        {title}
      </h2>
      <div className="text-gray-600 text-sm leading-relaxed space-y-2">{children}</div>
    </section>
  );
}

export function BulletList({ items }) {
  return (
    <ul className="list-none space-y-1.5 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#DBFE01] flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}