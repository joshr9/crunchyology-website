import { useEffect } from 'react';

const useSEO = ({ 
  title, 
  description, 
  keywords,
  image,
  url 
}) => {
  const siteTitle = "Crunchyology - Handcrafted Granola in Lafayette, Colorado";
  const defaultDescription = "Artisanal granola handcrafted with love in Lafayette, CO. Find us at Lafayette Farmers Market every Sunday.";
  
  useEffect(() => {
    // Update title
    document.title = title ? `${title} | Crunchyology` : siteTitle;
    
    // Update meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };
    
    // Basic meta tags
    updateMetaTag('description', description || defaultDescription);
    if (keywords) updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', title || siteTitle, true);
    updateMetaTag('og:description', description || defaultDescription, true);
    updateMetaTag('og:image', image || 'https://crunchyology.com/granola_bowl.jpg', true);
    updateMetaTag('og:url', url || 'https://crunchyology.com', true);
    updateMetaTag('og:type', 'website', true);
    
    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title || siteTitle, true);
    updateMetaTag('twitter:description', description || defaultDescription, true);
    updateMetaTag('twitter:image', image || 'https://crunchyology.com/granola_bowl.jpg', true);
    
    // Structured data
    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    
    scriptElement.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Crunchyology",
      "image": [
        "https://crunchyology.com/Crunchy.svg",
        "https://crunchyology.com/granola_bowl.jpg"
      ],
      "description": "Handcrafted artisanal granola made with love in Lafayette, Colorado.",
      "url": "https://crunchyology.com",
      "email": "crunchyology@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Public Rd between Cleveland St and Geneseo St",
        "addressLocality": "Lafayette",
        "addressRegion": "CO",
        "postalCode": "80026",
        "addressCountry": "US"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "13:00"
      }
    });
  }, [title, description, keywords, image, url]);
};

export default useSEO;