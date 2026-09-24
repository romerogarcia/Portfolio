import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container bar">
      <p i18n="@@footer.copy">© {{ year }} {{ profile.name }}. Hecho con Angular.</p>
      <a href="#top" i18n="@@footer.top">Volver arriba ↑</a>
    </div>
  `,
  styles: `
    :host {
      display: block;
      border-top: 1px solid var(--line);
    }
    .bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 12px;
      padding-block: 28px;
      font-size: 0.875rem;
      color: var(--ink-soft);
    }
    a {
      text-decoration: none;
      font-weight: 600;
    }
    a:hover {
      color: var(--accent);
    }
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
