import { Component, OnInit } from '@angular/core';
// Importamos la interface
import { Heroe } from '../../interfaces/heroes.interface';
// Importamos el servicio
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heroesService.getHeroes()
        .subscribe( heroes => this.heroes = heroes);
  }

}
