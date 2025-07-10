import React from 'react';
import { COLORS, QUOTES } from '../../constants/colors';

const Reviews = () => {
  return (
    <section id="reviews" className="py-32 px-4 relative overflow-hidden" style={{ backgroundColor: COLORS.sageGreen }}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-5 animate-[spin_20s_linear_infinite]"
          style={{ background: `conic-gradient(from 0deg, ${COLORS.golden}, white, ${COLORS.golden})` }} 
        />
        <div 
          className="absolute bottom-20 right-10 w-64 h-64 rounded-full opacity-10"
          style={{ background: `radial-gradient(circle, white, transparent)` }} 
        />
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)',
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-24">
          <div className="inline-block">
            <h2 className="font-serif text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-none relative text-white" 
                style={{ 
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                }}>
              Things People Yell Across the Booth
              {/* Decorative underline */}
              <div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 rounded-full"
                style={{ 
                  background: `linear-gradient(90deg, transparent, white, transparent)`,
                  animation: 'pulse 2s ease-in-out infinite'
                }}
              ></div>
            </h2>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Real reactions from real people at the farmers market
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {QUOTES.map(({ quote, author }, index) => (
            <article 
              key={author} 
              className="group p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.warmBeige} 0%, #f8f5f0 100%)`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Enhanced background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50"></div>
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ 
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, ${COLORS.golden}20 20px, ${COLORS.golden}20 22px)`
                }}
              ></div>
              
              {/* Quote mark decoration - Enhanced */}
              <div 
                className="absolute -top-6 -left-6 text-9xl opacity-10 font-serif group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110" 
                style={{ color: COLORS.golden }}
                aria-hidden="true"
              >
                "
              </div>
              
              <div className="relative z-10">
                <blockquote className="text-xl md:text-2xl mb-6 leading-relaxed font-medium" style={{ color: COLORS.charcoal }}>
                  {quote}
                </blockquote>
                
                <footer className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div 
                    className="w-8 h-1 rounded-full group-hover:w-12 transition-all duration-300" 
                    style={{ backgroundColor: COLORS.golden }}
                  ></div>
                  <cite className="text-sm font-bold not-italic uppercase tracking-wider" style={{ color: COLORS.golden }}>
                    {author}
                  </cite>
                </footer>
              </div>
              
              {/* Hover accent */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 group-hover:h-2 transition-all duration-300"
                style={{ backgroundColor: COLORS.golden }}
              ></div>
            </article>
          ))}
        </div>
        
        {/* Call-to-Action */}
        <div className="text-center mt-20">
          <div 
            className="inline-block p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden"
            style={{ backgroundColor: COLORS.warmBeige }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-2xl md:text-3xl mb-4 font-bold" style={{ color: COLORS.charcoal }}>
                Want to have your quote featured? <span style={{ color: COLORS.golden }}>Come find us!</span>
              </p>
              <p className="text-lg" style={{ color: COLORS.charcoal + 'CC' }}>
                Lafayette Farmers Market • Sundays 9AM-1PM
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Reviews;