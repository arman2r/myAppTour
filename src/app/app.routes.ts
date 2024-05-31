import { Routes } from '@angular/router';

export const routes: Routes = [ 
  {
    path: '',
    redirectTo: './',
    pathMatch: 'full',
  },
  {
    path: './',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
];
