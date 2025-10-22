'use client';

import React from 'react';
import { Accordion } from '@/components/ui/Accordion';
import { FAQ } from '@/lib/constants';
import { motion, useInView } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-h2 text-primary mb-6">
            Questions <span className="text-accent">Fréquentes</span>
          </h2>
          <p className="text-body-large text-gray-600">
            Vous avez des questions ? Nous avons les réponses. Consultez notre FAQ
            pour en savoir plus sur nos services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion items={FAQ} />
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="/contact"
            className="text-accent hover:text-accent-600 font-bold text-lg transition-colors duration-300"
          >
            Contactez-nous directement →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
