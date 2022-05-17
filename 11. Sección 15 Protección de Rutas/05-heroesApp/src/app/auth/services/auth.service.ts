import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    // Lo desestructuro para asegurarme de que no me va a cambiar 
    // el objeto accidentalmente de alguna manera
    return { ...this._auth! };
  }

  constructor( private http: HttpClient ) { }

  login() {
    const url = `${ this.baseUrl }/usuarios/1`;
    return this.http.get<Auth>( url )
               .pipe(
                 // Ahora para almacenar la información del usuario logueado
                 // lo vamos a pasar por el operador tap que sirve para generar
                 // efectos secundarios, es decir, cuando se haga la petición antes 
                 // de llegar al subscribe que esta en el login.component.ts va 
                 // a pasar por el tap
                 tap( auth => this._auth = auth )
               );
  }

  logout() {

    // Purgamos el objeto _auth
    this._auth = undefined

  }

}
