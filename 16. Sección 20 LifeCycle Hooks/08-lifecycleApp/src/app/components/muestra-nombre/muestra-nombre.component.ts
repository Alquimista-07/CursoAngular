import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [
  ]
})
export class MuestraNombreComponent implements OnInit, OnChanges {

  @Input() nombre!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // NOTA: Este ngOnCganges no se va a disparar o no va a ser llamado por el framework, si el componente no tiene 
    //       inputs o si funciona sin proveer inputs. Y en cuantoa a esto input no se refiere a un input en el html
    //       sino que se refiere a un input de un componente padre al hijo, es decir, cuando usamos un decorador @Input
    console.log( changes );
  }

  ngOnInit(): void {
  }

}
