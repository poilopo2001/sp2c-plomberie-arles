'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Star, Award, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - COMPANY_INFO.yearFounded;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1920&q=80"
          alt="Plombier professionnel à Arles"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-white font-semibold">
                Expert certifié depuis {yearsOfExperience} ans à Arles
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-hero text-white mb-6 leading-none">
              Votre Expert en{' '}
              <span className="text-accent">Plomberie</span>
              <br />
              à Arles
            </h1>

            {/* Subheading */}
            <p className="text-body-large text-white/90 mb-8 max-w-2xl">
              Installation, réparation, dépannage urgence.{' '}
              <span className="font-bold text-accent">
                Intervention rapide sous 2h
              </span>{' '}
              pour tous vos besoins en plomberie, chauffage et climatisation.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                'Devis gratuit en 48h',
                'Garantie décennale',
                'Disponible 7j/7',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/devis-gratuit">
                <Button variant="accent" size="xl" className="w-full sm:w-auto">
                  Devis Gratuit en 48h
                </Button>
              </Link>

              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Button variant="secondary" size="xl" className="w-full sm:w-auto">
                  <Phone className="w-6 h-6" />
                  {COMPANY_INFO.phoneDisplay}
                </Button>
              </a>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-white"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-accent fill-accent"
                    />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
              </div>
              <div className="h-6 w-px bg-white/30 hidden sm:block" />
              <div>
                <span className="font-bold text-2xl text-accent">850+</span>
                <span className="ml-2">clients satisfaits</span>
              </div>
              <div className="h-6 w-px bg-white/30 hidden sm:block" />
              <div>
                <span className="font-bold text-2xl text-accent">98%</span>
                <span className="ml-2">de satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
