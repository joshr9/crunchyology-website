import React from 'react';
import { COLORS, QUOTES } from '../../constants/colors';

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 px-4 relative" style={{ backgroundColor: COLORS.sageGreen }}>
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)' }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-none">
            Things People Yell Across the Booth
          </h2>
          <div className="w-32 h-1 mx-auto rounded-full bg-white/30"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {QUOTES.map(({ quote, author }, index) => (
            <article 
              key={author} 
              className="group p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
              style={{ 
                backgroundColor: COLORS.warmBeige,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Quote mark decoration */}
              <div 
                className="absolute -top-4 -left-4 text-8xl opacity-10 font-serif" 
                style={{ color: COLORS.golden }}
                aria-hidden="true"
              >
                "
              </div>
              
              <blockquote className="text-xl md:text-2xl mb-6 leading-relaxed relative z-10" style={{ color: COLORS.charcoal }}>
                {quote}
              </blockquote>
              
              <footer className="flex items-center gap-2">
                <div className="w-8 h-px" style={{ backgroundColor: COLORS.golden }}></div>
                <cite className="text-sm font-medium not-italic" style={{ color: COLORS.golden }}>
                  {author}
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;