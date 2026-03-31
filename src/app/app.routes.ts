import { Routes } from '@angular/router';
import {MainPage} from './components/main-page/main-page';
import {Galeria} from './components/galeria/galeria';
import {Albums} from './components/albums/albums';

export const routes: Routes = [
  {
    path: "",
    component: MainPage,
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
    component: Galeria,
    data: {
      title: 'Galeria | Fana Falcon San Juan',
      description: 'Galeria de encuentros, exposiciones y momentos de Fana Falcon San Juan.',
      canonicalPath: '/galeria'
    }
  },
  {
    path: 'albums',
    component: Albums,
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
