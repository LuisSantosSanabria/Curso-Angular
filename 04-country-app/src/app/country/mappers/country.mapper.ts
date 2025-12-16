import { Country } from "../interfaces/country.interface";
import type { RESTCountry } from "../interfaces/rest-countries";

export class CountryMapper {
  // transformar un objeto de la Api a un objeto de tipo country
static mapRestCountryToCountry( restCountry: RESTCountry) : Country {
  return {
    capital: restCountry.capital.join(','),
    cca2: restCountry.cca2,
    flag: restCountry.flag,
    flagSvg: restCountry.flags.svg,
    name: restCountry.translations['spa'].common ?? 'Sin nombre en español',
    population: restCountry.population
  }
}

  // recibir un arreglo de objetos de la Api y retornar un arreglo de objetos de tipo country
  static mapRestCountryArrayToCountryArray ( restCountries: RESTCountry[]): Country[]{
    return restCountries.map((country) => this.mapRestCountryToCountry(country));
    // es lo mismo que esto return restCountries.map(this.mapRestCountryToCountry);
  }
}
