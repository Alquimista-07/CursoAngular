import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  texto1: string = 'Campo requerido';
  color: string = 'red';

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', Validators.required ]
  });

  // Inyectamos el servicio del FormBuilder
  constructor( private fb: FormBuilder ) { }

  tieneError( campo: string ): boolean{
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.texto1 = 'Required Field';
  }

  cambiarColor() {
    this.color = 'green';
  }

}
