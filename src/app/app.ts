import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar';
import { FooterComponent } from './shared/footer/footer';
import { ThemeService } from './core/services/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
})
export class AppComponent {
  constructor(private theme: ThemeService) {
    this.theme.init();
  }
}
