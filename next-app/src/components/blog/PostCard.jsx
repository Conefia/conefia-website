"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createPageUrl } from '@/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function PostCard({ post, index = 0 }) {
  const router = useRouter();
  
  const personaLinkMap = {
    founder: 'solutions-ai-saas-mvp-sprint',
    clinic: 'solutions-clinic-growth',
    dtc: 'solutions-dtc-growth',
    accelerator: 'solutions-accelerator-support',
    enterprise: 'solutions-enterprise-innovation'
  };

  const handleReadClick = () => {
    router.push(`/blog/${post.slug}`);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#DBFE01] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Thumbnail */}
      {post.featuredImage && (
        <div className="relative overflow-hidden aspect-[16/10] cursor-pointer" onClick={handleReadClick}>
          <img
            src={post.featuredImage}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-4 left-4 bg-[#DBFE01] text-[#1a1a1a] font-bold shadow-lg">
            {post.category}
          </Badge>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 line-clamp-2 group-hover:text-[#DBFE01] transition-colors leading-tight cursor-pointer" onClick={handleReadClick}>
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
          <span>{post.date}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Button
            onClick={handleReadClick}
            variant="ghost"
            className="text-[#1a1a1a] font-bold group-hover:text-[#DBFE01] transition-colors p-0 h-auto">
            Read Article
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {post.persona && personaLinkMap[post.persona] && (
            <Link href={createPageUrl(personaLinkMap[post.persona])}
              className="text-xs text-gray-400 hover:text-[#DBFE01] transition-colors underline decoration-dotted">
              Related solution →
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}