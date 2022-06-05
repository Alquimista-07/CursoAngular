import { Component } from '@angular/core';

// Importamos el form builder para trabajar con formularios reactivos
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator.service';
import { Router } from '@angular/router';

// Importamos el servicio que creamos para manejar la autenticación
import { AuthService } from '../../services/auth.service';

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
               private vs: ValidatorService,
               private router: Router,
               private authService: AuthService ) { }

  login() {
    console.log( this.miFormulario.value );
    // console.log( this.miFormulario.valid );

    // Extraemos los valores del formulario
    const { email, password } = this.miFormulario.value;

    this.authService.login( email, password )
        .subscribe( resp => {
          console.log( resp )
        });

    // Anteriormente se había usado el método navigate pero ahora usamos uno nuevo que funciona 
    // igual que el navigate
    // this.router.navigateByUrl('/dashboard');

  }

}
