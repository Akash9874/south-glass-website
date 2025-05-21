'use client';

import { useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { Building2 } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with navigation */}
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Contact Us
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you. Please fill out the form below or use our
            direct contact information to get in touch with our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="order-2 lg:order-1">
            <ContactInfo />
          </div>
          
          <div className="order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
          <div className="h-80 w-full rounded-lg overflow-hidden shadow-lg border border-zinc-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121064.91134672114!2d78.34581175723198!3d17.44893133352242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f33c378487%3A0x3f58c7ec8ec65669!2sBurgula%2C%20Telangana!5e0!3m2!1sen!2sin!4v1717247064341!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-85"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 