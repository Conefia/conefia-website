'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createPageUrl } from '@/components/server/utils/index';
import { Button } from '@/components/server/ui/button';
import { Badge } from '@/components/server/ui/badge';

export default function FeaturedGrid({ posts }) {
  const router = useRouter();
  const featuredPosts = posts.filter(p => p.featured).slice(0, 3);

  const personaLinks = [
    { label: 'Clinic Growth', path: 'solutions-clinic-growth', icon: TrendingUp },
    { label: 'AI SaaS MVP Sprint', path: 'solutions-ai-saas-mvp-sprint', icon: Star },
    { label: 'DTC Growth (Shopify)', path: 'solutions-dtc-growth', icon: TrendingUp }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Featured Series Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-8 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl border-2 border-[#DBFE01] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">

          <div className="absolute top-0 right-0 w-64 h-64 bg-[#DBFE01] opacity-10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <Badge className="bg-[#DBFE01] text-[#1a1a1a] font-bold mb-4 rounded-full hover:text-white transition-colors">Featured Series</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Build → Launch → Scale Playbook
            </h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl">
              The complete framework we use with every client—from validation to product-market fit to scaling systems.
            </p>
            <Button
              onClick={() => window.location.hash = 'playbook'}
              className="bg-[#DBFE01] text-[#1a1a1a] font-bold px-6 py-3 rounded-lg hover:bg-[#c5e000] transition-all flex items-center gap-2">
              View the Playbook
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Posts - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Featured Content</h3>
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#DBFE01] hover:shadow-xl transition-all duration-300">

                <div className="md:flex">
                  <div className="md:w-2/5 relative overflow-hidden cursor-pointer" onClick={() => router.push(`/blog/${post.slug}`)}>
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#DBFE01] text-[#1a1a1a] font-bold">
                      {post.category}
                    </Badge>
                  </div>

                  <div className="md:w-3/5 p-6">
                    <h4 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#DBFE01] transition-colors line-clamp-2 cursor-pointer" onClick={() => router.push(`/blog/${post.slug}`)}>
                      {post.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <Button
                        onClick={() => router.push(`/blog/${post.slug}`)}
                        variant="ghost"
                        className="text-[#1a1a1a] font-bold group-hover:text-[#DBFE01] transition-colors">
                        Read
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Start Here Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1">

            <div className="sticky top-24 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Start Here</h3>
              <p className="text-gray-600 text-sm mb-6">
                Jump to your persona-specific playbook:
              </p>

              <div className="space-y-3">
                {personaLinks.map((persona, i) => (
                  <Link
                    key={i}
                    href={createPageUrl(persona.path)}
                    className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-[#DBFE01] hover:shadow-md transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#DBFE01]/20 rounded-lg flex items-center justify-center">
                        <persona.icon className="w-4 h-4 text-[#1a1a1a]" />
                      </div>
                      <span className="font-semibold text-[#1a1a1a] group-hover:text-[#DBFE01] transition-colors text-sm">
                        {persona.label}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#DBFE01] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}