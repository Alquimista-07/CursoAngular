import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, of, map } from 'rxjs';

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

  verificaAutenticacion(): Observable<boolean> {

    if( !localStorage.getItem( 'token' ) ) {
      // Aca usamos la función of de rxjs que sirve para crear observables en
      // base a la función que le coloquemos
      return of(false);

    }

    const url = `${ this.baseUrl }/usuarios/1`;

    return this.http.get<Auth>( url )
                .pipe(
                  // El operador map sirve para transformar lo que sea que se reciba del operador anterior o del observable
                  // y transformarlo y a su vez retornar un nuevo valor
                  map( auth => {
                    console.log('map', auth);
                    // Entonces ahora recuperamos la información del usuario para mostrar el nombre del usuario
                    // y en otros caso la demás información que necesitemos o usemos del objeto
                    this._auth = auth;
                    return true;
                  })
                );

  }

  login() {
    const url = `${ this.baseUrl }/usuarios/1`;
    return this.http.get<Auth>( url )
               .pipe(
                 // Ahora para almacenar la información del usuario logueado
                 // lo vamos a pasar por el operador tap que sirve para generar
                 // efectos secundarios, es decir, cuando se haga la petición antes 
                 // de llegar al subscribe que esta en el login.component.ts va 
                 // a pasar por el tap
                 tap( auth => this._auth = auth ),
                 tap( auth => localStorage.setItem( 'token', auth.id ) )
               );
  }

  logout() {

    // Purgamos el objeto _auth
    this._auth = undefined

  }

}
