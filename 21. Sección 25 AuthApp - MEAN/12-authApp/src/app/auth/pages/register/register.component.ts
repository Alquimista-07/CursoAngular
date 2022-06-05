import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    // Acá le vamos a colocar exactamente el nombre como lo espera la API (backend desarrollado anteriormente)
    name: [ 'Test 1', [ Validators.required ] ],
    email: [ 'test1@test.com', [ Validators.required, Validators.pattern( this.vs.emailPattern ) ] ],
    password: [ '123456', [ Validators.required, Validators.minLength(6) ] ]
  });

  constructor( private fb: FormBuilder,
               private vs: ValidatorService ) { }


  registrar() {
    console.log( this.miFormulario.value );
    console.log( this.miFormulario.valid );
  }

}
