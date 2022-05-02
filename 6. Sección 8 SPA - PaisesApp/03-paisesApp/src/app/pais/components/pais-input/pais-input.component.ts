import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  // Ahora para emitir y conectar nuevamente la funcionalidad de buscar lo vamos
  // a hacer a través de un @Output
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  // Para el tema del debounce (sugerencias) vamos a crear otro evento @Output
  // y el cual se va a emitir cuando la persona deje de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  // Recibimos el placeholder par que cambie en el input según donde estemos
  @Input() placeholder: string = '';

  // NOTA: Si estuvieramos trabajando con formularios reactivos ya viene una forma de hacerlo más fácil,
  //       pero en este proyecto no los vamos a manejar. Entonces vamos a usar un observable espacial de
  //       rxjs llamado subject y el cual me permite hacer esto mismo de mostrar las sugerencias a medida
  //       que el usuario deje de digitar
  debouncer: Subject<string> = new Subject;

  terminoBusqueda: string = ''; 

  // Ahora vamos a usar algo del ciclo de vida de Angular que es el ngOnInit y que me va ayudar
  // a hacer lo que habíamos dicho de que se dispare el debouncer cuando el usuario deje de escribir.
  // NOTA: OJO cabe resaltar que este método se dispara una ÚNICA VEZ cuando el componente es creado
  ngOnInit(): void {
   
    this.debouncer
      // Ahora como ya tenemos esto en base a un observable y como es un observable yo ya puedo usar 
      // operadores de rxjs que me vana a ayudar a realizar la tarea del debouncer. Entonces vamos a usar
      // el método pipe que es algo así como una tubería que me permite transformar la salida de subscribe
      .pipe(
        // NOTA: Acá usamos un operador de rxjs llamado debounceTime. Y el cual me recibe como parámetro
        //       cuantas milesimas de segundo quiero esperar antes de emitir el siguiente valor
        debounceTime(300)
      )
      .subscribe( valor => {
        // console.log('debounder: ', valor);
        this.onDebounce.emit( valor );
      });

  }

  buscar(){
    // console.log( this.terminoBusqueda );
    this.onEnter.emit( this.terminoBusqueda );
  }

  teclaPresionada() {

    // console.log( this.terminoBusqueda );

    // Ahora llamamos el debouncer y emitir un valor
    this.debouncer.next( this.terminoBusqueda );

  }

}
