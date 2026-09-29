export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  codeUrl: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Waveless-web',
    description: $localize`:@@project.waveless.description: Web de una agencia de viajes de aventura por Asia, construida como una app Angular 20 con rutas, componentes reutilizables, accesibilidad y signals para todo el estado.`,
    image: 'images/waveless.webp',
    tech: ['Angular', 'TypeScript', 'Sass', 'Responsive'],
    codeUrl: 'https://github.com/romerogarcia/Waveless-web',
  },
  {
    title: 'Star Wars Planets',
    description: $localize`:@@project.starwars.description:Web construida sobre la API de Star Wars. Tras iniciar sesión o registrarse, se pueden explorar y buscar los planetas de la saga.`,
    image: 'images/starwars.webp',
    tech: ['Angular', 'JavaScript', 'SCSS', 'Bootstrap', 'API'],
    codeUrl: 'https://github.com/romerogarcia/StarWars-Planets',
  },
  {
    title: $localize`:@@project.magister.title:Matrícula Magister`,
    description: $localize`:@@project.magister.description:Proceso de matrícula para una plataforma educativa, academia especializada en formación online y presencial. Un formulario por pasos maquetado a partir del diseño. Refactorización y migración de la web desde React a Angular v22`,
    image: 'images/magister.webp',
    tech: ['Angular', 'TypeScript', 'Sass', 'Responsive'],
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
