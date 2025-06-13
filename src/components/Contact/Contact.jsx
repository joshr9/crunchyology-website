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
    <section id="contact" className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: COLORS.sageGreen }}>
      {/* Background decoration */}
      <div 
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: `radial-gradient(circle, ${COLORS.golden}, transparent)` }} 
      />
      
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
              <a 
                href="mailto:crunchyology@gmail.com" 
                className="font-bold hover:underline inline-flex items-center gap-2" 
                style={{ color: COLORS.golden }}
              >
                crunchyology@gmail.com
              </a>{' '}
              or use the form below.
            </p>
          </div>
          
          <div className="p-10 rounded-3xl shadow-2xl" style={{ backgroundColor: COLORS.warmBeige }}>
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
                  className="w-full p-5 border-2 rounded-2xl text-lg bg-white/90 transition-all focus:shadow-lg outline-none"
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
                  className="w-full p-5 border-2 rounded-2xl text-lg bg-white/90 transition-all focus:shadow-lg outline-none"
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
                  className="w-full p-5 border-2 rounded-2xl text-lg bg-white/90 resize-none transition-all focus:shadow-lg outline-none"
                  style={{ borderColor: COLORS.golden + '40' }}
                  placeholder="Tell us what's on your mind..."
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                {submitted ? (
                  <p className="text-xl font-bold" style={{ color: COLORS.golden }}>
                    Thanks for your message! We'll get back to you soon. 🌾
                  </p>
                ) : (
                  <button 
                    type="submit"
                    disabled={submitting}
                    className="text-white font-bold py-5 px-12 rounded-full text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: COLORS.oliveButton }}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;