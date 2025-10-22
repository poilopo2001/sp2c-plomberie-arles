'use client';

import React from 'react';
import { Phone, FileText, Calendar, CheckCircle2, Shield } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';
import { motion, useInView } from 'framer-motion';

const icons = {
  Phone,
  FileText,
  Calendar,
  CheckCircle2,
  Shield,
};

export const ProcessTimeline: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-h2 text-white mb-6">
            Comment Ça <span className="text-accent">Fonctionne</span> ?
          </h2>
          <p className="text-body-large text-primary-100">
            Un processus simple et transparent, de votre premier contact jusqu'à
            la garantie de vos travaux.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary-600 hidden md:block" />

            {/* Steps */}
            <div className="space-y-12">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = icons[step.icon as keyof typeof icons];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative flex gap-6 md:gap-8"
                  >
                    {/* Step Number Circle */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-glow-lg z-10 relative">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20" />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-accent text-sm font-bold mb-2">
                            ÉTAPE {step.number}
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <div className="hidden md:block text-8xl font-bold text-white/5">
                          {step.number}
                        </div>
                      </div>
                      <p className="text-primary-100 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
