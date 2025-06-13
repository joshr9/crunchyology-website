import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { COLORS } from '../../constants/colors';

const FindUs = () => {
  return (
    <section id="find-us" className="py-24 px-4" style={{ backgroundColor: COLORS.cream }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none" 
              style={{ color: COLORS.golden }}>
            Find Us
          </h2>
          <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: COLORS.golden }}></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <article 
              className="p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden" 
              style={{ backgroundColor: COLORS.warmBeige }}
            >
              {/* Background pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,0,0,.1) 20px, rgba(0,0,0,.1) 40px)' }}
              ></div>
              
              <h3 className="text-3xl font-bold mb-8 text-center relative" style={{ color: COLORS.charcoal }}>
                Lafayette Farmers Market
                <div className="w-20 h-1 mt-3 mx-auto rounded-full" style={{ backgroundColor: COLORS.golden }}></div>
              </h3>
              
              <div className="text-center space-y-6 relative">
                <address className="not-italic">
                  <div className="flex items-center justify-center gap-3">
                    <MapPin className="w-6 h-6 flex-shrink-0" style={{ color: COLORS.golden }} aria-hidden="true" />
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
                </address>
                
                <div className="flex items-center justify-center gap-3 pt-4">
                  <Calendar className="w-6 h-6" style={{ color: COLORS.golden }} aria-hidden="true" />
                  <time className="text-2xl font-bold" style={{ color: COLORS.golden }}>
                    Sundays 9am-1pm
                  </time>
                </div>
                
                <a 
                  href="https://www.lafayettefm.com/sunday-market" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-5 rounded-full text-white font-bold hover:shadow-2xl transition-all duration-300 mt-8 transform hover:scale-105"
                  style={{ backgroundColor: COLORS.oliveButton }}
                >
                  Visit Market Website
                </a>
              </div>
            </article>
            
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
          
          <aside className="space-y-6">
            <div 
              className="p-10 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-rotate-1" 
              style={{ backgroundColor: COLORS.warmBeige }}
            >
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
            
            <div 
              className="p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:rotate-1" 
              style={{ backgroundColor: COLORS.oliveButton }}
            >
              <Clock className="w-12 h-12 mx-auto mb-4 text-white" />
              <p className="text-lg font-medium leading-relaxed text-white">
                Come visit us and taste the difference of handcrafted granola!
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FindUs;