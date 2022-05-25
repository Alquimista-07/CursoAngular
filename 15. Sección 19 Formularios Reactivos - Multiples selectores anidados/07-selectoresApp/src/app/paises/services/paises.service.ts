import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaiseSmall, PaisV2Small } from '../interfaces/paises.interface';
import { combineLatest, Observable, of } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _baseUrl: string = environment.baseUrl;
  private _baseV2Url: string = environment.baseV2Url;

  // Para evitar errores ya que se pasan por referencia por eso lo hacemos privado
  private _regiones: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];

  get regiones(): string[] {
    // Usamos el spred para crear un nuevo arreglo desestructurado con el fin 
    // de que si hago modificaciones accidentales a la propiedad no voy a tocar
    // la original
    return [...this._regiones];
  }

  // Inyectamos el servicio para las peticiones http
  constructor( private http: HttpClient ) { }

  // Creamos un servicio que lea la región y traiga los valores que devuelve el endpoint
  getPaisesPorRegion( region: string ): Observable<PaiseSmall[]> {
    
    const url = `${this._baseUrl}/region/${region}?fields=cca3,name`;
    
    return this.http.get<PaiseSmall[]>( url );

  }

  // Creamos el servicio para consultar pais por codigo
  getPaisPorCodigo( codigo: string ): Observable<Pais[] | null > {

    // Si no recibimos el codigo retornamos un objeto
    if( !codigo ){
      // Ahora retornamos null como un nuevo observable usando el operador of de rxjs.
      // Adicionalmente hay que indicarle al metodo que puede retornar un observable o
      // null para que no marque error.
      return of(null);
    }

    const url = `${this._baseUrl}/alpha/${codigo}`;

    return this.http.get<Pais[]>( url );

  }

  // Creamos el servicio para consultar los codigos de paises con solo
  // la información necesaria
  getPaisPorCodigoSmall( codigo: string ): Observable<PaisV2Small> {

    const urlV2 = `${this._baseV2Url}/alpha/${codigo}?fields=alpha3Code,name`;

    return this.http.get<PaisV2Small>( urlV2 );

  }

  // Ahora nos creamos un servicio que reciba el arreglo completo de las fronteras que sabemos que corresponden
  // a un código de 3 letras para posteriormente con estos codigos se genere una colección de peticiones que van 
  // a ser ejecutadas de manera simultanea con el fin de obtener la información de cada codigo y de esta manera
  // obtenere el nombre para llenar los selectores de fronteras
  getPaisesPorCodigos( borders: string[] ): Observable<PaisV2Small[]>{

    if( !borders ){
      return of([]);
    }

    // Ahora creamos un arreglo para almacenar las peticiones pero sin disparalas aún
    // adicionalmente si no se colocan [] indicaría que es una sola petición, pero como 
    // se había mencionado es una colección de peticiones por eso se debe indicar que es
    // un arreglo usando las [], es decir ahora tenemos un arreglo de observables que van
    // a emitir cada uno de ellos algo de tipo PaisV2Small
    const peticiones: Observable<PaisV2Small>[] = [];

    // Ahora barremos cada uno de los elementos de los borders para llenar las peticiones
    borders.forEach( codigo => {
      // Recordando que los observables para que se disparen tenemos que llamar el .subscribe
      // pero como queremos es que se almacene la petición no usamos el subscribe
      const peticion = this.getPaisPorCodigoSmall( codigo );
      // Ahora si la constante la insertamos en las peticiones
      peticiones.push( peticion );
    });

    // Luego cuando se termine el ciclo vamos a tener lleno el arreglo de observables
    // con las peticiones que se deben disparar, entonces procedemos a ejecutarlas usando
    // un operador de rxjs el cual permite disaparar todas las peticiones de manera
    // simultanea
    return combineLatest( peticiones );

  }

}
