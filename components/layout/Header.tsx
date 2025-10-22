'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO, MENU_ITEMS, SERVICES } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const featuredServices = SERVICES.filter((s) => s.featured).slice(0, 6);

  return (
    <>
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block bg-primary-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span>Intervention rapide 7j/7</span>
            <span>•</span>
            <span>Devis gratuit sous 48h</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-4 h-4" />
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="font-semibold hover:text-accent transition-colors"
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 bg-white transition-all duration-300',
          isScrolled ? 'shadow-xl py-3' : 'shadow-md py-4'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">SP2C</span>
              </div>
              <div className="hidden md:block">
                <div className="font-bold text-lg text-primary leading-tight">
                  {COMPANY_INFO.shortName}
                </div>
                <div className="text-xs text-gray-600">Plomberie • Chauffage</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-accent font-medium transition-colors duration-300"
              >
                Accueil
              </Link>

              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-accent font-medium transition-colors duration-300">
                  Nos Services
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-300',
                      isServicesOpen && 'rotate-180'
                    )}
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {featuredServices.map((service) => (
                          <Link
                            key={service.id}
                            href={`/${service.slug}`}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors duration-300 group"
                          >
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                              <span className="text-accent group-hover:text-white text-xl">
                                🔧
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-gray-900 group-hover:text-accent">
                                {service.title}
                              </div>
                              <div className="text-xs text-gray-600 mt-1 line-clamp-2">
                                {service.shortDescription}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Link
                          href="/nos-services"
                          className="text-accent hover:text-accent-600 font-semibold text-sm flex items-center gap-2"
                        >
                          Voir tous nos services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/realisations"
                className="text-gray-700 hover:text-accent font-medium transition-colors duration-300"
              >
                Réalisations
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-accent font-medium transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <a href={`tel:${COMPANY_INFO.phone}`} className="hidden lg:block">
                <Button variant="primary" size="md">
                  <Phone className="w-5 h-5" />
                  Appelez-nous
                </Button>
              </a>

              <Link href="/devis-gratuit" className="hidden md:block">
                <Button variant="accent" size="md">
                  Devis Gratuit
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-primary hover:text-accent transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
            style={{ top: isScrolled ? '70px' : '80px' }}
          >
            <div className="container mx-auto px-4 py-8">
              <nav className="flex flex-col gap-6">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-semibold text-gray-900 hover:text-accent transition-colors py-3 border-b border-gray-200"
                >
                  Accueil
                </Link>

                <div>
                  <div className="text-xl font-semibold text-gray-900 py-3 border-b border-gray-200">
                    Nos Services
                  </div>
                  <div className="mt-4 space-y-3">
                    {featuredServices.map((service) => (
                      <Link
                        key={service.id}
                        href={`/${service.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-gray-700 hover:text-accent transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                    <Link
                      href="/nos-services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-accent font-semibold"
                    >
                      Tous nos services →
                    </Link>
                  </div>
                </div>

                <Link
                  href="/realisations"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-semibold text-gray-900 hover:text-accent transition-colors py-3 border-b border-gray-200"
                >
                  Réalisations
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-semibold text-gray-900 hover:text-accent transition-colors py-3 border-b border-gray-200"
                >
                  Contact
                </Link>

                <div className="mt-8 space-y-4">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button variant="primary" size="lg" className="w-full">
                      <Phone className="w-5 h-5" />
                      {COMPANY_INFO.phoneDisplay}
                    </Button>
                  </a>

                  <Link
                    href="/devis-gratuit"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button variant="accent" size="lg" className="w-full">
                      Devis Gratuit 48h
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
