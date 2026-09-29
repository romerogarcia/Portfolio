export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  /** Short badges shown next to the company (clients, sectors…). */
  clients?: string[];
  highlights: string[];
  tech: string[];
}

export const EXPERIENCE: Job[] = [
  {
    id: 'vass',
    role: $localize`:@@exp.vass.role:Desarrolladora Frontend`,
    company: 'VASS',
    period: $localize`:@@exp.vass.period:Oct 2023 – Sep 2026`,
    summary: $localize`:@@exp.vass.summary:Mi etapa más larga y en la que más he crecido. He trabajado en proyectos de banca para el Banco de España y Unicaja, y para clientes de otros sectores como Mapfre y Repsol, siempre con Angular, Adobe Experience Manager y la accesibilidad en el centro.`,
    clients: [
      'Banco de España',
      'Unicaja',
      'Mapfre',
      'Repsol',
    ],
    highlights: [
      $localize`:@@exp.vass.h1:He creado, mantenido y hecho evolucionar componentes en Angular (v16–v20) con Angular Material, dentro de un monorepo Nx en el que también ayudé a definir la arquitectura y los límites entre librerías.`,
      $localize`:@@exp.vass.h2:He revisado la accesibilidad de componentes e interfaces para auditorías y demos con cliente, asegurando que cumplen WCAG 2.2 (AA).`,
      $localize`:@@exp.vass.h3:Implementé la accesibilidad desde cero en todos los componentes de la web de un cliente bancario.`,
      $localize`:@@exp.vass.h4:He extendido y personalizado los Core Components de Adobe Experience Manager (AEM).`,
      $localize`:@@exp.vass.h5:Desarrollé de principio a fin una web nueva para un cliente inmobiliario con Angular y AEM: componentes, páginas y toda la lógica.`,
      $localize`:@@exp.vass.h7:He colaborado de cerca con el equipo de backend, trabajando también con Java y bases de datos para integrar el front con los servicios.`,
      $localize`:@@exp.vass.h6:He pasado diseños de Figma a código siguiendo BEM y Atomic Design, y he localizado y resuelto errores en los entornos del cliente.`,
    ],
    tech: ['Angular', 'Angular Material', 'Nx', 'AEM', 'TypeScript', 'Java', 'WCAG 2.2', 'Jest', 'Figma'],
  },
  {
    id: 'ancert',
    role: $localize`:@@exp.ancert.role:Desarrolladora Frontend y maquetadora web`,
    company: 'Agencia Notarial de Certificación (ANCERT)',
    period: $localize`:@@exp.ancert.period:Sep 2022 – Oct 2023`,
    summary: $localize`:@@exp.ancert.summary:Mi primer trabajo como desarrolladora, justo al salir del bootcamp de Adalab. Aquí descubrí lo mucho que me gustan los componentes reutilizables y la accesibilidad.`,
    highlights: [
      $localize`:@@exp.ancert.h1:Participé en la creación de la librería de componentes del Portal Notarial del Ciudadano: maquetación, desarrollo y accesibilidad de cada pieza.`,
      $localize`:@@exp.ancert.h2:Trasladé los diseños de Figma a interfaces funcionales y responsive con HTML, Sass, Flexbox, CSS Grid, Tailwind y Bootstrap.`,
      $localize`:@@exp.ancert.h3:Revisé la accesibilidad de la web (WCAG 2.2 AA) y corregí errores y bugs de las interfaces, también durante el rediseño completo del portal.`,
      $localize`:@@exp.ancert.h4:Creé e integré componentes en React y Liferay, y maqueté emails responsive.`,
    ],
    tech: ['JavaScript', 'React', 'Liferay', 'Sass', 'Tailwind CSS', 'WCAG 2.2', 'Figma'],
  },
];
