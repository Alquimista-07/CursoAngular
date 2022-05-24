import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaiseSmall } from '../interfaces/paises.interface';
import { Observable, of } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _baseUrl: string = environment.baseUrl;

  // Para evitar errores ya que se pasan por referencia por eso lo hacemos privado
  private _regiones: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];

  get regiones(): string[] {
    // Usamos el spred para crear un nuevo arreglo desestructurado con el fin 
    // de que si hago modificaciones accidentales a la propiedad no voy a tocar
    // la original
    return [...this._regiones];
  }

  // Inyectamos el servicio para las peticiones http
  constructor( private http: HttpClient ) { }

  // Creamos un servicio que lea la región y traiga los valores que devuelve el endpoint
  getPaisesPorRegion( region: string ): Observable<PaiseSmall[]> {
    
    const url = `${this._baseUrl}/region/${region}?fields=cca3,name`;
    
    return this.http.get<PaiseSmall[]>( url );

  }

  // Creamos el servicio para consultar pais por codigo
  getPaisPorCodigo( codigo: string ): Observable<Pais | null> {

    // Si no recibimos el codigo retornamos un objeto
    if( !codigo ){
      // Ahora retornamos null como un nuevo observable usando el operador of de rxjs.
      // Adicionalmente hay que indicarle al metodo que puede retornar un observable o
      // null para que no marque error.
      return of(null);
    }

    const url = `${this._baseUrl}/alpha/${codigo}`;

    return this.http.get<Pais>( url );

  }

}
