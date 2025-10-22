export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  benefits: string[];
  priceRange: string;
  imageUrl: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  service: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  metric?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postalCode: string;
  projectType: string;
  surface?: string;
  budget?: string;
  timing: string;
  message?: string;
  rgpdConsent: boolean;
}
