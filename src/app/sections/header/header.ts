import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, LOCALE_ID, inject, signal } from '@angular/core';
import { Icon } from '../../shared/icon';
import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'app-header',
  imports: [Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-scrolled]': 'scrolled()',
    '(window:scroll)': 'onScroll()',
  },
})
export class Header {
  protected readonly theme = inject(ThemeService);
  private readonly document = inject(DOCUMENT);
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  /** Current build locale ('es' or 'en'). Each language is a separate build. */
  protected readonly locale = inject(LOCALE_ID).startsWith('en') ? 'en' : 'es';

  protected readonly links = [
    { id: 'about', label: $localize`:@@nav.about:Sobre mí` },
    { id: 'projects', label: $localize`:@@nav.projects:Proyectos` },
    { id: 'skills', label: $localize`:@@nav.skills:Skills` },
    { id: 'contact', label: $localize`:@@nav.contact:Contacto` },
  ];

  protected readonly lightLabel = $localize`:@@theme.toLight:Cambiar a tema claro`;
  protected readonly darkLabel = $localize`:@@theme.toDark:Cambiar a tema oscuro`;

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  /**
   * Spanish lives at the site root and English under /en/ (see angular.json → i18n).
   * Relative to each build's <base href>, the other language is at "en/" or "../".
   */
  protected switchLanguage(): void {
    const target = this.locale === 'es' ? 'en/' : '../';
    const url = new URL(target, this.document.baseURI);
    url.hash = this.document.location.hash;
    this.document.location.href = url.href;
  }
}
