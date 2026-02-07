"use client";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContourBackground from '@/components/visual/ContourBackground';
import { PersonaProvider, usePersona } from '@/components/context/PersonaContext';

function LayoutContent({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { selectedPersona } = usePersona();

  // Home page is dark-themed (hero), others are light-themed
  const isHomePage = currentPageName === 'Home';
  // Check for solution pages
  const isSolutionPage = currentPageName && typeof currentPageName === 'string' && (
    currentPageName === 'clinic-growth-system' ||
    currentPageName === 'ai-saas-mvp-launch' ||
    currentPageName === 'app-relaunch-retention' ||
    currentPageName === 'shopify-growth-system' ||
    currentPageName === 'corporate-innovation' ||
    currentPageName === 'startup-accelerator-support'
  );
  // Check for case study pages
  const isCaseStudyPage = currentPageName && typeof currentPageName === 'string' && (
    currentPageName === 'vascularim-clinic-growth' ||
    currentPageName === 'menovia-ai-femtech-app' ||
    currentPageName === 'larovie-beauty-ecommerce' ||
    currentPageName === 'al-mahfza-fintech-app' ||
    currentPageName === 'hartalega-ai-platform' ||
    currentPageName === 'aviya-digital-health-app'
  );
  // Check for blog pages
  const isBlogPage = currentPageName && typeof currentPageName === 'string' && (
    currentPageName === 'Blog' ||
    currentPageName === 'BlogPost'
  );
  // Always use light text for case studies, solutions, and blog pages (dark backgrounds)
  const useLightText = isHomePage || isSolutionPage || isCaseStudyPage || isBlogPage || scrolled || mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  { label: 'Playbook', id: 'playbook' },
  { label: 'Case Studies', id: 'case-studies' },
  { label: 'Blog', page: 'Blog' },
  { label: 'Pricing', id: 'packages' },
  { label: 'FAQ', id: 'faq' }];


  const solutionItems = [
  { label: 'Clinic Growth System', path: 'clinic-growth-system' },
  { label: 'AI SaaS MVP Launch', path: 'ai-saas-mvp-launch' },
  { label: 'App Relaunch & Retention', path: 'app-relaunch-retention' },
  { label: 'Shopify Growth System', path: 'shopify-growth-system' },
  { label: 'Corporate Innovation', path: 'corporate-innovation' },
  { label: 'Startup Accelerator Support', path: 'startup-accelerator-support' }];


  return (
    <div className="font-['Poppins',sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        :root {
          --color-primary: #DBFE01;
          --color-dark: #1a1a1a;
        }
        
        body {
          color: #1a1a1a;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #C5E000 0%, #A8C600 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        
        .btn-primary {
          background: #DBFE01;
          color: #1a1a1a;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(219, 254, 1, 0.4);
          background: #c5e000;
        }
        
        .btn-secondary {
          background: transparent;
          color: #1a1a1a;
          border: 2px solid #1a1a1a;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-secondary:hover {
          background: #1a1a1a;
          color: white;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Sticky Header */}
      <header className="bg-stone-950 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center">
            <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/d014c4e67_conefia_logo_header_80h_2x.png"
                alt="Conefia"
                width="134"
                height="40"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className={`h-10 w-auto transition-all duration-300 ${useLightText ? '' : 'brightness-0'}`} />

            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {/* Solutions Dropdown */}
              <div className="relative group">
                <button
                  className={`text-sm font-semibold transition-colors flex items-center gap-1 py-2 ${
                  useLightText ? 'text-white/70 hover:text-white' : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'}`
                  }>

                  Solutions
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                
                <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {solutionItems.map((item) =>
                    <Link
                      key={item.path}
                      to={createPageUrl(item.path)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a1a1a] font-medium transition-colors">

                        {item.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {navItems.map((item) =>
                <Link
                  key={item.label}
                  to={item.page ? createPageUrl(item.page) : createPageUrl('Home') + '#' + item.id}
                  className={`text-sm font-semibold transition-colors relative group ${
                  useLightText ? 'text-white/70 hover:text-white' : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'}`
                  }>

                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DBFE01] transition-all group-hover:w-full" />
                  </Link>
              )}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to={createPageUrl('Home') + '#contact'}
                className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2">

                Book Roadmap Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors">

              {mobileMenuOpen ?
              <X className={`w-6 h-6 ${useLightText ? 'text-white' : 'text-[#1a1a1a]'}`} /> :

              <Menu className={`w-6 h-6 ${useLightText ? 'text-white' : 'text-[#1a1a1a]'}`} />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-b from-[#121829] to-[#0B1020] border-t border-white/10 overflow-hidden relative">

              <div className="px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
                 {/* Solutions (Mobile) */}
                 <div className="pb-4 border-b border-white/10">
                    <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-3">Solutions</p>
                    {solutionItems.map((item) =>
                <Link
                  key={item.path}
                  to={createPageUrl(item.path)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left text-white text-base font-semibold py-2 pl-2 border-l-2 border-transparent hover:border-[#DBFE01] transition-colors">

                        {item.label}
                      </Link>
                )}
                 </div>

                 {/* Choose your track */}
                 <Link
                to={createPageUrl('Home') + '#track-selector'}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full px-5 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 my-4">

                    Choose your track
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                {navItems.map((item) =>
                  <Link
                    key={item.label}
                    to={item.page ? createPageUrl(item.page) : createPageUrl('Home') + '#' + item.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-left text-white text-lg font-semibold py-2">

                    {item.label}
                  </Link>
                )}
                <Link
                to={createPageUrl('Home') + '#contact'}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full px-5 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 mt-4">

                  Book Roadmap Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-16 relative overflow-hidden">
        <ContourBackground className="opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="mb-4">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/d014c4e67_conefia_logo_header_80h_2x.png"
                  alt="Conefia"
                  width="134"
                  height="40"
                  loading="lazy"
                  className="h-10 w-auto brightness-0 invert" />

              </div>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm font-medium">
                Founder Ops for Digital Businesses. We validate, build, launch, and grow — all in one place.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">Services</h4>
              <ul className="space-y-3 text-sm text-white/80 font-medium">
                <li><Link to={createPageUrl('Home') + '#playbook'} className="hover:text-[#DBFE01] transition-colors">Validate</Link></li>
                <li><Link to={createPageUrl('Home') + '#playbook'} className="hover:text-[#DBFE01] transition-colors">Build</Link></li>
                <li><Link to={createPageUrl('Home') + '#playbook'} className="hover:text-[#DBFE01] transition-colors">Launch</Link></li>
                <li><Link to={createPageUrl('Home') + '#playbook'} className="hover:text-[#DBFE01] transition-colors">Grow</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">Company</h4>
              <ul className="space-y-3 text-sm text-white/80 font-medium">
                <li><Link to={createPageUrl('Home') + '#case-studies'} className="hover:text-[#DBFE01] transition-colors">Case Studies</Link></li>
                <li><Link to={createPageUrl('Home') + '#packages'} className="hover:text-[#DBFE01] transition-colors">Packages</Link></li>
                <li><Link to={createPageUrl('Home') + '#contact'} className="hover:text-[#DBFE01] transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">© 2024 Conefia. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-[#DBFE01] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#DBFE01] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>);

}

export default function Layout(props) {
  return (
    <PersonaProvider>
      <LayoutContent {...props} />
    </PersonaProvider>);

}