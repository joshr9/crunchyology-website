import React from 'react';
import { ChevronDown } from 'lucide-react';
import { COLORS, NAV_LINKS } from '../../constants/colors';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10 animate-[spin_30s_linear_infinite]"
          style={{ background: `conic-gradient(from 0deg, ${COLORS.golden}, transparent, ${COLORS.golden})` }} 
        />
        <div 
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-15"
          style={{ 
            background: `radial-gradient(circle, ${COLORS.golden}, transparent)`,
            animation: 'float 6s ease-in-out infinite'
          }} 
        />
        {/* Enhanced decorative pattern overlay */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: COLORS.sageGreen,
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.08) 35px, rgba(255,255,255,.08) 70px)`
          }} 
        />
      </div>
      
      {/* Enhanced Background Image */}
      <div className="absolute inset-0">
        <img 
          src="blue-granola.jpg" 
          alt="Delicious Crunchyology granola bowl with fresh berries" 
          className="w-full h-full object-cover opacity-95 transition-all duration-1000"
          loading="eager"
          width="1920"
          height="1080"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      </div>
      
      {/* Enhanced Logo with better mobile sizing */}
      <div className="absolute inset-0 flex items-center justify-center z-30 px-4 pb-56 sm:pb-32 md:pb-0">
        <div className="group relative">
          <img 
            src="Crunchy.svg" 
            alt="Crunchyology - Granola Elevated" 
            className="h-56 sm:h-56 md:h-80 lg:h-96 xl:h-[48rem] 2xl:h-[56rem] w-auto max-w-full group-hover:scale-105 transition-all duration-500"
            style={{
              filter: `
                drop-shadow(0 0 4px rgba(0,0,0,0.8)) 
                drop-shadow(0 0 8px rgba(0,0,0,0.6))
                drop-shadow(0 0 16px rgba(0,0,0,0.4))
                drop-shadow(0 0 2px rgba(255,255,255,0.8))
                drop-shadow(0 0 4px rgba(255,255,255,0.4))
              `
            }}
            width="512"
            height="512"
          />
          
          {/* Subtle glow effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-3xl"
            style={{ 
              background: `radial-gradient(circle, ${COLORS.golden}, transparent)`,
              transform: 'scale(1.2)'
            }}
          ></div>
        </div>
      </div>
      
      {/* Enhanced Navigation Buttons */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-20">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 md:gap-6">
          {NAV_LINKS.map((btn, index) => (
            <a 
              key={btn.href} 
              href={btn.href}
              className="group relative overflow-hidden backdrop-blur-2xl text-white font-bold px-4 py-2 sm:px-8 sm:py-5 rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-500 text-sm sm:text-lg md:text-xl flex items-center gap-2 sm:gap-3 transform hover:scale-105 hover:-translate-y-2 border-2 border-white/20 hover:border-white/40 w-auto sm:w-auto min-w-[140px] sm:min-w-[180px] md:min-w-[200px] justify-center cursor-pointer"
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.oliveButton}DD 0%, ${COLORS.sageGreen}DD 100%)`,
                animationDelay: `${index * 0.1}s`
              }}
              aria-label={btn.text}
            >
              {/* Sliding overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              <span className="text-base sm:text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" aria-hidden="true">
                {btn.icon}
              </span>
              <span className="tracking-wide font-bold relative z-10 text-xs sm:text-lg">{btn.text}</span>
              
              {/* Enhanced glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"
                style={{ background: `linear-gradient(135deg, ${COLORS.golden}, ${COLORS.oliveButton})` }}
              ></div>
            </a>
          ))}
        </div>
        
        {/* Enhanced subtitle */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-white/90 text-lg sm:text-xl font-medium backdrop-blur-sm bg-black/20 px-6 py-3 rounded-full inline-block border border-white/20">
            Handcrafted granola, elevated experience
          </p>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Staggered animation for buttons */
        .group:nth-child(1) { animation: slideInUp 0.8s ease-out 0.2s both; }
        .group:nth-child(2) { animation: slideInUp 0.8s ease-out 0.4s both; }
        .group:nth-child(3) { animation: slideInUp 0.8s ease-out 0.6s both; }
        .group:nth-child(4) { animation: slideInUp 0.8s ease-out 0.8s both; }
      `}</style>
    </section>
  );
};

export default Hero;