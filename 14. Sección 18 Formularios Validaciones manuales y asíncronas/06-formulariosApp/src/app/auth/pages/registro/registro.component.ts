import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  //TODO: Temporal
  // Creamos la expresción regular donde el preimer () valida que es para el nombre y el otro () es para el apellido
  // La expresión valida que puede contener cualquier caracter de la a a la z múscula y de la A a la Z mayúscula y 
  // luego el + indica cualquier cantidad de caracteres
  regexNombreApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  // Expresión regular para el email
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerAlcehmist( control: FormControl ) {

    const valor: string = control.value?.trim().toLowerCase();

    if( valor === 'alchemist' ){
      // return ERROR!!!...
      return {
        noAlchemist: true
      }
    }

    // De lo contrario si regresa null todo esta bien
    return null;

  }

  // Creamos la definición del formulario
  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.pattern( this.regexNombreApellido ) ] ],
    email: [ '', [ Validators.required, Validators.pattern( this.emailPattern ) ] ],
    username: [ '', [ Validators.required, this.noPuedeSerAlcehmist ] ]
  });

  // Inyectamos el FormBuilder
  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    // Establecemos uns valores al formulario para no estar diligenciando a cada rato
    this.miFormulario.reset({
      nombre: 'Ariadna Hernandez',
      email: 'test1@test.com',
      username: 'The Alchemist'
    })
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.controls[campo]?.touched;
  }

  submitFormulario() {
    console.log( this.miFormulario.value );
    this.miFormulario.markAllAsTouched();
  }

}
