'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

interface StaggeredRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function StaggeredReveal({ 
  children, 
  delay = 0 
}: StaggeredRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Simple animation using CSS
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    const timer = setTimeout(() => {
      container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div ref={containerRef} className="opacity-0">
      {children}
    </div>
  );
} 