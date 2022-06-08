import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent {

  // Inyectamos el servicio places.service.ts que se creo con el método para obtener la geolocalización
  constructor( private placesService: PlacesService ) { }

  // Creamos un getter para que este pendiente de una propiedad de nuestro servicio para saber cuando 
  // ya cargo toda la información
  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }


}
