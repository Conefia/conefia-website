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
  { label: 'FAQ', id: 'faq' }];


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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ?
        'bg-white/80 backdrop-blur-xl shadow-sm' :
        'bg-transparent'}`
        }>

        <div className="bg-[#2f2f2f] mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#DBFE01] flex items-center justify-center">
                <span className="text-[#1a1a1a] font-bold text-lg">C</span>
              </div>
              <span className="text-[#1a1a1a] font-bold text-xl tracking-tight">Conefia</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) =>
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#1a1a1a]/60 hover:text-[#1a1a1a] text-sm font-semibold transition-colors relative group">

                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DBFE01] transition-all group-hover:w-full" />
                </button>
              )}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2">

                Book roadmap call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">

              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden bg-white border-t">

              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) =>
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-[#1a1a1a] text-lg font-semibold py-2">

                    {item.label}
                  </button>
              )}
                <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full px-5 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 mt-4">

                  Book roadmap call
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#DBFE01] flex items-center justify-center">
                  <span className="text-[#1a1a1a] font-bold text-lg">C</span>
                </div>
                <span className="font-bold text-xl tracking-tight">Conefia</span>
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
    </div>);

}