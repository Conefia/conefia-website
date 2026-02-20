'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/components/server/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import Seo from '@/components/client/Seo';
import Breadcrumbs from '@/components/server/Breadcrumbs';
import { BreadcrumbStructuredData } from '@/components/server/StructuredData';
import BlogHero from '@/components/client/blog/BlogHero';
import FilterBar from '@/components/client/blog/FilterBar';
import FeaturedGrid from '@/components/client/blog/FeaturedGrid';
import PostCard from '@/components/client/blog/PostCard';
import SolutionsInterstitial from '@/components/client/blog/SolutionsInterstitial';
import LeadMagnetCTA from '@/components/client/blog/LeadMagnetCTA';
import BlogSidebar from '@/components/client/blog/BlogSidebar';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showTemplatesOnly, setShowTemplatesOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => base44.entities.BlogPost.filter({ published: true }, '-publishDate'),
  });

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!blogPosts.length) {
      setFilteredPosts([]);
      return;
    }
    
    let filtered = [...blogPosts];

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => {
        const category = post.category.toLowerCase();
        const persona = post.persona?.toLowerCase() || '';
        const tags = post.tags.map(t => t.toLowerCase());
        
        switch (activeCategory) {
          case 'build':
            return category === 'build';
          case 'launch':
            return category === 'launch';
          case 'scale':
            return category === 'scale';
          case 'ai':
            return tags.includes('ai') || tags.includes('llms');
          case 'clinics':
            return persona === 'clinic' || tags.includes('clinics');
          case 'dtc':
            return persona === 'dtc' || tags.includes('dtc') || tags.includes('shopify');
          case 'accelerators':
            return persona === 'accelerator' || tags.includes('accelerators');
          case 'enterprise':
            return persona === 'enterprise' || tags.includes('enterprise');
          default:
            return true;
        }
      });
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort
    if (sortBy === 'recent') {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'popular') {
      filtered.sort((a, b) => b.id - a.id); // Simple popularity proxy
    }

    setFilteredPosts(filtered);
  }, [activeCategory, sortBy, searchQuery, showTemplatesOnly, blogPosts]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const mainPosts = filteredPosts.filter(p => !p.featured);
  const firstBatch = mainPosts.slice(0, 8);
  const secondBatch = mainPosts.slice(8);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Seo
        title="Blog"
        description="Insights to Build, Launch, and Scale. Practical guides for founders, clinics, Shopify brands, accelerators, and enterprise innovation teams."
        canonical="/blog"
      />
      <BreadcrumbStructuredData items={[{ label: 'Home', path: '/' }, { label: 'Blog' }]} />

      {/* Structured Data for Blog */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Conefia Blog",
          "description": "Insights to Build, Launch, and Scale",
          "url": typeof window !== 'undefined' ? window.location.origin + '/blog' : 'https://conefia.com/blog',
          "publisher": {
            "@type": "Organization",
            "name": "Conefia",
            "logo": {
              "@type": "ImageObject",
              "url": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/d014c4e67_conefia_logo_header_80h_2x.png"
            }
          }
        })}
      </script>

      <BlogHero onSearch={handleSearch} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Blog' }]} />
      </div>

      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        showTemplatesOnly={showTemplatesOnly}
        onToggleTemplates={() => setShowTemplatesOnly(!showTemplatesOnly)}
      />

      <FeaturedGrid posts={blogPosts} />

      {/* Main Content Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-20">
              <p className="text-gray-500">Loading posts...</p>
            </div>
          ) : (
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Main Content - 3 columns */}
            <div className="lg:col-span-3 space-y-16">
              
              {/* First batch of posts */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {firstBatch.map((post, index) => (
                  <PostCard key={post.id} post={post} index={index} />
                ))}
              </div>

              {/* Solutions Interstitial */}
              {firstBatch.length > 0 && <SolutionsInterstitial />}

              {/* Second batch of posts */}
              {secondBatch.length > 0 && (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {secondBatch.map((post, index) => (
                    <PostCard key={post.id} post={post} index={index} />
                  ))}
                </div>
              )}

              {/* Lead Magnet CTA */}
              <LeadMagnetCTA />

              {/* Empty State */}
              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20">
                  <p className="text-xl font-semibold text-gray-600 mb-2">No posts found</p>
                  <p className="text-gray-500">Try adjusting your filters or search query</p>
                </motion.div>
              )}
            </div>

            {/* Sidebar - 1 column (hidden on mobile) */}
            <div className="hidden lg:block">
              <BlogSidebar />
            </div>
          </div>
          )}
        </div>
      </section>
    </div>
  );
}