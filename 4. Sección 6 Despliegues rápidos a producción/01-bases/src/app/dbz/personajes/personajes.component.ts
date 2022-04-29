import { Component } from '@angular/core';

// Importamos la interface
import { Personaje } from '../interfaces/dbz.interface';

// Importamos el servicio
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  
  // Accedemos a los personajes retornando el getter que se creo en el servicio
  get personajes(){
    return this.dbzService.personajes;
  }

  // Definimos el constructor y hacemos una inyección de dependencias para inyectar el servicio
  constructor( private dbzService: DbzService ){}

}
