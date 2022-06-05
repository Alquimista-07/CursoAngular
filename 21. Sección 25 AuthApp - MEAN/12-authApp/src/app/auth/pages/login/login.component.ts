import { Component } from '@angular/core';

// Importamos el form builder para trabajar con formularios reactivos
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    // Acá le vamos a colocar exactamente el nombre como lo espera la API (backend desarrollado anteriormente)
    email: [ 'test1@test.com', [ Validators.required, Validators.pattern( this.vs.emailPattern ) ] ],
    password: [ '123456', [ Validators.required, Validators.minLength(6) ] ]
  });

  constructor( private fb: FormBuilder,
               private vs: ValidatorService ) { }

  login() {
    console.log( this.miFormulario.value );
    console.log( this.miFormulario.valid );
  }

}
