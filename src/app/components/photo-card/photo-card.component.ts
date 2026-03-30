import { Component, input, inject } from '@angular/core';
import { Photo } from '../../models/portfolio.models';
import { LightboxService } from '../../services/lightbox.service';
import { PortfolioService } from '../../services/portfolio.service';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss',
})
export class PhotoCardComponent {
  readonly photo = input.required<Photo>();
  readonly staggerMs = input(0, { alias: 'appStaggerMs' });

  private readonly lightbox = inject(LightboxService);
  private readonly portfolio = inject(PortfolioService);

  open(): void {
    const order = this.portfolio.photosInOrder();
    const i = this.portfolio.indexInExhibition(this.photo());
    if (i >= 0) this.lightbox.open(order, i);
  }
}
