import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        /* Esta clase hace que se muestre el cursor (manita) */
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  terminoBusqueda: string = '';

  // Derinimos una propiedad para el manejo de errores
  hayError: boolean = false;

  // Creamos una propiedad de tipo paises que nos va a servir para mostrar
  // la información en la tabla
  paises: Country[] = [];

  // Para el debounce reamos una nueva propiedad para los paises sugeridos que se van a mostrar
  paisesSugeridos: Country[] = [];

  mostrarSugerencias = false;

  // Inyectamos el servicio
  constructor( private paisService: PaisService ) { }

  // Implementamos el metodo de buscar para cuando se haga el posteo del temino de búsqueda
  buscar( terminoBusqueda: string ){

    this.mostrarSugerencias = false;
    this.hayError = false;
    this.terminoBusqueda = terminoBusqueda
    console.log( this.terminoBusqueda );

    // Entonces para que un observable se dispare por lo menos tiene que tener un subscribe
    this.paisService.buscarPais( terminoBusqueda )
        .subscribe( paises => {
          console.log( paises );
          this.paises = paises;
        },
        (err) => {
          // console.log( 'Error!!!...' );
          // console.error( err );
          this.hayError = true;
          this.paises = [];
        });

  }

  sugerencias( termino: string ) {
    
    this.terminoBusqueda = termino;
    this.hayError = false;
    this.mostrarSugerencias = true;
    // Crear sugerencias
    // Cando se ejecute simplemente hay que ir a buscar en nuestro servicio y traer los paises que
    // coincidan con el termino.
    this.paisService.buscarPais( termino )
        // Y luego en la promesa asignamos los paises sugeridos al arreglo para luego hacer un splice
        // para no mostrar tantos, exactamente 5 items
        .subscribe( 
          paises => this.paisesSugeridos = paises.splice( 0, 5 ),
          (err) => this.paisesSugeridos  = []
          );
    
  }

  buscarSugerido( termino: string ) {

    this.buscar( termino );

  }

}
