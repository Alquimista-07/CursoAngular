import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  // Para evitar errores ya que se pasan por referencia por eso lo hacemos privado
  private _regiones: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];

  get regiones(): string[] {
    // Usamos el spred para crear un nuevo arreglo desestructurado con el fin 
    // de que si hago modificaciones accidentales a la propiedad no voy a tocar
    // la original
    return [...this._regiones];
  }

  constructor() { }
}
