import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator.service';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

// Importamos el sweet alert
import Swal from 'sweetalert2';

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
               private router: Router,
               private authService: AuthService ) { }


  registrar() {

    const { name, email, password } = this.miFormulario.value;

    this.authService.registro( name, email, password )
        .subscribe( registro =>{
          
          if( registro === true ){
            
            // Anteriormente se había usado el método navigate pero ahora usamos uno nuevo que funciona 
            // igual que el navigate
            this.router.navigateByUrl('/dashboard');

          }
          else{
            Swal.fire('Error', registro, 'error');
          }

        });

  }

}
