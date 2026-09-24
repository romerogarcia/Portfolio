import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly facts = [
  ];
}
