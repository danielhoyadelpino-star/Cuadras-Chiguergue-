import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { mockData } from '../data/mock';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - user needs to set these up
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'info@cuadraschiguergue.com'
        },
        publicKey
      );

      setSubmitted(true);
      toast.success('¡Mensaje enviado con éxito! Te contactaremos pronto.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o llámanos directamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
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
              Contacto
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C19A6B] to-[#4A7C59] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-[#4A7C59] mb-8">
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  {/* Main Phone */}
                  <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-[#F5E6D3] to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Teléfono Principal</p>
                      <a href="tel:683532143" className="text-xl font-semibold text-[#4A7C59] hover:text-[#C19A6B] transition-colors duration-300 font-sans">
                        683 53 21 43
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Clases y consultas generales</p>
                    </div>
                  </div>

                  {/* Secondary Phone */}
                  <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-[#F5E6D3] to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Teléfono Secundario</p>
                      <a href="tel:667452649" className="text-xl font-semibold text-[#4A7C59] hover:text-[#C19A6B] transition-colors duration-300 font-sans">
                        667 452 649
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Pensión, transporte y compraventa</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-[#F5E6D3] to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <a href="mailto:cuadraschiguergue@gmail.com" className="text-xl font-semibold text-[#4A7C59] hover:text-[#C19A6B] transition-colors duration-300 break-all">
                        cuadraschiguergue@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-[#F5E6D3] to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A7C59] to-[#6B9F7C] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Dirección</p>
                      <p className="text-lg font-semibold text-[#4A7C59]">
                        Diseminado Chiguergue 12<br />
                        Santa Cruz de Tenerife<br />
                        España
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-gradient-to-r from-[#4A7C59] to-[#6B9F7C] rounded-2xl p-8 text-white shadow-xl">
                <h4 className="text-2xl font-bold mb-4">Horario de Atención</h4>
                <p className="text-lg opacity-90">
                  {mockData.contact.schedule}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#F5E6D3]/30 to-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-[#4A7C59] mb-6">
                Envíanos un Mensaje
              </h3>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-[#4A7C59] mb-3">
                    ¡Mensaje Enviado!
                  </h4>
                  <p className="text-gray-700 mb-6">
                    Gracias por contactarnos. Te responderemos lo antes posible.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#4A7C59] hover:bg-[#6B9F7C]"
                  >
                    Enviar Otro Mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+34 123 456 789"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full resize-none"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4A7C59] hover:bg-[#6B9F7C] text-white py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
