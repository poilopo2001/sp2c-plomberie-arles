import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { SERVICES, TESTIMONIALS, FAQ } from '@/lib/constants';
import { generateServiceMetadata, PAGE_METADATA } from '@/lib/metadata';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return PAGE_METADATA.home;
  }

  return generateServiceMetadata(service.title, service.fullDescription, service.slug);
}

export default function ServicePage({ params }: PageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Get related testimonials
  const relatedTestimonials = TESTIMONIALS.filter((t) =>
    t.service.toLowerCase().includes(service.title.toLowerCase().split(' ')[0])
  ).slice(0, 3);

  // Service-specific FAQ (using general FAQ for now)
  const serviceFAQ = FAQ.slice(0, 4);

  const serviceSchema = generateServiceSchema({
    title: service.title,
    description: service.fullDescription,
    priceRange: service.priceRange,
  });

  const faqSchema = generateFAQSchema(serviceFAQ);

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[400px] bg-gradient-primary">
          <div className="absolute inset-0">
            <Image
              src={service.imageUrl}
              alt={service.title}
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/90 to-primary-600/70" />

          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="h-full flex flex-col justify-center max-w-4xl">
              <Breadcrumbs
                items={[
                  { label: 'Nos Services', href: '/nos-services' },
                  { label: service.title },
                ]}
              />

              <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 mt-8">
                {service.title}
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                {service.benefits.slice(0, 3).map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Service Description */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  En Quoi Consiste Ce Service ?
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">{service.fullDescription}</p>
                  <p>
                    Notre équipe d'experts intervient rapidement pour tous vos besoins
                    en {service.title.toLowerCase()}. Nous utilisons des équipements
                    professionnels et des techniques éprouvées pour garantir un travail
                    de qualité.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section className="bg-primary-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Les Avantages de Notre Service
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Testimonials */}
              {relatedTestimonials.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    Avis Clients
                  </h2>
                  <div className="space-y-4">
                    {relatedTestimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                      >
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-accent fill-accent"
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-4">
                          &quot;{testimonial.text}&quot;
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              {testimonial.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-primary">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {testimonial.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Questions Fréquentes
                </h2>
                <Accordion items={serviceFAQ} />
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-accent text-white rounded-2xl p-8 shadow-xl sticky top-24">
                <h3 className="text-2xl font-bold mb-4">
                  Besoin de Ce Service ?
                </h3>
                <p className="mb-6 text-white/90">
                  Obtenez votre devis gratuit en 48h. Sans engagement.
                </p>

                <div className="space-y-4">
                  <Link href="/devis-gratuit">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full shadow-2xl"
                    >
                      Devis Gratuit
                    </Button>
                  </Link>

                  <a href="tel:+33625075640">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full shadow-2xl"
                    >
                      06 25 07 56 40
                    </Button>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Réponse en 48h garantie</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">100% gratuit et sans engagement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Techniciens certifiés</span>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Estimation Tarifaire
                </h3>
                <div className="bg-primary-50 rounded-lg p-4 mb-4">
                  <div className="text-3xl font-bold text-accent mb-1">
                    {service.priceRange}
                  </div>
                  <div className="text-sm text-gray-600">Prix indicatif</div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Le prix final dépend de plusieurs facteurs : complexité du projet,
                  matériaux choisis, accessibilité. Demandez un devis personnalisé
                  gratuit.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-4">
                  Nos Garanties
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-gray-700">Garantie Décennale</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-gray-700">Certifié RGE</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-gray-700">Assurance RC Pro</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-gray-700">SAV Réactif</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Services Complémentaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICES.filter((s) => s.featured && s.id !== service.id)
                .slice(0, 3)
                .map((relatedService) => (
                  <Link
                    key={relatedService.id}
                    href={`/${relatedService.slug}`}
                    className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent"
                  >
                    <h3 className="font-bold text-lg text-primary group-hover:text-accent transition-colors duration-300 mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedService.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-semibold">
                      <span>En savoir plus</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
