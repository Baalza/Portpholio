import { Component, input } from '@angular/core';
import { Category } from '../../models/portfolio.models';
import { PhotoGridComponent } from '../photo-grid/photo-grid.component';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [PhotoGridComponent, RevealOnScrollDirective],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss',
})
export class PortfolioSectionComponent {
  readonly category = input.required<Category>();
}
