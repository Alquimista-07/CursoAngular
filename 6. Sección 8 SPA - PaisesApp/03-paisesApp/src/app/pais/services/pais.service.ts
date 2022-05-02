import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// NOTA: El providedIn es una característica añadida a Angular la cual permite que los servicios
//       puedan estar definidos en el momneto en que se contruye bunddle de la aplicación.
//       Adicionalmente al especificar este providedIn: 'root' en el decorador le dice a Angular 
//       que no importa en que parte de la aplicación sea que estemos, este servicio va a ser único 
//       y de manera global en el root, y esto es magnífico porque evita que yo tenga que especificarlo
//       en los providers.
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  // Definimos la base de la url de la api
  private apiURL: string = 'https://restcountries.com/v3.1';

  // Inyectoamos el servicio http
  constructor( private http: HttpClient ) { }

  // Ahora iniciamos a manejar el tema de las peticiones a la API

  // Buscar Pais
  // TODO: Retorna un Observable de tipo any de momento ya que luego se debe
  //       cambiar por su tipo correspondiente
  buscarPais( terminoBusqueda: string ): Observable<any> {

    // Construimos la url del endpoint para buscar pais
    const url = `${ this.apiURL }/name/${ terminoBusqueda }`

    return this.http.get( url );

  }


}
