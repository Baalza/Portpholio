/** Site identity — later replace via CMS / Electron settings. */
export const SITE_CONFIG = {
  photographerName: 'Mara Chen',
  tagline: 'Photographs of light, distance, and still air.',
  /** Example portrait — swap for your own file or URL later. */
  portraitSrc:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fm=webp&q=85&fit=crop&crop=faces&auto=format',
  /** Square crop for the profile card (white mat applied in CSS). */
  profileCardPortraitSrc:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fm=webp&q=85&fit=crop&crop=faces&auto=format',
  portraitAlt: 'Portrait of Mara Chen',

  /** Full-width profile section (reference-inspired layout). */
  profileBackgroundSrc:
    'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&fm=webp&q=80&auto=format',
  profileCardLabel: "It's me",
  profileNameDisplay: 'MARA CHEN',
  profileHeading: 'Who I am?',
  profileAge: '29 years old',
  profileExperience: '06 years',
  profileSpecializations: [
    'Food',
    'Travel',
    'Wedding',
    'Interior',
    'Street',
  ] as const,
  profileSocialLine: 'Instagram: @marachen · Portfolio: marachen.photo',
  profileBio: [
    'I work with light the way a composer works with silence — framing what matters and letting the rest fall away.',
    'My practice spans editorial travel, quiet interiors, and the human moments between poses. Every frame is a decision about rhythm, contrast, and restraint.',
  ] as const,
} as const;
