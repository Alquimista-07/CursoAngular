import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaiseSmall } from '../interfaces/paises.interface';
import { Observable } from 'rxjs';

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

}
