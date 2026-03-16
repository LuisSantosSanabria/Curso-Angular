import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { Region } from '../../interfaces/region.type';
import { firstValueFrom } from 'rxjs';
import { CountryService } from '../../services/country';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam( queryParam: string): Region {
  queryParam = queryParam.toLowerCase();

  const validRegions: Record<string, Region> = {
    'africa': 'Africa',
    'americas': 'Americas',
    'asia': 'Asia',
    'europe': 'Europe',
    'oceania': 'Oceania',
    'antarctic': 'Antarctic'
  };

 return validRegions[queryParam] ?? 'Americas';
}

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {

  countryService = inject(CountryService)

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  // informacion de la ruta activa
activateRoute = inject(ActivatedRoute);
// navegcion interna y otros paraametros de la ruta activa
router = inject(Router);
// para obtener el query de la ruta activa
queryParam = this.activateRoute.snapshot.queryParamMap.get('region') ?? '';

selectedRegion = linkedSignal<Region>(() => validateQueryParam(this.queryParam) );

  // necesitamos hacer una  peticion http para obtener los países de la región seleccionada
  // esta es la forma nueva de manejar estados con Resource
countryResource = resource({
  params: () => ({ region: this.selectedRegion() }),
  loader: async( {params}) => {
    if (!params.region ) return [];

    //navegar a la ruta con el query de la región seleccionada
         this.router.navigate(['/country/by-region'], {
      queryParams: {
        region: params.region
      }
     });
    // tner que convertir el observable a promesa
    return await firstValueFrom
    (this.countryService.searchByRegion(params.region)
  );
  }
});
 }
