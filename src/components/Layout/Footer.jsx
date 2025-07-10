import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { COLORS, NAV_LINKS } from '../../constants/colors';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-white py-24 px-4 relative overflow-hidden" style={{ 
      background: `linear-gradient(135deg, ${COLORS.charcoal} 0%, #1a1a1a 100%)`
    }}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-5 animate-[spin_25s_linear_infinite]"
          style={{ background: `conic-gradient(from 0deg, ${COLORS.golden}, white, ${COLORS.golden})` }} 
        />
        <div 
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-10"
          style={{ background: `radial-gradient(circle, ${COLORS.golden}, transparent)` }} 
        />
        {/* Enhanced grain pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23fff" fill-opacity="0.05"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")',
            animation: 'float 10s ease-in-out infinite'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="space-y-6 group">
            <div className="relative">
              <h3 className="text-4xl font-bold group-hover:scale-105 transition-transform duration-300" style={{ color: COLORS.white }}>
                Crunchyology
              </h3>
              <div 
                className="w-20 h-1 rounded-full mt-4 group-hover:w-24 transition-all duration-300" 
                style={{ 
                  background: `linear-gradient(90deg, ${COLORS.golden}, ${COLORS.golden}80, ${COLORS.golden})`
                }}
              ></div>
            </div>
            
            <div className="space-y-3">
              <p className="text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Handcrafted with love
              </p>
              <p className="text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Broomfield, Colorado
              </p>
              <p className="text-base opacity-80 italic font-medium" style={{ color: COLORS.golden + 'CC' }}>
                Granola Elevated Since 2020
              </p>
            </div>
            
            {/* Enhanced visual element */}
            <div className="pt-4">
              <div className="text-3xl opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300">
                🌾
              </div>
            </div>
          </div>
          
          {/* Enhanced Navigation Section */}
          <nav className="space-y-6 group" aria-label="Footer navigation">
            <div className="relative">
              <h3 className="text-4xl font-bold group-hover:scale-105 transition-transform duration-300" style={{ color: COLORS.white }}>
                Quick Links  
              </h3>
              <div 
                className="w-20 h-1 rounded-full mt-4 group-hover:w-24 transition-all duration-300" 
                style={{ 
                  background: `linear-gradient(90deg, ${COLORS.golden}, ${COLORS.golden}80, ${COLORS.golden})`
                }}
              ></div>
            </div>
            
            <ul className="space-y-4">
              {NAV_LINKS.map((link, index) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="group/link text-lg hover:text-golden transition-all duration-300 flex items-center gap-3 opacity-90 hover:opacity-100 hover:translate-x-2 p-2 rounded-lg hover:bg-white/5"
                    style={{ color: COLORS.white, animationDelay: `${index * 0.1}s` }}
                  >
                    <span 
                      className="text-xl group-hover/link:scale-110 group-hover/link:rotate-12 transition-all duration-300" 
                      aria-hidden="true"
                    >
                      {link.icon}
                    </span>
                    <span className="group-hover/link:font-medium transition-all duration-300">
                      {link.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Enhanced Social Section */}
          <div className="space-y-6 group">
            <div className="relative">
              <h3 className="text-4xl font-bold group-hover:scale-105 transition-transform duration-300" style={{ color: COLORS.white }}>
                Follow Us
              </h3>
              <div 
                className="w-20 h-1 rounded-full mt-4 group-hover:w-24 transition-all duration-300" 
                style={{ 
                  background: `linear-gradient(90deg, ${COLORS.golden}, ${COLORS.golden}80, ${COLORS.golden})`
                }}
              ></div>
            </div>
            
            {/* Enhanced Instagram Button */}
            <a 
              href="https://www.instagram.com/crunchyology.co/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 group/social transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl backdrop-blur-sm border border-white/10"
              aria-label="Follow us on Instagram"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover/social:scale-110 transition-transform duration-300">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-white text-lg font-medium">@crunchyology.co</span>
                <p className="text-white/70 text-sm">Follow our journey</p>
              </div>
            </a>
            
            {/* Enhanced Email Section */}
            <div className="mt-8 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group/email hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-golden to-orange-400 flex items-center justify-center group-hover/email:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <p className="text-base opacity-80 font-medium">Email us at:</p>
              </div>
              <a 
                href="mailto:crunchyology@gmail.com"
                className="text-lg hover:text-golden transition-colors font-medium hover:underline block group-hover/email:translate-x-2 transition-transform duration-300"
                style={{ color: COLORS.golden }}
              >
                crunchyology@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Enhanced Footer Bottom */}
        <div className="mt-20 pt-8 border-t text-center relative" style={{ borderColor: COLORS.golden + '40' }}>
          <div 
            className="absolute inset-0 opacity-5"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${COLORS.golden}40, transparent)`
            }}
          ></div>
          
          <div className="relative z-10 space-y-4">
            <p className="text-xl opacity-90 font-medium">
              © {currentYear} Crunchyology. All rights reserved.
            </p>
            <p className="text-lg mt-3 opacity-70 hover:opacity-90 transition-opacity duration-300">
              Made with <span className="text-2xl hover:scale-125 transition-transform duration-300 inline-block">🌾</span> and lots of oats
            </p>
            
            {/* Enhanced Attribution */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <p className="text-sm opacity-50 hover:opacity-70 transition-opacity duration-300">
                Creatively clustered by{' '}
                <a 
                  href="https://www.linkedin.com/in/joshruchwarger/" 
                  className="underline hover:no-underline hover:text-golden transition-all duration-300 font-medium"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Josue Ruchwarger
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Custom Styles */}
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${COLORS.warmBeige};
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, ${COLORS.golden}, ${COLORS.oliveButton});
          border-radius: 6px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, ${COLORS.oliveButton}, ${COLORS.sageGreen});
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;