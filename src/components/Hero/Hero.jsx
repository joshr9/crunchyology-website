import React from 'react';
import { ChevronDown } from 'lucide-react';
import { COLORS, NAV_LINKS } from '../../constants/colors';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Decorative pattern overlay */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundColor: COLORS.sageGreen,
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
        }} 
      />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="blue-granola.jpg" 
          alt="Delicious Crunchyology granola bowl with fresh berries" 
          className="w-full h-full object-cover opacity-90"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      
      {/* Logo centered on screen (no animation) with outline */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <img 
          src="Crunchy.svg" 
          alt="Crunchyology - Granola Elevated" 
          className="h-40 sm:h-48 md:h-[24rem] lg:h-[28rem] xl:h-[48rem] w-auto max-w-full"
          style={{
            filter: `
              drop-shadow(0 0 2px #000) 
              drop-shadow(0 0 4px #000)
              drop-shadow(0 0 8px rgba(0,0,0,0.5))
              drop-shadow(0 0 2px #fff)
              drop-shadow(0 0 4px #fff)
            `
          }}
          width="512"
          height="512"
        />
      </div>
      
      {/* Centered Navigation Buttons - Fixed sizes */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-30">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6">
          {NAV_LINKS.map((btn) => (
            <a 
              key={btn.href} 
              href={btn.href}
              className="group relative backdrop-blur-2xl text-white font-bold px-4 sm:px-6 md:px-8 py-4 sm:py-5 rounded-full shadow-2xl transition-all duration-500 text-sm sm:text-base md:text-lg flex items-center gap-2 sm:gap-3 transform hover:scale-105 hover:-translate-y-1 border-2 border-white/20 hover:border-white/40 w-[280px] sm:w-[200px] md:w-[220px] lg:w-[240px] justify-center whitespace-nowrap cursor-pointer"
              style={{ 
                backgroundColor: COLORS.oliveButton + 'DD',
                zIndex: 30
              }}
              aria-label={btn.text}
            >
              <span className="text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">
                {btn.icon}
              </span>
              <span className="tracking-wide">{btn.text}</span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;