import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: './',
    pathMatch: 'full',
  },
  {
    path: './',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  }, 
  {
    path: 'agencias',
    loadComponent: () => import('./pages/agencies/agencies.page').then( m => m.AgenciesPage)
  },
  {
    path: 'agencias/:agency',
    loadComponent: () => import('./pages/agency/agency.page').then(m => m.AgencyPage), 
  },
  {
    path: 'agencias/:agency/:experience',
    loadComponent: () => import('./pages/detail-experience/detail-experience.page').then(m => m.DetailExperiencePage)
  },
  {
    path: 'favoritos',
    loadComponent: () => import('./pages/favorites/favorites.page').then( m => m.FavoritesPage)
  }
  
];
