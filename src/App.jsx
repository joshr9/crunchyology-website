import React from 'react';

const COLORS = {
  sageGreen: '#738678',
  golden: '#D4A574', 
  warmBeige: '#F5F1E8',
  charcoal: '#262626',
  white: '#FFFFFF',
  oliveButton: '#8f9779'
};

const NAV_LINKS = [
  { href: "#jars", text: "Jars. But Why?" },
  { href: "#story", text: "My Story" },
  { href: "#find-us", text: "Find Us" },
  { href: "#contact", text: "Contact Us" }
];

const QUOTES = [
  { quote: "GRANOLA IS BACK???", author: "Excited Regular" },
  { quote: "That cinnamon one? Unreal.", author: "Weekend Warrior" },
  { quote: "I meant to give this as a gift. I didn't.", author: "Honest Customer" },
  { quote: "Do you take empty jars as payment?", author: "Hopeful Hippie" },
  { quote: "This is basically cereal for adults!", author: "Wise Observer" },
  { quote: "I came for pickles, leaving with granola.", author: "Booth Hopper" }
];

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.sageGreen, color: COLORS.charcoal }}>
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: COLORS.sageGreen }} />
        <div className="absolute inset-0">
          <img src="granola_bowl.jpg" alt="Delicious Granola" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
        
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
          <div className="p-1">
            <img src="Crunchy.svg" alt="Crunchyology logo" className="h-[24rem] sm:h-[28rem] md:h-80 lg:h-96 xl:h-[40rem] w-auto drop-shadow-2xl" />
          </div>
        </div>
        
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {NAV_LINKS.map((btn) => (
              <a key={btn.href} href={btn.href}
                className="backdrop-blur-2xl text-white font-bold p-4 md:p-6 rounded-2xl shadow-2xl transition-all duration-500 text-lg md:text-2xl lg:text-3xl transform hover:scale-105 hover:-translate-y-2 border border-white/30"
                style={{ backgroundColor: COLORS.oliveButton + 'DD' }}
              >
                <span className="text-center block tracking-wide">{btn.text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Jars Section */}
      <section id="jars" className="py-20 px-4" style={{ backgroundColor: COLORS.sageGreen }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center tracking-tight leading-none" style={{ color: COLORS.golden }}>
            Inside, we're all the same.
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" style={{ backgroundColor: COLORS.warmBeige }}>
                <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: COLORS.charcoal }}>
                  Like many of us, I recycle. I don't even think about it—it's just what you do. But when it came time to package the granola I love so much, I hit a wall: those "yay, recyclable!" bags? Most of them can't go in your curbside bin. They need to be taken to special drop-off points.
                </p>
                
                <div className="border-l-4 pl-6 my-8" style={{ borderColor: COLORS.golden }}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.golden }}>
                    Why not go old-school and offer glass jars?
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed mb-4" style={{ color: COLORS.charcoal }}>
                    Buy a jar, return it when it's empty, get a fresh one and a dollar off your next order.
                  </p>
                  <p className="text-xl font-bold" style={{ color: COLORS.golden }}>
                    Simple. Sustainable. Guaranteed.
                  </p>
                </div>

                <p className="text-lg md:text-xl leading-relaxed mb-4" style={{ color: COLORS.charcoal }}>
                  Yes, some people looked at the jar and said, <em className="font-semibold" style={{ color: COLORS.golden }}>"It looks so little!"</em>
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: COLORS.charcoal }}>
                  But here's the fun part: it's still <strong>8 ounces of granola</strong>. Our eyes just aren't used to seeing food in compact glass jars instead of big, puffy bags.
                </p>

                <div className="text-center py-4 px-6 rounded-xl mb-6" style={{ backgroundColor: COLORS.white }}>
                  <p className="text-xl font-bold" style={{ color: COLORS.golden }}>
                    Wild, right? Same granola—different container, totally different vibe.
                  </p>
                </div>

                <div className="space-y-3 text-center mb-8">
                  <p className="text-lg" style={{ color: COLORS.charcoal }}>So yes—<strong>glass jars</strong>.</p>
                  <p className="text-lg" style={{ color: COLORS.charcoal }}>Also <strong>paper bags</strong> (soon).</p>
                  <p className="text-lg italic" style={{ color: COLORS.charcoal }}>
                    And always, always the search for truly recyclable or reusable containers.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] sticky top-8">
                  <img src="granola-jar.jpg" alt="Granola Jar" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>

              <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group" style={{ backgroundColor: COLORS.warmBeige }}>
                <h4 className="text-xl font-bold mb-4 flex items-center" style={{ color: COLORS.golden }}>
                  <span className="mr-3 group-hover:animate-bounce">✈️</span> For the travelers:
                </h4>
                <p className="text-base leading-relaxed mb-3" style={{ color: COLORS.charcoal }}>
                  I hear you. Glass jars in suitcases? Not ideal. No one wants granola + glass shards at 30,000 feet.
                </p>
                <p className="text-base leading-relaxed" style={{ color: COLORS.charcoal }}>
                  So if you're living the <strong className="text-lg" style={{ color: COLORS.golden }}>80/20 life</strong>—80% conscious, 20% practical—you're doing great. That's real life, and it counts.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* My Story Section - Handwritten Letter */}
      <section id="story" className="py-20 px-4" style={{ backgroundColor: COLORS.sageGreen }}>
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header - Above the letter */}
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center tracking-tight leading-none" style={{ color: COLORS.golden }}>
            My Story
          </h2>
          
          <div className="relative">
            <div className="absolute inset-0 bg-black/5 rounded-lg transform translate-x-2 translate-y-2"></div>
            
            <div 
              className="relative rounded-lg shadow-xl p-16 md:p-20 transform -rotate-1 hover:rotate-0 transition-transform duration-700"
              style={{ 
                backgroundColor: '#fbf8f3',
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 30px, rgba(139, 128, 85, 0.1) 30px, rgba(139, 128, 85, 0.1) 31px)'
              }}
            >
              {/* Coffee ring stain */}
              <div className="absolute top-8 right-12 w-16 h-16 rounded-full border border-amber-200 opacity-30"></div>
              
              {/* Red margin line */}
              <div className="absolute left-20 top-0 bottom-0 w-px bg-red-300 opacity-40"></div>
              
              {/* Letter content - ONLY Aloy's words */}
              <div className="ml-8 space-y-8 text-gray-800 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                
                {/* Date */}
                <div className="text-right text-gray-500 text-base mb-8 italic">
                  March 2025
                </div>

                {/* Aloy's exact text - no duplicates */}
                <div className="space-y-6">
                  <p className="text-lg leading-loose">
                    Hi, I'm Aloy — granola enthusiast, accidental packaging nerd, and founder of Crunchyology, born in March 2025 (though the granola journey started back in 2021).
                  </p>

                  <p className="text-lg leading-loose">
                    <strong>So… I had an idea.</strong>
                  </p>

                  <p className="text-lg leading-loose">
                    <strong>But I stuck with it.</strong>
                  </p>
                  
                  <p className="text-lg leading-loose">
                    <strong>And the love? It's real.</strong>
                  </p>

                  <p className="text-lg leading-loose">
                    Jars are coming back, and it's a joy to see them travel back into my hands, ready for another round.
                  </p>

                  <p className="text-lg leading-loose">
                    <strong>Crunchyology isn't just about making ridiculously good granola (though that's non-negotiable).</strong> It's about creating less waste, trying new things, and <strong>being okay with not having it all figured out yet.</strong>
                  </p>
                </div>

                {/* Closing */}
                <div className="pt-8 mt-12 border-t border-gray-300 border-dashed">
                  <p className="text-lg leading-loose mb-6">
                    Thanks for being part of this crunchy journey.
                  </p>
                  
                  <p className="text-lg leading-loose mb-8 font-medium">
                    <strong>Let's keep things thoughtful, delicious, and just a little weird—in the best way.</strong>
                  </p>
                  
                  {/* Signature */}
                  <div className="flex items-end justify-end mt-12">
                    <div className="text-right">
                      <p className="text-4xl transform -rotate-3 mb-2 font-normal italic" style={{ color: COLORS.golden }}>
                        🫶
                      </p>
                      <p className="text-3xl transform -rotate-2 mb-2 font-normal italic" style={{ color: COLORS.golden }}>
                        – Aloy
                      </p>
                      <p className="text-sm text-gray-600 italic font-light">
                        Founder of Crunchyology
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section id="quotes" className="py-24 px-4" style={{ backgroundColor: COLORS.sageGreen }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center tracking-tight leading-none" style={{ color: COLORS.golden }}>
              Things People Yell Across the Booth
            </h2>
            <div className="w-24 h-px mx-auto" style={{ backgroundColor: COLORS.golden }}></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {QUOTES.map(({ quote, author }) => (
              <div key={author} className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: COLORS.warmBeige }}>
                <p className="text-xl md:text-2xl mb-6 leading-relaxed" style={{ color: COLORS.charcoal }}>{quote}</p>
                <p className="text-sm font-medium" style={{ color: COLORS.golden }}>— {author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section id="find-us" className="py-20 px-4" style={{ backgroundColor: COLORS.sageGreen }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center tracking-tight leading-none" style={{ color: COLORS.golden }}>Find Us</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" style={{ backgroundColor: COLORS.warmBeige }}>
                <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: COLORS.charcoal }}>
                  Lafayette Farmers Market
                  <div className="w-16 h-1 mt-2 mx-auto" style={{ backgroundColor: COLORS.golden }}></div>
                </h3>
                <div className="text-center space-y-4">
                  <p className="text-lg leading-relaxed" style={{ color: COLORS.charcoal }}>Downtown Lafayette on Public Rd between Cleveland St and Geneseo St</p>
                  <p className="text-lg font-medium" style={{ color: COLORS.charcoal }}>Lafayette, CO 80026</p>
                  <p className="text-xl font-bold" style={{ color: COLORS.golden }}>Sundays 8am-1pm</p>
                  <a href="https://www.lafayettefm.com/sunday-market" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 rounded-2xl text-white font-bold hover:shadow-xl transition-all duration-300 mt-6"
                    style={{ backgroundColor: COLORS.oliveButton }}
                  >
                    Visit Market Website
                  </a>
                </div>
              </div>
              <div className="bg-white/90 rounded-2xl shadow-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8273851842847!2d-105.08993492345694!3d39.99380647150494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf40a6f94c5a5%3A0x4f0a0e0a0e0a0e0a!2sE%20Cleveland%20St%20%26%20S%20Public%20Rd%2C%20Lafayette%2C%20CO%2080026!5e0!3m2!1sen!2sus!4v1647901234567!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lafayette Farmers Market Location"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300" style={{ backgroundColor: COLORS.warmBeige }}>
                <h4 className="text-xl font-bold mb-4" style={{ color: COLORS.golden }}>Find us at Booth 8</h4>
                <p className="text-lg mb-2" style={{ color: COLORS.charcoal }}>Between the Eggs and the Pickles</p>
                <p className="text-sm" style={{ color: COLORS.golden }}>Look for the granola jars!</p>
              </div>
              <div className="p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300" style={{ backgroundColor: COLORS.warmBeige }}>
                <p className="text-lg font-medium leading-relaxed" style={{ color: COLORS.charcoal }}>
                  Come visit us and taste the difference of handcrafted granola!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 px-4" style={{ backgroundColor: COLORS.sageGreen }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center tracking-tight leading-none" style={{ color: COLORS.golden }}>
            Contact Us
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl shadow-2xl mb-8" style={{ backgroundColor: COLORS.white }}>
              <p className="text-lg md:text-xl text-center leading-relaxed" style={{ color: COLORS.charcoal }}>
                We'd love to hear from you! Send us a message at{' '}
                <a href="mailto:crunchyology@gmail.com" className="font-bold hover:underline" 
                   style={{ color: COLORS.golden }}
                >
                  crunchyology@gmail.com
                </a>{' '}
                or use the form below.
              </p>
            </div>
            <div className="p-8 md:p-12 rounded-3xl shadow-2xl" style={{ backgroundColor: COLORS.warmBeige }}>
              <form action="https://formspree.io/f/xblonabq" method="POST" className="space-y-8">
                <div>
                  <label className="block font-bold mb-3 text-xl" style={{ color: COLORS.golden }}>Name</label>
                  <input type="text" name="name" className="w-full p-4 border-2 rounded-2xl text-lg bg-white/90" placeholder="Your name" required />
                </div>
                <div>
                  <label className="block font-bold mb-3 text-xl" style={{ color: COLORS.golden }}>Email</label>
                  <input type="email" name="email" className="w-full p-4 border-2 rounded-2xl text-lg bg-white/90" placeholder="your.email@example.com" required />
                </div>
                <div>
                  <label className="block font-bold mb-3 text-xl" style={{ color: COLORS.golden }}>Message</label>
                  <textarea rows="6" name="message" className="w-full p-4 border-2 rounded-2xl text-lg bg-white/90 resize-none" placeholder="Tell us what's on your mind..." required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="text-white font-bold py-4 px-8 rounded-2xl text-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    style={{ backgroundColor: COLORS.oliveButton }}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-16 px-4" style={{ backgroundColor: COLORS.oliveButton }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>
                Crunchyology
                <div className="w-12 h-1 mt-1" style={{ backgroundColor: COLORS.golden }}></div>
              </h3>
              <p className="text-lg leading-relaxed">Handcrafted with love</p>
              <p className="text-lg leading-relaxed">Lafayette, Colorado</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>
                Quick Links  
                <div className="w-12 h-1 mt-1" style={{ backgroundColor: COLORS.golden }}></div>
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="text-lg hover:underline" style={{ color: COLORS.white }}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold" style={{ color: COLORS.white }}>Follow Us:</h3>
              <a href="https://www.instagram.com/crunchyology.co/" target="_blank" rel="noopener noreferrer"
                className="inline-block p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
                <span className="text-white">Instagram</span>
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t" style={{ borderColor: COLORS.golden }}>
            <p className="text-lg text-center">© 2025 Crunchyology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;