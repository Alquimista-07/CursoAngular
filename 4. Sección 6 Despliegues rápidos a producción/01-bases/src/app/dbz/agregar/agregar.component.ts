import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  // Recibir el arreglo de nuevo como un @Input
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // Inyectamos el servicio
  constructor( private dbzService: DbzService ){}

  agregar() {

    // Acá el .trim() sirve para borrar espacios en blanco
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // Ya con el servicio importado e inyectado podemos hacer referencia al método agregarPersonaje
    this.dbzService.agregarPersonaje( this.nuevo );

    // Inicializamos el nuevo a un objeto vacio sin nombre y poder en cero
    this.nuevo = {
      nombre: '',
      poder: 0
    };

  }
  
}
