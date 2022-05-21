import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  // Definimos el formulario
  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ] // Acá usamos otro metodo del validatos que es el requiredTrue para que siempre tenga que estar en true para que el formulario sea válido
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  // Inyectamos el FormBuilder
  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    // Expandimos el arreglo de persona y lo inicializamos
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    });
  }


}
