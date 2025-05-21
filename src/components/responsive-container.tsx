import React from 'react';
import { cn } from "@/lib/utils";

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  fluid?: boolean;
  id?: string;
}

export default function ResponsiveContainer({
  children,
  className,
  as: Component = 'div',
  fluid = false,
  id,
}: ResponsiveContainerProps) {
  return (
    <Component
      id={id}
      className={cn(
        'mx-auto px-4 sm:px-6 md:px-8',
        {
          'container': !fluid,
          'w-full': fluid,
        },
        className
      )}
    >
      {children}
    </Component>
  );
} 