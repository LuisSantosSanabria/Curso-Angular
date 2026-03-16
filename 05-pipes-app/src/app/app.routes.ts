import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Primeros Pipes',
    loadComponent: () => import('./pages/basic-page/basic-page'),
  },

    {
    path: 'number',
    title: 'Numeros Pipes',
    loadComponent: () => import('./pages/number-page/number-page'),
  },

    {
    path: 'uncommon',
    title: 'Pipes no comunes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page'),
  },

    {
    path: 'custom',
    title: 'Pipes personalizados',
    loadComponent: () => import('./pages/custom-pages/custom-pages'),
  },

    {
    path: '**',
    redirectTo: 'basic',
  },
];
