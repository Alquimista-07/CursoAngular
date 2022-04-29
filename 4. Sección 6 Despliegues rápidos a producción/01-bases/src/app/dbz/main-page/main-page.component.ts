import { Component } from '@angular/core';

// Importamos la interface
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // Definimos el nuevo acá con el valor por defecto que se quiere pasar al main.page.html
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // Definimos un constructor vacío
  constructor(){}


}
