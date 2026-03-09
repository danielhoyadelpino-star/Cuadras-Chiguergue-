import React from 'react';
import { useInView } from 'react-intersection-observer';

const Map = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Google Maps embed URL for Diseminado Chiguergue 12, Santa Cruz de Tenerife
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.123456789!2d-16.5!3d28.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzAwLjAiTiAxNsKwMzAnMDAuMCJX!5e0!3m2!1ses!2ses!4v1234567890";

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F5E6D3]/30">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4A7C59] mb-6">
              Cómo Llegar
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Visítanos en nuestras instalaciones en el corazón de Tenerife
            </p>
          </div>

          {/* Map Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Cuadras Chiguergue"
                className="w-full h-full"
              />
            </div>
            
            {/* Overlay Info Card */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-md bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-[#4A7C59] mb-3">
                Cuadras Chiguergue
              </h3>
              <p className="text-gray-700 mb-4">
                Diseminado Chiguergue 12<br />
                Santa Cruz de Tenerife<br />
                España
              </p>
              <a
                href="https://www.google.com/maps/dir//Diseminado+Chiguergue+12,+Santa+Cruz+de+Tenerife"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4A7C59] hover:bg-[#6B9F7C] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Obtener Direcciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
