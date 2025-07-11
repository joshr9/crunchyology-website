import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Navigation, ExternalLink, Star } from 'lucide-react';
import { COLORS } from '../../constants/colors';

const FindUs = () => {
  const [isMapHovered, setIsMapHovered] = useState(false);
  const mapLocation = "105 N Public Rd, Lafayette, CO 80026";
  const googleMapsUrl = `https://www.google.com/maps/dir//${encodeURIComponent(mapLocation)}`;

  const handleMapClick = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="find-us" className="py-32 px-4 relative overflow-hidden" style={{ backgroundColor: COLORS.cream }}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-5 animate-[spin_20s_linear_infinite]"
          style={{ background: `conic-gradient(from 0deg, ${COLORS.golden}, ${COLORS.sageGreen}, ${COLORS.golden})` }} 
        />
        <div 
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-10"
          style={{ background: `radial-gradient(circle, ${COLORS.sageGreen}, transparent)` }} 
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-24">
          <div className="inline-block">
            <h2 className="font-serif text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-none relative" 
                style={{ 
                  color: COLORS.golden,
                  textShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}>
              Find Us
              {/* Decorative underline */}
              <div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 rounded-full"
                style={{ 
                  background: `linear-gradient(90deg, transparent, ${COLORS.golden}, transparent)`,
                  animation: 'pulse 2s ease-in-out infinite'
                }}
              ></div>
            </h2>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Enhanced Main Market Card */}
          <div className="lg:col-span-2">
            <article 
              className="group rounded-3xl relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-rotate-1" 
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.warmBeige} 0%, #f8f5f0 100%)`,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              {/* Glassmorphism overlay */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{ 
                  background: 'linear-gradient(45deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              ></div>
              
              {/* Animated background pattern */}
              <div 
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700"
                style={{ 
                  backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 30px, ${COLORS.golden}20 30px, ${COLORS.golden}20 32px)`,
                  animation: 'slide 20s linear infinite'
                }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10 p-10">
                {/* Enhanced Header */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <Star className="w-8 h-8" style={{ color: COLORS.golden }} />
                    <h3 className="text-4xl font-bold" style={{ color: COLORS.charcoal }}>
                      Lafayette Farmers Market
                    </h3>
                    <Star className="w-8 h-8" style={{ color: COLORS.golden }} />
                  </div>
                  <div 
                    className="w-24 h-1 mx-auto rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, transparent, ${COLORS.golden}, transparent)` 
                    }}
                  ></div>
                </div>

                {/* Enhanced Content Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Location Info with better visual hierarchy */}
                  <div className="space-y-8">
                    <address className="not-italic">
                      <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: COLORS.golden + '20' }}
                        >
                          <MapPin className="w-6 h-6" style={{ color: COLORS.golden }} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xl leading-relaxed font-bold mb-2" style={{ color: COLORS.charcoal }}>
                            N Public Rd
                          </p>
                          <p className="text-lg text-gray-600 mb-1">
                            In front of Tip Top Savory Pies
                          </p>
                          <p className="text-base text-gray-500">
                            105 N Public Rd, Lafayette, CO 80026
                          </p>
                        </div>
                      </div>
                    </address>
                    
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: COLORS.sageGreen + '20' }}
                      >
                        <Calendar className="w-6 h-6" style={{ color: COLORS.sageGreen }} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">Every Sunday</p>
                        <time className="text-2xl font-bold" style={{ color: COLORS.golden }}>
                          9:00 AM - 1:00 PM
                        </time>
                      </div>
                    </div>
                    
                    {/* Enhanced Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="https://www.lafayettefm.com/sunday-market" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl text-white font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                        style={{ 
                          background: `linear-gradient(135deg, ${COLORS.oliveButton} 0%, ${COLORS.sageGreen} 100%)` 
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <ExternalLink className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                        <span className="relative z-10">Market Info</span>
                      </a>
                      
                      <button 
                        onClick={handleMapClick}
                        className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-2 relative overflow-hidden"
                        style={{ 
                          color: COLORS.oliveButton,
                          borderColor: COLORS.oliveButton,
                          backgroundColor: 'white'
                        }}
                      >
                        <div 
                          className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"
                          style={{ backgroundColor: COLORS.oliveButton + '10' }}
                        ></div>
                        <Navigation className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform relative z-10" />
                        <span className="relative z-10">Get Directions</span>
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Interactive Map */}
                  <div className="relative">
                    <div 
                      className="relative rounded-3xl shadow-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105"
                      onClick={handleMapClick}
                      onMouseEnter={() => setIsMapHovered(true)}
                      onMouseLeave={() => setIsMapHovered(false)}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.726!2d-105.0919406!3d39.9936174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf4097d4e5d6d%3A0x4c0e5c5c1b8b8b8b!2s105%20N%20Public%20Rd%2C%20Lafayette%2C%20CO%2080026!5e0!3m2!1sen!2sus!4v1734567890123!5m2!1sen!2sus"
                        width="100%"
                        height="320"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lafayette Farmers Market Location"
                        className="rounded-3xl transition-all duration-500"
                      />
                      
                      {/* Enhanced Click overlay with glassmorphism */}
                      <div 
                        className={`absolute inset-0 transition-all duration-500 flex items-center justify-center ${
                          isMapHovered ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent'
                        }`}
                      >
                        <div 
                          className={`bg-white/90 backdrop-blur-lg rounded-2xl p-4 transition-all duration-500 shadow-2xl ${
                            isMapHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                          }`}
                        >
                          <Navigation className="w-8 h-8" style={{ color: COLORS.oliveButton }} />
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </article>
          </div>
          
          {/* Enhanced Sidebar Cards */}
          <aside className="space-y-8">
            <div 
              className="group p-8 rounded-3xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-rotate-2 hover:scale-105 relative overflow-hidden" 
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.warmBeige} 0%, #f0ede5 100%)`,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🥣</div>
                <h4 className="text-2xl font-bold mb-4" style={{ color: COLORS.golden }}>
                  Find Our Booth
                </h4>
                <p className="text-base mb-4 leading-relaxed" style={{ color: COLORS.charcoal }}>
                  Right in front of Tip Top Pies, between Star Acres Flowers and Casa Crobu
                </p>
                <div className="flex flex-col items-center gap-3">
                  <p className="text-sm italic font-medium" style={{ color: COLORS.golden }}>
                    Look for our compostable bags!
                  </p>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <img 
                      src="BIO_BAG.svg" 
                      alt="Compostable bag icon" 
                      className="w-12 h-12"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="group p-8 rounded-3xl text-center hover:shadow-2xl transition-all duration-500 transform hover:rotate-1 hover:scale-105 relative overflow-hidden" 
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.sageGreen} 0%, ${COLORS.oliveButton} 100%)`,
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }}
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{ 
                    backgroundImage: 'radial-gradient(circle at 30% 40%, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                ></div>
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:rotate-12 transition-transform duration-300">🥧</div>
                <h4 className="text-xl font-bold mb-4 text-white">
                  Pro Tip!
                </h4>
                <p className="text-sm leading-relaxed text-white/95">
                  Grab a savory pie from Tip Top before browsing - the perfect market combo!
                </p>
              </div>
            </div>

            {/* New: Weather card */}
          <a 
            href="https://www.instagram.com/crunchyology.co/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group p-6 rounded-3xl text-center transition-all duration-500 hover:scale-105 relative overflow-hidden cursor-pointer" 
            style={{ 
              background: `linear-gradient(135deg, ${COLORS.golden}20 0%, ${COLORS.cream} 100%)`,
              border: `2px solid ${COLORS.golden}30`
            }}
            aria-label="Follow us on Instagram for weather updates"
          >
            <div className="text-3xl mb-3 group-hover:animate-bounce">☀️</div>
            <p className="text-sm font-medium" style={{ color: COLORS.charcoal }}>
              Rain or shine, we're there!
            </p>
            <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-700 transition-colors">
              Check our Instagram for updates
            </p>
          </a>
          </aside>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default FindUs;