import { Injectable } from '@angular/core';

// Importamos el modulo necesario para las peticiones http
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

// Importamos la intreface
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // Inyectamos para hacer peticiones http
  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>( 'http://localhost:3000/heroes' );
  }

  getHeroePorId( id: string ): Observable<Heroe>{
    const url = `http://localhost:3000/heroes/${ id }`;
    return this.http.get<Heroe>( url );

  }
  
}
