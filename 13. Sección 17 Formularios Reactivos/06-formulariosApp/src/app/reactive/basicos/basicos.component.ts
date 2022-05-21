import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // La idea de los formularios reactivos es que la parte del html se mantenga lo más limpia
  // posible y las validaciones y lógica se encuentren en la parte del componente TypeScript
  // Entonces como vamos a usar el formbuilder no ocupamos usar el formcontrol
  /*
  miFormulario: FormGroup = new FormGroup({
    'producto'   : new FormControl( 'RTX 4080Ti' ),
    'precio'     : new FormControl( 1500 ),
    'existencias': new FormControl( 5 )
  });
  */

  // Para trajar con el FormBuilder necesitmos crear la propiedad
  miFormulario: FormGroup = this.fb.group({
    // Y aparartir de acá es trabajar con el objeto literal
    // y debemos mandarlo en un arreglo porque deentro van las validaciones
    // y las validaciones asíncronas. Adicionalmente se le puede establecer
    // un valor por defecto

    // NOTAS Validadores básicos
    // Para los validadores el segundo parámetro indica que son validadores síncronos, los cualse son los que se envian cuado se presiona una tecla
    // luego como tercer parámetro también podemos enviar los validadores asíncronos, por ejemplo cuando se escribe un username y queremos preguntar
    // a la base de datos si ese username existe para que no se repita
    // Otra cosa es que podemos definir tantos validadores sincronos necesitemos y para ello debemos indicatlos como un arreglo, en el caso del siguiente
    // ejemplo para el producto mandamos un validador para indocar que el campo es requerido y que debe contener mínimo de 3 letras para que el formulario
    // sea considerado como válido.
    producto: [ , [ Validators.required, Validators.minLength(3) ] ],                                                
    precio: [ , [ Validators.required, Validators.min(0)] ], // La función min() indica que el vavlor mínimo es cero para que sea valido el formulario
    existencias: [ , [ Validators.required, Validators.min(0) ] ]
    // Cuando dejamos el primer argumento vacío estamos enviando null
  });


  // El FormBuilder nos ayuda a crear formularios bastante complejos o muy grandes pero
  // que tenga la anotación de un objeto literal de JavaScript.
  // Entonces el FormBuilder es un servicio por lo tanto necesitamos inyectarlo
  constructor( private fb: FormBuilder ) { }

  campoEsValido( campo: string ) {
    return this.miFormulario.controls[ campo ].errors &&
           this.miFormulario.controls[ campo ].touched
  }

  // Si quiero establecer un valor inicial al formulario usamos el ngOnInit
  ngOnInit(): void {
    // Existe un inconvenientecon al usar el setValue ya que si por ejemplo no viene una propiedad como el id
    // o cualquier otro esto causa un error ya que se deben enviar todas las propiedades del formulario.
    /*
    this.miFormulario.setValue({
      producto: 'RTX 4080 Ti',
      precio: 1600,
      existencias: 10
    });
    */

    // Entonces no sería recomendado usarlo solo en casos que estemos seguros que si tenemos todos los datos y en luegar de
    // dicho metodo podríamos usar el reset ya que este si no daría error si no mandamos todos los campos del formulario
    this.miFormulario.reset({
      producto: 'RTX 4080 Ti',
      precio: 1600
    });

  }

  guardar() {

    // Se valida si el formulario no es valido
    if ( this.miFormulario.invalid ) {
      // Marcamos todos los campos como tocados para que se ejecuten las validaciones y se muestren
      // los mensajes
      this.miFormulario.markAllAsTouched();
      return;
    }
    
    console.log( this.miFormulario.value );
    // Reseteamos los campos para que el formulario vuelva a su estado original cuando 
    // sea enviado correctamente
    this.miFormulario.reset();

  }

}
