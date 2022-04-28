import { Component } from '@angular/core';

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

  // Tarea: Definimos el nuevo acá con el valor por defecto que se quiere pasar al main.page.hml 
  //        para que posteriormene lo pase por el input al componente agregar.component.ts
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  agregarNuevoPersonaje( argumento: Personaje ){
    console.log( 'Main Page Component' );
    console.log( argumento );
    this.personajes.push( argumento );
  }


}
