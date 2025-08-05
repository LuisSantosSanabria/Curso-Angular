import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';

export const routes: Routes = [
  //hola mundo => holaMundoComponent
  {
    path: '',
    component: CounterPageComponent,
  }
];
