import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./component/shared/navbar/navbar";

@Component({
  selector: 'app-root', // crea una etiqueta html
  imports: [RouterOutlet, Navbar], //para mostrar las rutas de nav ,paginas
  templateUrl: './app.html',
  // hay mas property parar agregar pero es raro usar mas de estas 4
})
export class App {
  title = 'bases'; //propety public , private ,ect
}
