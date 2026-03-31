/** Shared contracts for portfolio data — ready for API / Electron ingestion. */

export interface Photo {
  id: string;
  /** Grid / thumbnail URL (WebP recommended). */
  src: string;
  /** Optional larger asset for lightbox; falls back to `src`. */
  srcFull?: string;
  title?: string;
  categoryId: string;
  iso: string;
  aperture: string;
  shutterSpeed: string;
  focalLength: string;
  lensName: string;
  alt: string;
}

export interface Subcategory {
  id: string;
  title: string;
  subtitle?: string;
  photos: Photo[];
}

export interface Category {
  id: string;
  title: string;
  subtitle?: string;
  photos: Photo[];
  subcategories?: Subcategory[];
}
