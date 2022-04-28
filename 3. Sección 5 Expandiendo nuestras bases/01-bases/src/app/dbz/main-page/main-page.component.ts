import { Component, OnInit } from '@angular/core';

// Importamos la interface
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar(){

    // Acá el .trim() sirve para borrar espacios en blanco
    if( this.nuevo.nombre.trim().length === 0){
      return;
    }

    console.log( 'Hey!!!... Esta es una prueba' );
    console.log( this.nuevo );

    // Tarea: Insertar al objeto personajes
    this.personajes.push( this.nuevo );

    // Tarea: Inicializarlo a un objeto vacio sin nombre y poder en cero
    this.nuevo = {
      nombre: '',
      poder: 0
    };

  }

  // cambiarNombre( event: any ){
  //   console.log( event.target.value );
  // }

}
