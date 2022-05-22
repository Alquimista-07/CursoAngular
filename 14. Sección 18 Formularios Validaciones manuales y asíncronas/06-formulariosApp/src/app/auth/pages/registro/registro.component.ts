import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  //TODO: Temporal
  // Creamos la expresción regular donde el preimer () valida que es para el nombre y el otro () es para el apellido
  // La expresión valida que puede contener cualquier caracter de la a a la z múscula y de la A a la Z mayúscula y 
  // luego el + indica cualquier cantidad de caracteres
  regexNombreApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  // Creamos la definición del formulario
  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.pattern( this.regexNombreApellido ) ] ]
  });

  // Inyectamos el FormBuilder
  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.controls[campo]?.touched;
  }

  submitFormulario() {
    console.log( this.miFormulario.value );
    this.miFormulario.markAllAsTouched();
  }

}
