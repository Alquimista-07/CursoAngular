import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Importamos la interface places response
import { Feature, PlacesResponse } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // Definimos propiedades
  public userLocation?: [ number, number ];

  public isLoadingPlaces: boolean = false;

  // Creamos una propieda para almacenar los resultados
  public places: Feature[] = [];

  // Creamos un getter con el cual vamos a determinar si el userLocation está listo
  get isUserLocationReady(): boolean {
    // Ahora si colocamos un solo signo de ! significa que el userLocation no tiene ningún
    // valor pero yo quiero lo opuesto y quiero que si tenga un valor y que unicamente
    // sea true cuando tenga un valor por lo tanto esa es la razón por la que se especifica
    // con dos signos de !!
    return !!this.userLocation;
  }

  // Como vamos a usar peticiones http es necesario inyectar el modulo
  constructor( private http: HttpClient ) { 
    // Llamamos el método para obtener la geolocalización tan pronto alguien use el servicio
    // places.service.ts
    this.getUserLocation();
  }

  // Creamos un método que me sirva para saber cuando ya tengo la geolocalización.
  // Desafortunadamente el getCurrentPostion del navigator.geolocation no trabaja en base a promesas ni observables
  // por lo cual es necesario hacer un tipo de ajuste o conversión para que esto sea una promesa y podemos saber cuando
  // se cumplio esto entonces por eso indicamos al metodo que es async y adicionalmetne le especificamos que retorna una
  // promesa
  public async getUserLocation(): Promise<[number,number]>{

    return new Promise( (resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        // Definimos que va a pasar cuando tengamos la localización. Entonces tenemos el siguiente callback
        // Que tiene el cords y timestamp peros solo me interesan las coords entonces desestructuramos.
        ( { coords } ) => {
          // Adicionalmente mandamos primero la longitud y luego la latitud ya que mapbox trabaja de esta manera a deferencia de Google Maps
          this.userLocation = [ coords.longitude, coords.latitude ];
          resolve( this.userLocation );
        },
        ( error ) => {
          alert('No se pudo obtener la geolocalizción');
          console.log( error );
          reject();
        }
      );

    });
    
  }

  //Creamos un metodo para hacer la petición http al servicio de mapbox
  // NOTA: En mapbox existe ya la api para hacer busquedas, entonces para 
  //       usarlo simplement nos vamos a la cuenta de mapbox, documentation,
  //       buscamos searchs y luego damos click donde dice Geocoding API.
  //       Y ahí procedemos a configurar los parametros como la ciudad, proximidad,
  //       idioma y limite de resultados para obtener toda una url a la cual se 
  //       realiza la petición y que podemos validar con Postman.
  getPlacesByQuery( query: string = '' ){
    // TODO: Evaluar cuando el query es nulo

    this.isLoadingPlaces = true;

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ query }.json?proximity=-74.04509074027611%2C4.76147855297377&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1IjoidGhlYWxjaGVtaXN0MDciLCJhIjoiY2wzbTVkNm1pMDFhYzNvdXZrMGk5MGRiYiJ9.pOxa86N0FzW03dQiFKcQKA`;

    this.http.get<PlacesResponse>( url )
        .subscribe( places => {
          this.isLoadingPlaces = false;
          this.places = places.features;
        });

  } 

}
