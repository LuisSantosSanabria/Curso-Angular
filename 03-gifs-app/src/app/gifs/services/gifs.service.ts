import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';
// cuando usamos interfaces en bueno usar la palabra type
// para que typescript sepa que es una interfaz

@Injectable({providedIn: 'root'})
export class GifService {
  private http = inject(HttpClient)
  // inyectamos el cliente hhtp y nos permite hacer peticiones
  // lo preveemos de app.config.ts

  trendingGifs = signal<Gif[]>([]);
  // creamos una señal que va a tener un array de gifs
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>({});
  // un objeto que tiene como llave un string y como valor un array de gifs
  // el record es un tipo de dato que nos permite crear un objeto con llaves dinamicas
  searhHistoryKeys = computed(()=> Object.keys(this.searchHistory()));
  // computed es una señal derivada que se actualiza cuando cambia la señal original


  constructor(){
    this.loadTrendingGifs();
    console.log('Servicio de gifs listo');
  }

  loadTrendingGifs(){
     this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
      params: {
        api_key:environment.giphyApiKey,
        limit: 20,
      }
      // cuando hacemos una peticion hhtp nose va disparar hasta que no nos suscribamos
     })
     .subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log({gifs});
      });
  }

  searchGifs(query: string){ // tengo un servcio que me devuelve un observable
      return this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/search`, {
      params: {
        api_key:environment.giphyApiKey,
        limit: 20,
        q: query,
      }
     })
     .pipe(
      map( ({data}) => data),
      map( (items) => GifMapper.mapGiphyItemsToGifArray(items)),
      /* cuando usamos el pipe podemos encadenar operadores rxjs */
      tap (items =>{ //nos va permitir manejar el historial
        this.searchHistory.update(history => ({
          ...history,
          [query.toLocaleLowerCase()]: items,
        }))
      })
     );
/*      .subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);

      console.log({search:gifs});
      }); */
  }
}
