'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/server/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/server/ui/select";
import { categories } from '@/components/server/blog/blogData';

export default function FilterBar({ activeCategory, onCategoryChange, sortBy, onSortChange, showTemplatesOnly, onToggleTemplates }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isSticky ? 'fixed top-16 left-0 right-0 z-40 shadow-lg' : 'relative'} bg-white border-b border-gray-200 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-hide">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                variant={activeCategory === cat.id ? "default" : "ghost"}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#DBFE01] text-[#1a1a1a] hover:bg-[#c5e000]'
                    : 'text-gray-600 hover:text-[#1a1a1a] hover:bg-gray-100'
                }`}>
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Sort & Toggle */}
          <div className="flex gap-3 items-center w-full lg:w-auto">
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger className="w-[180px] rounded-full border-2 border-gray-200 focus:border-[#DBFE01]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most recent</SelectItem>
                <SelectItem value="popular">Most popular</SelectItem>
                <SelectItem value="recommended">Recommended</SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={onToggleTemplates}
              variant={showTemplatesOnly ? "default" : "outline"}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                showTemplatesOnly
                  ? 'bg-[#DBFE01] text-[#1a1a1a] hover:bg-[#c5e000]'
                  : 'border-2 border-gray-200 text-gray-600 hover:text-[#1a1a1a] hover:bg-gray-100'
              }`}>
              Templates only
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}