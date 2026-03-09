import React from 'react';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mock';
import { Baby, User, Star, Trophy } from 'lucide-react';

const Classes = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const iconMap = {
    baby: Baby,
    user: User,
    star: Star,
    trophy: Trophy
  };

  return (
    <section id="classes" className="py-20 md:py-32 bg-white">
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
              Clases de Equitación
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos clases adaptadas a todas las edades y niveles. Desde principiantes que nunca han montado, 
              hasta jinetes experimentados que buscan perfeccionar su técnica.
            </p>
          </div>

          {/* Classes Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {mockData.classes.map((classItem, index) => {
              const Icon = iconMap[classItem.icon];
              return (
                <div
                  key={classItem.id}
                  className={`group relative bg-gradient-to-br from-white to-[#F5E6D3]/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4A7C59]/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#4A7C59] mb-3 relative">
                    {classItem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative">
                    {classItem.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#4A7C59] to-[#C19A6B] group-hover:w-full transition-all duration-500"></div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-[#4A7C59] to-[#6B9F7C] rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Clases Personalizadas para Todos los Niveles
            </h3>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Nuestros monitores certificados adaptan cada clase al ritmo y necesidades de cada alumno, 
              garantizando un aprendizaje seguro y progresivo en un ambiente profesional y acogedor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm opacity-90">Seguridad</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                <p className="text-3xl font-bold">Todos</p>
                <p className="text-sm opacity-90">Los Niveles</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                <p className="text-3xl font-bold">+500</p>
                <p className="text-sm opacity-90">Alumnos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
