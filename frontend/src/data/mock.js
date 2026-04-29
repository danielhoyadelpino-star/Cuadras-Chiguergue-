// Mock data for Cuadras Chiguergue

export const mockData = {
  // Caballos principales - SOLO UNA IMAGEN POR CABALLO
  horses: [
    {
      id: 1,
      name: "Wisky",
      image: "/images/wisky.JPG"
    },
    {
      id: 2,
      name: "Fandango",
      image: "/images/fandango.JPG"
    },
    {
      id: 3,
      name: "Duende",
      image: "/images/duende.jpg"
    },
    {
      id: 4,
      name: "Caramelo",
      image: "/images/caramelo.JPG"
    },
    {
      id: 5,
      name: "Talavante",
      image: "/images/talavante.JPG"
    }
  ],
  
  // Galería general de otros caballos de la cuadra
  generalHorsesGallery: [
    "/images/galeria1.JPG",
    "/images/galeria2.JPG",
    "/images/galeria3.JPG",
    "/images/galeria4.JPG",
    "/images/galeria5.JPG",
    "/images/galeria6.JPG"
  ],

  // Exactamente 2 excursiones con sus galerías
  excursions: [
    {
      id: 1,
      title: "Excursión por el bosque",
      gallery: [
        "/images/bosque1.JPG",
        "/images/bosque2.JPG",
        "/images/bosque3.JPG"
      ]
    },
    {
      id: 2,
      title: "Ruta costera",
      gallery: [
        "/images/Costa1.JPG",
        "/images/Costa2.JPG",
        "/images/Costa3.jpg"
      ]
    }
  ],

  // Galería de clases
  classesGallery: [
    "/images/clases1.JPG",
    "/images/clases2.JPG",
    "/images/clases3.JPG"
  ],

  // Galería general (NO incluye excursiones)
  gallery: [
    // Instalaciones
    { id: 1, image: "/images/vistapano.JPG", category: "instalaciones" },
    { id: 2, image: "/images/pista1.JPG", category: "instalaciones" },
    { id: 3, image: "/images/nave2.JPG", category: "instalaciones" },
    { id: 4, image: "/images/naves.JPG", category: "instalaciones" },
    
    // Clases
    { id: 5, image: "/images/clases1.JPG", category: "clases" },
    { id: 6, image: "/images/clases2.JPG", category: "clases" },
    { id: 7, image: "/images/clases3.JPG", category: "clases" },
    
    // Caballos - Fotos generales
    { id: 8, image: "/images/pension.JPG", category: "caballos" },
    { id: 9, image: "/images/sobrenosotros.jpg", category: "caballos" },
    { id: 10, image: "/images/portada.jpeg", category: "caballos" },
    { id: 11, image: "/images/caballo_establo.JPG", category: "caballos" },
    
    // Caballos - Individuales
    { id: 12, image: "/images/wisky.JPG", category: "caballos" },
    { id: 13, image: "/images/fandango.JPG", category: "caballos" },
    { id: 14, image: "/images/duende.jpg", category: "caballos" },
    { id: 15, image: "/images/caramelo.JPG", category: "caballos" },
    { id: 16, image: "/images/talavante.JPG", category: "caballos" },
    
    // Caballos - Galería general
    { id: 17, image: "/images/galeria1.JPG", category: "caballos" },
    { id: 18, image: "/images/galeria2.JPG", category: "caballos" },
    { id: 19, image: "/images/galeria3.JPG", category: "caballos" },
    { id: 20, image: "/images/galeria4.JPG", category: "caballos" },
    { id: 21, image: "/images/galeria5.JPG", category: "caballos" },
    { id: 22, image: "/images/galeria6.JPG", category: "caballos" },
    
    // Transporte
    { id: 23, image: "/images/camion6.JPG", category: "transporte" },
    { id: 24, image: "/images/camion4.jpeg", category: "transporte" },
    { id: 25, image: "/images/remolque4.JPG", category: "transporte" },
    { id: 26, image: "/images/remolque2.JPG", category: "transporte" }
  ],

  // Tipos de clases (simplificado)
  classes: [
    {
      id: 1,
      title: "Clases para Niños",
      description: "Iniciación a la equitación en un ambiente seguro y divertido"
    },
    {
      id: 2,
      title: "Clases para Adultos",
      description: "Nunca es tarde para aprender. Clases personalizadas"
    },
    {
      id: 3,
      title: "Nivel Principiante",
      description: "Aprende desde cero con monitores experimentados"
    },
    {
      id: 4,
      title: "Nivel Medio-Avanzado",
      description: "Perfecciona tu técnica y aprende disciplinas avanzadas"
    }
  ],

  // Vehículos de transporte
  transportVehicles: [
    { id: 1, name: "Camión de 6 caballos", image: "/images/camion6.JPG" },
    { id: 2, name: "Camión de 4 caballos", image: "/images/camion4.jpeg" },
    { id: 3, name: "Remolque de 4 caballos", image: "/images/remolque4.JPG" },
    { id: 4, name: "Remolque de 2 caballos", image: "/images/remolque2.JPG" }
  ],

  facilities: {
    tracks: "2 pistas",
    boxes: "+20 boxes",
    images: {
      track: "/images/pista1.JPG",
      panoramic: "/images/vistapano.JPG"
    }
  },

  contact: {
    mainPhone: "683 53 21 43",
    secondaryPhone: "667 452 649",
    address: "Diseminado Chiguergue 12, Santa Cruz de Tenerife, España",
    instagram: "@centro.hipico.chiguergue",
    email: "centrohipicochiguergue@gmail.com",
    schedule: "Lunes a viernes: 9:00 – 20:00"
  }
};
