import React from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';
import { Phone, Shield, FileCheck, Truck, Clock, CheckCircle } from 'lucide-react';

const Transport = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="transport" className="py-20 md:py-32 bg-gradient-to-b from-[#F5E6D3]/30 to-white">
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
              Transporte de Caballos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Galería de Vehículos - 4 imágenes */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#4A7C59] mb-6">
                Nuestros Vehículos
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {mockData.transportVehicles.map((vehicle, index) => (
                  <div
                    key={vehicle.id}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-semibold text-sm">
                          {vehicle.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Información Breve */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#4A7C59] mb-6">
                  Servicios de Transporte
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Transporte entre islas
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Transporte internacional
                </p>

                <div className="space-y-3">
                  {[
                    { icon: Shield, text: 'Seguridad' },
                    { icon: FileCheck, text: 'Documentación' },
                    { icon: Truck, text: 'Vehículos especializados' },
                    { icon: Clock, text: 'Disponibilidad' },
                    { icon: CheckCircle, text: 'Compromiso' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-[#4A7C59]/10 flex items-center justify-center">
                        <item.icon className="text-[#4A7C59]" size={16} />
                      </div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Widget de Contacto */}
          <div className="bg-gradient-to-r from-[#4A7C59] to-[#6B9F7C] rounded-2xl p-10 text-center text-white shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone size={32} />
              <h3 className="text-3xl font-bold">
                667 452 649
              </h3>
            </div>
            <p className="text-xl mb-6 opacity-90">
              ¿Necesitas transportar tu caballo?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:667452649"
                className="inline-block bg-white text-[#4A7C59] px-8 py-4 rounded-lg font-semibold hover:bg-[#F5E6D3] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Llamar Ahora
              </a>
              <a 
                href="https://wa.me/34667452649"
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
    </section>
  );
};

export default Transport;
