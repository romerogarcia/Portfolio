export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  codeUrl: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Waveless',
    description: $localize`:@@project.waveless.description:Home de una web de una agencia de viajes con actividades turísticas.`,
    image: 'images/waveless.webp',
    tech: ['Angular', 'TypeScript', 'Sass', 'Responsive'],
    codeUrl: 'https://github.com/romerogarcia/prueba-tecnica-avoris',
  },
  {
    title: 'Star Wars Planets',
    description: $localize`:@@project.starwars.description:Web construida sobre la API de Star Wars. Tras iniciar sesión o registrarse, se pueden explorar y buscar los planetas de la saga.`,
    image: 'images/starwars.webp',
    tech: ['React', 'JavaScript', 'SCSS', 'Bootstrap', 'API'],
    codeUrl: 'https://github.com/romerogarcia/StarWars-Planets',
  },
  {
    title: $localize`:@@project.magister.title:Matrícula Magister`,
    description: $localize`:@@project.magister.description:Proceso de matrícula para una plataforma educativa, academia especializada en formación online y presencial. Un formulario por pasos maquetado a partir del diseño.`,
    image: 'images/magister.webp',
    tech: ['React', 'JavaScript', 'Sass'],
    codeUrl: 'https://github.com/romerogarcia/Reto-Frontend-Magister',
  },
  {
    title: 'Bubble',
    description: $localize`:@@project.bubble.description:Web responsive para Bubble, una empresa de venta online de bubble tea.`,
    image: 'images/bubble.webp',
    tech: ['HTML', 'Sass', 'Responsive'],
    codeUrl: 'https://github.com/romerogarcia/Bubble',
  },
  {
    title: "Owen Wilson's WOW",
    description: $localize`:@@project.owen.description:Buscador de todas las películas en las que Owen Wilson dice «wow», con filtros por título, año y número de wows.`,
    image: 'images/owen-wilson-wow.webp',
    tech: ['React', 'JavaScript', 'CSS', 'API'],
    codeUrl: 'https://github.com/romerogarcia/Owen-Wilson-s-WOW',
  },
  {
    title: 'Awesome Profile Cards',
    description: $localize`:@@project.cards.description:Generador de tarjetas de visita personalizadas: rellenas tus datos, descargas la tarjeta y la compartes en redes sociales.`,
    image: 'images/profile-cards.webp',
    tech: ['JavaScript', 'CSS', 'Responsive'],
    codeUrl: 'https://github.com/romerogarcia/Awesome-Profile-Cards',
  },
  {
    title: 'Open Spaces',
    description: $localize`:@@project.openspaces.description:Web responsive para Open Spaces, una tienda online de productos para organizar el hogar.`,
    image: 'images/open-spaces.webp',
    tech: ['HTML', 'Sass', 'Responsive'],
    codeUrl: 'https://github.com/romerogarcia/Open-Spaces',
  },
];
