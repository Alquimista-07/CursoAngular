import { Injectable } from '@angular/core';


// Importamos el modulo para hacer peticiones http
import { HttpClient } from '@angular/common/http';

// Importamos el operador map de rxjs
import { catchError, map } from 'rxjs/operators';
// Importamos el operado of de rxjs que sirve para retornar la respuesta en un observable
import { of, tap } from 'rxjs';

// Importamos el environment para usar las variables de entorno
import { environment } from 'src/environments/environment';
// Importamos la interface que creamos para nuestro login
import { AuthResponse, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Creamos la propiedad para la base de la url
  private _baseUrl: string = environment.baseUrl;

  // Creamos una propiedad para almacenar la información del usuario,
  // y le colocamos el ! para que no no marque el error de que no esta
  // inicializado ya que de esto nos vamos a encargar y de garantizar luego
  private _usuario!: Usuario;

  // Creamos un getter para el usuario
  get usuario() {
    // Y lo mandamos desestructurado para evitar alterar el objeto en algún punto por error
    return { ...this._usuario };
  }

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
    return this.http.post<AuthResponse>( url, body )
    .pipe(
        // NOTA: Ojo el orden de los operadores es importante ya que el anterior operador le pasa el producto de la respuesta al siguiente y así sucesivamente
        tap( resp => {
          if( resp.ok ){
            // Si es true establecemos la información al usuario
            this._usuario = {
              // Acá como ya sabemos que se realizo la verificación para que no marque el error de que pueden venir vacíos usamos el ! ya que la verificación ya la
              // tenemos y sabemos que no vienen vacios
              name: resp.name!,
              uid: resp.uid!
            }
          }
        }),
        // Realizamos la putación de la data y retornar un true si esta bien o un false si esta mal
        map( resp => resp.ok ),
        // Ahora como el backen nos devuelve un estatus 400 bad Request entonces necesitamos atrapar el
        // error y para ello ocupamos usar otro operador de rxjs que es el catchError, y adicionalmente
        // como no podemos igualar directamente que retorne un false ya que debe ser un observable entonces
        // usamos otro operador de rxjs que es el of para transformarlo en un observable
        catchError( err => of(err.error.msg) )
      );

  }

}
