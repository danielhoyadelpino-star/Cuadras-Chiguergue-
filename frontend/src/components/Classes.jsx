import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';
import { X, Phone } from 'lucide-react';

const Classes = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="classes" className="py-24 md:py-32 bg-gradient-to-b from-[#F5E6D3]/20 to-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#4A7C59] mb-4">
              Clases de Equitación
            </h2>
            <div className="w-20 h-1 bg-[#C19A6B] mx-auto"></div>
          </div>

          {/* Classes Grid - Simplificado */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {mockData.classes.map((classItem, index) => (
              <div
                key={classItem.id}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-[#4A7C59] mb-3 text-center">
                  {classItem.title}
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {classItem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Galería de Clases */}
          <div>
            <h3 className="text-3xl font-bold text-[#4A7C59] mb-8 text-center">
              Galería de Clases
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.classesGallery.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 h-64"
                >
                  <img
                    src={image}
                    alt={`Clase ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget de Contacto */}
          <div className="mt-16 bg-gradient-to-r from-[#4A7C59] to-[#6B9F7C] rounded-2xl p-10 text-center text-white shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone size={32} />
              <h3 className="text-4xl font-bold font-sans">
                683 53 21 43
              </h3>
            </div>
            <p className="text-xl mb-6 opacity-90">
              ¿Quieres reservar una clase?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:683532143"
                className="inline-block bg-white text-[#4A7C59] px-8 py-4 rounded-lg font-semibold hover:bg-[#F5E6D3] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Llamar Ahora
              </a>
              <a 
                href="https://wa.me/34683532143"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#C19A6B] transition-colors duration-300"
          >
            <X size={40} />
          </button>
          <img
            src={selectedImage}
            alt="Vista ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Classes;
