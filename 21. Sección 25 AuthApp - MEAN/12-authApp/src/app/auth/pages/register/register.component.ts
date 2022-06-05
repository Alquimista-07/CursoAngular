import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator.service';
import { Router } from '@angular/router';

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
               private vs: ValidatorService,
               private router: Router ) { }


  registrar() {
    console.log( this.miFormulario.value );
    // console.log( this.miFormulario.valid );

    // Anteriormente se había usado el método navigate pero ahora usamos uno nuevo que funciona 
    // igual que el navigate
    this.router.navigateByUrl('/dashboard');
  }

}
