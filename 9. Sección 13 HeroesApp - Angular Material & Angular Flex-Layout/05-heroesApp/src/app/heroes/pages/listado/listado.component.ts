import { Component, OnInit } from '@angular/core';

// Importamos el servicio de heroes
import { HeroesService } from '../../services/heroes.service';

// Importamos la interface
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  // Establecemos una propiedad para los heroes
  heroes: Heroe[] = [];

  // Inyectamos el servicio que creamos para los heroes
  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
        .subscribe( heroes => this.heroes = heroes );
  }

}
