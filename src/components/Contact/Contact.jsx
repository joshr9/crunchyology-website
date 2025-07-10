import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { COLORS } from '../../constants/colors';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xblonabq', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Oops! There was a problem sending your message. Please try again.');
      }
    } catch  {
      alert('Oops! There was a problem sending your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden" style={{ backgroundColor: COLORS.sageGreen }}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-5 animate-[spin_20s_linear_infinite]"
          style={{ background: `conic-gradient(from 0deg, ${COLORS.golden}, white, ${COLORS.golden})` }} 
        />
        <div 
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-10"
          style={{ background: `radial-gradient(circle, white, transparent)` }} 
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-24">
          <div className="inline-block">
            <h2 className="font-serif text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-none relative text-white" 
                style={{ 
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                }}>
              Contact Us
              {/* Decorative underline */}
              <div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 rounded-full"
                style={{ 
                  background: `linear-gradient(90deg, transparent, white, transparent)`,
                  animation: 'pulse 2s ease-in-out infinite'
                }}
              ></div>
            </h2>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you! Drop us a line below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="p-10 rounded-3xl shadow-2xl mb-8 text-center hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]" style={{ backgroundColor: COLORS.white }}>
            <div 
              className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ backgroundColor: COLORS.golden + '20' }}
            >
              <Mail className="w-10 h-10" style={{ color: COLORS.golden }} />
            </div>
            <p className="text-xl leading-relaxed" style={{ color: COLORS.charcoal }}>
              Send us a message at{' '}
              <a 
                href="mailto:crunchyology@gmail.com" 
                className="font-bold hover:underline inline-flex items-center gap-2 transition-all duration-300" 
                style={{ color: COLORS.golden }}
              >
                crunchyology@gmail.com
              </a>{' '}
              or use the form below.
            </p>
          </div>
          
          <div className="p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500" 
               style={{ 
                 background: `linear-gradient(135deg, ${COLORS.warmBeige} 0%, #f8f5f0 100%)`
               }}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group">
                <label 
                  htmlFor="name"
                  className="block font-bold mb-3 text-xl transition-colors" 
                  style={{ color: COLORS.golden }}
                >
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-5 border-2 rounded-2xl text-lg bg-white/90 transition-all duration-300 focus:shadow-lg focus:scale-[1.02] outline-none"
                  style={{ borderColor: COLORS.golden + '40' }}
                  placeholder="Your name" 
                  required 
                />
              </div>
              
              <div className="group">
                <label 
                  htmlFor="email"
                  className="block font-bold mb-3 text-xl" 
                  style={{ color: COLORS.golden }}
                >
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-5 border-2 rounded-2xl text-lg bg-white/90 transition-all duration-300 focus:shadow-lg focus:scale-[1.02] outline-none"
                  style={{ borderColor: COLORS.golden + '40' }}
                  placeholder="your.email@example.com" 
                  required 
                />
              </div>
              
              <div className="group">
                <label 
                  htmlFor="message"
                  className="block font-bold mb-3 text-xl" 
                  style={{ color: COLORS.golden }}
                >
                  Message
                </label>
                <textarea 
                  rows="6" 
                  id="message"
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-5 border-2 rounded-2xl text-lg bg-white/90 resize-none transition-all duration-300 focus:shadow-lg focus:scale-[1.02] outline-none"
                  style={{ borderColor: COLORS.golden + '40' }}
                  placeholder="Tell us what's on your mind..."
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                {submitted ? (
                  <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm">
                    <p className="text-xl font-bold" style={{ color: COLORS.golden }}>
                      Thanks for your message! We'll get back to you soon. 🌾
                    </p>
                  </div>
                ) : (
                  <button 
                    type="submit"
                    disabled={submitting}
                    className="group text-white font-bold py-5 px-12 rounded-2xl text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${COLORS.oliveButton} 0%, ${COLORS.sageGreen} 100%)`
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">
                      {submitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Contact;