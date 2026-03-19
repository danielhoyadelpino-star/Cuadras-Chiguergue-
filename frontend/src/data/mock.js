// Mock data for Cuadras Chiguergue

export const mockData = {
  // Caballos principales con sus galerías individuales
  horses: [
    {
      id: 1,
      name: "Wisky",
      gallery: [
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80",
        "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80",
        "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80"
      ]
    },
    {
      id: 2,
      name: "Fandango",
      gallery: [
        "https://images.unsplash.com/photo-1551336744-244ac2b7e1c7?w=800&q=80",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
        "https://images.unsplash.com/photo-1616694547003-a6fd9df48b08?w=800&q=80"
      ]
    },
    {
      id: 3,
      name: "Duende",
      gallery: [
        "https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?w=800&q=80",
        "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80",
        "https://images.unsplash.com/photo-1580625616540-b30e8488205f?w=800&q=80"
      ]
    },
    {
      id: 4,
      name: "Caramelo",
      gallery: [
        "https://images.unsplash.com/photo-1616694547003-a6fd9df48b08?w=800&q=80",
        "https://images.unsplash.com/photo-1589010588553-46e8e7c21788?w=800&q=80",
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80"
      ]
    },
    {
      id: 5,
      name: "Talavante",
      gallery: [
        "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80",
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80",
        "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80"
      ]
    }
  ],
  
  // Galería general de otros caballos de la cuadra
  generalHorsesGallery: [
    "https://images.unsplash.com/photo-1589010588553-46e8e7c21788?w=600&q=80",
    "https://images.unsplash.com/photo-1568572933382-74d440642117?w=600&q=80",
    "https://images.unsplash.com/photo-1580625616540-b30e8488205f?w=600&q=80",
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
    "https://images.unsplash.com/photo-1551336744-244ac2b7e1c7?w=600&q=80",
    "https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?w=600&q=80"
  ],

  // Exactamente 2 excursiones con sus galerías
  excursions: [
    {
      id: 1,
      title: "Excursión por el bosque",
      gallery: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        "https://images.unsplash.com/photo-1554179069-e7f6208f0cb5?w=800&q=80",
        "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80"
      ]
    },
    {
      id: 2,
      title: "Ruta costera",
      gallery: [
        "https://images.unsplash.com/photo-1606654049427-f1e3e1d0a749?w=800&q=80",
        "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
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
    },
    {
      id: 5,
      title: "Clases Personalizadas",
      description: "Adaptadas a tus necesidades y objetivos específicos"
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
