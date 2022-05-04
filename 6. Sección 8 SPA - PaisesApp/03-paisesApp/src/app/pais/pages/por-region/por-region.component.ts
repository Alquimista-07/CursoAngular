import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
        margin-top: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  // Creamos un arreglo para almacenar las regiones
  // NOTA: Debido al cambio de la versión en la API fue necesario ajustar los codigos de las regiones
  regiones: string[] = ['eu', 'efta', 'caricom', 'pa', 'au', 'usan', 'eeu', 'al', 'asean', 'cais', 'cefta', 'nafta', 'saarc']
  regionActiva: string = '';
  paises: Country[] = [];

  // Inyectamos el servicio
  constructor( private paisService: PaisService ) { }

  // Ahora incluiso como el manejo de la clase para el botón se vuelve algo complejo
  // y lo recomendado es dejar la menor cantidad de lógica del lado del html entonces
  // podríamos crearnos una metodo para cambiar la clase del botón y hacer lo que 
  // queremos hacer que es resaltar el botón de la región seleccionada
  getClaseCSS( region: string ) {
    // Entonces con la ayuda de un operador ternario podemos preguntar si la region es exactamente igual 
    // a regionActiva entonces le decimos que le coloque btn btn-primary y en caso contrario que le coloque
    // btn btn-outline-primary y retornar la respuesta
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {

    if ( region === this.regionActiva ){ return; }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion( region )
        .subscribe( paises => this.paises = paises );
  }


}
