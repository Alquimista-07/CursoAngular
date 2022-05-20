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

  initForm = {
    producto: 'RTX 4080Ti',
    precio: 10,
    existencias: 10
  }

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

  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.value < 0 
           && this.miFormulario?.controls['precio']?.touched;
  }

  // guardar(miFormulario: NgForm) {
  guardar() {
    console.log('Submit Hecho!!!...'  );
    // console.log( miFormulario.value );
    console.log( this.miFormulario.value );
    console.log( this.miFormulario );

    // La siguiente linea de codigo me permite volver el formulario a su estado original
    // es decir el pristine, el touche a su estado original y limpiar todos los campos.

    // this.miFormulario.resetForm();

    // Ahora también se le puede establecer un valor al campo, es decir si por ejemplo quiero que
    // el campo existencias, precio y producto tengan el valor por defecto, entonces para ello le mandamos 
    // un objeto como parametro al resetForm. Pero esto solo se establece hasta que se llama el metodo
    // guardar entonces si queremos que se muestre esto desde que cargue el formulario entonces ocupamos
    // hacerlo con una nueva propiedad que vamos a llamar initForm
    this.miFormulario.resetForm({
      producto: 'Sin Nombre',
      precio: 0,
      existencias: 0
    });
 

  }

}
