import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Award, MapPin } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const features = [
    {
      icon: Heart,
      title: "Amor por los Caballos",
      description: "Nuestra pasión es cuidar y entrenar a nuestros caballos con dedicación y respeto"
    },
    {
      icon: Users,
      title: "Monitores Experimentados",
      description: "Equipo profesional con años de experiencia en enseñanza ecuestre"
    },
    {
      icon: Award,
      title: "Instalaciones Profesionales",
      description: "Pistas y espacios diseñados para una práctica segura y efectiva"
    },
    {
      icon: MapPin,
      title: "Ubicación Privilegiada",
      description: "En el corazón de Tenerife, rodeados de naturaleza volcánica única"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F5E6D3]/30">
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
              Sobre Nosotros
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Cuadras Chiguergue es un centro ecuestre ubicado en Tenerife que ofrece clases de equitación 
              para niños y adultos en un entorno natural y familiar.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4A7C59] to-[#C19A6B] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80"
                alt="Cuadras Chiguergue"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#4A7C59]">
                Nuestra Filosofía
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Contamos con monitores experimentados que enseñan a montar a caballo de forma segura y progresiva, 
                adaptándose a todos los niveles. Desde niños que dan sus primeros pasos en el mundo ecuestre, 
                hasta adultos que buscan perfeccionar su técnica.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En nuestro centro, cada alumno recibe atención personalizada en un ambiente familiar donde el 
                bienestar del caballo y del jinete son nuestra prioridad. Creemos que la equitación es mucho más 
                que un deporte: es una conexión especial con estos magníficos animales.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#4A7C59]">+15 años</p>
                  <p className="text-gray-600">de experiencia</p>
                </div>
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
        </div>
      </div>
    </section>
  );
};

export default About;
