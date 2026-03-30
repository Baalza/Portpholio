import { Component, inject } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, PortfolioSectionComponent, LightboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly portfolio = inject(PortfolioService);

  readonly categories = this.portfolio.categoriesReadonly;
}
