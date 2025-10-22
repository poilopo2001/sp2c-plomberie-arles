import { Metadata } from 'next';
import { CheckCircle2, Clock, Shield, ThumbsUp } from 'lucide-react';
import { MultiStepForm } from '@/components/forms/MultiStepForm';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata: Metadata = PAGE_METADATA.devisGratuit;

export default function DevisGratuitPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full font-bold text-sm mb-6">
            100% GRATUIT • SANS ENGAGEMENT
          </div>
          <h1 className="text-h2 text-primary mb-6">
            Obtenez Votre <span className="text-accent">Devis Gratuit</span> en 48h
          </h1>
          <p className="text-body-large text-gray-600">
            Remplissez notre formulaire en 2 minutes et recevez une estimation
            détaillée pour votre projet de plomberie.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {[
            {
              icon: Clock,
              title: 'Réponse en 48h',
              description: 'Garantie',
            },
            {
              icon: Shield,
              title: '100% Gratuit',
              description: 'Sans engagement',
            },
            {
              icon: CheckCircle2,
              title: 'Devis Détaillé',
              description: 'Prix transparent',
            },
            {
              icon: ThumbsUp,
              title: 'Conseils Experts',
              description: 'Personnalisés',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="font-bold text-primary mb-1">{item.title}</div>
              <div className="text-sm text-gray-600">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto">
          <MultiStepForm />
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Pourquoi Demander Votre Devis Chez SP2C ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Transparence Totale',
                  description:
                    'Prix détaillés ligne par ligne, sans frais cachés. Vous savez exactement ce que vous payez.',
                },
                {
                  title: 'Expertise Certifiée',
                  description:
                    'Plus de 10 ans d\'expérience. Techniciens qualifiés et certifiés RGE.',
                },
                {
                  title: 'Garanties Solides',
                  description:
                    'Garantie décennale, assurance responsabilité civile. Votre tranquillité d\'esprit.',
                },
                {
                  title: 'Service Réactif',
                  description:
                    'Réponse rapide, intervention sous 48h. Nous respectons nos engagements.',
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-primary mb-2">
                      {benefit.title}
                    </div>
                    <div className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
