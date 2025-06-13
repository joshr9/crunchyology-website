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
          src="granola_bowl.jpg" 
          alt="Delicious Crunchyology granola bowl with fresh berries" 
          className="w-full h-full object-cover opacity-90"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      
      {/* Logo with animation */}
      <div 
        className="absolute inset-x-0 top-16 sm:top-20 md:top-1/4 md:-translate-y-1/2 z-20 flex justify-center px-4" 
        style={{ animation: 'float 6s ease-in-out infinite' }}
      >
        <img 
          src="Crunchy.svg" 
          alt="Crunchyology - Granola Elevated" 
          className="h-40 sm:h-48 md:h-[24rem] lg:h-[28rem] xl:h-[32rem] w-auto drop-shadow-2xl max-w-full"
          width="512"
          height="512"
        />
      </div>
      
      {/* Centered Navigation Buttons */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6">
          {NAV_LINKS.map((btn, index) => (
            <a 
              key={btn.href} 
              href={btn.href}
              className="group backdrop-blur-2xl text-white font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-full shadow-2xl transition-all duration-500 text-base sm:text-lg md:text-xl flex items-center gap-2 sm:gap-3 transform hover:scale-105 hover:-translate-y-1 border-2 border-white/20 hover:border-white/40 w-full sm:w-auto justify-center"
              style={{ 
                backgroundColor: COLORS.oliveButton + 'DD',
                animationDelay: `${index * 0.1}s`
              }}
              aria-label={btn.text}
            >
              <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">
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
      
      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;