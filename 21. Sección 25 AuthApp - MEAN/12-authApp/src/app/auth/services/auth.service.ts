import { Injectable } from '@angular/core';

// Importamos el modulo para hacer peticiones http
import { HttpClient } from '@angular/common/http';
// Importamos el environment para usar las variables de entorno
import { environment } from 'src/environments/environment';
// Importamos la interface que creamos para nuestro login
import { AuthResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Creamos la propiedad para la base de la url
  private _baseUrl: string = environment.baseUrl;

  // Inyectamos el servicio para hacer peticiones http
  constructor( private http: HttpClient ) { }

  // Creamos el método que realiza la peticón al servicio del login en el backend
  login( email: string, password: string ) {

    const url  = `${this._baseUrl}/auth`;
    const body = { email, password };

    // Ahora tenemos que enviar la url y el body de la petición.
    // NOTA: Hay que recordar que para que una peitición se dispare necesitamos el método subscribe,
    //       pero no me voy a suscribir acá en el login sino que me voy a suscribir en donde sea que
    //       llame el méotodo login entonces para esto lo voy a retornar para que retorne el observable
    return this.http.post<AuthResponse>( url, body );

  }

}
