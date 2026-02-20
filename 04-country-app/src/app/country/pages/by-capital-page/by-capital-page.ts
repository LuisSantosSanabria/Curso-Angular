import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country';
//import { RESTCountry } from '../../interfaces/rest-countries';  ya usamos nuestra propia interfaz y no lo necesitamos
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})


export class ByCapitalPage {
// injeccion
countryService = inject(CountryService);
// forma nueva  con Resource para manejar estados
query = signal('');

// con RxResource
    countryResource = rxResource({
    params: this.query,
    stream: ({ params }) => {
      if (!params) return of([])
      return this.countryService.searchByCapital(params)
    }
  })

// con promesas
/* // esta es la forma nueva de manejar estados con Resource
countryResource = resource({
  params: () => ({ query: this.query() }),
  loader: async( {params}) => {
    if (!params.query ) return [];

    // tner que convertir el observable a promesa
    return await firstValueFrom
    (this.countryService.searchByCapital(params.query)
  );
},
});
 */

// forma normal de manejar estados con signals
/* // saber varias etapas de la app
isLoading = signal(false);
isError = signal<string | null>(null);
countries = signal<Country[]>([]);

// dsiparo en metodo de la busqueda
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
} */
}
