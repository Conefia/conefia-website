'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { createPageUrl } from '@/components/server/utils/index';
import { Menu, X, ArrowRight, ChevronDown, Linkedin, Facebook, Instagram, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContourBackground from '@/components/server/visual/ContourBackground';
import { usePersona } from '@/components/client/context/PersonaContext';
import GoogleTagManager from '@/components/client/GoogleTagManager';

function LayoutContent({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { selectedPersona } = usePersona();
  const pathname = usePathname();

  // Helper to determine active page state
  // Check against path endpoints
  const isHomePage = pathname === '/';

  const isSolutionPage = [
    '/clinic-growth-system',
    '/ai-saas-mvp-launch',
    '/app-relaunch-retention',
    '/shopify-growth-system',
    '/corporate-innovation',
    '/startup-accelerator-support'
  ].includes(pathname);

  // Check for case study pages
  const isCaseStudyPage = [
    '/vascularim-clinic-growth',
    '/menovia-ai-femtech-app',
    '/larovie-beauty-ecommerce',
    '/al-mahfza-fintech-app',
    '/hartalega-ai-platform',
    '/aviya-digital-health-app'
  ].includes(pathname);

  // Check for blog pages - simple check if path starts with /blog
  const isBlogPage = pathname?.startsWith('/blog');

  // Check for book page
  const isBookPage = pathname === '/book';
  // Check for about page
  const isAboutPage = pathname === '/about';

  // Always use light text for case studies, solutions, blog pages, book page, and about page (dark backgrounds)
  const useLightText = isHomePage || isSolutionPage || isCaseStudyPage || isBlogPage || isBookPage || isAboutPage || scrolled || mobileMenuOpen;

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
    { label: 'About', page: 'About' },
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
      <GoogleTagManager />
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
            <Link href={createPageUrl('Home')} className="flex items-center">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/d014c4e67_conefia_logo_header_80h_2x.png"
                alt="Conefia"
                width="134"
                height="40"
                className={`h-10 w-auto transition-all duration-300 ${useLightText ? '' : 'brightness-0'}`} />

            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {/* Solutions Dropdown */}
              <div className="relative group">
                <button
                  className={`text-sm font-semibold transition-colors flex items-center gap-1 py-2 ${useLightText ? 'text-white/70 hover:text-white' : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'}`
                  }>

                  Solutions
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {solutionItems.map((item) =>
                      <Link
                        key={item.path}
                        href={createPageUrl(item.path)}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a1a1a] font-medium transition-colors">

                        {item.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {navItems.map((item) => {
                const pageName = item.page ? (item.page === 'Blog' ? 'blog' : item.page) : 'Home';
                return <Link
                  key={item.label}
                  href={item.page ? createPageUrl(pageName) : createPageUrl('Home') + '#' + item.id}
                  className={`text-sm font-semibold transition-colors relative group ${useLightText ? 'text-white/70 hover:text-white' : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'}`
                  }>

                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DBFE01] transition-all group-hover:w-full" />
                </Link>
              })}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href={createPageUrl('book')}
                className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_2px_8px_rgba(219,254,1,0.2)]">

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
                      href={createPageUrl(item.path)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full text-left text-white text-base font-semibold py-2 pl-2 border-l-2 border-transparent hover:border-[#DBFE01] transition-colors">

                      {item.label}
                    </Link>
                  )}
                </div>

                {/* Choose your track */}
                <Link
                  href={createPageUrl('Home') + '#track-selector'}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full px-5 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 my-4 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_2px_8px_rgba(219,254,1,0.2)]">

                  Choose your track
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {navItems.map((item) => {
                  const pageName = item.page ? (item.page === 'Blog' ? 'blog' : item.page) : 'Home';
                  return <Link
                    key={item.label}
                    href={item.page ? createPageUrl(pageName) : createPageUrl('Home') + '#' + item.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-left text-white text-lg font-semibold py-2">

                    {item.label}
                  </Link>
                })}

                <Link
                  href={createPageUrl('book')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full px-5 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 mt-4 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_2px_8px_rgba(219,254,1,0.2)]">

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
      <footer className="bg-[#2F2F2F] text-white py-16 relative overflow-hidden">
        {/* Base layer */}
        <div className="bg-stone-950 absolute inset-0" />

        {/* Contour lines */}
        <ContourBackground className="opacity-80" isMobile={false} />

        {/* Static Star Dust */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(300)].map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 2 + 0.3;
            const opacity = Math.random() * 0.6 + 0.2;
            const isTwinkle = Math.random() > 0.92;

            if (isTwinkle) {
              const twinkleSize = Math.random() * 3 + 2;
              return (
                <div
                  key={`star-${i}`}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: `${twinkleSize}px`,
                    height: `${twinkleSize}px`,
                  }}>
                  <div
                    className="absolute bg-white rounded-full"
                    style={{
                      width: '100%',
                      height: '100%',
                      opacity: opacity * 1.2,
                      boxShadow: `
                        0 0 ${twinkleSize * 2}px ${twinkleSize}px rgba(219, 254, 1, ${opacity * 0.6}),
                        0 ${-twinkleSize * 4}px ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                        0 ${twinkleSize * 4}px ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                        ${-twinkleSize * 4}px 0 ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                        ${twinkleSize * 4}px 0 ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4})
                      `
                    }} />
                </div>
              );
            }

            return (
              <div
                key={`star-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: opacity * 0.8,
                  boxShadow: `0 0 ${size}px rgba(255, 255, 255, ${opacity * 0.3})`
                }} />
            );
          })}
        </div>

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11, 16, 32, 0.4) 100%)'
          }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 mb-12">
            <div className="sm:col-span-2 md:col-span-2">
              <div className="mb-4">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/d014c4e67_conefia_logo_header_80h_2x.png"
                  alt="Conefia"
                  width="134"
                  height="40"
                  loading="lazy"
                  className="h-10 w-auto brightness-0 invert" />

              </div>
              <p className="text-white/80 text-sm leading-relaxed max-w-lg font-medium">
                One Partner to Build, Launch, and Scale Your Digital Venture.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">Services</h4>
              <ul className="space-y-3 text-sm text-white/80 font-medium">
                <li><Link href={createPageUrl('Home') + '#playbook'} className="hover:text-[#DBFE01] transition-colors">Validate</Link></li>
                <li><Link href={createPageUrl('Home') + '#playbook'} className="hover:text-[#DBFE01] transition-colors">Build</Link></li>
                <li><Link href={createPageUrl('Home') + '#playbook'} className="hover:text-[#DBFE01] transition-colors">Launch</Link></li>
                <li><Link href={createPageUrl('Home') + '#playbook'} className="hover:text-[#DBFE01] transition-colors">Grow</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">Company</h4>
              <ul className="space-y-3 text-sm text-white/80 font-medium">
                <li><Link href={createPageUrl('Home') + '#case-studies'} className="hover:text-[#DBFE01] transition-colors">Case Studies</Link></li>
                <li><Link href={createPageUrl('Home') + '#packages'} className="hover:text-[#DBFE01] transition-colors">Packages</Link></li>
                <li><Link href={createPageUrl('Home') + '#contact'} className="hover:text-[#DBFE01] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">Contact</h4>
              <div className="space-y-4">
                <a href="tel:+18100000000" className="flex items-start gap-3 text-sm text-white/80 hover:text-[#DBFE01] transition-colors group">
                  <Phone className="w-4 h-4 text-white flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="leading-snug">(810) 000 0000</span>
                </a>
                <div className="flex items-start gap-3 text-xs text-white/80">
                  <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">801 Keystone Park DR, 27560 Morrisville, NC, USA</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com/company/conefia" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#DBFE01] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/conefia.tech" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#DBFE01] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/conefia.tech" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#DBFE01] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
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
  return <LayoutContent {...props} />;
}