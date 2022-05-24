import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    pais: [ '', [ Validators.required ] ]
  });

  // Llenar selectores
  regiones: string[] = [];
  paises: PaiseSmall[] = [];

  // Inyectamos el servicio FormBuilder
  constructor( private fb: FormBuilder,
               private paisesService: PaisesService ) { }

  ngOnInit(): void {
    // Usualmente cuando queremos traer data de una API para inicializar normalmente
    // se hace en el ngOnInit
    this.regiones = this.paisesService.regiones;

    // Cuando cambie la región
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

  }

  // Creamos el método que sera llamado cuando hagamos el submit
  guardar() {
    console.log( this.miFormulario.value );
  }

}
