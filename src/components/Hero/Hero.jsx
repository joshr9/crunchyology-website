import React from 'react';
import { ChevronDown } from 'lucide-react';
import { COLORS } from '../../constants/colors';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Decorative Background */}
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

      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-30 px-4">
        <div className="group relative">
          <img 
            src="Crunchy.svg" 
            alt="Crunchyology - Granola Elevated" 
            className="h-72 sm:h-72 md:h-96 lg:h-[32rem] xl:h-[44rem] 2xl:h-[56rem] w-auto max-w-full group-hover:scale-105 transition-all duration-500"
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

      {/* Clean Scroll Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="group cursor-pointer relative">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-110 shadow-2xl">
            <ChevronDown className="w-8 h-8 text-white transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Keyframe Animations */}
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