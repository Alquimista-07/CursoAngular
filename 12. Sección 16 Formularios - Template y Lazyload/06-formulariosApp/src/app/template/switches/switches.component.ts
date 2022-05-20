import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  // Creamos una propiedad para los radios y el switch
  persona = {
    genero: '',
    notificaciones: true
  }

  // Creaos una propiedad independiete para el check de los términos y condiciones
  terminosYCondiciones: boolean = false;

}
