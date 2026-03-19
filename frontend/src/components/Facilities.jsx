import React from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';

const Facilities = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="facilities" className="py-20 md:py-32 bg-white">
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
              Nuestras Instalaciones
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto"></div>
          </div>

          {/* Images Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Riding Arena */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-96">
                <img
                  src={mockData.facilities.images.track}
                  alt="Pista de equitación"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    Pista de Equitación
                  </h3>
                </div>
              </div>
            </div>

            {/* Panoramic View */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-96">
                <img
                  src={mockData.facilities.images.panoramic}
                  alt="Vista panorámica"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    Vista Panorámica
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-gradient-to-br from-[#F5E6D3] to-white rounded-2xl p-10 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-[#4A7C59] mb-2">Ubicación Única</h4>
                <p className="text-gray-600">En el corazón de Tenerife</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-[#4A7C59] mb-2">Entorno Natural</h4>
                <p className="text-gray-600">Rodeados de naturaleza</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-[#4A7C59] mb-2">Instalaciones</h4>
                <p className="text-gray-600">Profesionales y seguras</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl font-bold text-[#4A7C59] mb-2">{mockData.facilities.tracks}</div>
                <p className="text-gray-600">profesionales</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl font-bold text-[#4A7C59] mb-2">{mockData.facilities.boxes}</div>
                <p className="text-gray-600">amplios y seguros</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
