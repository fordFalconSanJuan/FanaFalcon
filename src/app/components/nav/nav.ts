import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

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
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
