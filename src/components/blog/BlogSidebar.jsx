import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, FileText, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { popularPosts, templates, caseStudies } from './blogData';

export default function BlogSidebar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="space-y-6 sticky top-24">
      
      {/* Popular This Month */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#DBFE01]" />
          <h3 className="font-bold text-[#1a1a1a]">Popular This Month</h3>
        </div>
        
        <ul className="space-y-3">
          {popularPosts.map((post) => (
            <li key={post.id}>
              <a
                href="#"
                className="group flex items-start gap-3 text-sm hover:text-[#DBFE01] transition-colors">
                <span className="text-gray-400 text-xs mt-1">→</span>
                <div className="flex-1">
                  <p className="font-medium text-[#1a1a1a] group-hover:text-[#DBFE01] line-clamp-2 leading-snug mb-1">
                    {post.title}
                  </p>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Templates & Checklists */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-[#DBFE01]" />
          <h3 className="font-bold text-[#1a1a1a]">Templates & Checklists</h3>
        </div>
        
        <ul className="space-y-3">
          {templates.map((template) => (
            <li key={template.id}>
              <a
                href="#"
                className="group flex items-center justify-between text-sm hover:text-[#DBFE01] transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-[#1a1a1a] group-hover:text-[#DBFE01] line-clamp-1 leading-snug mb-1">
                    {template.title}
                  </p>
                  <span className="text-xs text-gray-500">{template.type}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#DBFE01] group-hover:translate-x-1 transition-all" />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Case Studies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-[#DBFE01]" />
          <h3 className="font-bold text-[#1a1a1a]">Case Studies</h3>
        </div>
        
        <ul className="space-y-3">
          {caseStudies.map((study) => (
            <li key={study.id}>
              <Link
                to={study.link}
                className="group flex items-center justify-between text-sm hover:text-[#DBFE01] transition-colors">
                <p className="font-medium text-[#1a1a1a] group-hover:text-[#DBFE01] line-clamp-2 leading-snug">
                  {study.title}
                </p>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#DBFE01] group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-2 border-[#DBFE01] rounded-2xl p-6 text-center relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#DBFE01] opacity-10 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <h4 className="font-bold text-white mb-2">Ready to ship?</h4>
          <p className="text-white/80 text-sm mb-4">
            Weekly shipping. One accountable team.
          </p>
          <Link to={createPageUrl('Book')}>
            <Button className="w-full bg-[#DBFE01] text-[#1a1a1a] font-bold rounded-lg hover:bg-[#c5e000] transition-all">
              Book Roadmap Call
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Social Proof */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 rounded-2xl p-6">
        
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-[#1a1a1a] mb-1">
              Weekly shipping. One accountable team.
            </p>
            <p className="text-xs text-gray-600">
              Join 50+ founders, clinics, and brands scaling with Conefia.
            </p>
          </div>
        </div>
      </motion.div>
    </aside>
  );
}