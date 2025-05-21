'use client';

import { useEffect } from 'react';

export default function CriticalPreload() {
  useEffect(() => {
    // Images to preload
    const criticalImages = [
      '/hero-image.jpg',
      '/glass-hero-bg.jpg',
      '/SG-LOGO-01.png'
    ];

    // Preload images
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

  }, []);

  return null;
} 