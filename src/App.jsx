import React from 'react';
import SEO from './components/Layout/SEO';
import Header from './components/Layout/Header';
import Hero from './components/Hero/Hero';
import Story from './components/Story/Story';
import Reviews from './components/Reviews/Reviews';
import FindUs from './components/FindUs/FindUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Layout/Footer';
import { COLORS } from './constants/colors';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.cream, color: COLORS.charcoal }}>
      <SEO />
      <Header />
      <main>
        <Hero />
        <Story />
        <Reviews />
        <FindUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;