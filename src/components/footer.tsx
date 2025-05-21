'use client';

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-blue-900/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="text-xl sm:text-2xl md:text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                South Glass
                <span className="block h-0.5 w-1/2 bg-gradient-to-r from-blue-500 to-transparent mt-1"></span>
              </h3>
            </div>
            
            <div className="flex space-x-3 pt-3">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Facebook size={16} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Twitter size={16} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Instagram size={16} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Linkedin size={16} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-semibold text-white mb-4 inline-block">
              Quick Links
              <span className="block h-0.5 w-1/2 bg-gradient-to-r from-blue-500 to-transparent mx-auto mt-1"></span>
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex flex-col items-center">
                <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mb-2"></span>
                <span>Home</span>
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex flex-col items-center">
                <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mb-2"></span>
                <span>About Us</span>
              </Link>
              <Link href="/products" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex flex-col items-center">
                <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mb-2"></span>
                <span>Products</span>
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex flex-col items-center">
                <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mb-2"></span>
                <span>Projects</span>
              </Link>
              <Link href="/resources" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex flex-col items-center">
                <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mb-2"></span>
                <span>Resources</span>
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex flex-col items-center">
                <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mb-2"></span>
                <span>Contact</span>
              </Link>
            </div>
          </div>
          
          {/* Contact information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 mr-3" />
                <p className="text-gray-400 text-sm">123 Glass Avenue, Innovation City, Hyderabad, India - 500001</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mr-3" />
                <a href="mailto:contact@southglass.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  contact@southglass.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mr-3" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  +91 123 456 7890
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 p-3 rounded-full text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        {/* Copyright and policies section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 South Glass. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 