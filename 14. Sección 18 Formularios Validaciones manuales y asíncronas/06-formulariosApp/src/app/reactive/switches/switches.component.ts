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

    // Ahora si queremos que los cambios se den en tiempo real podemos suscribirnos
    // a los cambios del formuarlio usando rxjs
    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...restoDeArgumentos }) => {
      // Usando la desestructuración separamos para tomar solo la información que me interesa
      this.persona = restoDeArgumentos;
    });

    // También podemos suscribirnos a un campo en particular
    this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => {
      console.log( newValue );
    });

  }

  guardar() {

    const formValue = {...this.miFormulario.value};

    // Ahora para poder actualizar la persona con la información del formulario eliminamos la propiedad codiciones
    delete formValue.condiciones;

    // Luego de eliminar la propiedad ahora si la podemos asignar a la persona
    this.persona = formValue;

    console.log( formValue );


  }


}
