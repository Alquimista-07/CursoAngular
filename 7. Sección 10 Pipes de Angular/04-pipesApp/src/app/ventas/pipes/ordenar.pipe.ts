import { Pipe, PipeTransform } from '@angular/core';

import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  // NOTA: Para este pipe personalizado vamos a usar el método sort de JavaScript para ver más 
  //       información podemos visiatar la documentación en el siguiente enlace: 
  //       https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  transform( heroes: Heroe[], ordenarPor: string = 'sin valor' ): Heroe[] {
    
    //console.log( heroes );

    switch ( ordenarPor ) {
      
      case 'nombre':
        // El método sort recibe una función compartativa donde voy a tener un elemento con el siguiente
        // para comparar, y regresamos un 1 si necesito cambiarlos de lugar o -1 si es el cambio inverso
        return heroes.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1 );

      case 'vuela':
        return heroes.sort( (a,b) => (a.vuela > b.vuela) ? -1 : 1 );

      case 'color':
        return heroes.sort( (a,b) => (a.color > b.color) ? 1 : -1 );
    
      default:
        return heroes;

    }

    // if( ordenarPor === 'sin valor' ){

    //   return heroes;
    
    // }else{

    //   // El método sort recibe una función compartativa donde voy a tener un elemento con el siguiente
    //   // para comparar, y regresamos un 1 si necesito cambiarlos de lugar o -1 si es el cambio inverso
    //   heroes = heroes.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1 );
  
    //   return heroes;
      
    // }

  }

}
