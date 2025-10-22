import { Metadata } from 'next';
import Image from 'next/image';
import { PROJECTS } from '@/lib/constants';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata: Metadata = PAGE_METADATA.realisations;

export default function RealisationsPage() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-h2 mb-6">
              Nos <span className="text-accent">Réalisations</span>
            </h1>
            <p className="text-body-large text-primary-100">
              Découvrez quelques-uns de nos projets récents. Des transformations qui
              témoignent de notre savoir-faire et de notre engagement qualité.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2">
                <div className="relative h-64">
                  <Image
                    src={project.beforeImage}
                    alt={`${project.title} - Avant`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-bold">
                    AVANT
                  </div>
                </div>
                <div className="relative h-64">
                  <Image
                    src={project.afterImage}
                    alt={`${project.title} - Après`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-lg text-sm font-bold">
                    APRÈS
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-bold text-primary">
                    {project.title}
                  </h2>
                  {project.metric && (
                    <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-bold">
                      {project.metric}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 text-gray-600 mb-4">
                  <span className="font-semibold text-accent">{project.service}</span>
                  <span>•</span>
                  <span>{project.location}</span>
                </div>

                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-primary-50 rounded-3xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Votre Projet Sera Notre Prochaine Réussite
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Chaque projet est unique. Contactez-nous pour discuter de vos besoins et
            recevoir un devis personnalisé gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/devis-gratuit"
              className="bg-accent hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Demander un Devis Gratuit
            </a>
            <a
              href="/contact"
              className="bg-primary hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
