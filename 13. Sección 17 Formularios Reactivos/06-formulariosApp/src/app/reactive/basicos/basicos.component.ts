import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // La idea de los formularios reactivos es que la parte del html se mantenga lo más limpia
  // posible y las validaciones y lógica se encuentren en la parte del componente TypeScript
  // Entonces como vamos a usar el formbuilder no ocupamos usar el formcontrol
  /*
  miFormulario: FormGroup = new FormGroup({
    'producto'   : new FormControl( 'RTX 4080Ti' ),
    'precio'     : new FormControl( 1500 ),
    'existencias': new FormControl( 5 )
  });
  */

  // Para trajar con el FormBuilder necesitmos crear la propiedad
  miFormulario: FormGroup = this.fb.group({
    // Y aparartir de acá es trabajar con el objeto literal
    // y debemos mandarlo en un arreglo porque deentro van las validaciones
    // y las validaciones asíncronas. Adicionalmente se le puede establecer
    // un valor por defecto
    producto: [ 'RTX 4080Ti' ],
    precio: [ 0 ],
    existencias: [ 0 ]
  });


  // El FormBuilder nos ayuda a crear formularios bastante complejos o muy grandes pero
  // que tenga la anotación de un objeto literal de JavaScript.
  // Entonces el FormBuilder es un servicio por lo tanto necesitamos inyectarlo
  constructor( private fb: FormBuilder ) { }



}
