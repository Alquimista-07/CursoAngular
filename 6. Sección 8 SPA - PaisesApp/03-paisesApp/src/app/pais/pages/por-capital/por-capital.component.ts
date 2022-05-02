import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  terminoBusqueda : string = '';
  hayError        : boolean = false;
  capitales       : Country[] = [];

  // Inyectamos el servicio
  constructor( private paisService: PaisService ) { }

  // Implementamos el metodo de buscar para cuando se haga el posteo del temino de búsqueda
  buscarCapital( terminoBusqueda: string ){

    this.hayError = false;
    this.terminoBusqueda = terminoBusqueda

    // Entonces para que un observable se dispare por lo menos tiene que tener un subscribe
    this.paisService.buscarCapital( terminoBusqueda )
        .subscribe( capitales => {
          this.capitales = capitales;
        },
        (err) => {
          this.hayError = true;
          this.capitales = [];
        });

  }

}
