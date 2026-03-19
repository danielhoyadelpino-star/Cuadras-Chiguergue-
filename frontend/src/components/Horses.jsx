import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Horses = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [selectedGallery, setSelectedGallery] = useState({});
  const [lightboxImage, setLightboxImage] = useState(null);

  const nextImage = (horseId) => {
    const horse = mockData.horses.find(h => h.id === horseId);
    const currentIndex = selectedGallery[horseId] || 0;
    const nextIndex = (currentIndex + 1) % horse.gallery.length;
    setSelectedGallery({ ...selectedGallery, [horseId]: nextIndex });
  };

  const prevImage = (horseId) => {
    const horse = mockData.horses.find(h => h.id === horseId);
    const currentIndex = selectedGallery[horseId] || 0;
    const prevIndex = currentIndex === 0 ? horse.gallery.length - 1 : currentIndex - 1;
    setSelectedGallery({ ...selectedGallery, [horseId]: prevIndex });
  };

  return (
    <section id="horses" className="py-20 md:py-32 bg-gradient-to-b from-[#F5E6D3]/30 to-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A7C59] mb-6">
              Nuestros Caballos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Conoce nuestros caballos
            </p>
          </div>

          {/* 5 Bloques Independientes - Un Caballo por Bloque */}
          <div className="space-y-16 mb-20">
            {mockData.horses.map((horse, index) => {
              const currentImageIndex = selectedGallery[horse.id] || 0;
              return (
                <div
                  key={horse.id}
                  className={`bg-white rounded-2xl p-8 shadow-xl transition-all duration-1000 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-3xl font-bold text-[#4A7C59] mb-6 text-center">
                    {horse.name}
                  </h3>
                  
                  {/* Galería del caballo individual */}
                  <div className="relative">
                    <div className="relative h-96 overflow-hidden rounded-xl">
                      <img
                        src={horse.gallery[currentImageIndex]}
                        alt={`${horse.name} - ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => setLightboxImage(horse.gallery[currentImageIndex])}
                      />
                    </div>

                    {/* Navigation Buttons */}
                    {horse.gallery.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(horse.id)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
                        >
                          <ChevronLeft className="text-[#4A7C59] group-hover:-translate-x-1 transition-transform duration-300" size={24} />
                        </button>
                        <button
                          onClick={() => nextImage(horse.id)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
                        >
                          <ChevronRight className="text-[#4A7C59] group-hover:translate-x-1 transition-transform duration-300" size={24} />
                        </button>
                      </>
                    )}

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                      {horse.gallery.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => setSelectedGallery({ ...selectedGallery, [horse.id]: imgIndex })}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            currentImageIndex === imgIndex 
                              ? 'bg-[#4A7C59] w-8' 
                              : 'bg-gray-300 w-2 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {horse.gallery.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          onClick={() => setSelectedGallery({ ...selectedGallery, [horse.id]: imgIndex })}
                          className={`relative h-24 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                            currentImageIndex === imgIndex 
                              ? 'ring-4 ring-[#4A7C59] scale-105' 
                              : 'opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${horse.name} thumbnail ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Galería General de Caballos */}
          <div className="bg-gradient-to-br from-[#F5E6D3] to-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-[#4A7C59] mb-8 text-center">
              Galería General de Caballos
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.generalHorsesGallery.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setLightboxImage(image)}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 h-64"
                >
                  <img
                    src={image}
                    alt={`Caballo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
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
