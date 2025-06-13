import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Mail, Instagram, Clock, Calendar } from 'lucide-react';

const COLORS = {
  sageGreen: '#738678',
  golden: '#D4A574', 
  warmBeige: '#F5F1E8',
  charcoal: '#262626',
  white: '#FFFFFF',
  oliveButton: '#8f9779',
  cream: '#FAF7F0'
};

const NAV_LINKS = [
  { href: "#story", text: "My Story", icon: "📖" },
  { href: "#quotes", text: "Reviews", icon: "💬" },
  { href: "#find-us", text: "Find Us", icon: "📍" },
  { href: "#contact", text: "Contact Us", icon: "✉️" }
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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['story', 'quotes', 'find-us', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.cream, color: COLORS.charcoal }}>
      
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-lg shadow-lg' : ''}`}
           style={{ backgroundColor: scrolled ? COLORS.sageGreen + 'EE' : 'transparent' }}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className={`transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
              <img src="Crunchy.svg" alt="Crunchyology" className="h-10 md:h-12" />
            </a>
            <div className={`flex space-x-4 md:space-x-8 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href}
                   className={`text-sm md:text-base text-white font-medium hover:text-golden transition-colors ${activeSection === link.href.slice(1) ? 'text-golden' : ''}`}
                   style={{ color: activeSection === link.href.slice(1) ? COLORS.golden : COLORS.white }}>
                  <span className="hidden sm:inline">{link.text}</span>
                  <span className="sm:hidden text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0" 
             style={{ 
               backgroundColor: COLORS.sageGreen,
               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
             }} />
        
        <div className="absolute inset-0">
          <img src="granola_bowl.jpg" alt="Delicious Granola" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
        
        {/* Logo with animation - Centered */}
        <div className="absolute inset-x-0 top-16 sm:top-20 md:top-1/4 md:-translate-y-1/2 z-20 flex justify-center px-4" style={{ animation: 'float 6s ease-in-out infinite' }}>
          <img src="Crunchy.svg" alt="Crunchyology logo" className="h-40 sm:h-48 md:h-64 lg:h-72 xl:h-80 w-auto drop-shadow-2xl max-w-full" />
        </div>
        
        {/* Centered Navigation Buttons */}
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-10">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6">
            {NAV_LINKS.map((btn, index) => (
              <a key={btn.href} href={btn.href}
                className="group backdrop-blur-2xl text-white font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-full shadow-2xl transition-all duration-500 text-base sm:text-lg md:text-xl flex items-center gap-2 sm:gap-3 transform hover:scale-105 hover:-translate-y-1 border-2 border-white/20 hover:border-white/40 w-full sm:w-auto justify-center"
                style={{ 
                  backgroundColor: COLORS.oliveButton + 'DD',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform">{btn.icon}</span>
                <span className="tracking-wide">{btn.text}</span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* My Story Section - Enhanced */}
      <section id="story" className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: COLORS.cream }}>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
             style={{ background: `radial-gradient(circle, ${COLORS.golden}, transparent)` }} />
        
        <div className="max-w-4xl mx-auto relative">
          
          {/* Section Header with custom typography */}
          <div className="text-center mb-20">
            <h2 className="font-serif text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none" 
                style={{ color: COLORS.golden, textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
              My Story
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: COLORS.golden }}></div>
          </div>
          
          <div className="relative">
            {/* Multiple shadow layers for depth */}
            <div className="absolute inset-0 bg-black/5 rounded-lg transform translate-x-3 translate-y-3"></div>
            <div className="absolute inset-0 bg-black/3 rounded-lg transform translate-x-1 translate-y-1"></div>
            
            <div 
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
              {/* Enhanced coffee ring stains */}
              <div className="absolute top-8 right-12 w-16 h-16 rounded-full border-2 border-amber-200/30"></div>
              <div className="absolute top-10 right-14 w-12 h-12 rounded-full border border-amber-200/20"></div>
              
              {/* Red margin line */}
              <div className="absolute left-20 top-0 bottom-0 w-px bg-red-300 opacity-40"></div>
              
              {/* Letter content */}
              <div className="ml-8 space-y-8 text-gray-800 leading-[2.05rem] tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                
                {/* Date with flourish */}
                <div className="text-right text-gray-500 text-base mb-8 italic">
                  ~ March 2025 ~
                </div>

                <div className="space-y-6">
                  <p className="text-lg leading-loose pt-[6px]">
                    <span className="text-5xl font-bold float-left mr-2" style={{ color: COLORS.golden }}>H</span>i, I'm Aloy — granola enthusiast since 2020.
                    I loved my granola so much, I started giving it out as gifts.
                    Four years (and more oats than I can count) later, Crunchyology was born.
                  </p>

                  <p className="text-lg leading-loose">
                    I never planned on starting a business — but turns out when you bake with love and hand out enough jars, people notice.
                    Now I get to share this crispy little passion with you: lovingly baked, seriously tasty, and always packaged with care.
                  </p>

                  <p className="text-lg leading-loose">
                    Jars are great for all of you locals (and I love seeing so many of you come back!).
                    The demand for hiking-safe bags, gifting, and shipping in lighter packaging (shatter-free) grew — so we also have paper bags.
                    We're getting ready to switch to compostable bags soon! Stay tuned.
                  </p>

                  <p className="text-lg leading-loose pb-[4px]">
                    Welcome. You've been initiated.
                    What's the password to join?
                    Hit me with your best pun.
                    (Seriously. I dare you. There may or may not be stickers involved.)
                  </p>
                </div>

                {/* Enhanced closing */}
                <div className="pt-8 mt-12 border-t-2 border-gray-300 border-dotted">
                  <div className="flex items-end justify-end mt-12">
                    <div className="text-right">
                      <p className="text-4xl transform -rotate-3 mb-2 font-normal italic" style={{ color: COLORS.golden }}>
                        🫶
                      </p>
                      <p className="text-3xl transform -rotate-2 mb-2 font-normal italic" style={{ color: COLORS.golden, fontFamily: 'Brush Script MT, cursive' }}>
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

      {/* Decorative divider */}
      <div className="py-12 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-dashed" style={{ borderColor: COLORS.golden + '40' }}></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-8 text-4xl" style={{ backgroundColor: COLORS.cream }}>🌾</span>
        </div>
      </div>

      {/* Quotes - Enhanced */}
      <section id="quotes" className="py-24 px-4 relative" style={{ backgroundColor: COLORS.sageGreen }}>
        <div className="absolute inset-0 opacity-5"
             style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)' }}></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-none">
              Things People Yell Across the Booth
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full bg-white/30"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {QUOTES.map(({ quote, author }, index) => (
              <div key={author} 
                   className="group p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                   style={{ 
                     backgroundColor: COLORS.warmBeige,
                     animationDelay: `${index * 0.1}s`
                   }}>
                {/* Quote mark decoration */}
                <div className="absolute -top-4 -left-4 text-8xl opacity-10 font-serif" style={{ color: COLORS.golden }}>"</div>
                
                <p className="text-xl md:text-2xl mb-6 leading-relaxed relative z-10" style={{ color: COLORS.charcoal }}>
                  {quote}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px" style={{ backgroundColor: COLORS.golden }}></div>
                  <p className="text-sm font-medium" style={{ color: COLORS.golden }}>
                    {author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us - Enhanced */}
      <section id="find-us" className="py-24 px-4" style={{ backgroundColor: COLORS.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none" style={{ color: COLORS.golden }}>
              Find Us
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: COLORS.golden }}></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden" 
                   style={{ backgroundColor: COLORS.warmBeige }}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5"
                     style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,0,0,.1) 20px, rgba(0,0,0,.1) 40px)' }}></div>
                
                <h3 className="text-3xl font-bold mb-8 text-center relative" style={{ color: COLORS.charcoal }}>
                  Lafayette Farmers Market
                  <div className="w-20 h-1 mt-3 mx-auto rounded-full" style={{ backgroundColor: COLORS.golden }}></div>
                </h3>
                
                <div className="text-center space-y-6 relative">
                  <div className="flex items-center justify-center gap-3">
                    <MapPin className="w-6 h-6" style={{ color: COLORS.golden }} />
                    <div>
                      <p className="text-lg leading-relaxed" style={{ color: COLORS.charcoal }}>
                        Downtown Lafayette on Public Rd
                      </p>
                      <p className="text-base" style={{ color: COLORS.charcoal + 'CC' }}>
                        Between Cleveland St and Geneseo St
                      </p>
                      <p className="text-lg font-medium mt-2" style={{ color: COLORS.charcoal }}>
                        Lafayette, CO 80026
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 pt-4">
                    <Calendar className="w-6 h-6" style={{ color: COLORS.golden }} />
                    <p className="text-2xl font-bold" style={{ color: COLORS.golden }}>
                      Sundays 8am-1pm
                    </p>
                  </div>
                  
                  <a href="https://www.lafayettefm.com/sunday-market" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center px-10 py-5 rounded-full text-white font-bold hover:shadow-2xl transition-all duration-300 mt-8 transform hover:scale-105"
                    style={{ backgroundColor: COLORS.oliveButton }}>
                    Visit Market Website
                  </a>
                </div>
              </div>
              
              <div className="rounded-3xl shadow-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8273851842847!2d-105.08993492345694!3d39.99380647150494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf40a6f94c5a5%3A0x4f0a0e0a0e0a0e0a!2sE%20Cleveland%20St%20%26%20S%20Public%20Rd%2C%20Lafayette%2C%20CO%2080026!5e0!3m2!1sen!2sus!4v1647901234567!5m2!1sen!2sus"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lafayette Farmers Market Location"
                  className="rounded-3xl"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-10 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-rotate-1" 
                   style={{ backgroundColor: COLORS.warmBeige }}>
                <div className="text-6xl mb-6">🥣</div>
                <h4 className="text-2xl font-bold mb-4" style={{ color: COLORS.golden }}>
                  Find us at Booth 8
                </h4>
                <p className="text-lg mb-2" style={{ color: COLORS.charcoal }}>
                  Between the Eggs and the Pickles
                </p>
                <p className="text-base italic" style={{ color: COLORS.golden }}>
                  Look for the granola jars!
                </p>
              </div>
              
              <div className="p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:rotate-1" 
                   style={{ backgroundColor: COLORS.oliveButton }}>
                <Clock className="w-12 h-12 mx-auto mb-4 text-white" />
                <p className="text-lg font-medium leading-relaxed text-white">
                  Come visit us and taste the difference of handcrafted granola!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us - Enhanced */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: COLORS.sageGreen }}>
        {/* Background decoration */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10"
             style={{ background: `radial-gradient(circle, ${COLORS.golden}, transparent)` }} />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-none">
              Contact Us
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full bg-white/30"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="p-10 rounded-3xl shadow-2xl mb-8 text-center" style={{ backgroundColor: COLORS.white }}>
              <Mail className="w-16 h-16 mx-auto mb-6" style={{ color: COLORS.golden }} />
              <p className="text-xl leading-relaxed" style={{ color: COLORS.charcoal }}>
                We'd love to hear from you! Send us a message at{' '}
                <a href="mailto:crunchyology@gmail.com" className="font-bold hover:underline inline-flex items-center gap-2" 
                   style={{ color: COLORS.golden }}>
                  crunchyology@gmail.com
                </a>{' '}
                or check out our socials below!
              </p>
            </div>
            
            <div className="p-10 rounded-3xl shadow-2xl" style={{ backgroundColor: COLORS.warmBeige }}>
              <div className="space-y-8">
                <div className="group">
                  <label className="block font-bold mb-3 text-xl transition-colors" style={{ color: COLORS.golden }}>
                    Name
                  </label>
                  <input type="text" name="name" 
                    className="w-full p-5 border-2 rounded-2xl text-lg bg-white/90 transition-all focus:shadow-lg outline-none"
                    style={{ borderColor: COLORS.golden + '40' }}
                    placeholder="Your name" />
                </div>
                
                <div className="group">
                  <label className="block font-bold mb-3 text-xl" style={{ color: COLORS.golden }}>
                    Email
                  </label>
                  <input type="email" name="email" 
                    className="w-full p-5 border-2 rounded-2xl text-lg bg-white/90 transition-all focus:shadow-lg outline-none"
                    style={{ borderColor: COLORS.golden + '40' }}
                    placeholder="your.email@example.com" />
                </div>
                
                <div className="group">
                  <label className="block font-bold mb-3 text-xl" style={{ color: COLORS.golden }}>
                    Message
                  </label>
                  <textarea rows="6" name="message" 
                    className="w-full p-5 border-2 rounded-2xl text-lg bg-white/90 resize-none transition-all focus:shadow-lg outline-none"
                    style={{ borderColor: COLORS.golden + '40' }}
                    placeholder="Tell us what's on your mind..."></textarea>
                </div>
                
                <div className="text-center">
                  <button 
                    onClick={() => {
                      // Get form values
                      const name = document.querySelector('input[name="name"]').value;
                      const email = document.querySelector('input[name="email"]').value;
                      const message = document.querySelector('textarea[name="message"]').value;
                      
                      // Create form data
                      const formData = new FormData();
                      formData.append('name', name);
                      formData.append('email', email);
                      formData.append('message', message);
                      
                      // Submit to Formspree
                      fetch('https://formspree.io/f/xblonabq', {
                        method: 'POST',
                        body: formData,
                        headers: {
                          'Accept': 'application/json'
                        }
                      }).then(response => {
                        if (response.ok) {
                          alert('Thanks for your message! We\'ll get back to you soon.');
                          // Clear form
                          document.querySelector('input[name="name"]').value = '';
                          document.querySelector('input[name="email"]').value = '';
                          document.querySelector('textarea[name="message"]').value = '';
                        } else {
                          alert('Oops! There was a problem sending your message.');
                        }
                      }).catch(error => {
                        alert('Oops! There was a problem sending your message.');
                      });
                    }}
                    className="text-white font-bold py-5 px-12 rounded-full text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    style={{ backgroundColor: COLORS.oliveButton }}>
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="text-white py-20 px-4 relative overflow-hidden" style={{ backgroundColor: COLORS.charcoal }}>
        {/* Decorative grain pattern */}
        <div className="absolute inset-0 opacity-5"
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23fff" fill-opacity="0.03"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold" style={{ color: COLORS.white }}>
                Crunchyology
              </h3>
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: COLORS.golden }}></div>
              <p className="text-lg leading-relaxed opacity-90">Handcrafted with love</p>
              <p className="text-lg leading-relaxed opacity-90">Lafayette, Colorado</p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold" style={{ color: COLORS.white }}>
                Quick Links  
              </h3>
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: COLORS.golden }}></div>
              <ul className="space-y-4">
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                    <a href={link.href} 
                       className="text-lg hover:text-golden transition-colors flex items-center gap-2 opacity-90 hover:opacity-100"
                       style={{ color: COLORS.white }}>
                      <span className="text-xl">{link.icon}</span>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold" style={{ color: COLORS.white }}>
                Follow Us
              </h3>
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: COLORS.golden }}></div>
              <a href="https://www.instagram.com/crunchyology.co/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group">
                <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <span className="text-white text-lg">@crunchyology.co</span>
              </a>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t text-center" style={{ borderColor: COLORS.golden + '40' }}>
            <p className="text-lg opacity-80">© 2025 Crunchyology. All rights reserved.</p>
            <p className="text-base mt-2 opacity-60">Made with 🌾 and lots of oats</p>
          </div>
        </div>
      </footer>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

export default App;