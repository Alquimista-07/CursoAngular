import { Injectable } from '@angular/core';


// Importamos el modulo para hacer peticiones http
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Importamos el operador map de rxjs
import { catchError, map } from 'rxjs/operators';
// Importamos el operado of de rxjs que sirve para retornar la respuesta en un observable
import { Observable, of, tap } from 'rxjs';

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
            // Cuando tenenmos una respuesta correcta y se puede iniciar sesión procedemos a almacenar el JWT en el 
            // localstorage o en el session storage
            sessionStorage.setItem('token', resp.token! );
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

  // Creamos un metodo que sirva para verificar el JWT
  validarToken(): Observable<boolean> {

    // Como en el guard ocupamos un observable que resuelve un boolean entonces necesitamos
    // realizar una transformación en el metodo validarToken para que el valor que le llegue
    // sea del mismo tipo ya que acá anteriormente retornabamos un observable que resolvia un
    // objeto, por lo tanto para realizar dicha transformación ocupamos usar el operador map de rxjs
    const url  = `${this._baseUrl}/auth/renew`;

    // Creamos una constante para el header del x-token,
    // entonces obtenemos el valor del localstorage o el session storage y se lo pasamos
    // adicionalmente como puede ser vacío le indicamos el || ''
    const headers = new HttpHeaders()
      .set('x-token', sessionStorage.getItem('token') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
      .pipe(
        map( resp => {

          // Cuando tenemos una respuesta correcta y se puede iniciar sesión procedemos a almacenar el JWT en el 
          // localstorage o en el session storage
          sessionStorage.setItem('token', resp.token! );
          // Y como es true establecemos la información al usuario
          this._usuario = {
            // Acá como ya sabemos que se realizo la verificación para que no marque el error de que pueden venir vacíos usamos el ! ya que la verificación ya la
            // tenemos y sabemos que no vienen vacios
            name: resp.name!,
            uid: resp.uid!
          }

          return resp.ok;
        }),
        // Si se da un error que ya sabemos que en el backend es un status 401 Unauthorized mandamos un false
        // para que el guard sepa que no esta autorizado y lo saque a la pantalla que definimos en el guard
        // para redirigirlo
        catchError( err => of(false) )
      );

  }

  logout() {

    //Destruimos el item específico correspondiente al token para cerrar la sesión
    sessionStorage.removeItem('token');

    // Adicionalmente también podemos purgar todo lo que se encuentre en el localstorage o en el
    // session storage, pero hay que tener en cuenta que si tenemos algo que quisieramos persistir 
    // lo borraría, entonces para purgar todo se haría de la siguiente forma:
    /*
    sessionStorage.clear();
    */

  }

}
