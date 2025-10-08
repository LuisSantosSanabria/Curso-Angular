import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
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
}
