import React, { useState, useEffect, useCallback } from 'react';
import { base44 } from '@/api/base44Client';
import { motion, useInView } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ContourBackground from '../visual/ContourBackground';

export default function TestimonialSlider({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // Fetch testimonials
    const fetchTestimonials = async () => {
      try {
        const data = await base44.entities.Testimonial.list({
          sort: { created_date: -1 },
          limit: 10
        });
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  if (!loading && testimonials.length === 0) return null;

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden bg-[#0B1020]">
       {/* Background */}
       <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020] to-[#121829]" />
       <ContourBackground className="opacity-30" />
       
       {/* Decorative blobs */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DBFE01]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium mb-6 backdrop-blur-sm">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Trusted by founders <br />
            <span className="text-[#DBFE01]">worldwide.</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {loading ? (
                // Skeleton loader
                [1, 2, 3].map((i) => (
                  <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-4">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-64 animate-pulse" />
                  </div>
                ))
              ) : (
                testimonials.map((item, index) => (
                  <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_100%] lg:flex-[0_0_80%] min-w-0 px-4 pl-4 md:pl-10">
                    <motion.div 
                      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 relative group hover:border-white/20 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Quote className="absolute top-8 left-8 w-10 h-10 text-[#DBFE01]/20 rotate-180" />
                      
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="flex gap-1 mb-6">
                           {[...Array(item.rating || 5)].map((_, i) => (
                             <Star key={i} className="w-5 h-5 fill-[#DBFE01] text-[#DBFE01]" />
                           ))}
                        </div>

                        <blockquote className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed mb-8">
                          "{item.content}"
                        </blockquote>

                        <div className="flex items-center gap-4">
                          {item.image_url ? (
                            <img 
                              src={item.image_url} 
                              alt={item.client_name} 
                              className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-lg">
                              {item.client_name.charAt(0)}
                            </div>
                          )}
                          <div className="text-left">
                            <div className="font-bold text-white text-lg">{item.client_name}</div>
                            <div className="text-white/40 text-sm">
                              {item.client_role}{item.client_company && ` at ${item.client_company}`}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Navigation */}
          {!loading && testimonials.length > 1 && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white transition-all hidden md:flex"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white transition-all hidden md:flex"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === selectedIndex ? 'w-8 bg-[#DBFE01]' : 'w-2 bg-white/10 hover:bg-white/20'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}