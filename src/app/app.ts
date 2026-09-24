import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Projects, Skills, Contact, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#main" i18n="@@a11y.skip">Saltar al contenido</a>
    <span id="top"></span>
    <app-header />
    <main id="main">
      <app-hero />
      <app-about />
      <app-projects />
      <app-skills />
      <app-contact />
    </main>
    <app-footer />
  `,
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    const title = $localize`:@@meta.title:Noelia Romero · Desarrolladora Frontend`;
    inject(Title).setTitle(title);
    const description = $localize`:@@meta.description:Portfolio de Noelia Romero, desarrolladora frontend. Proyectos con Angular, React, JavaScript y Sass.`;
    const meta = inject(Meta);
    meta.updateTag({ name: 'description', content: description });
    meta.updateTag({ property: 'og:description', content: description });
    meta.updateTag({ property: 'og:title', content: title });
  }
}
