import React from 'react';
import { Phone, Mail, MapPin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Cuadras Chiguergue</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Centro ecuestre en Tenerife dedicado a la enseñanza de equitación y el cuidado de caballos.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group cursor-pointer">
                <Phone size={18} className="transition-transform duration-300 group-hover:scale-110" />
                <a href="tel:683532143" className="text-sm hover:text-[#F5E6D3] transition-colors duration-300 font-sans">
                  683 53 21 43
                </a>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <Phone size={18} className="transition-transform duration-300 group-hover:scale-110" />
                <a href="tel:667452649" className="text-sm hover:text-[#F5E6D3] transition-colors duration-300 font-sans">
                  667 452 649
                </a>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <Mail size={18} className="transition-transform duration-300 group-hover:scale-110" />
                <a href="mailto:centrohipicochiguergue@gmail.com" className="text-sm hover:text-[#F5E6D3] transition-colors duration-300 break-all">
                  centrohipicochiguergue@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Ubicación</h4>
            <div className="flex items-start gap-3 group cursor-pointer">
              <MapPin size={18} className="mt-1 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
              <p className="text-sm leading-relaxed hover:text-[#F5E6D3] transition-colors duration-300">
                Diseminado Chiguergue 12<br />
                Santa Cruz de Tenerife<br />
                España
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Síguenos</h4>
            <a 
              href="https://instagram.com/centro.hipico.chiguergue" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group cursor-pointer hover:text-[#F5E6D3] transition-colors duration-300"
            >
              <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                <Instagram size={20} />
              </div>
              <span className="text-sm">@centro.hipico.chiguergue</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80 flex items-center gap-2">
              © {currentYear} Cuadras Chiguergue. Todos los derechos reservados. Hecho con <Heart size={16} className="text-red-400 fill-current" />
            </p>
            <div className="flex gap-6 text-sm text-white/80">
              <button className="hover:text-white transition-colors duration-300">
                Política de Privacidad
              </button>
              <button className="hover:text-white transition-colors duration-300">
                Aviso Legal
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
