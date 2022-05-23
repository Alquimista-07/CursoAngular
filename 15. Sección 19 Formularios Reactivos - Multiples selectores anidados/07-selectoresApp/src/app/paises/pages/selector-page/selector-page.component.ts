import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

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
    region: [ '', [ Validators.required ] ]
  });

  // Llenar selectores
  regiones: string[] = [];

  // Inyectamos el servicio FormBuilder
  constructor( private fb: FormBuilder,
               private paisesService: PaisesService ) { }

  ngOnInit(): void {
    // Usualmente cuando queremos traer data de una API para inicializar normalmente
    // se hace en el ngOnInit
    this.regiones = this.paisesService.regiones;
  }

  // Creamos el método que sera llamado cuando hagamos el submit
  guardar() {
    console.log( this.miFormulario.value );
  }

}
