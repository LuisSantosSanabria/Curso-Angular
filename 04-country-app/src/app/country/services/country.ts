import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries';
import { map, Observable, catchError, throwError, delay, of, tap } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { Region } from '../interfaces/region.type';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService{
  // para crear un cache
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<Region, Country[]>(); // {} es un objeto vacio, pero con Map podemos usar metodos como set, get, has, delete, clear

// para hacer una peticion Http necesitamos injectar un servicio
private http = inject(HttpClient);

// metodo para buscar paises por capital
searchByCapital( query: string): Observable<Country[]>{
query = query.toLocaleLowerCase();

if (this.queryCacheCapital.has(query)) {
  return of(this.queryCacheCapital.get(query)!); //si la llave no exite o es nula ! o ?? []
}

console.log(`Llegando al servidor por ${query}`);

// llamar al endpoint
return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
// el pipi nos permite transformar la respuesta y el map nos permite mapear cada elemento del array
.pipe(
  map((resp) =>
    CountryMapper.mapRestCountryArrayToCountryArray(resp)),
  tap(countries => this.queryCacheCapital.set(query, countries)), // guardamos la respuesta en el cache
  catchError(error => {
    console.log('Error fetching', error);

    return throwError(() =>
      new Error(`No se pudo obtener paises con este query: ${query}`)
    );
  })
);
}

searchByCountry( query: string) {
  const url = `${API_URL}/name/${query}`;
  query = query.toLocaleLowerCase();

  if (this.queryCacheCountry.has(query)) {
    return of(this.queryCacheCountry.get(query)!);
  }

  console.log(`Llegando al servidor por ${query}`);

return this.http.get<RESTCountry[]>(url).pipe(
  map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
  tap(countries => this.queryCacheCountry.set(query, countries)),
  delay(2000),
  catchError(error => {
    console.log('Error fetching', error);

    return throwError(() =>
      new Error(`No se pudo obtener paises con este query: ${query}`)
    );
  })
);
}

searchByRegion( region : Region) {
  const url = `${API_URL}/region/${region}`;

  if (this.queryCacheCountry.has(region)) {
    return of(this.queryCacheCountry.get(region)!);
  }

return this.http.get<RESTCountry[]>(url).pipe(
  map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
  tap(countries => this.queryCacheRegion.set(region, countries)),
  catchError(error => {
    console.log('Error fetching', error);

    return throwError(() =>
      new Error(`No se pudo obtener paises con este query: ${region}`)
    );
  })
);
}

searchCountryByAlphaCode( code: string) {
  const url = `${API_URL}/alpha/${code}`;

return this.http.get<RESTCountry[]>(url).pipe(
  map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
  map(countries => countries.at(0) ),
  catchError(error => {
    console.log('Error fetching', error);

    return throwError(() =>
      new Error(`No se pudo obtener paises con ese codigo: ${code}`)
    );
  })
);
}

}

