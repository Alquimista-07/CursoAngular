import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// NOTA: Como necesitamos hacer una petición http para verificar que el email no exista
//       no podemos simplemente enviarlo como el tercer parámetro del arreglo de validaciones
//       entonces para esto ocupamos primero crear un servicio que me haga la petición http, me
//       devuelva una respuesta para validar, adicionalmente si no ocuparamos hacer peticiones http
//       si podríamos mandar el tercer argumento del arreglo de validaciones al campo como se ha hecho
//       con las validaciones síncronas.

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor( private http: HttpClient ) { }

  // Este metodo porpio del AsyncValidator puede retornar con una promesa o un observable
  // en este caso no se va a hacer con la promesa sino con un observable
  validate( control: AbstractControl ): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log( email );
   
    // Acá el tipado lo podemos colocar pero para el ejercicio no importa mucho entonces por eso
    // se deja de tipo any
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
                    .pipe(
                      map( resp => {
                        return ( resp.length === 0 )
                          ? null 
                          : {
                            emailTomado: true
                          }
                      })
                    );

  }
}
