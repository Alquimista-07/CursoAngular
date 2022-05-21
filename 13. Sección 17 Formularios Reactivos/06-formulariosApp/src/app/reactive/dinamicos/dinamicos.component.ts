import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  // Definimos el objeto par ael formulario y validomos
  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    // Entonces inicialmente definimos a través del form builder un array que va a contener un arreglo
    favoritos: this.fb.array( [
      // Posteriormente vamos acá adentro tenemos colecciones de form control que se pueden definir simplemente al colocar []
      [ 'Metal Gear', Validators.required ],
      [ 'Call of Dutty', Validators.required ]
    ], Validators.required )
  });

  get favoritosArr() {
    // Existe otra forma de tomar un control sin tener que hacer this.miFormulario.controls['favoritos'] el cual es el 
    // método get que se muestra a continuación.
    // NOTA: Al colocar el as FormArrya le estamos ayudando a TypesCruip a que entienda que el elemento es un FormArray
    //       y no un control
    return this.miFormulario.get( 'favoritos' ) as FormArray;
  }

  // Inyectamos el servicio
  constructor( private fb: FormBuilder ) { }

  // Validamos para mostrar el menaje
  campoEsValido ( campo: string ) {
    return this.miFormulario.controls[ campo ].errors &&
           this.miFormulario.controls[ campo ].touched;
  }

  guardar() {

    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log( this.miFormulario.value );
    this.miFormulario.reset();

  }

}
