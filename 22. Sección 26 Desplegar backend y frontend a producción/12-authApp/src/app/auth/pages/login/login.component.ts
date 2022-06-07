import { Component } from '@angular/core';

// Importamos el form builder para trabajar con formularios reactivos
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator.service';
import { Router } from '@angular/router';

// Importamos el sweet alert
import Swal from 'sweetalert2';

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

    // Extraemos los valores del formulario
    const { email, password } = this.miFormulario.value;

    this.authService.login( email, password )
        .subscribe( valido => {

          // Entonces como en el servicio ya tenemos la información del usuairo entonces validamos
          // Entonces acá es necesario preguntar si es true ya que como se tenía anteriormente validaba si el
          // objeto tenía información y como desde el servicio ahora le mandamos todo el error entonces
          // si no lo dejamos con el === true nos va a navegar al dashboard
          if( valido === true ) {

            // Entonces si esta ok navegamos al dashboard

            // Anteriormente se había usado el método navigate pero ahora usamos uno nuevo que funciona 
            // igual que el navigate
            this.router.navigateByUrl('/dashboard');

          }
          else {
            // Entonces para mostrar los mensajes de error vamos a usar sweet alert 2
            // el cual es necesario instalarlo a trvés de npm o usando su cdn. Para este
            // caso lo vamos a instalar y para ello es necesario ejecutar el siguiene comando:
            //
            // npm install sweetalert2
            //
            // Para ver más información sobre el sweet alert 2 podemos ir a la documentación oficial
            // a través del siguiente enlace: https://sweetalert2.github.io/#download

            // Ahora usamos el sweet alert y le pasamos como segundo parámetro el string que viene del servicio
            // authService que ya sabemos que solo estamos enviando el err.error.msg con el operador catchError
            // de rxjs y esto ya nos muestra los mensajes de error que nos devuelve el backend.
            Swal.fire('Error', valido, 'error');
          }

        });


  }

}
