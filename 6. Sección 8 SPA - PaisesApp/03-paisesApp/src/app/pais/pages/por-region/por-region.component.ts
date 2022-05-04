import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  // Creamos un arreglo para almacenar las regiones
  // NOTA: Debido al cambio de la versión en la API fue necesario ajustar los codigos de las regiones
  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']
  regionActiva: string = '';

  constructor() { }

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

    this.regionActiva = region;

    // TODO: Hacer llamado al servicio

  }


}
