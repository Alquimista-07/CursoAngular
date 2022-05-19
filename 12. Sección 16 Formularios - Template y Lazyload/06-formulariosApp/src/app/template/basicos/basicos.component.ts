import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // Pasamos la referencia local miFormulario acá para podera hacer referencia al formulario
  // y usar sus propiedades
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  // Creamos la validación del campo en una función con el fin de simplificar el código
  // del lado del html
  nombreValido(): boolean {
    // Acá cuando indicamos el signo ? indicamos o preguntamos que si tenemos el elemento continue con la
    // validación
    return this.miFormulario?.controls['producto']?.invalid 
           && this.miFormulario?.controls['producto']?.touched;
  }

  // guardar(miFormulario: NgForm) {
  guardar() {
    console.log('Submit Hecho!!!...'  );
    // console.log( miFormulario.value );
    console.log( this.miFormulario.value );
    console.log( this.miFormulario );
  }

}
