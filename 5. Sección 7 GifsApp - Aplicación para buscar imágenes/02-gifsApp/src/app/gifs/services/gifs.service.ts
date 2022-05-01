import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// Importamos la interface
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

// Este providedIn es una característica añadida a Angular la cual permite que los servicios
// puedan estar definidos en el momneto en que se contruye bunddle de la aplicación.
// NOTA: Y al especificar este providedIn: 'oot' en el decorador le dice a Angular que no importa en
//       que parte de la aplicación sea que estemos este servicio va a ser único y de manera global
//       en el root, y esto es magnífico porque evita que yo tenga que especificarlo en los providers
//       como lo habíamos visto en secciones anteriores. Adicionalmente si yo solo lo especifico dentro
//       de un módulo en específico, dicho servicio solo va a estar disponible en dicho módulo
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  // API Key que creamos en GHIPY Developers
  // Web Oficial: https://developers.giphy.com/
  private apiKey: string = 'IA8v6sH5FDxm1QlU1PLuagJqdsx5dtu6';

  // Creamos una propiedad privada para manejar los strings del litado o historia
  // que se muestra en nuestra aplicación
  private _historial: string[] = [];

  // Almacenamos la data que obtenemos de la api al realizar la busqueda
  public resultados: Gif[] = [];

  // Obtenemos el historial y rompemos la relación usando los spreds "..."
  // para regresar un nuevo arreglo como habíamos visto en videos anteriores 
  // y que sirve para que evitemos alterar la propiedad de manera herrada y alteremos 
  // el arreglo original
  get historial(){

    return [...this._historial];

  }

  // Inyectamos el servicio que viene en el modulo de angular y que me permite hacer peticiones http
  constructor( private http: HttpClient ){ }

  // Creamos la función para insertar valores al hitorial
  // Y obligamos a que la función siempre va a tener un valor
  // y lo estoy indicando cuando coloco el igual a '';
  buscarGifs( query: string = '' ) {

    // Ahora ya que al ingresar la misma palabra en minúscula o mayúscula e teoría son diferentes
    // pero no quiero que esto suceda ya que dicen lo mismo, entonces lo que voya a hacer es validar 
    // para convertir y almacenar todo en minúscula.
    // NOTA: Uso el trim() para borrar espacios adelante y atrás
    query = query.trim().toLocaleLowerCase();

    // Validamos para evitar ingresar valores repetidos, y para eso preguntamos que si no lo 
    // incluye lo inserte, de lo contrario no hace nada. Es decir lo voy a insertar si y solo 
    // si no existe.
    if ( !this._historial.includes( query ) ) {

      // Insertamos al inicio con unshift
      this._historial.unshift( query );
      // NOTA: Limitamos la cantidad de inserciones que tenemos en el historial a 10.
      //       Hay varias formas de hacer esto, pero una sencilla es que cuando alguien
      //       intente obtener el historial, lo podemos cortar con splice
      this._historial = this._historial.splice( 0, 10 );

    }

    // Usamos un objeto de Angular que nos permite hacer peticiones http,
    // por lo tanto en nuestro app.module.ts importamos el modulo para las
    // peticiones http. Y posteriormente vamos a usar un observador.
    // NOTA: El subscribe se va a ejecutar cuando tengamos la resolución del get
    // NOTA 2: Ahora ajustamos el get para que no sea de tipo generico y le asignamos la interface
    //         y de esta manera evitamos cometer errores con la data
    this.http.get <SearchGifsResponse> ( `https://api.giphy.com/v1/gifs/search?api_key=IA8v6sH5FDxm1QlU1PLuagJqdsx5dtu6&q=${ query }&limit=10` )
        .subscribe( ( resp ) => {
          console.log( resp.data );
          this.resultados = resp.data;
        });

    console.log( this._historial );

  }

}
