import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.html',
})
export class CountryList {
  // recibir el array de paises
  countries = input.required<Country[]>();
}
