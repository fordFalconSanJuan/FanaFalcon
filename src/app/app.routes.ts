import { Routes } from '@angular/router';
import {MainPage} from './components/main-page/main-page';
import {Galeria} from './components/galeria/galeria';

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
  }
];
