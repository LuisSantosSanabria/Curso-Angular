import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { Component } from '@angular/core';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';

export const routes: Routes = [
  //hola mundo => holaMundoComponent
  {
    path: '',
    component: CounterPageComponent,
  },

  {
    path: 'hero',
    component: HeroPageComponent,
  },

  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },

  {
    path: '**',
    redirectTo: '',
  }

];
