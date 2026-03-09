import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Sobre Nosotros', id: 'about' },
    { label: 'Clases', id: 'classes' },
    { label: 'Caballos', id: 'horses' },
    { label: 'Excursiones', id: 'excursions' },
    { label: 'Galería', id: 'gallery' },
    { label: 'Contacto', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer group"
          >
            <h1 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-[#4A7C59]' : 'text-white'
            } group-hover:text-[#C19A6B]`}>
              Cuadras Chiguergue
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#C19A6B] relative group ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C19A6B] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#4A7C59] hover:bg-[#6B9F7C] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Reservar Clase
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-700' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-3 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-6 py-3 text-gray-700 hover:bg-[#F5E6D3] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 pt-2">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-[#4A7C59] hover:bg-[#6B9F7C] text-white"
              >
                Reservar Clase
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
