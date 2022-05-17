import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

// Importamos el servicio
import { AuthService } from '../services/auth.service';

// NOTA: Al generar este archivo nos solicita que seleccionemos los métodos que queremos usar,
//       en este caso vamos a usar el CanActivate y el CanLoad

// NOTA 2: Si en nuestra aplicación usamos Lazyload debemos usar tanto el CanLoad como el CanActivate,
//         pero si la aplicación no usa lazuload con el CanActivate es más que suficiente.

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  // Inyectamos el servicio de auth
  constructor( private authService: AuthService, 
               private router: Router ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    // El estado donde es el snapshop actual y al igual que el canLoad puede retornar un observable que emite un valor boolean,
    // o una promesa que resuelve un valor boolean o puede ser en si un valor boolean.
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.verificaAutenticacion()
                           .pipe(
                             tap( estaAutenticado => {
                               if( !estaAutenticado ) {
                                 this.router.navigate( ['./auth/login'] );
                               }
                             })
                           )

    //   if( this.authService.auth.id ) {
    //     return true;
    //   }
      
    //   console.log( 'Bloqueado por el AuthGuard - CanActivate' );

    // return false;
  }

  // Este método es si se puede cargar un módulo, y solo sirve para prevenir que el usuario cargue el modulo, ya que si ya estaba
  // previamente ccargado el modulo la persona va a poder ingresar ya que el canLoad esto es lo que restringe, solo si puede cargar
  // el modulo no si puede activar la ruta
  canLoad(
    route: Route,
    // Segmentso de tipo UrlSegment y puede retornar un observable que emite un valor boolean que indica si puede ingresar o no,
    // o una promesa que resuelve un valor boolean o puede ser en si un valor boolean.
    // NOTA: El Angular CLI no crea unos UrlTree los cuales se removieron ya que el instructor no lo ha usado
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      console.log( route );
      console.log( segments );

      return this.authService.verificaAutenticacion()
                             .pipe(
                               tap( estaAutenticado => {
                                 if( !estaAutenticado ) {
                                   this.router.navigate( ['./auth/login'] );
                                 }
                               })
                             )

    //   if( this.authService.auth.id ) {
    //     return true;
    //   }
      
    //   console.log( 'Bloqueado por el AuthGuard - CanLoad' );

    // return false;
  }
}
