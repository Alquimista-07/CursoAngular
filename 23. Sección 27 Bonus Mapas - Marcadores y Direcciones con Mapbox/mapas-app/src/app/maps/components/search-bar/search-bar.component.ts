import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  // Creamos una propiedad que es el timer que voy a esperar hasta que se cumpla y ahí 
  // emitir el valor.
  // NOTA: Al agregar el NodeJS.Timeout nos muestra un error en el navegador, entonces para solucionarlo debemos ir al archivo
  //       tsconfig.app.json y en la parte de typs agregar node como se ve a continuación
  /*
            "types": [
                "node"
              ] 
  */
  private deboundeTimer?: NodeJS.Timeout;

  // Inyectamos el servicio places services para usar el metodo getPlacesByQuery para la busqueda por http usando la API de mapbox
  constructor( private placesService: PlacesService ) { }
  
  // Acá quiero controlar la manera como voy a emitir los valores
  onQueryChanged( query: string = '' ){
    
    // Si se tiene un valor lo limpia.
    // Explicación: Cada vez que nosotros estemos escribiendo en la caja de texto la instruccion del if se va a ejecutar
    //              y lo empieza a limpiar cada vez, es decir, se establece un nuevo debounceTimer, se vuelve a establecer
    //              pero nuevamente el siguiente viene y lo limpia y solo el último es el que se va a mantener. Despúes de
    //              que pasen 350 milesimas de segundo de tiempo sin que se escriba nada en la caja de texto se va a mandar 
    //              emitir el query
    if ( this.deboundeTimer ) clearTimeout( this.deboundeTimer );

    this.deboundeTimer = setTimeout( () => {

      console.log('Mandar este query: ', query);

      this.placesService.getPlacesByQuery( query );

    }, 350);

  }

}
