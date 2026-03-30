import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../data/site.config';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly site = SITE_CONFIG;
}
