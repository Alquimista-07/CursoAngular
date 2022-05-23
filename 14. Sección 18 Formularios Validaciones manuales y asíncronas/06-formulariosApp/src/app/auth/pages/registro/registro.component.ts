import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Importamos el servicio de validaciones personalizado para el email que se creó
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
// Importamos el servicio de validaciones personalizado que se creó
import { ValidatorService } from 'src/app/shared/validator/validator.service';

// NOTA: Esto a la final se comento ya que se prefirió hacerlo a través de un servicio
/*
// Importamos las validaciones de nuestro archivo de validaciones.ts
import { emailPattern, regexNombreApellido } from 'src/app/shared/validator/validaciones';
import { noPuedeSerAlcehmist } from '../../../shared/validator/validaciones';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';
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
    email: [ '', [ Validators.required, Validators.pattern( this.vs.emailPattern ) ], [ this.emailValidator ] ],
    username: [ '', [ Validators.required, this.vs.noPuedeSerAlcehmist ] ],
    // NOTA: La siguiente línea de código es un ejemplo de como se haría usando el archivo de validators.ts y no el servicio
    //       para el cual las importaciones necesarias también se dejaron comentadas a modo de ejemplo
    // username: [ '', [ Validators.required, noPuedeSerAlcehmist ] ]
    //
    // Creamos los campos para las contraseñas
    password: [ '', [ Validators.required, Validators.minLength(6) ] ],
    password2: [ '', [ Validators.required ] ]
  }, {
    // Este otro objeto son opciones que le podemos mandar al form group
    // esto con el fin de validar el formulario completo.
    // Acá dentro de las opciones tenemos los validores asíncronos que reciben información que funciona a destiempo y los síncronos
    validators: [
      this.vs.camposIguales( 'password', 'password2' )
    ]

  });


  // Inyectamos el FormBuilder
  constructor( private fb: FormBuilder,
               private vs: ValidatorService,
               private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {
    // Establecemos uns valores al formulario para no estar diligenciando a cada rato
    this.miFormulario.reset({
      nombre: 'Ariadna Hernandez',
      email: 'test1@test.com',
      username: 'The Alchemist',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.controls[campo]?.touched;
  }

  // NOTA: Se creó un getter para refactorizar y validar los mensajes de error del email y mostrar el texto de error 
  //       de forma personalizado y de manera condicional.
  get emailErrorMsg(): string {
    
    const errors = this.miFormulario.get('email')?.errors;

    if( errors?.['required'] ) {
      return 'Email es obligatorio';
    }
    else if( errors?.['pattern'] ){
      return 'El valor ingresado no tiene formato de correo electrónico';
    }
    else if( errors?.['emailTomado'] ) {
      return 'El correo electrónico ya se encuentra registrado';
    }

    return '';

  }

  submitFormulario() {
    console.log( this.miFormulario.value );
    this.miFormulario.markAllAsTouched();
  }

}
