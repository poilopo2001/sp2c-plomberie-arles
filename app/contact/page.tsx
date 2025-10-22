import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { MultiStepForm } from '@/components/forms/MultiStepForm';
import { COMPANY_INFO } from '@/lib/constants';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata: Metadata = PAGE_METADATA.contact;

export default function ContactPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-h2 text-primary mb-6">
            Contactez <span className="text-accent">SP2C Plomberie</span>
          </h1>
          <p className="text-body-large text-gray-600">
            Remplissez le formulaire ci-dessous et recevez votre devis gratuit sous
            48h. Réponse garantie !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <MultiStepForm />
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-6">
                Nos Coordonnées
              </h3>

              <div className="space-y-6">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-4 hover:bg-primary-50 p-3 rounded-lg transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <Phone className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Téléphone</div>
                    <div className="text-primary font-bold text-lg">
                      {COMPANY_INFO.phoneDisplay}
                    </div>
                    <div className="text-sm text-gray-600">Disponible 7j/7</div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-4 hover:bg-primary-50 p-3 rounded-lg transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-primary break-all">
                      {COMPANY_INFO.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Adresse</div>
                    <div className="text-gray-700">
                      {COMPANY_INFO.address.city}
                      <br />
                      {COMPANY_INFO.address.postalCode}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-gradient-primary text-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold">Horaires d'Ouverture</h3>
              </div>

              <div className="space-y-3">
                {COMPANY_INFO.openingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-3 border-b border-primary-600 last:border-0"
                  >
                    <span className="font-semibold">{schedule.days}</span>
                    <span className="text-primary-100">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-primary-600">
                <div className="bg-accent/20 rounded-lg p-4">
                  <div className="font-bold text-accent mb-1">
                    Urgences 24h/24
                  </div>
                  <div className="text-sm text-primary-100">
                    Service d'urgence disponible tous les jours
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-accent mb-2">48h</div>
              <div className="font-semibold text-gray-900">
                Délai de réponse garanti
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Nous nous engageons à vous répondre dans les 48 heures maximum
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
