import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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

  // El heroe seleccionado es un heroe o puede ser undefined
  heroeSeleccionado: Heroe | undefined;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  buscando() {
    if( this.termino.length >= 2 ){
      this.heroesService.getSugerencias( this.termino.trim() )
          .subscribe( heroes => this.heroes = heroes);
    }
    else{
      this.heroes = [];
    }
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent  ){

    if( !event.option.value ){
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    // Ahora para que no aparezca la representación de object en el input sino 
    // el nombre entonces hacemos lo siguiente:
    this.termino = heroe.superhero;
    // Ahora traemos la información del héroe que se seleccionó
    // adicionalmnete colocamos el simbolo ! ya que el heroe puede venir
    // vacío entonces para que lo deje pasar agregamos dicho simbolo
    this.heroesService.getHeroePorId( heroe.id! )
        .subscribe( heroe => this.heroeSeleccionado = heroe );
  }

}
