import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [Icon, RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly filters = [
    { value: 'all', label: $localize`:@@projects.filter.all:Todos` },
    ...['Angular', 'React', 'JavaScript', 'Sass', 'API', 'Responsive'].map((t) => ({
      value: t,
      label: t,
    })),
  ];
  protected readonly active = signal('all');

  protected readonly visible = computed(() => {
    const filter = this.active();
    return filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.tech.includes(filter));
  });
}
