import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Importamos el servicio
import { AuthService } from '../services/auth.service';

// NOTA: Al generar este archivo nos solicita que seleccionemos los métodos que queremos usar,
//       en este caso vamos a usar el CanActivate y el CanLoad

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  // Inyectamos el servicio de auth
  constructor( private authService: AuthService ) { }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

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

      if( this.authService.auth.id ) {
        return true;
      }
      
      console.log( 'Bloqueado por el AuthGuard' );

    return false;
  }
}
