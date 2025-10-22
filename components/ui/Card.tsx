import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-8 border border-gray-100 shadow-lg',
        hover && 'hover:shadow-3xl hover:border-accent transition-all duration-500',
        className
      )}
    >
      {children}
    </div>
  );
};
