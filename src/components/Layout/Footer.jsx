import React from 'react';
import { Instagram } from 'lucide-react';
import { COLORS, NAV_LINKS } from '../../constants/colors';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-white py-20 px-4 relative overflow-hidden" style={{ backgroundColor: COLORS.charcoal }}>
      {/* Decorative grain pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23fff" fill-opacity="0.03"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")' 
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold" style={{ color: COLORS.white }}>
              Crunchyology
            </h3>
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: COLORS.golden }}></div>
            <p className="text-lg leading-relaxed opacity-90">Handcrafted with love</p>
            <p className="text-lg leading-relaxed opacity-90">Lafayette, Colorado</p>
            <p className="text-base opacity-80 italic">Granola Elevated Since 2020</p>
          </div>
          
          <nav className="space-y-6" aria-label="Footer navigation">
            <h3 className="text-3xl font-bold" style={{ color: COLORS.white }}>
              Quick Links  
            </h3>
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: COLORS.golden }}></div>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-lg hover:text-golden transition-colors flex items-center gap-2 opacity-90 hover:opacity-100"
                    style={{ color: COLORS.white }}
                  >
                    <span className="text-xl" aria-hidden="true">{link.icon}</span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold" style={{ color: COLORS.white }}>
              Follow Us
            </h3>
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: COLORS.golden }}></div>
            <a 
              href="https://www.instagram.com/crunchyology.co/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              <span className="text-white text-lg">@crunchyology.co</span>
            </a>
            
            <div className="mt-8">
              <p className="text-base opacity-80">Email us at:</p>
              <a 
                href="mailto:crunchyology@gmail.com"
                className="text-lg hover:text-golden transition-colors"
                style={{ color: COLORS.golden }}
              >
                crunchyology@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t text-center" style={{ borderColor: COLORS.golden + '40' }}>
          <p className="text-lg opacity-80">© {currentYear} Crunchyology. All rights reserved.</p>
          <p className="text-base mt-2 opacity-60">Made with 🌾 and lots of oats</p>
        </div>
      </div>
      
      {/* Custom scrollbar styles */}
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${COLORS.warmBeige};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${COLORS.golden};
          border-radius: 6px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${COLORS.oliveButton};
        }
      `}</style>
    </footer>
  );
};

export default Footer;