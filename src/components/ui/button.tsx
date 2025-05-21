'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'secondary' | 'link';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case 'outline':
          return 'border border-accent hover:bg-accent/10 text-accent';
        case 'ghost':
          return 'hover:bg-gray-100 hover:text-gray-900 text-gray-600';
        case 'destructive':
          return 'bg-red-500 hover:bg-red-600 text-white shadow-sm';
        case 'secondary':
          return 'bg-secondary hover:bg-secondary/80 text-white';
        case 'link':
          return 'text-accent underline-offset-4 hover:underline';
        default:
          return 'bg-accent hover:bg-accent/90 text-white shadow';
      }
    };

    const getSizeClasses = () => {
      switch (size) {
        case 'sm':
          return 'h-9 px-3 rounded-md text-sm';
        case 'lg':
          return 'h-12 px-8 rounded-md text-base';
        default:
          return 'h-10 py-2 px-4 text-sm rounded-md';
      }
    };

    const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    return (
      <button
        className={`${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${className || ''}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
); 
Button.displayName = "Button";

export { Button }; 