import { Injectable } from '@angular/core';

// Importamos el modulo necesario para las peticiones http
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

// Importamos la intreface
import { Heroe } from '../interfaces/heroes.interface';
// Importamos el environment.
// OJO: Hay que tener cuidado con la imoportación automática ya que puede apuntar es al archivo
//      environment.prod.ts (Producción) y ese es solo necesario cuando se hace el build de producción
//      el cual se cambia automáticamente por lo tanto no se debe cambiar nada acá.
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  // Inyectamos para hacer peticiones http
  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Heroe[]> {
    const url = `${ this.baseUrl }/heroes `
    return this.http.get<Heroe[]>( url );
  }

  getHeroePorId( id: string ): Observable<Heroe>{
    const url = `${ this.baseUrl }/heroes/${ id }`;
    return this.http.get<Heroe>( url );

  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    const cantidadTerminos = 6;
    const url = `${ this.baseUrl }/heroes?q=${termino}&_limit=${cantidadTerminos}`
    return this.http.get<Heroe[]>(url);
  }

  agregarHeroe( heroe: Heroe ): Observable<Heroe> {
    const url = `${ this.baseUrl }/heroes`;
    return this.http.post<Heroe>( url, heroe );
  }

  actualizarHeroe( heroe: Heroe ): Observable<Heroe> {
    const url = `${ this.baseUrl }/heroes/${ heroe.id }`;
    return this.http.put<Heroe>( url, heroe );
  }
  
}
