import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

interface MarcadorColor {
  color : string;
  marker: mapboxgl.Marker;
}

// Importamos el mapbox
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
  .mapa-container {
    width: 100%;
    height: 100%;
  }

  .list-group{
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 99;
  }

  li {
    cursor: pointer;
  }
  `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  // Entonces ahora vamos a usar el viewChild el cual nos sirve para tomar un elemento html
  // y usarlo como una propiedad común y corriente
  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [ number, number ] = [ -72.56019992138917, 6.318082682981575 ];
  // Arreglo de marcadores
  marcadores: MarcadorColor[] = [];

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center, 
      zoom: this.zoomLevel
    });

    /*
    const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'Hola Mundo';
    */
   
   //----------------------------------------------------------------------------------------------
   // Para agregar un marcador hacemos lo siguiente:
   //----------------------------------------------------------------------------------------------
   // EL siguiente codigo comentado permite cambiar el pin por una palabra o una imágnen
   // en base al markerHTML creado anteriormente que también está comentado
   /*
   new mapboxgl.Marker({
      element: markerHtml
    })
   */

    // new mapboxgl.Marker()
    //     .setLngLat( this.center )
    //     .addTo( this.mapa );

  }

  agregarMarcador() {

    // Esta línea de código permite generar un color aleatorio en hexadecimal
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    console.log( color );

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true, // Esta propiedad permite mover el marcador con el mouse
      color
    })
          .setLngLat( this.center )
          .addTo( this.mapa );

    this.marcadores.push({
      color,
      marker: nuevoMarcador
    });

    // console.log( this.marcadores );
  
  }

  // Metodo donde usamos el flyTo para hacer la animación de salto a determinado marcador 
  irMarcador( marker: mapboxgl.Marker ) {

    console.log( marker );

    this.mapa.flyTo({
      center: marker.getLngLat()
    });

  }

}
