import { Directive, ElementRef, OnDestroy, afterNextRender, inject, input } from '@angular/core';

/**
 * Fades an element in the first time it scrolls into view.
 * Usage: <div appReveal [revealDelay]="150">…</div>
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.--reveal-delay.ms]': 'revealDelay()',
  },
})
export class RevealDirective implements OnDestroy {
  readonly revealDelay = input(0);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;
      if (!('IntersectionObserver' in window)) {
        node.classList.add('is-visible');
        return;
      }
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              node.classList.add('is-visible');
              this.observer?.disconnect();
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
      );
      this.observer.observe(node);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
