import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  // Inyectamos el servicio FormBuilder
  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  // Creamos el método que sera llamado cuando hagamos el submit
  guardar() {
    console.log( this.miFormulario.value );
  }

}
