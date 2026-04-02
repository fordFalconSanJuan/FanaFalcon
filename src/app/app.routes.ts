import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import('./components/main-page/main-page').then((module) => module.MainPage),
    data: {
      title: 'Fana Falcon San Juan | Club Ford Falcon',
      description: 'Comunidad de entusiastas del Ford Falcon en San Juan. Conoce eventos, galerias y actividades del club.',
      canonicalPath: '/'
    }
  },
  {
    path: 'main',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'galeria',
    loadComponent: () =>
      import('./components/galeria/galeria').then((module) => module.Galeria),
    data: {
      title: 'Galeria | Fana Falcon San Juan',
      description: 'Galeria de encuentros, exposiciones y momentos de Fana Falcon San Juan.',
      canonicalPath: '/galeria'
    }
  },
  {
    path: 'albums',
    loadComponent: () =>
      import('./components/albums/albums').then((module) => module.Albums),
    data: {
      title: 'Albums | Fana Falcon San Juan',
      description: 'Albums de actividades solidarias, juntadas y eventos de la comunidad Fana Falcon San Juan.',
      canonicalPath: '/albums'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
