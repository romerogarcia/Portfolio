import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [Icon, RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly profile = PROFILE;
}
