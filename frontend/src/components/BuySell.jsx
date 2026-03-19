import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Handshake, Search, FileCheck, Phone } from 'lucide-react';

const BuySell = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
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
    <section id="buysell" className="py-20 md:py-32 bg-white">
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
              Compraventa de Caballos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos un servicio profesional de compraventa de caballos. Te ayudamos a encontrar el caballo 
              ideal o a vender el tuyo con total garantía y transparencia.
            </p>
          </div>

          {/* Main Info */}
          <div className="bg-gradient-to-br from-[#F5E6D3] to-white rounded-2xl p-12 shadow-xl mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] rounded-full flex items-center justify-center">
                <Handshake className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-[#4A7C59] mb-6">
                Experiencia y Profesionalidad
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Con años de experiencia en el sector ecuestre, en Cuadras Chiguergue facilitamos la compraventa 
                de caballos con total profesionalidad. Trabajamos con una red de contactos que nos permite 
                encontrar el caballo perfecto para cada jinete.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ya sea que busques tu primer caballo, un compañero para competición, o necesites encontrar 
                un nuevo hogar para tu caballo, estamos aquí para ayudarte en todo el proceso.
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#4A7C59] text-center mb-12">
              Nuestro Proceso
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-[#C19A6B] to-[#F5E6D3] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
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

                  {/* Connector Line (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#4A7C59] to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-[#F5E6D3] border-l-4 border-[#4A7C59] rounded-lg p-6 mb-12">
            <h4 className="font-semibold text-[#4A7C59] mb-2 text-lg">
              Nota Importante
            </h4>
            <p className="text-gray-700">
              Por respeto a nuestros clientes y a los caballos en proceso de venta, no publicamos precios 
              ni fotografías en la web. Para información detallada sobre caballos disponibles, contacta 
              directamente con nosotros.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#4A7C59] to-[#6B9F7C] rounded-2xl p-10 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold text-[#4A7C59] mb-4">
              ¿Interesado en Comprar o Vender un Caballo?
            </h3>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone size={28} />
              <p className="text-xl text-white">
                <strong>667 452 649</strong>
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
