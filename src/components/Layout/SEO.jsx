import React from 'react';
import useSEO from '../../hooks/useSEO';

const SEO = ({ 
  title, 
  description, 
  image, 
  url,
  keywords
}) => {
  useSEO({
    title,
    description,
    image,
    url,
    keywords: keywords || "granola, handcrafted granola, lafayette colorado, farmers market, artisanal granola, local granola, colorado granola"
  });
  
  return null; // This component doesn't render anything
};

export default SEO;