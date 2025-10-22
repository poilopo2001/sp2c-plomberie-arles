import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata: Metadata = PAGE_METADATA.services;

export default function ServicesPage() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-h2 mb-6">
              Tous Nos Services de <span className="text-accent">Plomberie</span>
            </h1>
            <p className="text-body-large text-primary-100">
              Une gamme complète de services professionnels pour tous vos besoins en
              plomberie, chauffage et climatisation à Arles et environs.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-accent flex flex-col"
            >
              {/* Service Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {service.priceRange}
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                  {service.fullDescription}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Link href={`/${service.slug}`} className="flex-1">
                    <Button variant="outline" size="md" className="w-full">
                      Détails
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/devis-gratuit">
                    <Button variant="accent" size="md">
                      Devis
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-primary-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Vous ne trouvez pas le service recherché ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nous proposons également de nombreux autres services de plomberie.
            Contactez-nous pour discuter de votre projet spécifique.
          </p>
          <Link href="/contact">
            <Button variant="accent" size="lg">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
