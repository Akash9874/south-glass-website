'use client';

import { Check, Shield } from 'lucide-react';
import Image from 'next/image';

interface CertificationCardProps {
  title: string;
  description: string;
  logo?: string;
}

export default function CertificationCard({ title, description, logo }: CertificationCardProps) {
  return (
    <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 group overflow-hidden backdrop-blur-sm">
      {/* Glass morphism effect */}
      <div className="absolute inset-0 rounded-xl bg-gray-700/5 backdrop-blur-[1px] z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo with fallback */}
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/10 flex items-center justify-center mb-5 group-hover:bg-blue-500/30 transition-all duration-500 shadow-md shadow-blue-900/20">
          {logo ? (
            <div className="relative h-20 w-20 overflow-hidden p-2">
              <img 
                src={logo} 
                alt={`${title} certification`} 
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <Shield className="h-12 w-12 text-blue-400" />
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{description}</p>
        
        {/* Subtle underline that appears on hover */}
        <div className="h-0.5 w-0 group-hover:w-12 bg-blue-500/50 mt-3 transition-all duration-300"></div>
      </div>
      
      {/* Decorative corner accent with improved effect */}
      <div className="absolute -bottom-5 -right-5 w-24 h-24 rotate-45 bg-blue-500/5 group-hover:bg-blue-500/10 transition-all duration-500 group-hover:scale-125 transform origin-center"></div>
      
      {/* Additional subtle decorations */}
      <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-blue-500/20 group-hover:bg-blue-400/40 transition-all duration-300"></div>
      <div className="absolute top-4 left-6 w-1 h-1 rounded-full bg-blue-500/10 group-hover:bg-blue-400/30 transition-all duration-500"></div>
    </div>
  );
} 