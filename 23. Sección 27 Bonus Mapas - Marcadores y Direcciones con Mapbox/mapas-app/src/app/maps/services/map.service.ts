import { Injectable } from '@angular/core';
import { LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map

  // Almacena los marcadores
  private markers: Marker[] = [];

  get isMapReady() {
    // Si tiene algún valor regresa true y si no false
    return !!this.map;
  }

  // Eventualmente necesito de alguna establecer el valor del map ya que es una propiedad
  // privada ya que no quiero que desde afuera se le establezca o se tenga un control a ese
  // nivel, entonces para eso usamos el siguiente método.
  setMap( map: Map ) {
    this.map = map;
  }

  // Eventualmente quiero mover el mapa a otro punto de la pantalla
  // a cualquier lugar que sea
  flyTo( coords: LngLatLike ) {

    // Antes de intentar moverse a otro lugar validamos
    if( !this.isMapReady ) throw new Error('El mapa no está inicializado');

    // Usamos un método de mapbox para hacer el vuelo entre ubicaciones
    this.map?.flyTo({
      zoom: 14,
      center: coords
    });

  }

  // Método para crear los marcadores cuando busquemos
  createMarkersFromPlaces( places: Feature[] ){

    if( !this.map ) throw Error('Mapa no inicializado');

    // Purgamos fisicamente del mapa los marcadores pero aún siguen existiendo en el arreglo
    this.markers.forEach( marker => marker.remove() ); 

    // Creamos los marcadores
    const newMarkers = [];

    for( const place of places ){
      const [ lng, lat ] = place.center;
      const popup = new Popup()
        .setHTML(`
          <h6>${ place.text }</h6>
          <span>{ place.place_name }</span>
        `);
      
      const newMarker = new Marker()
        .setLngLat([ lng, lat ])
        .setPopup( popup )
        .addTo( this.map );

        newMarkers.push( newMarker );

      }

    this.markers = newMarkers;

  }

}
