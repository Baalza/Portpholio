import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../data/site.config';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.scss',
})
export class ProfileSectionComponent {
  readonly site = SITE_CONFIG;
}
