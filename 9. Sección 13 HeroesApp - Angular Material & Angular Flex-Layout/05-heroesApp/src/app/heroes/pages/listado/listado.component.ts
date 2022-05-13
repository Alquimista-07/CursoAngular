import { Component, OnInit } from '@angular/core';

// Importamos el servicio de heroes
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  // Inyectamos el servicio que creamos para los heroes
  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
        .subscribe( res => console.log( res ) );
  }

}
