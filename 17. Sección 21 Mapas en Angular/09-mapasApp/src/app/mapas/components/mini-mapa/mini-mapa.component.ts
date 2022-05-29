import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

// Importamos mapbox
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [`
    div {
      width: 100%;
      height: 150px;
      margin: 0px;
    }
  `
  ]
})
export class MiniMapaComponent implements AfterViewInit {

  // Creamos un input para recibir la longitud y la latitud
  @Input() lngLat: [ number, number] = [ 0, 0 ]; 

  // Tomamos la referencia al div del miniMapa.component.html
  @ViewChild('mapa') divMapa!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {

    const mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.lngLat,
      zoom: 15,
      // Quitamos la propiedad interactive para que el usuario no pueda arrastrar y moverse dentro de ellos
      interactive: false
    });

    // Le cereamos el marcador al mapa
    new mapboxgl.Marker({
      draggable: false
    })
    .setLngLat( this.lngLat )
    .addTo( mapa );
    
  }

}
