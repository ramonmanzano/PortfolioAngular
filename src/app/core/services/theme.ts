import { Injectable } from '@angular/core';
import { StorageService } from './storage';
import { Theme } from '../models/project.model';

const KEY = 'pref_theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  constructor(private storage: StorageService) {}

  init(): void {
    const theme = this.getTheme();
    document.documentElement.setAttribute('data-theme', theme);
  }

  getTheme(): Theme {
    return this.storage.get<Theme>(KEY) ?? Theme.Dark;
  }

  setTheme(theme: Theme): void {
    this.storage.set(KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggle(): void {
    const next = this.getTheme() === Theme.Dark ? Theme.Light : Theme.Dark;
    this.setTheme(next);
  }
}
