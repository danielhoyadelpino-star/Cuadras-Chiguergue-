import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';
import { X } from 'lucide-react';

const Classes = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="classes" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A7C59] mb-6">
              Clases de Equitación
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto"></div>
          </div>

          {/* Classes Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {mockData.classes.map((classItem, index) => (
              <div
                key={classItem.id}
                className={`group bg-gradient-to-br from-white to-[#F5E6D3]/30 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-[#4A7C59] mb-3">
                  {classItem.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {classItem.description}
                </p>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-[#4A7C59] to-transparent group-hover:from-[#C19A6B] transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Classes Gallery */}
          <div className="mt-16">
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
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
