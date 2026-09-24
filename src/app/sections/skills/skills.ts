import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STACK } from '../../data/stack';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [Icon, RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly stack = STACK;
}
