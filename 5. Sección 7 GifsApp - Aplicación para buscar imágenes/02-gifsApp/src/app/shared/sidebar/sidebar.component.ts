import { Component } from '@angular/core';

import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  // Obtenemos el historial desde el servicio para cargarlo en el html
  get historial() {
    return this.gifsService.historial;
  }
  
  // Inyectamos el servicios
  constructor( private gifsService: GifsService ){ }

  buscar( termino: string ){
    console.log( termino );
    this.gifsService.buscarGifs( termino );
  }

}
