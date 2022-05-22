import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Importamos el servicio de validaciones personalizado que se creó
import { ValidatorService } from 'src/app/shared/validator/validator.service';

// NOTA: Esto a la final se comento ya que se prefirió hacerlo a través de un servicio
/*
// Importamos las validaciones de nuestro archivo de validaciones.ts
import { emailPattern, regexNombreApellido } from 'src/app/shared/validator/validaciones';
import { noPuedeSerAlcehmist } from '../../../shared/validator/validaciones';
*/

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  // Creamos la definición del formulario
  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.pattern( this.vs.regexNombreApellido ) ] ],
    email: [ '', [ Validators.required, Validators.pattern( this.vs.emailPattern ) ] ],
    username: [ '', [ Validators.required, this.vs.noPuedeSerAlcehmist ] ]
    // NOTA: La siguiente línea de código es un ejemplo de como se haría usando el archivo de validators.ts y no el servicio
    //       para el cual las importaciones necesarias también se dejaron comentadas a modo de ejemplo
    // username: [ '', [ Validators.required, noPuedeSerAlcehmist ] ]
  });

  // Inyectamos el FormBuilder
  constructor( private fb: FormBuilder,
               private vs: ValidatorService ) { }

  ngOnInit(): void {
    // Establecemos uns valores al formulario para no estar diligenciando a cada rato
    this.miFormulario.reset({
      nombre: 'Ariadna Hernandez',
      email: 'test1@test.com',
      username: 'The Alchemist'
    })
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
