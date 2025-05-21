'use client';

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { getProjectById } from "@/data/projects";
import { Project } from "@/types/projects";
import ProjectDetail from "@/components/projects/ProjectDetail";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project by ID
    const foundProject = getProjectById(params.id);
    
    if (foundProject) {
      setProject(foundProject);
    }
    
    setLoading(false);
  }, [params.id]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white pt-32 px-4">
        <div className="container mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-700/50 rounded w-1/3"></div>
            <div className="h-12 bg-gray-700/50 rounded w-3/4"></div>
            <div className="h-48 bg-gray-700/50 rounded w-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-60 bg-gray-700/50 rounded col-span-2"></div>
              <div className="h-60 bg-gray-700/50 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show 404 if project not found
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with navigation */}
      <header className="bg-black/90 backdrop-blur-md shadow-lg fixed w-full z-50 border-b border-accent/40">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <a href="/">
                <img src="/SG-LOGO-01.png" alt="South Glass Logo" className="h-14 w-36 sm:h-16 sm:w-40 md:h-20 md:w-56 transition-transform duration-300 group-hover:scale-105" />
              </a>
            </div>
            <nav className="hidden md:flex space-x-4 lg:space-x-10">
              <a href="/" className="relative font-semibold text-blue-100 hover:text-accent transition-colors duration-300 px-2 py-1">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full hover:w-full"></span>
              </a>
              <a href="/about" className="relative font-semibold text-blue-100 hover:text-accent transition-colors duration-300 px-2 py-1">
                About Us
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full hover:w-full"></span>
              </a>
              <a href="/products" className="relative font-semibold text-blue-100 hover:text-accent transition-colors duration-300 px-2 py-1">
                Our Products
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full hover:w-full"></span>
              </a>
              <a href="/projects" className="relative font-semibold text-blue-100 hover:text-accent transition-colors duration-300 px-2 py-1">
                Our Projects
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-accent"></span>
              </a>
              <a href="/contact" className="relative font-semibold text-blue-100 hover:text-accent transition-colors duration-300 px-2 py-1">
                Contact Us
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full hover:w-full"></span>
              </a>
              <a href="#resources" className="relative font-semibold text-blue-100 hover:text-accent transition-colors duration-300 px-2 py-1">
                Resources
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full hover:w-full"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <ProjectDetail project={project} />

      {/* Footer */}
      <footer className="bg-black border-t border-secondary/20 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4 md:mb-6">
                <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">South Glass</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400">Transforming spaces with innovative glass solutions and unmatched expertise.</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Contact Us</h3>
              <div className="space-y-2 sm:space-y-3">
                <span className="text-sm sm:text-base text-gray-300">contact@southglass.com</span>
                <span className="text-sm sm:text-base text-gray-300">+1 (555) 123-4567</span>
                <span className="text-sm sm:text-base text-gray-300">123 Glass Avenue, Innovation City</span>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-12 pt-6 sm:pt-8 border-t border-secondary/20 text-xs sm:text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <p className="text-gray-400">© 2024 South Glass. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 