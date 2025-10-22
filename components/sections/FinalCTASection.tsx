'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';
import { motion, useInView } from 'framer-motion';

export const FinalCTASection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
          alt="Contactez SP2C Plomberie Arles"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-accent" />
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Obtenez votre devis gratuit en 48h. Notre équipe d'experts est prête à
            transformer vos idées en réalité.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/devis-gratuit">
              <Button
                variant="secondary"
                size="xl"
                className="w-full sm:w-auto shadow-2xl"
              >
                <Mail className="w-6 h-6" />
                Obtenir mon Devis Gratuit
              </Button>
            </Link>

            <div className="flex items-center gap-4 text-white">
              <div className="h-px w-12 bg-white/50" />
              <span className="font-semibold">OU</span>
              <div className="h-px w-12 bg-white/50" />
            </div>

            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button
                variant="secondary"
                size="xl"
                className="w-full sm:w-auto shadow-2xl animate-pulse-glow"
              >
                <Phone className="w-6 h-6" />
                {COMPANY_INFO.phoneDisplay}
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Devis en 48h</div>
                <div className="text-sm text-white/80">Garanti</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Sans Engagement</div>
                <div className="text-sm text-white/80">100% Gratuit</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Disponible 7j/7</div>
                <div className="text-sm text-white/80">Urgences</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
