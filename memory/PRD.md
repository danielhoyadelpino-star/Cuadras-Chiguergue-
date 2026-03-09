# PRD - Cuadras Chiguergue Website

## Fecha de Creación
9 de Marzo, 2026

## Descripción del Proyecto
Página web moderna y profesional para el centro hípico "Cuadras Chiguergue" ubicado en Tenerife, Islas Canarias. Web premium con animaciones 3D, transiciones suaves y diseño responsive.

## Stakeholders
- Cliente: Cuadras Chiguergue
- Usuario Final: Potenciales clientes interesados en clases de equitación, pensión de caballos, excursiones y servicios ecuestres

## Personas de Usuario
1. **Padres buscando clases para niños**: Buscan un centro seguro y profesional
2. **Adultos interesados en equitación**: Quieren aprender o perfeccionar técnica
3. **Propietarios de caballos**: Necesitan servicios de pensión y transporte
4. **Turistas**: Buscan excursiones a caballo en Tenerife

## Requisitos Core (Implementados)

### Frontend ✅
- Header con navegación smooth scroll
- 12 secciones principales:
  1. Hero - Portada con imagen de fondo
  2. Sobre Nosotros - Filosofía y valores
  3. Clases de Equitación - 4 tipos de clases
  4. Nuestros Caballos - 5 caballos principales + galería adicional
  5. Excursiones - 4 rutas destacadas
  6. Pensión de Caballos - Servicios de alojamiento
  7. Compraventa - Servicios de intermediación
  8. Transporte - Servicios inter-islas e internacional
  9. Instalaciones - 3 características principales
  10. Galería - Con filtros por categoría
  11. Contacto - Formulario + info de contacto
  12. Mapa - Google Maps integrado
- Footer completo
- Botones flotantes (WhatsApp, Instagram, Scroll to Top)
- Responsive design
- Animaciones y transiciones suaves

### Diseño ✅
- Colores: Verde natural (#4A7C59), Beige (#F5E6D3), Marrón madera (#8B7355), Tonos tierra (#C19A6B)
- Tipografía: Playfair Display (títulos), Inter (texto)
- Componentes Shadcn UI
- Iconos Lucide React

### Integraciones Preparadas
- EmailJS para formulario de contacto (requiere configuración)
- Google Maps para ubicación
- Enlaces WhatsApp y Instagram funcionales

## Lo Implementado (9 Marzo 2026)

### Fase 1 - Frontend con Mock Data ✅
- ✅ Estructura completa de componentes React
- ✅ 17 componentes creados
- ✅ Datos mock en /app/frontend/src/data/mock.js
- ✅ Animaciones y transiciones implementadas
- ✅ Responsive design
- ✅ Navegación smooth scroll
- ✅ Botones flotantes funcionales
- ✅ Diseño premium y moderno

### Contacto
- **Teléfono Principal**: 683 53 21 21 (Clases y consultas)
- **Teléfono Secundario**: 667 452 649 (Pensión, transporte, compraventa)
- **Email**: info@cuadraschiguergue.com
- **Instagram**: @centro.hipico.chiguergue
- **Dirección**: Diseminado Chiguergue 12, Santa Cruz de Tenerife, España

## Backlog Priorizado

### P0 - Configuración EmailJS
- [ ] Crear cuenta EmailJS
- [ ] Configurar Service ID, Template ID y Public Key
- [ ] Actualizar credenciales en Contact.jsx
- [ ] Probar envío de emails

### P1 - Contenido Real
- [ ] Reemplazar imágenes placeholder con fotos reales
- [ ] Añadir videos del centro
- [ ] Actualizar descripciones con información específica
- [ ] Añadir más caballos a la galería

### P2 - Backend (Opcional)
- [ ] API para gestionar caballos
- [ ] API para gestionar galería
- [ ] API para gestionar excursiones
- [ ] Panel de administración

### P2 - Mejoras Futuras
- [ ] Sistema de reservas online
- [ ] Blog con noticias y consejos
- [ ] Testimonios de clientes
- [ ] Integración con redes sociales (feed de Instagram)
- [ ] Multiidioma (Español, Inglés, Alemán)

## Próximos Pasos
1. Configurar EmailJS para formulario de contacto
2. Reemplazar imágenes placeholder con contenido real
3. Añadir videos propios
4. Probar en diferentes dispositivos
5. Optimizar SEO
