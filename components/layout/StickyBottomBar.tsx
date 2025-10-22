'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Calculator, Mail } from 'lucide-react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

export const StickyBottomBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t-2 border-gray-200 shadow-2xl"
        >
          <div className="grid grid-cols-3 gap-px bg-gray-200">
            {/* Call Button */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-white hover:bg-primary-50 transition-colors duration-300 flex flex-col items-center justify-center py-3 gap-1"
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-semibold text-primary">Appeler</span>
            </a>

            {/* Quote Button */}
            <Link
              href="/devis-gratuit"
              className="bg-accent hover:bg-accent-600 transition-colors duration-300 flex flex-col items-center justify-center py-3 gap-1"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Calculator className="w-5 h-5 text-accent" />
              </div>
              <span className="text-xs font-bold text-white">Devis Gratuit</span>
            </Link>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="bg-white hover:bg-primary-50 transition-colors duration-300 flex flex-col items-center justify-center py-3 gap-1"
            >
              <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-semibold text-primary-700">Contact</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
