import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

// Importamos el mapbox
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
  .mapa-container {
    width: 100%;
    height: 100%;
  }

  .row {
    background-color: white;
    border-radius: 5px;
    bottom: 50px;
    left: 50px;
    padding: 10px;
    position: fixed;
    z-index: 999;
  }

  `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  // Entonces ahora vamos a usar el viewChild el cual nos sirve para tomar un elemento html
  // y usarlo como una propiedad común y corriente
  @ViewChild('mapa') divMapa!: ElementRef;

  // Creamos una propiedad para poder crear el acceso al objeto de mapbox que tenemos
  // en el ngOnInit
  mapa!: mapboxgl.Map;

  constructor() { }

  // El problema es que anteriormente estabamos usando el ngOnInit para incializar el mapa, pero a pesar de que
  // el componente esta listo en el ngOnInit nos arroja un error con el elemento html al que estamos haciendo referencia
  // para motrar el mapa y que lo estamos pasando a través del ViewChild, por lo tanto usamos otro hook del ciclo de vida
  // de angular el cual es el ngAfterViewInit y acá si ya tenemos listo el elemento para ser usado.
  ngAfterViewInit(): void {

    console.log('AfterViewInit', this.divMapa);

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -72.56019992138917, 6.318082682981575 ], 
      zoom: 18
    });

  }

  zoomIn() {
    console.log('Zoom In');
    this.mapa.zoomIn();
  }

  zoomOut() {
    console.log('Zoom Out');
    this.mapa.zoomOut();
  }

}
