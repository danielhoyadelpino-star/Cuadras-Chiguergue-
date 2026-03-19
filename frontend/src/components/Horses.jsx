import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Horses = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
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

          {/* Caballos Individuales */}
          <div className="space-y-20 mb-24">
            {mockData.horses.map((horse, index) => {
              const currentImageIndex = selectedGallery[horse.id] || 0;
              return (
                <div
                  key={horse.id}
                  className={`transition-all duration-1000 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Nombre del Caballo */}
                  <h3 className="text-4xl font-bold text-[#4A7C59] mb-8 text-center">
                    {horse.name}
                  </h3>
                  
                  {/* Galería Principal */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
                    <div className="relative h-[500px]">
                      <img
                        src={horse.gallery[currentImageIndex]}
                        alt={`${horse.name} - ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => setLightboxImage(horse.gallery[currentImageIndex])}
                      />
                      
                      {/* Navigation Buttons */}
                      {horse.gallery.length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage(horse.id)}
                            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                          >
                            <ChevronLeft className="text-[#4A7C59]" size={28} />
                          </button>
                          <button
                            onClick={() => nextImage(horse.id)}
                            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                          >
                            <ChevronRight className="text-[#4A7C59]" size={28} />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                      {horse.gallery.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => setSelectedGallery({ ...selectedGallery, [horse.id]: imgIndex })}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            currentImageIndex === imgIndex 
                              ? 'bg-white w-8' 
                              : 'bg-white/50 w-2 hover:bg-white/75'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {horse.gallery.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        onClick={() => setSelectedGallery({ ...selectedGallery, [horse.id]: imgIndex })}
                        className={`relative h-32 overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
                          currentImageIndex === imgIndex 
                            ? 'ring-4 ring-[#4A7C59] scale-105 shadow-xl' 
                            : 'opacity-60 hover:opacity-100 hover:scale-105'
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
              );
            })}
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
