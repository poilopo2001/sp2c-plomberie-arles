'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { TESTIMONIALS } from '@/lib/constants';
import { motion, useInView } from 'framer-motion';

export const TestimonialsSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-h2 text-primary mb-6">
            Ils Nous Font <span className="text-accent">Confiance</span>
          </h2>
          <p className="text-body-large text-gray-600">
            Découvrez les avis de nos clients satisfaits. Votre satisfaction est
            notre priorité.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col hover:-translate-y-2 transition-all duration-500">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-accent"
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-accent/20 mb-4" />

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic flex-1">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.location}
                    </div>
                    <div className="text-xs text-accent font-semibold mt-1">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-primary-50 rounded-2xl px-8 py-6">
            <div className="flex items-center gap-2">
              <Star className="w-8 h-8 text-accent fill-accent" />
              <div className="text-left">
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-gray-600">Note moyenne</div>
              </div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div className="text-left">
              <div className="text-3xl font-bold text-primary">127</div>
              <div className="text-sm text-gray-600">Avis clients</div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div className="text-left">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-sm text-gray-600">Recommandent</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
