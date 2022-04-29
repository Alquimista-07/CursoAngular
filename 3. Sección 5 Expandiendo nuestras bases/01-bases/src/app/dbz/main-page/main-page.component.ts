import { Component } from '@angular/core';

// Importamos la interface
import { Personaje } from '../interfaces/dbz.interface';

// Importamos el servicio
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // Tarea: Definimos el nuevo acá con el valor por defecto que se quiere pasar al main.page.hml 
  //        para que posteriormene lo pase por el input al componente agregar.component.ts
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // Definimos el constructor
  constructor(){}


}
