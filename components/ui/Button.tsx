import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, ...props }, ref) => {
    const baseStyles =
      'font-semibold rounded-lg transition-all duration-500 ease-in-out inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-primary text-white hover:bg-primary-600 active:scale-95 shadow-xl hover:shadow-2xl hover:scale-105',
      accent:
        'bg-accent text-white hover:bg-accent-600 active:scale-95 shadow-2xl shadow-accent/40 hover:shadow-glow-lg hover:scale-105 animate-pulse-glow',
      secondary:
        'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white active:scale-95 shadow-lg hover:shadow-xl',
      outline:
        'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white active:scale-95',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
