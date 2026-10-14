import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

const THEME_KEY = 'theme';
const DARK_LINK_ID = 'theme-dark';
const DARK_CSS_HREF = 'dark.css';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly isDark = signal(false);

  constructor() {
    if (this.isBrowser) {
      this.isDark.set(this.readSaved());
      this.apply(false);
    }
  }

  toggle(): void {
    this.setDark(!this.isDark());
  }

  setDark(dark: boolean): void {
    this.isDark.set(dark);
    if (this.isBrowser) this.apply(true);
  }

  private apply(persist: boolean): void {
    const dark = this.isDark();
    const root = this.doc.documentElement;
    root.classList.toggle('theme-dark', dark);
    root.style.colorScheme = dark ? 'dark' : 'light';
    if (persist) {
      try { localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light'); } catch {}
    }
    dark ? this.loadDarkCss() : this.removeDarkCss();
  }

  private readSaved(): boolean {
    try { return localStorage.getItem(THEME_KEY) === 'dark'; } catch { return false; }
  }

  private loadDarkCss(): void {
    if (this.doc.getElementById(DARK_LINK_ID)) return;
    const link = this.doc.createElement('link');
    link.rel = 'stylesheet';
    link.id = DARK_LINK_ID;
    link.href = DARK_CSS_HREF;
    this.doc.head.appendChild(link);
  }

  private removeDarkCss(): void {
    this.doc.getElementById(DARK_LINK_ID)?.remove();
  }
}
