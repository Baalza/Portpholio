import { Component, inject } from '@angular/core';
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { PortfolioService } from './services/portfolio.service';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';

type ViewAction = 'grid' | 'rails';

@Component({
  selector: 'app-root',
  imports: [ProfileSectionComponent, PhotoGridComponent, PortfolioSectionComponent, LightboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly portfolio = inject(PortfolioService);

  readonly categories = this.portfolio.categoriesReadonly;
  readonly allPhotos = this.portfolio.photosInOrder;
  activeAction: ViewAction = 'rails';

  setAction(action: ViewAction): void {
    this.activeAction = action;
  }
}
