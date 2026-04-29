import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-nav',
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  private readonly router = inject(Router);
  isMobileMenuOpen = false;

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        this.isMobileMenuOpen = false;
      });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
