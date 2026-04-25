import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Menu, X } from 'lucide-react';

// Section anchors that exist on every solution page
const SECTION_LINKS = [
  { label: 'Overview', anchor: '#solution' },
  { label: 'Process', anchor: '#our-process' },
  { label: 'FAQs', anchor: '#faqs' },
];

// All solution pages — fully crawlable links for SEO
const SOLUTION_LINKS = [
  { label: 'AI SaaS MVP', path: 'ai-saas-mvp-launch' },
  { label: 'App Relaunch', path: 'app-relaunch-retention' },
  { label: 'Clinic Growth', path: 'clinic-growth-system' },
  { label: 'Shopify Growth', path: 'shopify-growth-system' },
  { label: 'Corporate Innovation', path: 'corporate-innovation' },
  { label: 'Accelerator Support', path: 'startup-accelerator-support' },
];

export default function SolutionPageNav({ currentPath }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => { setOpen(false); }, [currentPath]);

  const scrollTo = (anchor) => {
    const id = anchor.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav
      aria-label="Solution page navigation"
      className={`fixed top-16 md:top-20 left-0 right-0 z-40 border-b border-gray-100 transition-all duration-300 ${
        scrolled
          ? 'translate-y-0 opacity-100 bg-white/95 backdrop-blur-md shadow-md'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">

          {/* Desktop: section anchors + solutions dropdown */}
          <div className="hidden md:flex items-center gap-1">
            {SECTION_LINKS.map((link) => (
              <button
                key={link.anchor}
                onClick={() => scrollTo(link.anchor)}
                className="px-3 py-1.5 text-xs font-semibold text-gray-500 hover:text-[#1a1a1a] hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}

            {/* Separator */}
            <div className="w-px h-4 bg-gray-200 mx-2" aria-hidden="true" />

            {/* Other solutions — fully crawlable <a> tags */}
            <span className="text-xs text-gray-400 font-medium mr-1">Other solutions:</span>
            {SOLUTION_LINKS.filter(s => s.path !== currentPath).slice(0, 3).map((sol) => (
              <Link
                key={sol.path}
                to={createPageUrl(sol.path)}
                className="px-3 py-1.5 text-xs font-semibold text-gray-500 hover:text-[#1a1a1a] hover:bg-gray-50 rounded-md transition-colors whitespace-nowrap"
              >
                {sol.label}
              </Link>
            ))}
          </div>

          {/* Mobile: hamburger toggle */}
          <button
            className="md:hidden flex items-center gap-1.5 text-xs font-semibold text-gray-600 py-1"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle solution navigation"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span>Navigate</span>
          </button>

          {/* CTA — always visible */}
          <Link
            to={createPageUrl('book')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a1a] text-white text-xs font-bold hover:bg-black transition-colors shadow-sm ml-auto md:ml-0"
          >
            Book Free Call
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden pb-3 pt-1 space-y-1 border-t border-gray-100 mt-1">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider px-2 pt-1 pb-0.5">On this page</p>
            {SECTION_LINKS.map((link) => (
              <button
                key={link.anchor}
                onClick={() => scrollTo(link.anchor)}
                className="block w-full text-left px-3 py-2 text-sm font-semibold text-gray-600 hover:text-[#1a1a1a] hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider px-2 pt-2 pb-0.5">Other solutions</p>
            {SOLUTION_LINKS.filter(s => s.path !== currentPath).map((sol) => (
              <Link
                key={sol.path}
                to={createPageUrl(sol.path)}
                className="block px-3 py-2 text-sm font-semibold text-gray-600 hover:text-[#1a1a1a] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                {sol.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}