import React from 'react';
import { ChevronDown } from 'lucide-react';
import { COLORS } from '../../constants/colors';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Decorations */}
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
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: COLORS.sageGreen,
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.08) 35px, rgba(255,255,255,.08) 70px)`
          }} 
        />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="blue-granola.jpg" 
          alt="Delicious Crunchyology granola bowl with fresh berries" 
          className="w-full h-full object-cover opacity-95 transition-all duration-1000"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      </div>

      {/* Centered Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-30 px-4">
        <div className="group relative">
          <img 
            src="Crunchy.svg" 
            alt="Crunchyology - Granola Elevated" 
            className="h-64 sm:h-72 md:h-96 lg:h-[28rem] xl:h-[36rem] 2xl:h-[44rem] w-auto max-w-full group-hover:scale-105 transition-all duration-500"
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
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-20">
        <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium backdrop-blur-sm bg-black/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full max-w-[90vw] text-center border border-white/20 shadow-2xl">
          Handcrafted granola, elevated experience
        </p>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-30 w-fit animate-bounce" aria-hidden="true">
        <div className="group cursor-pointer relative">
          <div className="bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-md rounded-full p-4 border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-110 shadow-2xl group-hover:from-white/30 group-hover:to-white/20">
            <ChevronDown className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300" />
          </div>
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl pointer-events-none z-[-1]"
            style={{ 
              background: `radial-gradient(circle, ${COLORS.golden}, transparent)`,
              transform: 'scale(1.5)'
            }}
          />
        </div>
      </div>

      {/* Keyframe Animations */}
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

        .group:nth-child(1) { animation: slideInUp 0.8s ease-out 0.2s both; }
        .group:nth-child(2) { animation: slideInUp 0.8s ease-out 0.4s both; }
        .group:nth-child(3) { animation: slideInUp 0.8s ease-out 0.6s both; }
        .group:nth-child(4) { animation: slideInUp 0.8s ease-out 0.8s both; }
      `}</style>
    </section>
  );
};

export default Hero;