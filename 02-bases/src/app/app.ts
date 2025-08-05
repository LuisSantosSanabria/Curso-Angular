import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // crea una etiqueta html
  imports: [RouterOutlet], //para mostrar las rutas de nav ,paginas
  templateUrl: './app.html',
  // hay mas property parar agregar pero es raro usar mas de estas 4
})
export class App {
  title = 'bases'; //propety public , private ,ect
}
