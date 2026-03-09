import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Truck, Ship, Globe, Shield, Clock, CheckCircle } from 'lucide-react';

const Transport = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const services = [
    {
      icon: Ship,
      title: "Transporte entre Islas",
      description: "Servicio especializado de transporte de caballos entre las Islas Canarias con todas las garantías de seguridad"
    },
    {
      icon: Globe,
      title: "Transporte Internacional",
      description: "Gestión completa de transporte internacional con toda la documentación y permisos necesarios"
    }
  ];

  const features = [
    { icon: Shield, text: "Máxima seguridad y confort" },
    { icon: Clock, text: "Disponibilidad 24/7" },
    { icon: CheckCircle, text: "Documentación completa" },
    { icon: Truck, text: "Vehículos especializados" }
  ];

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
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Servicio profesional de transporte de caballos entre islas y a nivel internacional. 
              Tu caballo viajará seguro y cómodo.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#4A7C59]/5 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <service.icon className="text-white" size={40} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#4A7C59] mb-4 relative">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative text-lg">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#4A7C59] to-[#C19A6B] group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="bg-gradient-to-br from-white to-[#F5E6D3]/50 rounded-2xl p-10 md:p-12 shadow-xl mb-12">
            <h3 className="text-3xl font-bold text-[#4A7C59] mb-8 text-center">
              ¿Por Qué Elegir Nuestro Servicio?
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <p className="text-gray-700 font-medium">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-[#4A7C59]">
              <h4 className="font-semibold text-[#4A7C59] mb-3 text-lg">
                Nuestro Compromiso
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Entendemos que el transporte de tu caballo es un momento delicado. Por eso trabajamos con 
                los mejores profesionales y vehículos especializados para garantizar que tu caballo llegue 
                a su destino en perfectas condiciones.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#4A7C59] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Vehículos equipados con sistemas de ventilación y climatización</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#4A7C59] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Personal experimentado en manejo y cuidado de caballos durante el transporte</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#4A7C59] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Seguimiento en tiempo real del transporte</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#4A7C59] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Gestión completa de documentación y permisos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#4A7C59] to-[#6B9F7C] rounded-2xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                ¿Necesitas Transportar Tu Caballo?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Llámanos al <strong>667 452 649</strong> para solicitar presupuesto sin compromiso
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
      </div>
    </section>
  );
};

export default Transport;
