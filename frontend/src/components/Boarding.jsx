import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, Shield, Home, Utensils, Phone } from 'lucide-react';

const Boarding = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '0px 0px -100px 0px'
  });

  const features = [
    {
      icon: Heart,
      title: "Cuidado Profesional",
      description: "Atención personalizada y veterinaria disponible para el bienestar de tu caballo"
    },
    {
      icon: Shield,
      title: "Instalaciones Seguras",
      description: "Boxes amplios y seguros con ventilación natural y luz adecuada"
    },
    {
      icon: Home,
      title: "Entorno Natural",
      description: "Espacios al aire libre para que tu caballo disfrute de libertad y naturaleza"
    },
    {
      icon: Utensils,
      title: "Alimentación de Calidad",
      description: "Dieta equilibrada y adaptada a las necesidades de cada caballo"
    }
  ];

  return (
    <section id="boarding" className="py-20 md:py-32 bg-gradient-to-b from-[#F5E6D3]/30 to-white">
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
              Pensión de Caballos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos un servicio completo de pensión para tu caballo en un entorno seguro, natural y familiar. 
              Tu caballo estará en las mejores manos.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative group order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4A7C59] to-[#C19A6B] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              <img
                src="/images/pension.JPG"
                alt="Pensión de Caballos"
                className="relative rounded-2xl shadow-2xl w-full h-[450px] object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Text */}
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-3xl font-bold text-[#4A7C59]">
                Un Hogar para Tu Caballo
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                En Cuadras Chiguergue entendemos que tu caballo es parte de tu familia. Por eso ofrecemos 
                un servicio de pensión completo donde tu caballo recibirá el mejor cuidado profesional.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nuestras instalaciones cuentan con boxes individuales espaciosos, paddocks al aire libre, 
                y acceso a pistas de trabajo. El entorno natural de Tenerife proporciona el clima perfecto 
                para el bienestar equino durante todo el año.
              </p>
              <div className="bg-[#F5E6D3] rounded-xl p-6 border-l-4 border-[#4A7C59]">
                <p className="text-gray-800 font-semibold mb-2">
                  Servicio de pensión completa incluye:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#4A7C59] rounded-full"></div>
                    Boxes individuales con cama diaria
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#4A7C59] rounded-full"></div>
                    Alimentación completa y personalizada
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#4A7C59] rounded-full"></div>
                    Limpieza diaria de boxes y paddocks
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#4A7C59] rounded-full"></div>
                    Supervisión continua del estado del caballo
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h4 className="text-lg font-semibold text-[#4A7C59] mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#4A7C59] to-[#6B9F7C] rounded-2xl p-10 text-white shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone size={32} />
              <h3 className="text-4xl font-bold font-sans">667 452 649</h3>
            </div>
            <p className="text-xl mb-6 opacity-90">
              ¿Necesitas Pensión para Tu Caballo?
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

export default Boarding;
