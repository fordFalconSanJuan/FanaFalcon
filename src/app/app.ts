import { DOCUMENT } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Nav } from './components/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.applyRouteSeo());

    this.applyRouteSeo();
  }

  private applyRouteSeo(): void {
    const route = this.getDeepestChild(this.route);
    const data = route.snapshot.data;

    const pageTitle = data['title'] ?? 'Fana Falcon San Juan | Club Ford Falcon';
    const pageDescription = data['description'] ??
      'Fana Falcon San Juan: comunidad de entusiastas del Ford Falcon en San Juan.';
    const canonicalPath = data['canonicalPath'] ?? '/';
    const canonicalUrl = `https://www.fanafalconsanjuan.com.ar${canonicalPath}`;

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: pageDescription });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: pageDescription });

    let canonicalElement = this.document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = this.document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl);
  }

  private getDeepestChild(activeRoute: ActivatedRoute): ActivatedRoute {
    let currentRoute = activeRoute;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    return currentRoute;
  }
}
