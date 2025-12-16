import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from "../../components/top-menu/top-menu";

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, TopMenu], // para que funcione el router-outlet en el template
  templateUrl: './CountryLayout.html',
})
export class CountryLayout { }
