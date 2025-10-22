import { COMPANY_INFO, SERVICES } from './constants';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: COMPANY_INFO.name,
    image: 'https://sp2c-plomberie-arles.fr/logo.png',
    '@id': 'https://sp2c-plomberie-arles.fr',
    url: 'https://sp2c-plomberie-arles.fr',
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      postalCode: COMPANY_INFO.address.postalCode,
      addressRegion: COMPANY_INFO.address.region,
      addressCountry: COMPANY_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.coordinates.lat,
      longitude: COMPANY_INFO.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '12:00',
      },
    ],
    priceRange: '€€',
    areaServed: {
      '@type': 'City',
      name: 'Arles',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };
}

export function generateServiceSchema(service: {
  title: string;
  description: string;
  priceRange: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    description: service.description,
    provider: {
      '@type': 'Plumber',
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.phone,
      areaServed: {
        '@type': 'City',
        name: 'Arles',
      },
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: service.priceRange,
        priceCurrency: 'EUR',
      },
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    url: 'https://sp2c-plomberie-arles.fr',
    logo: 'https://sp2c-plomberie-arles.fr/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'Customer Service',
      areaServed: 'FR',
      availableLanguage: 'French',
    },
    sameAs: [
      COMPANY_INFO.socialMedia.facebook,
      COMPANY_INFO.socialMedia.instagram,
      COMPANY_INFO.socialMedia.linkedin,
    ],
  };
}
