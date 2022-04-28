import { Component, Input } from '@angular/core';

// Importamos la interface
import { Personaje } from '../interfaces/dbz.interface';

// Importamos el servicio
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // Ahora vamos a usar lo siguiente para pasarle información del componente padre 
  // al componente hijo
  // Ahora si quiero que externamente se llame de otra forma coloco dentro de '' el nombre
  // @Input('data') personajes: any[] = [];
  @Input() personajes: Personaje[] = [];

  // Definimos el constructor y hacemos una inyección de dependencias
  // en este caso inyectamos el servicio
  constructor( private dbzService: DbzService ){}

}
