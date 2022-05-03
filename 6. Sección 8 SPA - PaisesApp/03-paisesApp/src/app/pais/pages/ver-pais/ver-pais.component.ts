import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

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

  }

}
