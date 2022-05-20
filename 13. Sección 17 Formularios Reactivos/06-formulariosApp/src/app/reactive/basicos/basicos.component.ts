import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // La idea de los formularios reactivos es que la parte del html se mantenga lo más limpia
  // posible y las validaciones y lógica se encuentren en la parte del componente TypeScript

  miFormulario: FormGroup = new FormGroup({
    'producto': new FormControl( 'RTX 4080Ti' )
  });

  constructor() { }


}
