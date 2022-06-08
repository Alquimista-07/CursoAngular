import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // Definimos propiedades
  public userLocation?: [ number, number ];

  // Creamos un getter con el cual vamos a determinar si el userLocation está listo
  get isUserLocationReady(): boolean {
    // Ahora si colocamos un solo signo de ! significa que el userLocation no tiene ningún
    // valor pero yo quiero lo opuesto y quiero que si tenga un valor y que unicamente
    // sea true cuando tenga un valor por lo tanto esa es la razón por la que se especifica
    // con dos signos de !!
    return !!this.userLocation;
  }

  constructor() { 
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
}
