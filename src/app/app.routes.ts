import { Routes } from '@angular/router';
import {MainPage} from './components/main-page/main-page';
import {Galeria} from './components/galeria/galeria';
import {Albums} from './components/albums/albums';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full"
  },
  {
    path: 'main',
    component: MainPage
  },
  {
    path: 'galeria',
    component: Galeria
  },
  {
    path: 'albums',
    component: Albums
  }
];
