import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// Importamos el operador map de rxjs
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  // Inyectamos el http para poderlo usar
  constructor( private http: HttpClient ) { }
  
  baseUrl = environment.baseUrl;

  // Creamos un método praa traer la información
  getUsuariosRedesSociales() {
    const url = `${this.baseUrl}/grafica`;
    return this.http.get(url);
  }

  // Creamos un método ahora para otener la información usando Rxjs
  getUsuarioRedesSocialesDonaData() {
    return this.getUsuariosRedesSociales()
               .pipe(
                // Usamos otro operador de rxjs para colocar un pequeño retardo y observar el loading
                // que se tiene en el componente html
                delay(1500),
                // Entonces vamos a usar el operador map el cual nos permite tomar la respuesta de un observable
                // y retornar cualquier cosa que se necesite
                map( data => {
                  // return 'Hola Mundo';
                  const labels = Object.keys( data );
                  const valores = Object.values( data );
                  return { labels, valores };
                })
               )
  }

}
