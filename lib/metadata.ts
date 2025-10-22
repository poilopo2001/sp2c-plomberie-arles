import { Metadata } from 'next';
import { COMPANY_INFO } from './constants';

const baseUrl = 'https://sp2c-plomberie-arles.fr';

export const PAGE_METADATA: Record<string, Metadata> = {
  home: {
    title: `${COMPANY_INFO.shortName} Plomberie Arles | Expert Chauffage & Climatisation | Devis 48h`,
    description: `Expert plomberie à Arles depuis ${new Date().getFullYear() - COMPANY_INFO.yearFounded} ans. Installation, dépannage, rénovation. Intervention rapide 7j/7. Devis gratuit sous 48h. ☎ ${COMPANY_INFO.phoneDisplay}`,
    keywords: [
      'plombier Arles',
      'plomberie Arles',
      'chauffage Arles',
      'climatisation Arles',
      'dépannage plomberie Arles',
      'installation chauffe-eau Arles',
      'rénovation salle de bain Arles',
      'fuite eau Arles',
      'débouchage Arles',
      'urgence plombier Arles',
    ],
    openGraph: {
      title: `${COMPANY_INFO.shortName} - Plombier Expert à Arles`,
      description: 'Votre artisan plombier de confiance à Arles. Installation, réparation, dépannage. Intervention rapide.',
      url: baseUrl,
      siteName: COMPANY_INFO.name,
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: {
      canonical: baseUrl,
    },
  },
  services: {
    title: `Nos Services Plomberie à Arles | ${COMPANY_INFO.shortName} - Installation & Dépannage`,
    description: 'Découvrez tous nos services de plomberie à Arles : installation, réparation, dépannage urgence, rénovation salle de bain, chauffe-eau, climatisation. Devis gratuit.',
    openGraph: {
      title: 'Services de Plomberie Professionnels à Arles',
      description: 'Installation, réparation, dépannage urgence. Tous nos services de plomberie à Arles.',
      url: `${baseUrl}/nos-services`,
    },
    alternates: {
      canonical: `${baseUrl}/nos-services`,
    },
  },
  contact: {
    title: `Contact ${COMPANY_INFO.shortName} Arles | Devis Gratuit en 48h | ☎ ${COMPANY_INFO.phoneDisplay}`,
    description: `Contactez votre plombier à Arles. Devis gratuit sous 48h. Intervention rapide 7j/7. ☎ ${COMPANY_INFO.phoneDisplay}. Réponse garantie.`,
    openGraph: {
      title: `Contactez ${COMPANY_INFO.shortName} - Plombier à Arles`,
      description: 'Devis gratuit en 48h. Intervention rapide. Réponse garantie.',
      url: `${baseUrl}/contact`,
    },
    alternates: {
      canonical: `${baseUrl}/contact`,
    },
  },
  realisations: {
    title: `Nos Réalisations Plomberie à Arles | ${COMPANY_INFO.shortName} - Portfolio`,
    description: 'Découvrez nos réalisations de plomberie à Arles : rénovations de salles de bain, installations de chauffe-eau, douches italiennes. Photos avant/après.',
    openGraph: {
      title: 'Portfolio de nos Réalisations Plomberie',
      description: 'Nos projets de plomberie à Arles : photos avant/après, témoignages clients.',
      url: `${baseUrl}/realisations`,
    },
    alternates: {
      canonical: `${baseUrl}/realisations`,
    },
  },
  devisGratuit: {
    title: `Devis Gratuit Plomberie Arles | ${COMPANY_INFO.shortName} - Réponse 48h`,
    description: 'Obtenez votre devis gratuit de plomberie à Arles sous 48h. Sans engagement. Étude personnalisée de votre projet.',
    openGraph: {
      title: 'Devis Gratuit Plomberie à Arles',
      description: 'Demandez votre devis gratuit. Réponse sous 48h. Sans engagement.',
      url: `${baseUrl}/devis-gratuit`,
    },
    alternates: {
      canonical: `${baseUrl}/devis-gratuit`,
    },
  },
};

export function generateServiceMetadata(
  serviceTitle: string,
  serviceDescription: string,
  slug: string
): Metadata {
  return {
    title: `${serviceTitle} Arles | ${COMPANY_INFO.shortName} - Expert Certifié`,
    description: `${serviceDescription} À Arles et environs. ${COMPANY_INFO.shortName} : expertise, rapidité, garantie. Devis gratuit ☎ ${COMPANY_INFO.phoneDisplay}`,
    openGraph: {
      title: `${serviceTitle} à Arles`,
      description: serviceDescription,
      url: `${baseUrl}/${slug}`,
    },
    alternates: {
      canonical: `${baseUrl}/${slug}`,
    },
  };
}
