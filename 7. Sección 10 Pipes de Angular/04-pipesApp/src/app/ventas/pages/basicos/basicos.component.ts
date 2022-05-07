import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower   : string = 'juan';
  nombreUpper   : string = 'JUAN';
  nombreCompleto: string = 'jUaN hERNánDEz';

  // Definimos unas propiedades para fecha
  fecha: Date = new Date(); // El día de hoy

}
