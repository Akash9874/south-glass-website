'use client';

import { getFeaturedProject } from "@/data/projects";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedProject() {
  const featuredProject = getFeaturedProject();

  if (!featuredProject) {
    return null;
  }

  // Get the primary category for gradient color
  const primaryCategory = featuredProject.categories[0];
  let gradientClass = 'from-blue-900 to-indigo-800'; // Default for Architecture
  
  if (primaryCategory === 'Automotive') {
    gradientClass = 'from-gray-800 to-gray-900';
  } else if (primaryCategory === 'Locomotive') {
    gradientClass = 'from-blue-800 to-blue-950';
  } else if (primaryCategory === 'Navimotive') {
    gradientClass = 'from-teal-900 to-emerald-950';
  }

  return (
    <div className="relative bg-gradient-to-br from-blue-900/30 to-gray-900/90 border border-white/10 rounded-2xl overflow-hidden mb-16">
      <div className="absolute inset-0 opacity-15 bg-pattern-grid"></div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-64 md:h-auto md:aspect-[4/3]">
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 md:bg-gradient-to-r md:from-transparent md:to-black/70"></div>
          
          {/* Featured project title overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center max-w-xs px-4">{featuredProject.title}</h3>
          </div>
          
          <div className="absolute top-4 left-4 bg-blue-500 text-black font-semibold text-xs py-1 px-3 rounded-full">
            Featured Project
          </div>
        </div>
        
        <div className="p-6 md:p-8 flex flex-col">
          <div className="space-y-3 mb-auto">
            <div className="flex items-center space-x-2 text-sm text-blue-400">
              <MapPin className="h-4 w-4" />
              <span>{featuredProject.location}</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">{featuredProject.title}</h2>
            
            <p className="text-gray-300">{featuredProject.description}</p>
            
            <div className="pt-3 grid grid-cols-2 gap-4">
              {Object.entries(featuredProject.specs || {}).slice(0, 4).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <p className="text-xs text-gray-400 uppercase">{key}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <Link 
              href={`/projects/${featuredProject.id}`}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-blue-500/30 font-medium group"
            >
              <span>View Project Details</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 