import { Component, OnInit } from '@angular/core';

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

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  guardar() {
    console.log( this.heroe);
    if( this.heroe.superhero.trim().length === 0 ){
      return;
    }

    this.heroesService.agregarHeroe( this.heroe )
        .subscribe( resp => console.log('Respuesta', resp) );

  }

}
