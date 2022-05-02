import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  terminoBusqueda: string = '';

  constructor() { }

  // Implementamos el metodo de buscar para cuando se haga el posteo del temino de búsqueda
  buscar(){
    console.log( this.terminoBusqueda );
  }

}
