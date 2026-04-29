import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';
import { X } from 'lucide-react';

const Horses = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '0px 0px -100px 0px'
  });

  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section id="horses" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#4A7C59] mb-4">
              Nuestros Caballos
            </h2>
            <div className="w-20 h-1 bg-[#C19A6B] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce a los protagonistas de Cuadras Chiguergue
            </p>
          </div>

          {/* Caballos Grid - UNA FOTO POR CABALLO */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
            {mockData.horses.map((horse, index) => (
              <div
                key={horse.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setLightboxImage(horse.image)}
              >
                <div className="relative h-80">
                  <img
                    src={horse.image}
                    alt={horse.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Horse Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white text-center group-hover:scale-110 transition-transform duration-300">
                      {horse.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Galería General de Caballos */}
          <div className="bg-gradient-to-br from-[#F5E6D3]/30 to-white rounded-2xl p-10 shadow-xl">
            <h3 className="text-4xl font-bold text-[#4A7C59] mb-10 text-center">
              Galería General de Caballos
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.generalHorsesGallery.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setLightboxImage(image)}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 h-72"
                >
                  <img
                    src={image}
                    alt={`Caballo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#C19A6B] transition-colors duration-300"
          >
            <X size={40} />
          </button>
          <img
            src={lightboxImage}
            alt="Vista ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Horses;
