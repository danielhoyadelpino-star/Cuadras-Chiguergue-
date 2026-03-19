import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, ChevronUp } from 'lucide-react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/34683532143"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <MessageCircle size={24} className="transition-transform duration-300 group-hover:rotate-12" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
      </a>

      {/* Instagram Button */}
      <a
        href="https://instagram.com/centro.hipico.chiguergue"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:shadow-2xl text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <Instagram size={24} className="transition-transform duration-300 group-hover:rotate-12" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Instagram
        </span>
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`group relative bg-[#4A7C59] hover:bg-[#6B9F7C] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ChevronUp size={24} className="transition-transform duration-300 group-hover:-translate-y-1" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Subir
        </span>
      </button>
    </div>
  );
};

export default FloatingButtons;
