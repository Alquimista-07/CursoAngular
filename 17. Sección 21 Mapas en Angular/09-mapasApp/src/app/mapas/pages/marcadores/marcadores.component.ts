import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

interface MarcadorColor {
  color  : string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
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
    
    // Ahora vamos a llamar el metodo para leer el localstorage para reconstruir
    // los marcadore
    this.leerLocalStorage();

    //========================================================================================
    // NOTAS Marcadores
    //========================================================================================
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
   //========================================================================================
   
   
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
    // Llamamos el metodo para guardar el marcador en el localstorage
    this.guardarMarcadoresLocalStorage();
  
  }

  // Metodo donde usamos el flyTo para hacer la animación de salto a determinado marcador 
  irMarcador( marker: mapboxgl.Marker ) {

    console.log( marker );

    this.mapa.flyTo({
      center: marker.getLngLat()
    });

  }

  guardarMarcadoresLocalStorage() {

    const lngLatArr: MarcadorColor[] = [];

    this.marcadores.forEach( m =>{
      
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat(); // Le decimos que simpre lo vamos a tener indicando el !

      lngLatArr.push({
        color: color,
        centro: [lng, lat]
      });

    });

    // Como lngLatArr es un objeto y en el localstorage almacenamos solo string lo serializamos mediante el JSON.stringify()
    localStorage.setItem('marcadores', JSON.stringify( lngLatArr )); 

  }

  // Ahora creamos un metodo para leer el localstorage, tomar los marcadores almacenados allá
  // y recrearlos
  leerLocalStorage() {
    
    if( !localStorage.getItem('marcadores') ){
      return;
    }

    // Ahora necesitamos hacer el proceso inverso usando el JSON.parse para reconstruirlo, es decir,
    // si era un arreglo lo reconstruye como un arreglo y si era un objeto lo reconstruye como un objeto
    const lngLatArr: MarcadorColor[] = JSON.parse( localStorage.getItem('marcadores')! );

    // console.log( lngLatArr );
    lngLatArr.forEach( m => {

       const newMarker = new mapboxgl.Marker({
         color: m.color,
         draggable: true,
       })
       .setLngLat( m.centro! )
       .addTo( this.mapa );

       // Ahora es necesario reconstruir el arreglo de marcadorex para que no se purgue cuando recarguemos el navegador
       // y nos reescriba los marcadores que teníamos en el localstorage
       this.marcadores.push({
         marker: newMarker,
         color: m.color
       })

    });

  }

}
