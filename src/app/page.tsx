'use client';

import { Building2, Globe, History, Mail, MapPin, Phone, Facebook, Twitter, Instagram, ArrowRight, Shield, Award } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import StaggeredReveal from '@/components/staggered-reveal';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import JsonLd, { companySchema } from '@/components/JsonLd';

export default function Home() {
  const clients = [
    { logo: '/clients/client 1.jpg' },
    { logo: '/clients/client 2.jpg' },
    { logo: '/clients/client 3.jpg' },
    { logo: '/clients/client 4.jpg' },
    { logo: '/clients/client 5.jpg' },
    { logo: '/clients/client 6.jpg' },
    { logo: '/clients/client 7.jpg' },
    { logo: '/clients/client 8.jpg' },
    { logo: '/clients/client 9.jpg' },
    { logo: '/clients/client 10.jpg' },
    { logo: '/clients/client 11.jpg' },
    { logo: '/clients/client 13.jpg' },
    { logo: '/clients/client 14.jpg' },
  ];

  return (
    <div className="min-h-screen bg-primary text-blue-100">
      <JsonLd data={companySchema} />
      
      {/* Header */}
      <Navbar />

      {/* Hero Section - Updated to match About page style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0 opacity-75">
          <div className="relative w-full h-full">
            <img 
              src="/hero-background.jpg"
              alt="Glass manufacturing facility" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10"></div>
        
        <div className="container relative z-20 px-4 md:px-6">
          <StaggeredReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Transforming 
                <span className="relative inline-block ml-3">
                  <span className="relative z-10">Spaces</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-500/40 to-transparent -z-10 transform skew-x-12"></span>
                </span>
                <br />
                with Premium Glass
              </h1>
              <div className="h-px w-24 bg-gradient-to-r from-blue-400 to-transparent mx-auto my-6"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-semibold leading-relaxed">
                Engineering Clarity. Scaling Possibility.
              </p>
              <p className="mt-2 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto font-light mb-3">
                Built on experience, defined by precision.
              </p>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Since 2014, South Glass has delivered high-performance glass for automotive and architectural applications—designed for the demands of today, and tomorrow.
              </p>
              
              {/* Ethics text */}
              <div className="mt-10">
                <p className="text-[#3BA6C4] tracking-[0.15em] sm:tracking-[0.25em] text-xl sm:text-2xl font-light">ETHICS . EXPERTISE . EXECUTION</p>
              </div>
            </div>
          </StaggeredReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-12 md:py-16 relative overflow-hidden">
        {/* DE 2 Background */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "url('/DE 2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-blue-900/30 border border-blue-500/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-blue-800/40 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/20 group">
              <div className="text-blue-300 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-200">
                <Shield className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-blue-100">Built for Precision</h3>
              <p className="text-sm sm:text-base text-blue-100 group-hover:text-blue-50">Engineered systems. Industry-grade finishes.</p>
            </div>
            <div className="bg-blue-900/30 border border-blue-500/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-blue-800/40 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/20 group">
              <div className="text-blue-300 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-200">
                <Award className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-blue-100">Led by Specialists</h3>
              <p className="text-sm sm:text-base text-blue-100 group-hover:text-blue-50">Expertise forged in over a decade of focused execution.</p>
            </div>
            <div className="bg-blue-900/30 border border-blue-500/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-blue-800/40 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/20 group">
              <div className="text-blue-300 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-200">
                <Globe className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-blue-100">Certified for Trust</h3>
              <p className="text-sm sm:text-base text-blue-100 group-hover:text-blue-50">Global benchmarks. Verified compliance. Consistent quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-black to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3 md:mb-4">Trusted by Industry Leaders</h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-10 md:mb-14 max-w-4xl mx-auto md:whitespace-nowrap overflow-hidden text-ellipsis">Selected by Leaders. Trusted for Delivery. Partnerships built on reliability and results.</p>
          
          <div className="relative px-2 md:px-6">
            <div className="absolute inset-y-0 left-0 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-12 sm:w-16 md:w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
            
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              speed={2000}
              autoplay={{
                delay: 1800,
                disableOnInteraction: false,
              }}
              pagination={{ 
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                375: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              }}
              className="client-carousel py-6 sm:py-8 md:py-10"
            >
              {clients.map((client, index) => (
                <SwiperSlide key={index}>
                  <div className="glass-card group relative p-4 sm:p-6 rounded-xl overflow-hidden transition-all duration-500">
                    <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                      <img
                        src={client.logo}
                        alt="Client Logo"
                        className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-contain rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-secondary/30 bg-white/10"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary/60 to-secondary/20 w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-black to-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3 md:mb-4">Explore Our Company</h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">Learn more about South Glass and discover what makes us a leader in the industry</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="glass-card group relative p-4 sm:p-6 md:p-8 rounded-lg transition-all duration-300 overflow-hidden">
              <History className="h-7 w-7 sm:h-8 sm:w-8 text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white">Our History</h3>
              <p className="text-sm sm:text-base text-blue-100 mb-4 sm:mb-5">Since 2014, building on the legacy of Prakash Glass & Rubber Works established in 2000.</p>
              <Link href="/about" className="glass-button inline-flex items-center text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg transition-all duration-300 group-hover:translate-x-1 text-sm sm:text-base" aria-label="Learn about our company history and legacy">
                <span>Explore Our History</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-2" aria-hidden="true" />
              </Link>
              <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="glass-card group relative p-4 sm:p-6 md:p-8 rounded-lg transition-all duration-300 overflow-hidden">
              <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white">Our Products</h3>
              <p className="text-sm sm:text-base text-blue-100 mb-4 sm:mb-5">Premium glass solutions for automotive and architectural applications.</p>
              <Link href="/products" className="glass-button inline-flex items-center text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg transition-all duration-300 group-hover:translate-x-1 text-sm sm:text-base">
                <span>View Products</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-2" />
              </Link>
              <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="glass-card group relative p-4 sm:p-6 md:p-8 rounded-lg transition-all duration-300 overflow-hidden sm:col-span-2 md:col-span-1">
              <Award className="h-7 w-7 sm:h-8 sm:w-8 text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white">Our Projects</h3>
              <p className="text-sm sm:text-base text-blue-100 mb-4 sm:mb-5">Showcasing our finest work and notable installations across the country.</p>
              <Link href="/projects" className="glass-button inline-flex items-center text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg transition-all duration-300 group-hover:translate-x-1 text-sm sm:text-base">
                <span>See Projects</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-2" />
              </Link>
              <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
