import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import HeroDarkBackground from '@/components/visual/HeroDarkBackground';

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
            
            <Button
              onClick={() => scrollToSection('contact')}
              className="btn-primary px-8 py-6 rounded-lg text-base font-bold flex items-center gap-2 shadow-lg shadow-[#DBFE01]/20 hover:scale-105 transition-transform">
              Book Roadmap Call
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              onClick={() => scrollToSection('track-selector')}
              variant="outline"
              className="px-8 py-6 rounded-lg text-base font-bold border-2 border-white/30 text-white hover:bg-white/10 transition-all">
              Choose Your Track
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}