import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Observable, of } from 'rxjs';
//import { catchError } from 'rxjs/operators';

import { Country } from '../interfaces/pais.interface';


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
  //-----------------------------------------------------------------------------------------------------
  // NOTA : Se cambio nuevamente la api para evitar usar 2 api diferentes las cuales generan conflictos 
  // private apiUrlV2: string = 'https://restcountries.com/v2';
  //-----------------------------------------------------------------------------------------------------
  
  // Inyectoamos el servicio http
  constructor( private http: HttpClient ) { }
  
  // Ahora iniciamos a manejar el tema de las peticiones a la API
  
  // Buscar Pais
  // NOTA: Ahora si asignamos el tipo correspondiente al observable
  //       pero si no colocamos [] significaría que solo regresa un pais 
  //       y no un arreglo entonces por eso se le colocaron las []
  buscarPais( terminoBusqueda: string ): Observable<Country[]> {

    // Construimos la url del endpoint para buscar pais
    const url = `${ this.apiURL }/name/${ terminoBusqueda }`

    return this.http.get<Country[]>( url );
    
    //===================================================================================================================================
    // NOTA:
    //===================================================================================================================================
    // Otra forma de manejar el error bien interesante es mendiante los operadores de rxjs
    // (extensiones reactivas) y es dependiendo de lo que queramos hacer por ejemplo si recibo 
    // un error al hacer la petición http yo no quiero que regrese el error y simplemente quiero 
    // que regrese un arreglo vacío indicando que no se encontro nada con eso. Adicionalmente esto
    // lo veremos más adelante en el curso.
    // 
    // Los operadores no son más que unas funciones que se van a ejecutar en base al producto
    // de la petición http
    //
    /*
    return this.http.get( url )
              .pipe(
              // El of es una función que genera observables, el cual transforma lo que sea que se ponga
              // en los paretesis en un nuevo observable
                catchError( err => of([]) )
              );
    */
    //
    //===================================================================================================================================
      
  }

  // Metodo para buscar por capital
  buscarCapital( terminoBusqueda: string ): Observable<Country[]> {

    const url = `${ this.apiURL }/capital/${ terminoBusqueda }`

    return this.http.get<Country[]>( url );

  }

  // Metodo para obtener la información del pais por id
  // y retornamos unicamente un pais, por lo tanto no se
  // colocan los [] en Country
  getPaisAlpha( idPais: string ): Observable<Country> {

    const url = `${ this.apiURL }/alpha/${ idPais }`

    return this.http.get<Country>( url );

  }

  // Creamos el metodo para obtener la información de las regiones
  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiURL }/region/${ region }`;

    return this.http.get<Country[]>( url );

  }


}
