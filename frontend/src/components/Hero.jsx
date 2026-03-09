import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Vive la experiencia de la
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C19A6B] to-[#F5E6D3] mt-2">
            equitación en Tenerife
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Descubre el mundo ecuestre en un entorno natural único rodeado del paisaje volcánico de las Islas Canarias
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-[#4A7C59] hover:bg-[#6B9F7C] text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            Reservar Clase
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Button>
          
          <Button
            onClick={() => scrollToSection('about')}
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#4A7C59] px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Conocer Más
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white" size={40} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
