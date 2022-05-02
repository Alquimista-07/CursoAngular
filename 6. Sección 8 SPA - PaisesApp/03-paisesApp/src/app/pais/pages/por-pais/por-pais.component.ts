import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  terminoBusqueda: string = '';

  // Inyectamos el servicio
  constructor( private paisService: PaisService ) { }

  // Implementamos el metodo de buscar para cuando se haga el posteo del temino de búsqueda
  buscar(){
    console.log( this.terminoBusqueda );

    // Entonces para que un observable se dispare por lo menos tiene que tener un subscribe
    this.paisService.buscarPais( this.terminoBusqueda )
        .subscribe( resp => {
          console.log( resp );
        } );

  }

}
