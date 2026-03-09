import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Horses = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === mockData.additionalHorses.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? mockData.additionalHorses.length - 1 : prev - 1
    );
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
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Conoce a los protagonistas de Cuadras Chiguergue. Cada uno de nuestros caballos tiene su propia 
              personalidad y está cuidado con amor y profesionalidad.
            </p>
          </div>

          {/* Main Horses - Featured */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {mockData.horses.map((horse, index) => (
              <div
                key={horse.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={horse.image}
                    alt={horse.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Horse Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white text-center group-hover:scale-110 transition-transform duration-300">
                      {horse.name}
                    </h3>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Horses Gallery */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-[#4A7C59] mb-8 text-center">
              Más Caballos de Nuestra Cuadra
            </h3>
            
            <div className="relative">
              {/* Carousel */}
              <div className="overflow-hidden rounded-xl">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {mockData.additionalHorses.map((horse) => (
                    <div key={horse.id} className="min-w-full">
                      <img
                        src={horse.image}
                        alt={`Caballo ${horse.id}`}
                        className="w-full h-96 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
              >
                <ChevronLeft className="text-[#4A7C59] group-hover:-translate-x-1 transition-transform duration-300" size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
              >
                <ChevronRight className="text-[#4A7C59] group-hover:translate-x-1 transition-transform duration-300" size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {mockData.additionalHorses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-[#4A7C59] w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Horses;
