import {
  Component,
  HostListener,
  inject,
  effect,
  signal,
  computed,
  DOCUMENT
} from '@angular/core';

import { LightboxService } from '../../services/lightbox.service';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss',
})
export class LightboxComponent {
  readonly lightbox = inject(LightboxService);
  private readonly doc = inject(DOCUMENT);

  readonly imgReady = signal(false);
  readonly zoom = signal(1);

  readonly src = computed(() => {
    const p = this.lightbox.current();
    return p ? (p.srcFull ?? p.src) : '';
  });

  constructor() {
    effect(() => {
      this.lightbox.current();
      this.lightbox.index();
      this.imgReady.set(false);
      this.zoom.set(1);
    });

    effect(() => {
      this.doc.body.style.overflow = this.lightbox.isOpen() ? 'hidden' : '';
    });
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent): void {
    if (!this.lightbox.isOpen()) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      this.lightbox.close();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      this.lightbox.next();
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      this.lightbox.prev();
    }
    if (e.key === '+' || e.key === '=') {
      e.preventDefault();
      this.zoomIn();
    }
    if (e.key === '-' || e.key === '_') {
      e.preventDefault();
      this.zoomOut();
    }
  }

  onBackdrop(e: MouseEvent): void {
    if (e.target === e.currentTarget) this.lightbox.close();
  }

  onImgLoad(): void {
    this.imgReady.set(true);
  }

  stopNavClick(e: MouseEvent): void {
    e.stopPropagation();
  }

  zoomIn(): void {
    this.zoom.update((z) => Math.min(3, +(z + 0.25).toFixed(2)));
  }

  zoomOut(): void {
    this.zoom.update((z) => Math.max(1, +(z - 0.25).toFixed(2)));
  }

  resetZoom(): void {
    this.zoom.set(1);
  }

  onWheel(e: WheelEvent): void {
    if (!this.lightbox.isOpen()) return;
    e.preventDefault();
    if (e.deltaY < 0) {
      this.zoomIn();
    } else {
      this.zoomOut();
    }
  }
}
