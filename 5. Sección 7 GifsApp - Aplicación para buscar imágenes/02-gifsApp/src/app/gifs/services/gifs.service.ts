import { Injectable } from '@angular/core';

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

  // Creamos una propiedad privada para manejar los strings del litado o historia
  // que se muestra en nuestra aplicación
  private _historial: string[] = [];

  // Obtenemos el historial y rompemos la relación usando los spreds "..."
  // para regresar un nuevo arreglo como habíamos visto en videos anteriores 
  // y que sirve para que evitemos alterar la propiedad de manera herrada y alteremos 
  // el arreglo original
  get historial(){

    return [...this._historial];

  }

  // Creamos la función para insertar valores al hitorial
  buscarGifs( query: string ){

    // Insrtamos al inicio con unshift
    this._historial.unshift( query );

    console.log( this._historial );

  }

}
