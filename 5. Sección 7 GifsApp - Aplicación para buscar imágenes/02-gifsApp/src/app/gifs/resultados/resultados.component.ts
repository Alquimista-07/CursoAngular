import { Component } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  // Creamos un get de los resultados
  get resultados() {

    return this.gifsService.resultados;

  }

  // Inyqctamos el servicio
  constructor( private gifsService: GifsService ) { }

}
