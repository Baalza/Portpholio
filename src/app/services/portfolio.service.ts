import { Injectable, computed, signal } from '@angular/core';
import { Category, Photo } from '../models/portfolio.models';
import { PORTFOLIO_CATEGORIES } from '../data/portfolio.data';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  /** Swap this source for HTTP / Electron-provided JSON when ready. */
  private readonly categories = signal<Category[]>(PORTFOLIO_CATEGORIES);

  readonly categoriesReadonly = this.categories.asReadonly();

  /** Exhibition order: categories top-to-bottom, photos left-to-right within each. */
  readonly photosInOrder = computed(() =>
    this.categories().flatMap((c) => c.photos),
  );

  setCategories(next: Category[]): void {
    this.categories.set(next);
  }

  patchCategory(id: string, partial: Partial<Omit<Category, 'id'>>): void {
    this.categories.update((list) =>
      list.map((c) => (c.id === id ? { ...c, ...partial, id: c.id } : c)),
    );
  }

  indexInExhibition(photo: Photo): number {
    return this.photosInOrder().findIndex((p) => p.id === photo.id);
  }
}
