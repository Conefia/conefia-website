import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Playbook', id: 'playbook' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Packages', id: 'packages' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <div className="font-['Poppins',sans-serif]">
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

          :root {
            --color-primary: #DBFE01;
            --color-dark: #1a1a1a;
            --conefia-lime: #DBFE01;
            --conefia-charcoal: #2F2F2F;
            --hero-bg: #0B1020;
            --hero-bg-2: #0F1630;
            --line: rgba(219,254,1,.10);
            --line-soft: rgba(255,255,255,.04);
            --card: rgba(255,255,255,.05);
            --border: rgba(255,255,255,.14);
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

        /* Contour Texture Hero */
        .hero-contour {
          min-height: 90vh;
          color: #fff;
          background: radial-gradient(1200px 700px at 20% 20%, var(--hero-bg-2), var(--hero-bg));
          position: relative;
          overflow: hidden;
        }

        .hero-contour::before {
          content: "";
          position: absolute;
          inset: -20%;
          background:
            repeating-linear-gradient(135deg,
              var(--line) 0px,
              var(--line) 1px,
              rgba(219,254,1,0) 1px,
              rgba(219,254,1,0) 14px
            ),
            repeating-linear-gradient(135deg,
              var(--line-soft) 0px,
              var(--line-soft) 1px,
              rgba(255,255,255,0) 1px,
              rgba(255,255,255,0) 30px
            ),
            radial-gradient(900px 600px at 30% 35%, rgba(219,254,1,.10), transparent 60%),
            radial-gradient(700px 500px at 80% 15%, rgba(219,254,1,.06), transparent 55%);
          transform: rotate(-6deg);
          pointer-events: none;
          filter: saturate(.95);
        }

        .hero-contour::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(900px 600px at 50% 0%, rgba(0,0,0,0), rgba(0,0,0,.45));
          pointer-events: none;
        }

        .visual-mock {
          width: min(420px, 100%);
          aspect-ratio: 4 / 5;
          border-radius: 22px;
          background: var(--card);
          border: 1px solid var(--border);
          box-shadow: 0 20px 70px rgba(0,0,0,.55);
          position: relative;
        }

        .visual-mock::after {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 22px;
          pointer-events: none;
          background: linear-gradient(135deg, rgba(219,254,1,.22), transparent 45%);
          mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 1px;
        }

        .accent-lime {
          color: var(--conefia-lime);
          text-shadow: 0 0 24px rgba(219,254,1,.10);
        }
        `}</style>

      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gradient-to-r from-[#1a1a1a] via-[#2F2F2F] to-[#1a1a1a] shadow-lg shadow-black/20' 
            : 'bg-gradient-to-r from-[#1a1a1a]/80 via-[#2F2F2F]/80 to-[#1a1a1a]/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/d014c4e67_conefia_logo_header_80h_2x.png" 
                alt="Conefia" 
                className="h-10"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/70 hover:text-white text-sm font-semibold transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DBFE01] transition-all group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2"
              >
                Book roadmap call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gradient-to-b from-[#2F2F2F] to-[#1a1a1a] border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-white text-lg font-semibold py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary w-full px-5 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 mt-4"
                >
                  Book roadmap call
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/d014c4e67_conefia_logo_header_80h_2x.png" 
                  alt="Conefia" 
                  className="h-10 brightness-0 invert"
                />
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Founder Ops for Digital Businesses. We validate, build, launch, and grow — all in one place.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">Services</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><button onClick={() => scrollToSection('playbook')} className="hover:text-[#DBFE01] transition-colors">Validate</button></li>
                <li><button onClick={() => scrollToSection('playbook')} className="hover:text-[#DBFE01] transition-colors">Build</button></li>
                <li><button onClick={() => scrollToSection('playbook')} className="hover:text-[#DBFE01] transition-colors">Launch</button></li>
                <li><button onClick={() => scrollToSection('playbook')} className="hover:text-[#DBFE01] transition-colors">Grow</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">Company</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><button onClick={() => scrollToSection('case-studies')} className="hover:text-[#DBFE01] transition-colors">Case Studies</button></li>
                <li><button onClick={() => scrollToSection('packages')} className="hover:text-[#DBFE01] transition-colors">Packages</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#DBFE01] transition-colors">Contact</button></li>
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
    </div>
  );
}