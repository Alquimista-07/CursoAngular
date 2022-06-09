import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  // Inyectamos el servicio donde tenemos el método para geolocalización
  constructor( private placesService: PlacesService,
               private mapService: MapService ) { }

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
      style: 'mapbox://styles/mapbox/light-v10', // Estilo: Acá se ajusta el estilo del mapa, también existe un dark-v10
      center: this.placesService.userLocation, //Posición inicial [lng, lat]
      zoom: 14 // Zoom inicial
    });

    // Creamos el popup
    const popup = new Popup()
      .setHTML(`
        <h6>Aquí Estoy!</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

    // Los popus regularmente se conectan a un marcador, pero también se pueden añadir directamente al mapa
    new Marker({ color: 'red' })
      .setLngLat( this.placesService.userLocation )
      .setPopup( popup )
    // Agregamos el marcador al mapa
      .addTo( map );

    // Establecemos el mapa usando el setter del servicio map.service.ts
    this.mapService.setMap( map );

  }

}
