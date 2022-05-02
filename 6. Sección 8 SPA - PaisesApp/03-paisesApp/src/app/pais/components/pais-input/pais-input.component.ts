import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  // Ahora para emitir y conectar nuevamente la funcionalidad de buscar lo vamos
  // a hacer a través de un @Output
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  terminoBusqueda: string = ''; 

  buscar(){
    // console.log( this.terminoBusqueda );
    this.onEnter.emit( this.terminoBusqueda );
  }

}
