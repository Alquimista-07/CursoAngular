import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

// NOTA: Si en nuestra aplicación usamos Lazyload debemos usar tanto el CanLoad como el CanActivate,
//       pero si la aplicación no usa lazyload con el CanActivate es más que suficiente.

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor( private authService: AuthService,
               private router: Router ) {}

  // Este método sirve para verificar si el usuario puede ingresar a una ruta determiada
  canActivate(): Observable<boolean> | boolean {

    // console.log('canActivate');

    return this.authService.validarToken()
    // Ahora si no es valido tengo que sacar y redirigir al usuario al login, para ello
    // usamos los operadores de rxjs
      .pipe(
        tap(valid => {
          if ( !valid ){
            this.router.navigateByUrl('/auth');
          }
        })
      );

  }
  
  // Este método se usa cuando se tienen modulos con carga perezosa e indica si se puede cargar un módulo, pero este solo sirve para prevenir que el usuario cargue el modulo, 
  // ya que si dicho modulo previamente se encontraba cargado la persona va a poder ingresar ya que el canLoad esto es lo que restringe, solo si puede cargar el modulo pero
  // no restringe si puede activar la ruta.
  canLoad(): Observable<boolean> | boolean {

    // console.log('canLoad');

    return this.authService.validarToken()
    // Ahora si no es valido tengo que sacar y redirigir al usuario al login, para ello
    // usamos los operadores de rxjs
    .pipe(
      tap(valid => {
        if ( !valid ){
          this.router.navigateByUrl('/auth');
        }
      })
    );

  }

}
