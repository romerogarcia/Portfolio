import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [Icon, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly profile = PROFILE;
}
