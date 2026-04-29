import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Search, FileCheck, Handshake } from 'lucide-react';

const BuySell = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '0px 0px -100px 0px'
  });

  const steps = [
    {
      icon: Phone,
      title: "Contacto Inicial",
      description: "Cuéntanos qué tipo de caballo buscas o quieres vender"
    },
    {
      icon: Search,
      title: "Búsqueda Personalizada",
      description: "Encontramos el caballo perfecto según tus necesidades"
    },
    {
      icon: FileCheck,
      title: "Evaluación Profesional",
      description: "Asesoramiento completo sobre características y documentación"
    },
    {
      icon: Handshake,
      title: "Cierre Seguro",
      description: "Gestión completa de la transacción de forma profesional"
    }
  ];

  return (
    <section id="buysell" className="py-24 md:py-32 bg-white">
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
              Compraventa de Caballos
            </h2>
            <div className="w-20 h-1 bg-[#C19A6B] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos un servicio profesional de compraventa de caballos con total garantía y transparencia
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-white to-[#F5E6D3]/20 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-[#C19A6B] to-[#4A7C59] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] flex items-center justify-center">
                  <step.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h4 className="text-xl font-semibold text-[#4A7C59] mb-3 text-center">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Widget de Contacto */}
          <div className="bg-gradient-to-r from-[#4A7C59] to-[#6B9F7C] rounded-2xl p-10 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              ¿Interesado en Comprar o Vender un Caballo?
            </h3>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone size={28} />
              <p className="text-3xl font-bold font-sans">
                667 452 649
              </p>
            </div>
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

export default BuySell;
