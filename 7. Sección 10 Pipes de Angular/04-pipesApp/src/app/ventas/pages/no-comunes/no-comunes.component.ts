import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Ariadna';

  // Entonces para determinar el género y cambiar las palabras que contengan género
  // necesitamos hacer lo siguiente:
  genero: string = 'femenino';

  // Como el pipe i18nSelect recibe obligatoriamente otro argumento el cual es el mapping,
  // nosotros debemos definir un objeto con las propiedades que queremos que se muestren en 
  // este caso dependiendo del genero.
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

}
