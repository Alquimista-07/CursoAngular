import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map

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

}
