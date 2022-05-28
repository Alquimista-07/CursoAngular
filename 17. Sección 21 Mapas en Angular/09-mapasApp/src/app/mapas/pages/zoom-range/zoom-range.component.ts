import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

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
    width: 400px;
  }

  `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  // Entonces ahora vamos a usar el viewChild el cual nos sirve para tomar un elemento html
  // y usarlo como una propiedad común y corriente
  @ViewChild('mapa') divMapa!: ElementRef;

  // Creamos una propiedad para poder crear el acceso al objeto de mapbox que tenemos
  // en el ngOnInit
  mapa!: mapboxgl.Map;
  // Creamos una propiedad que va a tener el nivel del zoom en el que estamos
  zoomLevel: number = 18;
  // Creamos una propiedad para la longitud y la latitud
  center: [ number, number ] = [ -72.56019992138917, 6.318082682981575 ];

  constructor() { }

  // Una regla de oro cuando trabajemos con listener y que se implemente en el ngOnInut() o en el ngAfterViewInit
  // y sea un on que sea un evento que siempre esta escuchando algo, si nos salimos y regresamos al componente es
  // algo que siempre va a estar emitiendo valores por lo tanto lo recomendado sería destruirlo cuando el componente
  // se destruya
  ngOnDestroy(): void {
    // console.log('se ejecuto destoy');
    // Por lo tanto acá destruimos cada uno de los listener que estoy usando
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  // El problema es que anteriormente estabamos usando el ngOnInit para incializar el mapa, pero a pesar de que
  // el componente esta listo en el ngOnInit nos arroja un error con el elemento html al que estamos haciendo referencia
  // para motrar el mapa y que lo estamos pasando a través del ViewChild, por lo tanto usamos otro hook del ciclo de vida
  // de angular el cual es el ngAfterViewInit y acá si ya tenemos listo el elemento para ser usado.
  ngAfterViewInit(): void {

    console.log('AfterViewInit', this.divMapa);

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center, 
      zoom: this.zoomLevel
    });

    // Para obtener el valor actual y preciso del zoom necesitamos colocar un listener
    // que me indique cuando el zoom cambia
    this.mapa.on( 'zoom', (evt) => {
      // console.log( 'zoom' );
      // console.log('Evento', evt);
      // Por lo tanto en la documentación oficial vemos que ya tenemos un método que nos permite obtener 
      // el zoom (getZoom()) con el cual podemos alterar la propiedad zoomLevel que creamos
      const zoomActual = this.mapa.getZoom();
      // console.log( zoomActual );
      // console.log( 'zoomActual' );
      // Hay que ver que se esta disparando como 60 veces y por eso antes no servía cuando lo teníamos directamente
      // en el botón ya que no se actualizaba de forma correcta
      this.zoomLevel = zoomActual
    });

    // Ahora lo que se va a hacer es limitar el zoom para que no pase de cierto limite definido
    this.mapa.on( 'zoomend', (evt) => {
      if( this.mapa.getZoom() > 18 ){
        this.mapa.zoomTo( 18 );
      }
    });

    // Creamos un listener para escuchar el movimiento del mapa
    this.mapa.on( 'move', (evt) => {
      // console.log(evt);
      const target = evt.target;

      // Desestructuramos 
      const { lng, lat } = target.getCenter();

      target.getCenter();
      // console.log( target.getCenter() );
      this.center = [ lng, lat ];

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

  // Creamos el método que va a interactuar con el evento del input
  zoomCambio( valor: string ) {
    console.log( valor );
    this.mapa.zoomTo( Number(valor) );
  }

}
