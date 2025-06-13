import React, { useState, useEffect } from 'react';
import { COLORS, NAV_LINKS } from '../../constants/colors';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['story', 'reviews', 'find-us', 'contact'];
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-lg shadow-lg' : ''
      }`}
      style={{ backgroundColor: scrolled ? COLORS.sageGreen + 'EE' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className={`transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Crunchyology Home"
          >
            <img 
              src="Crunchy.svg" 
              alt="Crunchyology" 
              className="h-10 md:h-12" 
              width="48"
              height="48"
            />
          </a>
          
          <div className={`flex space-x-4 md:space-x-8 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
            {NAV_LINKS.map(link => (
              <a 
                key={link.href} 
                href={link.href}
                className={`text-sm md:text-base text-white font-medium hover:text-golden transition-colors ${
                  activeSection === link.href.slice(1) ? 'text-golden' : ''
                }`}
                style={{ 
                  color: activeSection === link.href.slice(1) ? COLORS.golden : COLORS.white 
                }}
                aria-label={link.text}
              >
                <span className="hidden sm:inline">{link.text}</span>
                <span className="sm:hidden text-lg" aria-hidden="true">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;