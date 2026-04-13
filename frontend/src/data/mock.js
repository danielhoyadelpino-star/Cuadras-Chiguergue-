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
    "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80",
    "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    "https://images.unsplash.com/photo-1606654049427-f1e3e1d0a749?w=800&q=80",
    "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80",
    "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80"
  ],

  // Galería general (NO incluye excursiones)
  gallery: [
    { id: 1, image: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80", category: "instalaciones" },
    { id: 2, image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80", category: "caballos" },
    { id: 3, image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80", category: "clases" },
    { id: 4, image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80", category: "caballos" },
    { id: 5, image: "https://images.unsplash.com/photo-1616694547003-a6fd9df48b08?w=800&q=80", category: "instalaciones" },
    { id: 6, image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80", category: "caballos" }
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
    { id: 1, name: "Camión de 6 caballos", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" },
    { id: 2, name: "Camión de 4 caballos", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80" },
    { id: 3, name: "Remolque de 4 caballos", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80" },
    { id: 4, name: "Remolque de 2 caballos", image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80" }
  ],

  facilities: {
    tracks: "2 pistas",
    boxes: "+20 boxes",
    images: {
      track: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80",
      panoramic: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
    }
  },

  contact: {
    mainPhone: "683 53 21 43",
    secondaryPhone: "667 452 649",
    address: "Diseminado Chiguergue 12, Santa Cruz de Tenerife, España",
    instagram: "@centro.hipico.chiguergue",
    email: "cuadraschiguergue@gmail.com",
    schedule: "Lunes a viernes: 9:00 – 20:00"
  }
};
