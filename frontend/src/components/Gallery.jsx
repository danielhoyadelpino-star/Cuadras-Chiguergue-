import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';
import { X } from 'lucide-react';

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('todos');

  const categories = ['todos', 'caballos', 'instalaciones', 'clases'];

  const filteredGallery = filter === 'todos' 
    ? mockData.gallery 
    : mockData.gallery.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-[#F5E6D3]/30 to-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A7C59] mb-6">
              Galería
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explora momentos especiales capturados en Cuadras Chiguergue
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 capitalize ${
                  filter === category
                    ? 'bg-[#4A7C59] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-[#F5E6D3] shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Galería ${item.id}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-semibold text-lg capitalize transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/30 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-[#4A7C59] mb-8 text-center">
              Vídeos
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Placeholder for videos */}
              <div className="relative h-64 bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C4] rounded-xl flex items-center justify-center overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80')] bg-cover bg-center opacity-50"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#4A7C59] border-b-8 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-[#4A7C59] font-semibold">Vídeo de presentación</p>
                </div>
              </div>

              <div className="relative h-64 bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C4] rounded-xl flex items-center justify-center overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606654049427-f1e3e1d0a749?w=800&q=80')] bg-cover bg-center opacity-50"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#4A7C59] border-b-8 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-[#4A7C59] font-semibold">Excursiones</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              * Los videos se pueden añadir y actualizar fácilmente
            </p>
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
            src={selectedImage.image}
            alt="Vista ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
