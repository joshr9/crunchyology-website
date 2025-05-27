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

const jarFeatures = [
  "Reusable (unlike most relationships these days)",
  "Perfect for storing whatever you don't want people to find (we don't ask questions)",
  "Great conversation starters (\"Yes, I AM saving the planet one jar at a time\")",
  "Surprisingly effective as makeshift weights during those at-home workouts you promised yourself you'd do"
];

function App() {
  return (
    <div className="min-h-screen font-body antialiased" style={{ backgroundColor: COLORS.sageGreen, color: COLORS.charcoal }}>
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: COLORS.sageGreen }} />
        <div className="absolute inset-0">
          <img src="granola_bowl.jpg" alt="Delicious Granola" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
        
        <div className="absolute top-8 md:top-16 left-1/2 -translate-x-1/2 z-20">
          <div className="p-6 md:p-8">
            <img src="Crunchy.svg" alt="Crunchyology logo" className="h-[40rem] w-auto drop-shadow-2xl" />
          </div>
        </div>
        
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {NAV_LINKS.map((btn) => (
              <a key={btn.href} href={btn.href}
                className="group relative overflow-hidden backdrop-blur-2xl text-white font-headers font-bold p-4 md:p-6 rounded-2xl shadow-2xl transition-all duration-500 text-lg md:text-2xl lg:text-3xl transform hover:scale-105 hover:-translate-y-2 border border-white/30"
                style={{ backgroundColor: COLORS.oliveButton + 'DD' }}
              >
                <span className="relative z-10 text-center block tracking-wide">{btn.text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Jars Section */}
      <section id="jars" className="py-20 px-4" style={{ backgroundColor: COLORS.sageGreen }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center tracking-tight leading-none" style={{ color: COLORS.golden }}>
            Inside, we're all the same.
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              {/* Main Story Card */}
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

                <div className="space-y-3 text-center">
                  <p className="text-lg" style={{ color: COLORS.charcoal }}>So yes—<strong>glass jars</strong>.</p>
                  <p className="text-lg" style={{ color: COLORS.charcoal }}>Also <strong>paper bags</strong> (soon).</p>
                  <p className="text-lg italic" style={{ color: COLORS.charcoal }}>
                    And always, always the search for truly recyclable or reusable containers.
                  </p>
                </div>
              </div>

              {/* Conspiracy Card */}
              <div className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300" style={{ backgroundColor: COLORS.warmBeige }}>
                <h3 className="text-xl md:text-2xl font-bold mb-6" style={{ color: COLORS.charcoal }}>
                  The Great Jar Conspiracy
                  <div className="w-40 h-1 mt-2" style={{ backgroundColor: COLORS.golden }}></div>
                </h3>
                <p className="mb-6 text-base font-medium leading-relaxed" style={{ color: COLORS.charcoal }}>
                  Look, we could've gone with generic packaging like everyone else, but where's the fun in that? Our jars are:
                </p>
                <ul className="space-y-3 text-base font-medium leading-relaxed mb-6" style={{ color: COLORS.charcoal }}>
                  {jarFeatures.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: COLORS.golden }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="italic text-base md:text-lg font-bold p-4 rounded-xl" style={{ 
                  color: COLORS.golden,
                  backgroundColor: COLORS.white
                }}>
                  Bring your jar back for $1 off, and get to feel smug about your environmental consciousness. It's cheaper than therapy.
                </p>
              </div>
            </div>

            {/* Jar Image */}
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] sticky top-8">
                  <img src="granola-jar.jpg" alt="Granola Jar" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>

              {/* Travelers Card - moved under image */}
              <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" style={{ backgroundColor: COLORS.warmBeige }}>
                <h4 className="text-xl font-bold mb-4 flex items-center" style={{ color: COLORS.golden }}>
                  <span className="mr-3">✈️</span> For the travelers:
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

      {/* My Story Section - Kitchen Paper Design */}
      <section id="story" className="py-20 px-4" style={{ backgroundColor: COLORS.sageGreen }}>
        <div className="max-w-4xl mx-auto">
          
          {/* Paper Sheet */}
          <div className="relative">
            {/* Paper shadow */}
            <div className="absolute inset-0 bg-black/10 rounded-lg transform translate-x-1 translate-y-1"></div>
            
            {/* Main paper - more worn/used look */}
            <div 
              className="relative rounded-lg shadow-2xl p-12 md:p-16 transform -rotate-1 hover:rotate-0 transition-transform duration-500"
              style={{ 
                backgroundColor: '#faf7f0',
                backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(139, 128, 85, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(160, 140, 110, 0.08) 0%, transparent 50%)'
              }}
            >
              {/* Holes for binder */}
              <div className="absolute left-8 top-0 bottom-0 flex flex-col justify-evenly">
                <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full shadow-inner"></div>
                <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full shadow-inner"></div>
                <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full shadow-inner"></div>
              </div>

              {/* Red margin line */}
              <div className="absolute left-20 top-0 bottom-0 w-px bg-red-300"></div>
              
              {/* Letter content */}
              <div className="ml-8 space-y-8">
                
                {/* Header */}
                <div className="text-center pb-8 border-b-2 border-dashed border-gray-300">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: COLORS.golden }}>
                    Inside, We Are All the Same
                  </h2>
                  <p className="text-lg italic text-gray-600">
                    A story of granola, jars, and doing things a little differently.
                  </p>
                </div>

                {/* Letter body */}
                <div className="space-y-6 text-gray-800 leading-relaxed">
                  
                  {/* Greeting */}
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">👋</span>
                    <div>
                      <p className="text-lg font-semibold mb-2">Hi, I'm Aloy</p>
                      <p className="text-sm text-gray-600 mb-4">Granola enthusiast, accidental packaging nerd</p>
                      <p className="text-base leading-relaxed">
                        I'm the founder of Crunchyology, born in March 2025 (though the granola journey started back in 2021).
                      </p>
                    </div>
                  </div>

                  {/* The idea moment */}
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 my-8">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.golden }}>
                      So… I had an idea.
                    </h3>
                    <p className="text-base italic">
                      The decision moment that changed everything.
                    </p>
                  </div>

                  {/* The persistence */}
                  <div className="text-center my-8 p-6 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold mb-2" style={{ color: COLORS.charcoal }}>
                      But I stuck with it.
                    </p>
                    <p className="text-2xl font-bold" style={{ color: COLORS.golden }}>
                      And the love? It's real.
                    </p>
                  </div>

                  {/* Philosophy */}
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed">
                      Jars are coming back, and it's a joy to see them travel back into my hands, ready for another round.
                    </p>
                    
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                      <p className="text-base leading-relaxed mb-4">
                        Crunchyology isn't just about making ridiculously good granola (though that's non-negotiable).
                      </p>
                      <p className="text-lg font-bold" style={{ color: COLORS.golden }}>
                        It's about creating less waste, trying new things, and being okay with not having it all figured out yet.
                      </p>
                    </div>
                  </div>

                  {/* Closing */}
                  <div className="pt-8 border-t border-dashed border-gray-300">
                    <p className="text-base leading-relaxed mb-4">
                      Thanks for being part of this crunchy journey.
                    </p>
                    <p className="text-lg font-bold mb-8" style={{ color: COLORS.golden }}>
                      Let's keep things thoughtful, delicious, and just a little weird—in the best way.
                    </p>
                    
                    {/* Signature */}
                    <div className="flex items-center justify-end space-x-3 mt-8">
                      <span className="text-2xl">🫶</span>
                      <div className="text-right">
                        <p className="text-xl font-bold" style={{ color: COLORS.golden }}>
                          – Aloy
                        </p>
                        <p className="text-sm text-gray-600">Founder of Crunchyology</p>
                      </div>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight" style={{ color: COLORS.golden }}>
              Things People Yell Across the Booth
            </h2>
            <div className="w-24 h-px mx-auto" style={{ backgroundColor: COLORS.golden }}></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {QUOTES.map(({ quote, author }) => (
              <div key={author} className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: COLORS.warmBeige }}>
                <p className="text-xl md:text-2xl mb-6 leading-relaxed" style={{ color: COLORS.charcoal }}>{quote}</p>
                <p className="text-sm font-medium" style={{ color: COLORS.golden }}>— {author}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="inline-block p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" style={{ backgroundColor: COLORS.warmBeige }}>
              <p className="text-xl md:text-2xl font-bold mb-2" style={{ color: COLORS.golden }}>Find us at Booth 8</p>
              <p className="text-lg" style={{ color: COLORS.charcoal }}>Between the Eggs and the Pickles</p>
              <p className="text-base mt-4" style={{ color: COLORS.golden }}>Lafayette Farmers Market • Sundays 8am-1pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section id="find-us" className="py-20 px-4" style={{ backgroundColor: COLORS.sageGreen }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-20 text-center" style={{ color: COLORS.golden }}>Find Us</h2>
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
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-white/90 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
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
              <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" style={{ backgroundColor: COLORS.warmBeige }}>
                <h4 className="text-lg font-bold mb-4 text-center" style={{ color: COLORS.charcoal }}>
                  Coming Soon
                  <div className="w-8 h-0.5 mt-1 mx-auto" style={{ backgroundColor: COLORS.golden }}></div>
                </h4>
                <p className="text-base leading-relaxed text-center" style={{ color: COLORS.charcoal }}>More locations opening soon! Follow us on social media for updates.</p>
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
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center" style={{ color: COLORS.golden }}>
            Contact Us
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl shadow-2xl border border-white/60 mb-8 hover:shadow-3xl transition-all duration-300" style={{ backgroundColor: COLORS.white }}>
              <p className="text-lg md:text-xl text-center leading-relaxed" style={{ color: COLORS.charcoal }}>
                We'd love to hear from you! Send us a message at{' '}
                <a href="mailto:crunchyology@gmail.com" className="font-bold transition-colors hover:underline" 
                   style={{ color: COLORS.golden }}
                >
                  crunchyology@gmail.com
                </a>{' '}
                or use the form below.
              </p>
            </div>
            <div className="p-8 md:p-12 rounded-3xl shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-300" style={{ backgroundColor: COLORS.warmBeige }}>
              <div className="space-y-8">
                <div>
                  <label className="block font-bold mb-3 text-xl" style={{ color: COLORS.golden }}>
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 border-2 rounded-2xl text-lg bg-white/90 transition-all duration-300 hover:shadow-md focus:ring-4 focus:ring-opacity-50"
                    placeholder="Your name"
                    style={{ 
                      borderColor: COLORS.golden + '40',
                      color: COLORS.charcoal
                    }}
                  />
                </div>
                <div>
                  <label className="block font-bold mb-3 text-xl" style={{ color: COLORS.golden }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-4 border-2 rounded-2xl text-lg bg-white/90 transition-all duration-300 hover:shadow-md focus:ring-4 focus:ring-opacity-50"
                    placeholder="your.email@example.com"
                    style={{ 
                      borderColor: COLORS.golden + '40',
                      color: COLORS.charcoal
                    }}
                  />
                </div>
                <div>
                  <label className="block font-bold mb-3 text-xl" style={{ color: COLORS.golden }}>
                    Message
                  </label>
                  <textarea
                    rows="6"
                    className="w-full p-4 border-2 rounded-2xl text-lg bg-white/90 resize-none transition-all duration-300 hover:shadow-md focus:ring-4 focus:ring-opacity-50"
                    placeholder="Tell us what's on your mind..."
                    style={{ 
                      borderColor: COLORS.golden + '40',
                      color: COLORS.charcoal
                    }}
                  />
                </div>
                <div className="text-center">
                  <button
                    className="text-white font-bold py-4 px-8 rounded-2xl text-2xl md:text-3xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[200px] focus:outline-none focus:ring-4 focus:ring-opacity-50"
                    style={{ backgroundColor: COLORS.oliveButton }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
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
                    <a
                      href={link.href}
                      className="text-lg hover:underline underline-offset-4 transition-colors duration-300 hover:opacity-80"
                      style={{ color: COLORS.white }}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <h3 className="text-xl font-bold" style={{ color: COLORS.white }}>Follow Us:</h3>
                <a
                  href="https://www.instagram.com/crunchyology.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6 text-white group-hover:opacity-80 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-opacity-30" style={{ borderColor: COLORS.golden }}>
            <p className="text-lg text-center" style={{ color: COLORS.white }}>
              © 2025 Crunchyology. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;