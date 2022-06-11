import { Injectable } from '@angular/core';
import { LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/places';
import { DirectionsApiCLient } from '../api';
import { DirectionsResponse, Route } from '../interfaces/directions';

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

  constructor( private directionsApi: DirectionsApiCLient ) { }

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
  createMarkersFromPlaces( places: Feature[], userLocation: [ number, number ] ){

    console.log(userLocation);

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
      <span>${ place.place_name }</span>
      `);
      
      const newMarker = new Marker()
      .setLngLat([ lng, lat ])
      .setPopup( popup )
      .addTo( this.map );
      
      newMarkers.push( newMarker );
      
    }
    
    this.markers = newMarkers;

    if( places.length === 0 ) return; 
    
    // Limites del mapa
    const bounds = new LngLatBounds();
    newMarkers.forEach( marker => bounds.extend( marker.getLngLat() ) );
    bounds.extend( userLocation )

    this.map.fitBounds( bounds, {
      padding: 200
    });

  }

  // Obtener posición entre dos puntos
  getRouteBetweenPoinsts( start: [ number, number ], end: [ number, number ] ){

    this.directionsApi.get<DirectionsResponse>(`/${ start.join(',') };${ end.join(',') }`)
        .subscribe( resp => {
          this.drawPolyline( resp.routes[0] );
        });

  }

  private drawPolyline( route: Route ){
       
    // Imprimimos la distancia y los kilómetros
    console.log({
      kms: route.distance / 1000, // Metroa s kilómetros
      duration: route.duration / 60    // Minutos a horas
    });

    if( !this.map ) throw Error('Mapa no inicializado');

    const coords = route.geometry.coordinates;

    // Creamos el objeto de los bounds
    const bounds = new LngLatBounds();

    // Insertamos los bounds
    coords.forEach( ( [ lng, lat ] ) => {
      bounds.extend( [lng, lat] ); 
    });

    // Colocamos los bounds entre los puntos
    this.map?.fitBounds( bounds, {
      padding: 200
    })

  }

}
