import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Excursions = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [selectedGallery, setSelectedGallery] = useState({});
  const [lightboxImage, setLightboxImage] = useState(null);

  const nextImage = (excursionId) => {
    const excursion = mockData.excursions.find(e => e.id === excursionId);
    const currentIndex = selectedGallery[excursionId] || 0;
    const nextIndex = (currentIndex + 1) % excursion.gallery.length;
    setSelectedGallery({ ...selectedGallery, [excursionId]: nextIndex });
  };

  const prevImage = (excursionId) => {
    const excursion = mockData.excursions.find(e => e.id === excursionId);
    const currentIndex = selectedGallery[excursionId] || 0;
    const prevIndex = currentIndex === 0 ? excursion.gallery.length - 1 : currentIndex - 1;
    setSelectedGallery({ ...selectedGallery, [excursionId]: prevIndex });
  };

  return (
    <section id="excursions" className="py-24 md:py-32 bg-white">
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
              Excursiones
            </h2>
            <div className="w-20 h-1 bg-[#C19A6B] mx-auto"></div>
          </div>

          {/* 2 Excursiones - Bien Organizadas */}
          <div className="grid md:grid-cols-2 gap-12">
            {mockData.excursions.map((excursion, index) => {
              const currentImageIndex = selectedGallery[excursion.id] || 0;
              return (
                <div
                  key={excursion.id}
                  className={`transition-all duration-1000 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Título */}
                  <h3 className="text-3xl font-bold text-[#4A7C59] mb-6 text-center">
                    {excursion.title}
                  </h3>
                  
                  {/* Galería Principal */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
                    <div className="relative h-96">
                      <img
                        src={excursion.gallery[currentImageIndex]}
                        alt={`${excursion.title} - ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => setLightboxImage(excursion.gallery[currentImageIndex])}
                      />

                      {/* Navigation Buttons */}
                      {excursion.gallery.length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage(excursion.id)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                          >
                            <ChevronLeft className="text-[#4A7C59]" size={24} />
                          </button>
                          <button
                            onClick={() => nextImage(excursion.id)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                          >
                            <ChevronRight className="text-[#4A7C59]" size={24} />
                          </button>
                        </>
                      )}

                      {/* Dots Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {excursion.gallery.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => setSelectedGallery({ ...selectedGallery, [excursion.id]: imgIndex })}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              currentImageIndex === imgIndex 
                                ? 'bg-white w-8' 
                                : 'bg-white/50 w-2 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-3 gap-3">
                    {excursion.gallery.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        onClick={() => setSelectedGallery({ ...selectedGallery, [excursion.id]: imgIndex })}
                        className={`relative h-24 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                          currentImageIndex === imgIndex 
                            ? 'ring-4 ring-[#4A7C59] scale-105' 
                            : 'opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${excursion.title} thumbnail ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
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

export default Excursions;
