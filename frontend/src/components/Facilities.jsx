import React from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';
import { MapPin, Trees, Sun } from 'lucide-react';

const Facilities = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const iconMap = {
    0: MapPin,
    1: Trees,
    2: Sun
  };

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
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Instalaciones diseñadas para el bienestar de caballos y jinetes en un entorno natural privilegiado
            </p>
          </div>

          {/* Features Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mockData.facilities.map((facility, index) => {
              const Icon = iconMap[index];
              return (
                <div
                  key={facility.id}
                  className={`group bg-gradient-to-br from-white to-[#F5E6D3]/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#4A7C59] mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Images Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Riding Arena */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-96">
                <img
                  src="https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80"
                  alt="Pista de equitación"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    Pista de Equitación
                  </h3>
                  <p className="text-white/90 text-lg">
                    Espacios profesionales para práctica y entrenamiento
                  </p>
                </div>
              </div>
            </div>

            {/* Panoramic View */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-96">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                  alt="Vista panorámica"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    Vista Panorámica
                  </h3>
                  <p className="text-white/90 text-lg">
                    Paisajes volcánicos únicos de Tenerife
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-br from-[#F5E6D3] to-white rounded-2xl p-10 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-[#4A7C59] mb-6 text-center">
                Un Entorno Natural Único
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg text-center mb-8">
                Nuestras instalaciones se encuentran en un enclave privilegiado de Tenerife, rodeadas del 
                paisaje volcánico característico de las Islas Canarias. Este entorno natural proporciona 
                el escenario perfecto para la práctica de la equitación.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-[#4A7C59] mb-2">5 hectáreas</div>
                  <p className="text-gray-600">de terreno natural</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-[#4A7C59] mb-2">2 pistas</div>
                  <p className="text-gray-600">profesionales</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-[#4A7C59] mb-2">20+ boxes</div>
                  <p className="text-gray-600">amplios y seguros</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
