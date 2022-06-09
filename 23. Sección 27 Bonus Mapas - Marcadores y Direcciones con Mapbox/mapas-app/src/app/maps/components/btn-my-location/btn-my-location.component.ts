import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor( private mapService: MapService,
               private placesService: PlacesService ) { }

  // Este metodo me va a llevar a donde esta mi ubicación cuando demos click
  goToMyLocation() {

    // Validamos primero la ubicación
    if( !this.placesService.isUserLocationReady ) throw Error('No hay ubicación de usuario');
    // Validamos si el mapa está listo
    if( !this.mapService.isMapReady ) throw Error('No se ha inicializado el mapa');

    // Navegamos al lugar mandando a llamar el método del map.services.ts que se creo para ese fin
    this.mapService.flyTo( this.placesService.userLocation! );
  }

}
