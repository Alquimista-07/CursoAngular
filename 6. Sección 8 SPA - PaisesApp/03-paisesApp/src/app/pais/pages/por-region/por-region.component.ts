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
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';

  constructor() { }

  activarRegion( region: string ) {

    this.regionActiva = region;

    // TODO: Hacer llamado al servicio

  }


}
