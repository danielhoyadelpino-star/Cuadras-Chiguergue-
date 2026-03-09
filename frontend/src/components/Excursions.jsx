import React from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';
import { Mountain, Sunset, Trees, MapPin } from 'lucide-react';

const Excursions = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="excursions" className="py-20 md:py-32 bg-white">
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
              Excursiones a Caballo
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Descubre la belleza natural de Tenerife a caballo. Rutas guiadas por paisajes volcánicos únicos, 
              bosques y senderos con vistas espectaculares.
            </p>
          </div>

          {/* Excursions Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {mockData.excursions.map((excursion, index) => (
              <div
                key={excursion.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={excursion.image}
                    alt={excursion.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      {excursion.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#C19A6B] group-hover:w-20 transition-all duration-300"></div>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                    <MapPin className="text-white" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#F5E6D3] to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] rounded-full flex items-center justify-center mb-6">
                <Mountain className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-[#4A7C59] mb-3">Rutas de Montaña</h4>
              <p className="text-gray-700 leading-relaxed">
                Explora los senderos volcánicos de Tenerife con vistas panorámicas únicas del Teide y el océano Atlántico.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F5E6D3] to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] rounded-full flex items-center justify-center mb-6">
                <Trees className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-[#4A7C59] mb-3">Paseos por el Bosque</h4>
              <p className="text-gray-700 leading-relaxed">
                Disfruta de la tranquilidad del bosque canario mientras montas a caballo por caminos naturales.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F5E6D3] to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] rounded-full flex items-center justify-center mb-6">
                <Sunset className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-[#4A7C59] mb-3">Atardeceres Mágicos</h4>
              <p className="text-gray-700 leading-relaxed">
                Vive la experiencia única de cabalgar al atardecer con los colores dorados del sol sobre el paisaje.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-gradient-to-r from-[#4A7C59] to-[#6B9F7C] rounded-2xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para Tu Próxima Aventura?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Reserva tu excursión a caballo y descubre Tenerife desde una perspectiva única
              </p>
              <button className="bg-white text-[#4A7C59] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F5E6D3] transition-all duration-300 hover:scale-105 shadow-lg">
                Reservar Excursión
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excursions;
