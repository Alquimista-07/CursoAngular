import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  // Definimos el objeto par ael formulario y validomos
  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ]
  });

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
