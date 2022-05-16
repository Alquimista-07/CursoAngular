import { Pipe, PipeTransform } from '@angular/core';

import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
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
