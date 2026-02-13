import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/services/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class NavbarComponent {
  constructor(private theme: ThemeService) {}
  toggleTheme(): void {
    this.theme.toggle();
  }
}
