import { Pipe, PipeTransform } from '@angular/core';

import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  // Acá existe un inconveniente con el pipe ya que este no se dispara cuando actualizamos la imágen
  // y por lo tanto no se renderiza, entonces si nosotros queremos que suceda lo que suceda siempre
  // se vuelva a disparar le asignamos el siguiente atributo.
  // NOTA: Por lo tanto revisanso la documentación tenemos lo siguiente:
  //       Cuando es verdadero, la canalización es pura, lo que significa que el método transform () 
  //       se invoca solo cuando cambian sus argumentos de entrada. Las canalizaciones son puras de 
  //       forma predeterminada.
  //
  //       Si la canalización tiene un estado interno (es decir, el resultado depende de un estado 
  //       distinto de sus argumentos), configure pure como falso. En este caso, la canalización se 
  //       invoca en cada ciclo de detección de cambios, incluso si los argumentos no han cambiado.
  //
  //       Y con base a lo anterior asignamos la propiedad pure en false
  /*
  pure: false
  */
 // Pero de momento no la vamos a dejar ya que consume muchos recursos ya que al pasar por cada parte
 // del ciclo de vida de detección de cambios se va a disparar
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    // Entonces vamos a mejorar el pipe de imagen ya que como no tenemos una imagen asociada nos aparece
    // que la imágen esta rota
    if( !heroe.id && !heroe.alt_img ) {
      return `assets/no-image.png`;
    }
    else if( heroe.alt_img ) {
      return heroe.alt_img;
    }
    else {
      return `assets/heroes/${ heroe.id }.jpg`;
    }

  }

}
