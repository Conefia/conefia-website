import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import HeroDarkBackground from '@/components/visual/HeroDarkBackground';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function BlogHero({ onSearch }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 bg-[#0B1020] overflow-hidden">
      <HeroDarkBackground />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-4">
          <Breadcrumbs items={[{ label: 'Blog' }]} theme="dark" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center">
          
          <h1 className="text-3xl font-bold mb-6 tracking-tight text-center gradient-heading gradient-heading--glow">
            Insights to Build, Launch, and Scale
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed">
            Practical guides for founders, clinics, Shopify brands, accelerators, and enterprise innovation teams. 
            No fluff—just what works on the ground.
          </p>

          {/* Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-white transition-colors" />
              <Input
                type="text"
                placeholder="Search playbooks, templates, and case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-base bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 rounded-lg focus:border-[#DBFE01] focus:ring-2 focus:ring-[#DBFE01]/20 transition-all"
              />
            </div>
          </motion.form>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <Link
              to={createPageUrl('book')}
              className="btn-primary px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.25)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_0_20px_rgba(219,254,1,0.4),0_6px_20px_rgba(219,254,1,0.35)] hover:scale-105 active:scale-95 transition-all duration-300">
              Book Roadmap Call
              <ArrowRight className="w-5 h-5" />
            </Link>

            <button
              onClick={() => scrollToSection('track-selector')}
              className="px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-[#0B1020] transition-all hover:scale-105">
              Choose Your Track
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}