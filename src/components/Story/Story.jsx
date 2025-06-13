import React from 'react';
import { COLORS } from '../../constants/colors';

const Story = () => {
  return (
    <>
      <section id="story" className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: COLORS.cream }}>
        {/* Background decoration */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: `radial-gradient(circle, ${COLORS.golden}, transparent)` }} 
        />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none" 
                style={{ color: COLORS.golden, textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
              My Story
            </h1>
            <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: COLORS.golden }}></div>
          </div>
          
          <div className="relative">
            {/* Multiple shadow layers */}
            <div className="absolute inset-0 bg-black/5 rounded-lg transform translate-x-3 translate-y-3"></div>
            <div className="absolute inset-0 bg-black/3 rounded-lg transform translate-x-1 translate-y-1"></div>
            
            <article 
              className="relative rounded-lg shadow-2xl p-12 md:p-20 transform -rotate-1 hover:rotate-0 transition-all duration-700"
              style={{ 
                backgroundColor: '#fbf8f3',
                backgroundImage: `
                  repeating-linear-gradient(transparent, transparent 30px, rgba(139, 128, 85, 0.08) 30px, rgba(139, 128, 85, 0.08) 31px),
                  radial-gradient(ellipse at top right, rgba(212, 165, 116, 0.1), transparent),
                  radial-gradient(ellipse at bottom left, rgba(115, 134, 120, 0.1), transparent)
                `
              }}
            >
              {/* Coffee ring stains */}
              <div className="absolute top-8 right-12 w-16 h-16 rounded-full border-2 border-amber-200/30" aria-hidden="true"></div>
              <div className="absolute top-10 right-14 w-12 h-12 rounded-full border border-amber-200/20" aria-hidden="true"></div>
              
              {/* Red margin line */}
              <div className="absolute left-20 top-0 bottom-0 w-px bg-red-300 opacity-40" aria-hidden="true"></div>
              
              {/* Letter content */}
              <div className="ml-8 space-y-8 text-gray-800 leading-[2.4rem] tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                {/* Date */}
                <div className="text-right text-gray-500 text-lg mb-8 italic">
                  ~ March 2025 ~
                </div>

                <div className="space-y-7">
                  <p className="text-xl leading-[1.9] pt-[6px]">
                    <span className="text-6xl font-bold float-left mr-3" style={{ color: COLORS.golden, lineHeight: '0.8' }}>H</span>
                    i, I'm Aloy — granola enthusiast since 2020. I loved my granola so much, I started giving it out as gifts. 
                    Four years (and more oats than I can count) later, Crunchyology was born.
                  </p>

                  <p className="text-xl leading-[1.9]">
                    I never planned on starting a business — but turns out when you bake with love and hand out enough jars, 
                    people notice. Now I get to share this crispy little passion with you: lovingly baked, seriously tasty, 
                    and always packaged with care.
                  </p>

                  <div className="space-y-7">
                    <p className="text-xl leading-[1.9]">
                      Jars are great for all of you locals (and I love seeing so many of you come back!).
                    </p>
                    
                    <p className="text-xl leading-[1.9]">
                      The demand for hiking-safe bags, gifting, and shipping in lighter packaging (shatter-free) grew — 
                      so we also have paper bags. We're getting ready to switch to compostable bags soon! Stay tuned.
                    </p>
                  </div>

                  <p className="text-xl leading-[1.9] pb-[4px] mt-8">
                    Welcome. You've been initiated.
                    <br />
                    <span className="inline-block mt-3 font-semibold" style={{ color: COLORS.charcoal }}>
                      What's the password to join? <span style={{ color: COLORS.golden }}>Hit me with your best pun.</span>
                    </span>
                    <br />
                    <span className="text-lg italic">(Seriously. I dare you. There may or may not be stickers involved.)</span>
                  </p>
                </div>

                {/* Closing */}
                <div className="pt-8 mt-12 border-t-2 border-gray-300 border-dotted">
                  <div className="flex items-end justify-end mt-12">
                    <div className="text-right">
                      <p className="text-4xl transform -rotate-3 mb-2 font-normal italic" style={{ color: COLORS.golden }}>
                        🫶
                      </p>
                      <p className="text-3xl transform -rotate-2 mb-2 font-normal italic" 
                         style={{ color: COLORS.golden, fontFamily: 'Brush Script MT, cursive' }}>
                        – Aloy
                      </p>
                      <p className="text-sm text-gray-600 italic font-light">
                        Founder of Crunchyology
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="py-12 relative" style={{ backgroundColor: COLORS.cream }}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-dashed" style={{ borderColor: COLORS.golden + '40' }}></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-8 text-4xl" style={{ backgroundColor: COLORS.cream }}>🌾</span>
        </div>
      </div>
    </>
  );
};

export default Story;