import { Component, inject, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country';
//import { RESTCountry } from '../../interfaces/rest-countries';  ya usamos nuestra propia interfaz y no lo necesitamos
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
// injeccion
countryService = inject(CountryService);

// saber varias etapas de la app
isLoading = signal(false);
isError = signal<string | null>(null);
countries = signal<Country[]>([]);


  onSearch(query: string) {
    // evitar multiples llamadas
if (this.isLoading()) return;
// reiniciar estados
this.isLoading.set(true);
this.isError.set(null);

// llamar al servicio
    this.countryService.searchByCapital(query).subscribe({
      next: (countries) => {
        // manejar estados
        this.isLoading.set(false);
        this.countries.set(countries);
      }, // manejar errores
      error: (err) => {
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set(err);
      },
    });
}
}
