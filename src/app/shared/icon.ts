import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'external'
  | 'arrow-down'
  | 'download'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'layers'
  | 'api'
  | 'grid'
  | 'layout'
  | 'a11y'
  | 'check'
  | 'cms'
  | 'loop';

/** Small inline SVG icon set (stroke icons, 24x24). */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true', style: 'display:inline-flex' },
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      @switch (name()) {
        @case ('github') {
          <path
            d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
          />
        }
        @case ('linkedin') {
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        }
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        }
        @case ('external') {
          <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        }
        @case ('arrow-down') {
          <path d="M12 5v14M19 12l-7 7-7-7" />
        }
        @case ('download') {
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
        }
        @case ('sun') {
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
          />
        }
        @case ('moon') {
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        }
        @case ('menu') {
          <path d="M4 7h16M4 12h16M4 17h16" />
        }
        @case ('layers') {
          <path d="m12 3 9 5-9 5-9-5 9-5z" />
          <path d="m3 13 9 5 9-5" />
        }
        @case ('api') {
          <path
            d="M8 4H6a2 2 0 0 0-2 2v4l-2 2 2 2v4a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v4l2 2-2 2v4a2 2 0 0 1-2 2h-2"
          />
        }
        @case ('grid') {
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        }
        @case ('layout') {
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M9 4v16M15 4v16" />
        }
        @case ('a11y') {
          <circle cx="12" cy="4.5" r="1.5" />
          <path d="M5 8.5 12 10l7-1.5M12 10v4M9 21l3-7 3 7" />
        }
        @case ('check') {
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 3 3 5-6" />
        }
        @case ('cms') {
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 13h8M8 16h5" />
        }
        @case ('loop') {
          <path d="M20 11a8 8 0 0 0-14.9-4M4 13a8 8 0 0 0 14.9 4" />
          <path d="M4 3v4h4M20 21v-4h-4" />
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6 6 18" />
        }
      }
    </svg>
  `,
  styles: `
    svg {
      width: 100%;
      height: 100%;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
}
