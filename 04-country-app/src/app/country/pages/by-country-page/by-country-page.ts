import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  // injeccion
countryService = inject(CountryService);
// forma nueva  con Resource para manejar estados
query = signal('');

// esta es la forma nueva de manejar estados con Resource
countryResource = resource({
  params: () => ({ query: this.query() }),
  loader: async( {params}) => {
    if (!params.query ) return [];

    // tner que convertir el observable a promesa
    return await firstValueFrom
    (this.countryService.searchByCountry(params.query)
  );
  }
});
 }
