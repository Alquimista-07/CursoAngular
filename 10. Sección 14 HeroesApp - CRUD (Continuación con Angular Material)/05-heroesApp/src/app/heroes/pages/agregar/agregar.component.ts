import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  // Creamos un arreglo para manejar las opciones del select
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comincs'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor( private heroesService: HeroesService,
               // Entonces ahora necesito leer el url y obtener el id para poder editarlo
               // y para ello hacemos lo siguiente:
               private activatedRoute: ActivatedRoute,
               // Ahora como necesito navegar a otro lugar cuando se inserta el registro
               // entonces usamos el router
               private router: Router) { }

  ngOnInit(): void {
    // En el ngOnInit se aconseja hacer este tipo de peticiones para que la aplicación se construya
    // y a su vez vaya haciendo las peticiones http.
    // Entonces acá necesito verificar el url
    this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => this.heroesService.getHeroePorId( id ) )
        )
        // Ahora como el heroe esta asociado a un objeto a través del ngModel automáticamente
        // me va a cargar el formulario
        .subscribe( heroe => this.heroe = heroe );
  }

  guardar() {
    // console.log( this.heroe);
    if( this.heroe.superhero.trim().length === 0 ){
      return;
    }

    if( this.heroe.id ) {
      // Actualizar
      this.heroesService.actualizarHeroe( this.heroe )
          .subscribe( resp => console.log( 'Actualizando... ', resp ) );
    }
    else {
      // Crear
      this.heroesService.agregarHeroe( this.heroe )
          .subscribe( resp => {
            this.router.navigate(['/heroes/editar', resp.id])
          });
    }


  }

}
