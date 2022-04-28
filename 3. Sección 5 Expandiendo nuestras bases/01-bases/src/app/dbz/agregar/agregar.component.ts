import { Component, Input, Output, EventEmitter } from '@angular/core';

// Tarea: Importamos la interface
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  // Tarea: Recibir el arreglo de personajes como un @Input
  // @Input() personajes: Personaje[] = [];

  // Tarea: Mover nuevo y agregar al componente agregar,
  // adicionalmentetambién colocarlo como un @Input
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // EL @Output sirve para emitir eventos
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {

    // Acá el .trim() sirve para borrar espacios en blanco
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    console.log('Hey!!!... Esta es una prueba');
    console.log(this.nuevo);

    // Emitimos el evento
    this.onNuevoPersonaje.emit( this.nuevo );

    // Tarea: Insertar al objeto personajes
    // this.personajes.push(this.nuevo);

    // Tarea: Inicializarlo a un objeto vacio sin nombre y poder en cero
    this.nuevo = {
      nombre: '',
      poder: 0
    };

    // console.log( this.personajes );

  }

  // cambiarNombre( event: any ){
  //   console.log( event.target.value );
  // }

}
