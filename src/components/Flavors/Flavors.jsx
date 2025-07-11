import React from 'react';
import { COLORS } from '../../constants/colors';

const FLAVORS = [
  {
    name: "Maple Pecan",
    description: "Sweet bourbon barrel-aged maple syrup meets buttery pecans in perfect harmony. Like fall morning vibes in a jar.",
    tagline: "The Sweet Comfort",
    emoji: "🍁",
    image: "maple-pecan-jar.jpg",
    color: "#D2691E",
    ingredients: ["Certified organic gluten free oats", "Organic maple syrup", "Cinnamon", "Pecan", "Pink salt"],
    layout: "hero"
  },
  {
    name: "Chai Spiced", 
    description: "Warm cinnamon, cardamom, and ginger dance together. It's like a cozy hug for your taste buds.",
    tagline: "The Cozy Adventure", 
    emoji: "🫖",
    image: "chai-granola-texture.jpg",
    color: "#8B4513",
    ingredients: ["Certified organic gluten free oats", "Hazelnuts", "Sliced almonds", "Hemp seeds", "Cinnamon", "Cardemon"]
  },
  {
    name: "Savory Lovers",
    description: "Who says granola has to be sweet? Herbs, seeds, and sea salt create something unexpectedly amazing. Perfect on soups!",
    tagline: "The Plot Twist",
    emoji: "🌿", 
    image: "savory-granola-soup.jpg",
    color: "#556B2F",
    ingredients: ["Certified organic gluten free oats", "Salted packing seeds", "Sunflower seeds", "Walnut", "Rosemary", "Olive oil"]
  },
  {
    name: "Banana Nut",
    description: "Crispy banana chips, toasted walnuts, and coconut flakes. It's like banana bread decided to get its life together.",
    tagline: "The Crowd Pleaser", 
    emoji: "🍌",
    image: "banana-nut-granola.jpg",
    color: "#FFD700",
    ingredients: ["Certified organic gluten free oats", "Real bananas!", "Toasted walnuts", "Coconut chips", "55% dark chocolate"]
  }
];

const Flavors = () => {
  const heroFlavor = FLAVORS.find(f => f.layout === "hero");
  const standardFlavors = FLAVORS.filter(f => !f.layout);

  return (
    <>
      {/* Enhanced Flavors Section */}
      <section id="flavors" className="py-32 px-4 relative overflow-hidden" style={{ backgroundColor: COLORS.warmBeige }}>
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-5 animate-[spin_20s_linear_infinite]"
            style={{ background: `conic-gradient(from 0deg, ${COLORS.golden}, ${COLORS.sageGreen}, ${COLORS.golden})` }} 
          />
          <div 
            className="absolute bottom-20 right-10 w-64 h-64 rounded-full opacity-10"
            style={{ background: `radial-gradient(circle, ${COLORS.golden}, transparent)` }} 
          />
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-5"
            style={{ 
              background: `radial-gradient(circle, ${COLORS.golden}, transparent)`,
              animation: 'float 8s ease-in-out infinite'
            }} 
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Enhanced Section Header */}
          <div className="text-center mb-24">
            <div className="inline-block">
              <h2 className="font-serif text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-none relative" 
                  style={{ 
                    color: COLORS.golden,
                    textShadow: '0 4px 8px rgba(0,0,0,0.1)' 
                  }}>
                Our Flavors
                {/* Decorative underline */}
                <div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 rounded-full"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${COLORS.golden}, transparent)`,
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                ></div>
              </h2>
            </div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: COLORS.charcoal }}>
              Four carefully crafted flavors, each with its own personality. 
              <span className="italic"> Which one will steal your heart?</span>
            </p>
          </div>
          
          {/* Enhanced HERO FLAVOR */}
          <div className="mb-24">
            <article className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02] max-w-5xl mx-auto" 
                     style={{ 
                       background: `linear-gradient(135deg, ${COLORS.white} 0%, #fefcf8 100%)`
                     }}>
              {/* Enhanced background pattern */}
              <div 
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700"
                style={{ 
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, ${heroFlavor.color}20 30px, ${heroFlavor.color}20 32px)`
                }}
              ></div>
              
              <div className="grid lg:grid-cols-5 gap-0 lg:items-stretch">
                {/* Enhanced Brand Image */}
                <div className="lg:col-span-3 relative h-96 lg:min-h-full overflow-hidden">
                  <img 
                    src={heroFlavor.image} 
                    alt={`${heroFlavor.name} granola jar with Crunchyology branding`}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                    loading="eager"
                  />
                  
                  {/* Enhanced brand badge */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-xl z-10 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-sm font-bold flex items-center gap-2" style={{ color: COLORS.golden }}>
                      🏷️ Original Recipe
                    </span>
                  </div>
                  
                  {/* Enhanced floating emoji */}
                  <div className="absolute bottom-6 right-6 text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 bg-white/95 backdrop-blur-sm rounded-2xl w-16 h-16 flex items-center justify-center shadow-xl z-10">
                    {heroFlavor.emoji}
                  </div>
                  
                  {/* Color accent overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></div>
                </div>
                
                {/* Enhanced Content */}
                <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg" 
                            style={{ 
                              backgroundColor: heroFlavor.color + '20', 
                              color: heroFlavor.color,
                              border: `2px solid ${heroFlavor.color}30`
                            }}>
                        Signature Flavor
                      </span>
                    </div>
                    
                    <h3 className="text-4xl lg:text-5xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300" style={{ color: COLORS.charcoal }}>
                      {heroFlavor.name}
                    </h3>
                    
                    <p className="text-xl italic mb-6" style={{ color: heroFlavor.color }}>
                      {heroFlavor.tagline}
                    </p>
                    
                    <p className="text-lg lg:text-xl leading-relaxed mb-8" style={{ color: COLORS.charcoal }}>
                      {heroFlavor.description}
                    </p>
                    
                    {/* Enhanced Ingredients */}
                    <div className="mb-8">
                      <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: COLORS.golden }}>
                        Key Ingredients
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {heroFlavor.ingredients.map((ingredient, i) => (
                          <span 
                            key={i}
                            className="px-4 py-2 rounded-2xl text-sm font-medium border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{ 
                              backgroundColor: heroFlavor.color + '15',
                              borderColor: heroFlavor.color + '30',
                              color: COLORS.charcoal
                            }}
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-1 rounded-full group-hover:w-16 transition-all duration-300" 
                        style={{ backgroundColor: heroFlavor.color }}
                      ></div>
                      <span className="text-sm italic font-medium" style={{ color: COLORS.golden }}>
                        Handcrafted with love
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          
          {/* Enhanced OTHER FLAVORS Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {standardFlavors.map((flavor, index) => (
              <article 
                key={flavor.name}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-3"
                style={{ 
                  background: `linear-gradient(135deg, ${COLORS.white} 0%, #fefcf8 100%)`,
                  animationDelay: `${index * 0.15}s`
                }}
              >
                {/* Enhanced background pattern */}
                <div 
                  className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity duration-500"
                  style={{ 
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, ${flavor.color}20 20px, ${flavor.color}20 22px)`
                  }}
                ></div>
                
                {/* Enhanced Images */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={flavor.image} 
                    alt={`${flavor.name} granola showing texture and style`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Enhanced floating emoji */}
                  <div className="absolute top-6 right-6 text-3xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 bg-white/95 backdrop-blur-sm rounded-2xl w-14 h-14 flex items-center justify-center shadow-xl">
                    {flavor.emoji}
                  </div>
                  
                  {/* Enhanced color accent bar */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-2 group-hover:h-3 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(90deg, ${flavor.color}, ${flavor.color}80, ${flavor.color})`
                    }}
                  ></div>
                  
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Enhanced Content */}
                <div className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300" style={{ color: COLORS.charcoal }}>
                      {flavor.name}
                    </h3>
                    
                    <p className="text-base italic mb-5" style={{ color: flavor.color }}>
                      {flavor.tagline}
                    </p>
                    
                    <p className="text-base leading-relaxed mb-8" style={{ color: COLORS.charcoal }}>
                      {flavor.description}
                    </p>
                    
                    {/* Enhanced Ingredients for Standard Cards */}
                    <div className="mb-8">
                      <h4 className="text-xs font-bold mb-4 uppercase tracking-wider" style={{ color: COLORS.golden }}>
                        Key Ingredients
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {flavor.ingredients.map((ingredient, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 rounded-xl text-xs font-medium border-2 transition-all duration-300 hover:scale-105"
                            style={{ 
                              backgroundColor: flavor.color + '15',
                              borderColor: flavor.color + '30',
                              color: COLORS.charcoal
                            }}
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <div 
                        className="w-8 h-1 rounded-full group-hover:w-12 transition-all duration-300" 
                        style={{ backgroundColor: flavor.color }}
                      ></div>
                      <span className="text-sm italic" style={{ color: COLORS.golden }}>
                        Handcrafted with love
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Enhanced Call-to-Action */}
          <div className="text-center mt-24">
            <div 
              className="inline-block p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.cream} 0%, #faf6f0 100%)`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6 hover:scale-110 transition-transform duration-300">🌾</div>
                <p className="text-3xl md:text-4xl mb-6 font-bold" style={{ color: COLORS.charcoal }}>
                  Can't decide? <span style={{ color: COLORS.golden }}>Try them all!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Decorative divider */}
      <div className="py-12 relative" style={{ backgroundColor: COLORS.warmBeige }}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-dashed" style={{ borderColor: COLORS.golden + '40' }}></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-8 text-4xl hover:scale-110 transition-transform duration-300" style={{ backgroundColor: COLORS.warmBeige }}>🥣</span>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(-50%) translateY(-50%); }
          50% { transform: translateY(-20px) translateX(-50%) translateY(-50%); }
        }
      `}</style>
    </>
  );
};

export default Flavors;