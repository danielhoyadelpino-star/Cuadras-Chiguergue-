import React from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';
import { Phone, Shield, FileCheck, Truck, Clock, CheckCircle } from 'lucide-react';

const Transport = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const services = [
    "Transporte entre islas",
    "Transporte internacional"
  ];

  const features = [
    { icon: Shield, text: 'Seguridad' },
    { icon: FileCheck, text: 'Documentación' },
    { icon: Truck, text: 'Vehículos especializados' },
    { icon: Clock, text: 'Disponibilidad' },
    { icon: CheckCircle, text: 'Compromiso' }
  ];

  return (
    <section id="transport" className="py-24 md:py-32 bg-gradient-to-b from-[#F5E6D3]/20 to-white">
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
              Transporte de Caballos
            </h2>
            <div className="w-20 h-1 bg-[#C19A6B] mx-auto"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Galería de Vehículos */}
            <div>
              <h3 className="text-2xl font-bold text-[#4A7C59] mb-6">
                Nuestros Vehículos
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {mockData.transportVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-48">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
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

            {/* Información */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#4A7C59] mb-6">
                Servicios
              </h3>
              
              {/* Servicios */}
              <div className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#4A7C59] rounded-full"></div>
                    <p className="text-gray-700 text-lg">{service}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-3">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-[#4A7C59]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-[#4A7C59]" size={18} />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Widget de Contacto */}
          <div className="bg-gradient-to-r from-[#4A7C59] to-[#6B9F7C] rounded-2xl p-10 text-center text-white shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone size={32} />
              <h3 className="text-4xl font-bold font-sans">
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
