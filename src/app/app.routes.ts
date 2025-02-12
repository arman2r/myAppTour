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
    path: 'agencies',
    loadComponent: () => import('./pages/agencies/agencies.page').then( m => m.AgenciesPage)
  },
  {
    path: 'agencies/:agency',
    loadComponent: () => import('./pages/agency/agency.page').then(m => m.AgencyPage), 
  },
  {
    path: 'agencies/:agency/:experience',
    loadComponent: () => import('./pages/detail-experience/detail-experience.page').then(m => m.DetailExperiencePage)
  },
  {
    path: 'favoritos',
    loadComponent: () => import('./pages/favorites/favorites.page').then( m => m.FavoritesPage)
  },
  {
    path: 'register/general-information',
    loadComponent: () => import('./pages/register/general-information/general-information.page').then( m => m.GeneralInformationPage)
  },
  {
    path: 'register/individual-information/:agency',
    loadComponent: () => import('./pages/register/individual-information/individual-information.page').then( m => m.IndividualInformationPage)
  },
  {
    path: 'register/individual-information',
    loadComponent: () => import('./pages/register/individual-information/individual-information.page').then( m => m.IndividualInformationPage)
  },
  {
    path: 'register/uploading-documents/:documentType',
    loadComponent: () => import('./pages/register/uploading-documents/uploading-documents.page').then( m => m.UploadingDocumentsPage)
  },
  {
    path: 'register/confirm-email',
    loadComponent: () => import('./pages/register/confirm-email/confirm-email.page').then( m => m.ConfirmEmailPage)
  },
  {
    path: 'register/confirm-phone',
    loadComponent: () => import('./pages/register/confirm-phone/confirm-phone.page').then( m => m.ConfirmPhonePage)
  },
  {
    path: 'register/register-board',
    loadComponent: () => import('./pages/register/register-board/register-board.page').then( m => m.RegisterBoardPage)
  },
  {
    path: 'waiting-room',
    loadComponent: () => import('./pages/register/waiting-room/waiting-room.page').then( m => m.waitingRoomPage)
  },

];
