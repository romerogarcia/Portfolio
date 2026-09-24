# Noelia Romero · Portfolio

Portfolio personal de **Noelia Romero**, desarrolladora frontend. Una web de una sola página con mis proyectos, skills y datos de contacto, en **español** e **inglés**.

**Web:** https://romerogarcia.github.io/Portfolio/ · [English version](https://romerogarcia.github.io/Portfolio/en/)

## Tecnologías

- [Angular 22](https://angular.dev): componentes standalone, signals y el nuevo control flow (`@for`, `@if`)
- Internacionalización con [`@angular/localize`](https://angular.dev/guide/i18n) (i18n oficial de Angular)
- SCSS con variables CSS para los temas claro y oscuro
- Sin framework de UI: maquetación con CSS Grid y Flexbox
- Vitest para los tests unitarios
- GitHub Actions + GitHub Pages para el despliegue

## Funcionalidades

- Diseño responsive, de móvil a escritorio
- Español / inglés con un botón en la cabecera
- Tema claro y oscuro (sigue el del sistema y recuerda tu elección)
- Proyectos filtrables por tecnología
- Animaciones al hacer scroll que respetan `prefers-reduced-motion`
- Imágenes WebP optimizadas con carga diferida

## Cómo arrancarlo

Requisitos: Node.js `^22.22.3`, `^24.15.0` o `>=26`.

```bash
npm install
npm start          # los dos idiomas: http://localhost:4200/ (español) y /en/ (inglés)
npm run dev        # solo español, con recarga automática (más rápido para maquetar)
npm run dev:en     # solo inglés, con recarga automática
npm test           # tests unitarios
npm run build      # build de producción de los dos idiomas en dist/portfolio/browser
```

> `ng serve` (`npm run dev`) solo puede servir un idioma a la vez, así que ahí el botón ES/EN no cambia de idioma. Usa `npm start` para probar el botón: compila los dos idiomas y los sirve igual que GitHub Pages. Tras guardar un cambio, espera a que termine la compilación y recarga la página.

## Idiomas (i18n)

El español es el idioma de origen: los textos están directamente en las plantillas, marcados con `i18n="@@id"` (o con `` $localize`:@@id:texto` `` en TypeScript). El build genera dos versiones de la web:

| Idioma  | Ruta    | Traducciones                  |
| ------- | ------- | ----------------------------- |
| Español | `/`     | textos de origen              |
| Inglés  | `/en/`  | `src/locale/messages.en.xlf`  |

Para cambiar o añadir un texto:

1. Edita el texto en español en la plantilla y mantén su `@@id`.
2. Ejecuta `npm run extract-i18n` para regenerar `src/locale/messages.xlf`.
3. Añade o actualiza el `<target>` correspondiente en `src/locale/messages.en.xlf`.

## Estructura

```
src/
├── app/
│   ├── data/          # contenido: proyectos, skills y perfil
│   ├── sections/      # un componente por sección de la página
│   └── shared/        # iconos, directiva de animación y servicio de tema
├── locale/            # archivos de traducción (.xlf)
├── index.html
└── styles.scss        # variables de diseño y estilos globales
public/                # imágenes, favicon y currículum
```

Para añadir o editar un proyecto, modifica `src/app/data/projects.ts` y pon la captura en `public/images/`.

## Despliegue

Cada push a `main` compila la web y la publica en GitHub Pages con `.github/workflows/deploy.yml`.
Solo hay que configurarlo una vez: en el repositorio, ve a **Settings → Pages** y en **Source** elige **GitHub Actions**.

## Licencia

[MIT](LICENSE.md)
