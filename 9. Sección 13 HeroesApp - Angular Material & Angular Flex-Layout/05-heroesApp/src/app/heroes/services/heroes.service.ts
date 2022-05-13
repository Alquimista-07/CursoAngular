import { Injectable } from '@angular/core';

// Importamos el modulo necesario para las peticiones http
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // Inyectamos para hacer peticiones http
  constructor( private http: HttpClient ) { }

  getHeroes() {
    return this.http.get( 'http://localhost:3000/heroes' );
  }
  
}
