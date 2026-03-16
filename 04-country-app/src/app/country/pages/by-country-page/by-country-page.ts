import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  // injeccion
countryService = inject(CountryService);
// forma nueva  con Resource para manejar estados

// informacion de la ruta activa
activateRoute = inject(ActivatedRoute);
// navegcion interna y otros paraametros de la ruta activa
router = inject(Router);
// para obtener el query de la ruta activa
queryParam = this.activateRoute.snapshot.queryParamMap.get('query') ?? '';

query = linkedSignal(() => this.queryParam);

// esta es la forma nueva de manejar estados con Resource
countryResource = resource({
  params: () => ({ query: this.query() }),
  loader: async( {params}) => {
    if (!params.query ) return [];

         this.router.navigate(['/country/by-country'], {
      queryParams: {
        query: params.query
      }
     });

    // tner que convertir el observable a promesa
    return await firstValueFrom
    (this.countryService.searchByCountry(params.query));
  }
});
 }
