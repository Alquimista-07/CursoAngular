import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap } from 'rxjs/operators';
import { tap } from 'rxjs';

import { PaisesService } from '../../services/paises.service';
import { PaiseSmall } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  // Creamos el formulario y le mandamos como primer parámetro un string vacío, una primera validación síncrona de required
  // como segundo parámetro y de momento no hay validaciones asíncronas
  miFormulario: FormGroup = this.fb.group({
    region: [ '', [ Validators.required ] ],
    pais: [ '', [ Validators.required ] ],
    frontera: [ '', [ Validators.required ] ]
  });

  // Llenar selectores
  regiones: string[] = [];
  paises: PaiseSmall[] = [];
  fronteras: string[] = [];

  // Inyectamos el servicio FormBuilder
  constructor( private fb: FormBuilder,
               private paisesService: PaisesService ) { }

  ngOnInit(): void {
    // Usualmente cuando queremos traer data de una API para inicializar normalmente
    // se hace en el ngOnInit
    this.regiones = this.paisesService.regiones;

    // Cuando cambie la región
    // Esta es una forma de hacer la petición pero se puede hacer mejor usando el operador
    // switchMap de rxjs
    /*
    this.miFormulario.get('region')?.valueChanges
    .subscribe(
      region => {
        console.log(region);
        this.paisesService.getPaisesPorRegion( region )
        .subscribe( paises =>{
          console.log( paises );
          this.paises = paises;
        })
      }
      )
      */
    
     //----------------------------
    // OPTIMIZACIÓN DEL CÓDIGO
    //----------------------------
    // Cuando cambie la región
    // Esta es la forma usando el operador switchMap de rxjs
    this.miFormulario.get('region')?.valueChanges
        .pipe(
          // Usamos el operador tap de rxjs para disparar un efecto secundario y hacer 
          // el reset del formulario.
          // NOTA: Acá cuando indicamos el _ en el tap le decimos que no nos interesa lo que venga ahí
          //       ya que solo nos interesa disparar el evento secundario para resetear el formulario
          tap( ( _ ) => {
            this.miFormulario.get('pais')?.reset('');
          }),
          // El switchMap va a tomar el valor del viejo observable (valueChanges) y va a hacer el cambio
          // por el producto del nuevo observable que es cuando hacermos el getPaisesPorRegion
          switchMap( region => this.paisesService.getPaisesPorRegion( region ) )
        )
        .subscribe( paises => {
          console.log( paises );
          // El switch nos regresa los paises entonces lo asignamos al arreglo
          this.paises = paises;
        });

    // Cuando cambia el pais
    this.miFormulario.get('pais')?.valueChanges
        .pipe(
          tap( ( _ ) => {
            this.fronteras = [];
            this.miFormulario.get('frontera')?.reset('');
          }),
          switchMap( codigo => this.paisesService.getPaisPorCodigo( codigo ) )
        )
        .subscribe( pais => {
          console.log( pais );
          if( pais !== null && pais.length > 0 ) {
            this.fronteras = pais[0]?.borders;
          }
          else{
            this.fronteras = [];
          }

        });

  }

  // Creamos el método que sera llamado cuando hagamos el submit
  guardar() {
    console.log( this.miFormulario.value );
  }

}
