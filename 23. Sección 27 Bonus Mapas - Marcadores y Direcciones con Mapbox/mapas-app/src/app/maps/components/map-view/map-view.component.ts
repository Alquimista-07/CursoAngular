import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map } from 'mapbox-gl';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  // Inyectamos el servicio donde tenemos el método para geolocalización
  constructor( private placesService: PlacesService ) { }

  // Obtenemos el elemento html a través de su referencia local
  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  // Ahora usamos el afterViewInit para ratificar que el mapa se renderice cuando ya este todo listo
  ngAfterViewInit(): void {

    // Validamos que se tenga la localización antes de mostrar el mapa
    if( !this.placesService.userLocation ) throw Error('No hay placesService.userLocation');

    // Creamos el mapa con sus propiedades.
    // NOTA: Al presionar Ctrl y mover el mouse podemos girar los ejes del mapa
    const map = new Map({
      container: this.mapDivElement.nativeElement, // Contenedor
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo
      center: this.placesService.userLocation, //Posición inicial [lng, lat]
      zoom: 14 // Zoom inicial
    });

  }

}
