import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 text-sm py-4" aria-label="Breadcrumb">
      <Link
        href="/"
        className="flex items-center gap-1 text-gray-600 hover:text-accent transition-colors duration-300"
      >
        <Home className="w-4 h-4" />
        <span>Accueil</span>
      </Link>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="text-gray-600 hover:text-accent transition-colors duration-300"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-primary font-semibold">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
