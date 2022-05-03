import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  // Acá me arroja errojaría un error si no le indico el signo !
  // al pais debido a que esto de momento va a ser null. Es decir
  // al indicar el signo ! le estoy diciendo a typescript que pais 
  // puede ser nulo
  pais!: Country;

  // Inyectamos el ActivatedRoute el cual viene con todo lo necesario para poder suscribirnos
  // a cualquier cambio de la URL.
  // Y también hay que inyectar el pais serivce para usara los métodos que tenemos allá,
  // en este caso el metodo para buscar pais por id
  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService : PaisService
    ) { }

  ngOnInit(): void {

    // Atrapamos el idPais del aprametro de la URL usando el observable
    // del activatedRoute y obtenemos solo el idPais con ayuda del 
    // destructuring.
    // NOTA: Hay que tener en cuenta que hay una mejor forma de hacer esto 
    //       pero eso ya involucra trabajar con otro operador de rxjs.
    /*
    this.activatedRoute.params
        .subscribe( ({ idPais }) => {
          console.log( idPais );

          // Ahora acá adentro tengo que hacer otro observable para traer
          // la información del pais
          this.paisService.getPaisAlpha( idPais )
              .subscribe( pais => {
                console.log( pais );
              });

        });

  */
  // NOTA: Ahora para resumir todo lo que se realizo en el anterior codigo en el cual teníamos un observable
  //       que luego dentro teniamos otro observable y como se mencionó se puede hacer de una mejor forma usando
  //       rxjs entonces vamos a hacer lo siguiente:
  this.activatedRoute.params
      // Entonces lo que vamos a hacer es usar un operador de rxjs que me va a permitir trabajar con el producto
      // del observable
      .pipe(
        // NOTA: Acá dentro del pipe puedo especificar cualquier cantidad de operadores que van a 
        //       trabjar con el producto del observable activatedRoute. Y vamos a usar el switchMap 
        //       el cual permite recibir un observable y regresar otro observable.
        switchMap( ({ idPais }) => this.paisService.getPaisAlpha( idPais ) ),
        // NOTA: Ahora acá vamos a usar otro operador de rxjs que es el tap el cual dispara un efecto secundario.
        //       Entonces lo que hace es recibir el producto del observable switchMap e imprime lo que responda
        //       en consola.
        tap( console.log )
        //--------------------------------------
        // La forma larga sería la siguiente:
        // tap( resp => console.log( resp ) )
        //--------------------------------------
      )
      .subscribe( pais => this.pais = pais[0] );

  }

}
