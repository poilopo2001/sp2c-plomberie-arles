import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const featuredServices = SERVICES.filter((s) => s.featured).slice(0, 6);

  return (
    <footer className="bg-gradient-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">SP2C</span>
              </div>
              <div>
                <div className="font-bold text-lg">{COMPANY_INFO.shortName}</div>
                <div className="text-sm text-primary-100">Votre expert en plomberie</div>
              </div>
            </div>
            <p className="text-primary-100 mb-6 leading-relaxed">
              Expert en plomberie, chauffage et climatisation à Arles depuis{' '}
              {currentYear - COMPANY_INFO.yearFounded} ans. Service de qualité, intervention
              rapide.
            </p>
            <div className="flex gap-4">
              <a
                href={COMPANY_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_INFO.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_INFO.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {featuredServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-primary-100 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/nos-services"
                  className="text-accent hover:text-accent-400 font-semibold transition-colors duration-300"
                >
                  Voir tous nos services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-primary-100 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/realisations"
                  className="text-primary-100 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Nos Réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-100 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/devis-gratuit"
                  className="text-primary-100 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Devis Gratuit
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-primary-100 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-primary-100 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Nous Contacter</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-3 text-primary-100 hover:text-accent transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-white">Téléphone</div>
                    <div>{COMPANY_INFO.phoneDisplay}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3 text-primary-100 hover:text-accent transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="break-all">{COMPANY_INFO.email}</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-100">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Adresse</div>
                    <div>
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postalCode}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-100">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Horaires</div>
                    {COMPANY_INFO.openingHours.map((schedule, index) => (
                      <div key={index} className="text-sm">
                        {schedule.days}: {schedule.hours}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-100">
            <div>
              © {currentYear} {COMPANY_INFO.name}. Tous droits réservés.
            </div>
            <div className="flex items-center gap-4">
              <span>SIRET: {COMPANY_INFO.siret}</span>
              <span>•</span>
              <span>Garantie Décennale</span>
              <span>•</span>
              <span>Certifié RGE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
