'use client';

import { useEffect } from 'react';

export default function JsonLd({ data }: { data: Record<string, any> }) {
  useEffect(() => {
    // Ensure we don't add duplicate structured data
    const existingScript = document.querySelector(`script[type="application/ld+json"]`);
    if (existingScript) {
      existingScript.textContent = JSON.stringify(data);
    } else {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    }

    return () => {
      // Clean up when component unmounts
      document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());
    };
  }, [data]);

  return null;
}

export const companySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "South Glass",
  "url": "https://southglass.com",
  "logo": "https://southglass.com/SG-LOGO-01.png",
  "sameAs": [
    "https://www.facebook.com/southglass",
    "https://www.instagram.com/southglass",
    "https://www.linkedin.com/company/southglass"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "email": "contact@southglass.com",
    "availableLanguage": ["English"]
  },
  "description": "South Glass offers innovative architectural, automotive, and specialty glass solutions with a focus on quality, safety, and sustainability since 2014.",
  "foundingDate": "2014",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Glass Avenue",
    "addressLocality": "Innovation City",
    "addressCountry": "India"
  }
}; 