import { Injectable } from '@angular/core';
import { PlacesApiCLient } from '../api';

//Importamos la interface places response
import { Feature, PlacesResponse } from '../interfaces/places';
import { MapService } from './map.service';

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

  // cambiamos el httClient para usar el custom http client (placesApiClient.ts) que nos permite más control
  constructor( private placesApiClient: PlacesApiCLient,
               private mapService: MapService ) { 
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
    
    if( query.length === 0 ){
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    if( !this.userLocation ) throw Error('No Hay UserLocation');

    this.isLoadingPlaces = true;

    const url = `/${ query }.json`;

    this.placesApiClient.get<PlacesResponse>( url, {
      params: {
        proximity: this.userLocation.join(',')
      }
    })
      .subscribe( places => {
        // console.log(places.features);
        this.isLoadingPlaces = false;
        this.places = places.features;

        // Llamamos el metodo que crea los marcadores en el mapa
        this.mapService.createMarkersFromPlaces( this.places, this.userLocation! );
      });

  } 

  deletPlaces(){
    this.places = [];
  }

}
