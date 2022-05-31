import { Directive, OnInit, ElementRef, Input } from '@angular/core';

// NOTA: Nuestra directiva pareciera un componente, un pipe o cualquier otra cosa pero la principal diferencia
//       radica en lo que vamos a pederle inyectar y los argumentos que va recibir y como se van a recibir

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  // Si necesitamos usar el ElementRef en más de un lugar podemos crear una propiedad
  private _htmlElement: ElementRef<HTMLElement>;

  // Ahora imaginémonos que queremos darle el poder a la parsona para que escoja el color que quiere que se muestre
  // en el span, y si no especifica ningún color lo coloaremos rojo por defecto. Entonces nos vamos a crear una propiedad
  // para asignarla como un input y poder trabajar con ella recibiendo valores desde el elemento padre.
  @Input() color: string = 'red';

  // Creamos una propiedad para recibir el mensaje
  @Input() mensaje: string = 'Este campo es requerido';

  constructor( private elem: ElementRef<HTMLElement> ) { 
    console.log( 'Constructor directive' );
    // console.log( elem );

    // Inicializamos el ElementRef
    this. _htmlElement = elem;

  }

  ngOnInit(): void {
    console.log( 'NgOnInit directiva' );
    // Llamamos la función para cambiar el color al span
    this.setColor();

    // Llamamos la función para cambiar el mensaje al span
    this.setMensaje();
  }

  // Para modificar el color al span solamente bastaría con hacer lo siguiente
  setColor(): void {
    // Acá hacemos referencia al elemento y le mandamos por el valor del Input que estamos recibiendo para obtener 
    // el color que el usuario haya querido usar o recibir el color rojo por defecto que se había asignado.
    this._htmlElement.nativeElement.style.color = this.color;
    
    // Adicionalmente podemos establecerle la clase al elemento html para que del lado de nuestro componente agregar.component.html
    // quede más simplificado, para hacer esto podemos crear un nuevo método o simplemente aletar la propiedad directamente acá ya 
    // que el metodo setColor ya lo estamos usando  entonces para hacer esto hacemos lo siguiente
    this._htmlElement.nativeElement.classList.add( 'form-text' );
    // NOTA: Adicionalmente del lado del componente agregar.component.html deje el color, el mensaje y elimine la clase del spoan para fines ilustrativos
    //       pero como se menciónó estos ya no son necesarios y el span simplemente podría quedar con la directiva y el *ngIf.
  
  }

  // Creamos el método para establecer el mensaje que se va a recibir desde el componente padre, o el valor que se tiene por defecto
  // en caso de que no se envíe.
  setMensaje(): void {
    this._htmlElement.nativeElement.innerText = this.mensaje;
  }


}
