import React from 'react';
import { COLORS } from '../../constants/colors';

const Story = () => {
  return (
    <>
      <section id="story" className="py-32 px-4 relative overflow-hidden" style={{ backgroundColor: COLORS.cream }}>
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
            style={{ background: `radial-gradient(circle, ${COLORS.golden}, transparent)` }} 
          />
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Enhanced Section Header */}
          <div className="text-center mb-24">
            <div className="inline-block">
              <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-none relative" 
                  style={{ 
                    color: COLORS.golden, 
                    textShadow: '0 4px 8px rgba(0,0,0,0.1)' 
                  }}>
                My Story
                {/* Decorative underline */}
                <div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 rounded-full"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${COLORS.golden}, transparent)`,
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                ></div>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From kitchen experiments to farmers market favorite
            </p>
          </div>
          
          <div className="relative">
            <article 
              className="group relative rounded-2xl shadow-xl p-12 md:p-20 transform -rotate-1 hover:rotate-0 transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] bg-white"
              style={{ 
                backgroundImage: `repeating-linear-gradient(transparent, transparent 32px, rgba(139, 128, 85, 0.06) 32px, rgba(139, 128, 85, 0.06) 33px)`
              }}
            >
              {/* Enhanced decorative elements */}
              <div className="absolute top-8 right-12 w-16 h-16 rounded-full border-2 border-amber-200/40 group-hover:border-amber-200/60 transition-colors" aria-hidden="true"></div>
              <div className="absolute top-10 right-14 w-12 h-12 rounded-full border border-amber-200/30 group-hover:border-amber-200/50 transition-colors" aria-hidden="true"></div>
              
              {/* Enhanced margin line */}
              <div className="absolute left-16 top-0 bottom-0 w-px bg-red-300/50 group-hover:bg-red-300/70 transition-colors" aria-hidden="true"></div>
              
              {/* Letter content */}
              <div className="ml-8 space-y-8 text-gray-800" style={{ 
                fontFamily: '"Crimson Pro", Georgia, serif',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                letterSpacing: '0.02em'
              }}>
                {/* Enhanced date */}
                <div className="text-right text-gray-500 text-lg mb-12 italic font-light tracking-wider group-hover:text-gray-600 transition-colors">
                  ~ March 2025 ~
                </div>

                <div className="space-y-8">
                  <p className="text-xl leading-[1.8] tracking-wide relative">
                    <span 
                      className="text-7xl font-bold float-left mr-4 mt-1 leading-none select-none group-hover:scale-110 transition-transform duration-500" 
                      style={{ 
                        color: COLORS.golden, 
                        fontFamily: '"Playfair Display", serif',
                        lineHeight: '0.75'
                      }}
                    >
                      H
                    </span>
                    i, I'm Aloy — granola enthusiast since <span className="font-semibold" style={{ color: COLORS.golden }}>2020</span>. I loved my granola so much, I started giving it out as gifts. 
                    Four years <em className="not-italic font-medium" style={{ color: COLORS.golden }}>(and more oats than I can count)</em> later, Crunchyology was born.
                  </p>

                  <p className="text-xl leading-[1.8] tracking-wide">
                    I never planned on starting a business — but turns out when you 
                    <span className="font-medium italic" style={{ color: COLORS.golden }}> bake with love</span> and hand out enough jars, 
                    people notice. Now I get to share this crispy little passion with you: 
                    <span className="font-semibold" style={{ color: COLORS.golden }}> lovingly baked, seriously tasty, and always packaged with care.</span>
                  </p>

                  {/* Enhanced Eco-Friendly Section */}
                  <p className="text-xl leading-[1.8] tracking-wide my-8">
                    Using <span className="font-semibold underline decoration-2 decoration-emerald-400">compostable bags</span> was important to me. I wanted the packaging to reflect the same care I put into the granola itself. It took some time to find the right ones, but now every bag is packed in material that breaks down at home — just like banana peels 
                    <span className="italic font-medium" style={{ color: COLORS.golden }}> (or your willpower around the chai spiced granola)</span>. <span className="font-semibold" style={{ color: COLORS.golden }}>
                      Ohh, the magic of science!!
                    </span>
                  </p>

                  {/* Enhanced Compostable Bag Showcase */}
                  <div className="my-12 relative">
                    <div className="group/note relative">
                      <div 
                        className="bg-white p-6 rounded-2xl shadow-xl border-2 border-dashed border-emerald-300 transform rotate-1 hover:rotate-0 transition-all duration-500 max-w-md mx-auto hover:shadow-2xl hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)`
                        }}
                      >
                        <div className="absolute -top-3 -right-3 text-3xl group-hover/note:rotate-12 transition-transform duration-300">📌</div>
                        
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                            <img 
                              src="/BIO_BAG.svg" 
                              alt="Compostable certification logo"
                              className="w-8 h-8"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-emerald-700 text-lg">Certified Compostable</h4>
                            <p className="text-sm text-emerald-600">100% biodegradable packaging</p>
                            <p className="text-xs text-emerald-600 font-medium">Commercial or Home</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-center mb-4">
                          <div className="relative">
                            <img 
                              src="/compostable-bag.jpg" 
                              alt="Maple & Toasty Pecan Granola in compostable bag"
                              className="w-48 h-auto rounded-xl shadow-lg group-hover/note:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent rounded-xl"></div>
                          </div>
                        </div>
                        
                        <p className="text-center text-sm italic text-gray-600 font-medium">
                          Real compostable bags — not just marketing! 🌱
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center my-12">
                    <p className="text-xl leading-[1.8] tracking-wide mb-6">
                      <span className="text-2xl font-semibold tracking-tight block mb-2" style={{ color: COLORS.golden }}>
                        Welcome.
                      </span> 
                      You've been initiated.
                    </p>
                    
                    <p className="text-xl leading-[1.8] tracking-wide mb-4">
                      What's the password to join?
                    </p>
                    
                    <a 
                      href="#contact"
                      className="inline-block text-3xl font-bold tracking-tight mb-4 group-hover:scale-105 transition-all duration-300 hover:scale-110 cursor-pointer transform hover:-translate-y-1 px-6 py-3 rounded-2xl hover:shadow-xl"
                      style={{ 
                        color: COLORS.golden,
                        background: `linear-gradient(135deg, ${COLORS.golden}15, ${COLORS.golden}05)`,
                        border: `2px solid ${COLORS.golden}30`
                      }}
                    >
                      Hit me with your best pun.
                    </a>
                    
                    <p className="text-lg italic text-gray-600 mt-4">
                      (Seriously. I dare you. There may or may not be stickers involved.)
                    </p>
                  </div>
                </div>

                {/* Enhanced Closing */}
                <div className="pt-8 mt-12 border-t-2 border-gray-300 border-dotted">
                  <div className="flex items-end justify-end mt-12">
                    <div className="text-right">
                      <p className="text-lg font-light italic tracking-wider text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">
                        With love from the granola kitchen,
                      </p>
                      
                      <p className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" style={{ color: COLORS.golden }}>
                        🫶
                      </p>
                      
                      <p className="text-4xl mb-2 font-light group-hover:scale-105 transition-transform duration-300" 
                         style={{ 
                           color: COLORS.golden, 
                           fontFamily: '"Dancing Script", cursive'
                         }}>
                        – Aloy
                      </p>
                      
                      <p className="text-xs text-gray-500 italic font-light tracking-wider">
                        Founder & Chief Granola Officer
                      </p>
                      <p className="text-xs text-gray-400 italic font-light mt-1">
                        Crunchyology ™
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Photos section */}
              <div className="mt-12 pt-8 border-t border-dashed border-gray-300">
                <div className="flex justify-center gap-8 flex-wrap">
                  <div className="transform -rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300 hover:z-10 relative">
                    <div className="bg-white p-4 shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300" style={{ width: '180px' }}>
                      <img 
                        src="/granola-process-raw.jpg" 
                        alt="Fresh raw oats spread on baking sheet"
                        className="w-full h-32 object-cover mb-3 rounded"
                      />
                      <p className="text-sm text-center font-handwritten" style={{ color: COLORS.charcoal }}>
                        The mountain of gold before the fruit is added
                      </p>
                    </div>
                  </div>
                  <div className="transform rotate-1 hover:rotate-0 hover:scale-110 transition-all duration-300 hover:z-10 relative">
                    <div className="bg-white p-4 shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300" style={{ width: '180px' }}>
                      <img 
                        src="/granola-process-clusters.jpg" 
                        alt="Perfect granola clusters with nuts and seeds"
                        className="w-full h-32 object-cover mb-3 rounded"
                      />
                      <p className="text-sm text-center font-handwritten" style={{ color: COLORS.charcoal }}>
                        Perfect Clusters, for the texture lovers.
                      </p>
                    </div>
                  </div>
                  <div className="transform -rotate-1 hover:rotate-0 hover:scale-110 transition-all duration-300 hover:z-10 relative">
                    <div className="bg-white p-4 shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300" style={{ width: '180px' }}>
                      <img 
                        src="/granola-process-ready.jpg" 
                        alt="Finished granola in ceramic bowl"
                        className="w-full h-32 object-cover mb-3 rounded"
                      />
                      <p className="text-sm text-center font-handwritten" style={{ color: COLORS.charcoal }}>
                        Ready to share, or hoard. Your choice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enhanced Decorative divider */}
      <div className="py-12 relative" style={{ backgroundColor: COLORS.cream }}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-dashed" style={{ borderColor: COLORS.golden + '40' }}></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-8 text-4xl hover:scale-110 transition-transform duration-300" style={{ backgroundColor: COLORS.cream }}>🌾</span>
        </div>
      </div>

      <style jsx>{`
        .font-handwritten {
          font-family: 'Permanent Marker', bold;
        }
        
        /* Import premium fonts */
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Dancing+Script:wght@400;500;700&display=swap');
        
        /* Enhanced text rendering */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Premium text selection */
        ::selection {
          background-color: rgba(212, 165, 116, 0.2);
          color: inherit;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Story;