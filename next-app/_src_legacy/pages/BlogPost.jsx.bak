import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { createPageUrl } from '@/utils';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function BlogPost() {
  const { slug } = useParams();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blogPosts', slug],
    queryFn: () => base44.entities.BlogPost.filter({ slug, published: true }),
  });

  const post = posts[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4">Post not found</h1>
          <Link to={createPageUrl('Blog')} className="text-[#DBFE01] font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Seo
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DBFE01] opacity-10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to={createPageUrl('Blog')}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <Badge className="bg-[#DBFE01] text-[#1a1a1a] font-bold mb-6">
            {post.category}
          </Badge>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 mb-8">
            {post.excerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6 text-white/60">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.publishDate}
              </span>
              <span>By {post.author}</span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Blog', path: createPageUrl('Blog') }, { label: post.title }]} />

          {post.featuredImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto"
              />
            </motion.div>
          )}

          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h3:text-xl prose-h3:mt-6 prose-p:leading-relaxed prose-p:mb-4 prose-ul:mb-4 prose-ol:mb-4 prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl border-2 border-[#DBFE01] text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to implement this?
            </h3>
            <p className="text-white/80 mb-6">
              Book a roadmap call and we'll show you how to apply this to your business.
            </p>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#DBFE01] text-[#1a1a1a] font-bold px-8 py-6 rounded-full hover:bg-[#c5e000] transition-all hover:scale-105">
              Book Roadmap Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={createPageUrl('BlogPost', { slug: relatedPost.slug })}
                  className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#DBFE01] hover:shadow-xl transition-all">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className="bg-[#DBFE01] text-[#1a1a1a] font-bold mb-3">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#DBFE01] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}