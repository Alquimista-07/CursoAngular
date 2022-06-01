import { Directive, OnInit, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

// NOTA: Nuestra directiva pareciera un componente, un pipe o cualquier otra cosa pero la principal diferencia
//       radica en lo que vamos a pederle inyectar y los argumentos que va recibir y como se van a recibir

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  // Si necesitamos usar el ElementRef en más de un lugar podemos crear una propiedad
  private _htmlElement: ElementRef<HTMLElement>;

  private _color: string = 'red';
  private _mensaje: string = 'Campo requerido';

  // Ahora imaginémonos que queremos darle el poder a la parsona para que escoja el color que quiere que se muestre
  // en el span, y si no especifica ningún color lo coloaremos rojo por defecto. Entonces nos vamos a crear una propiedad
  // para asignarla como un input y poder trabajar con ella recibiendo valores desde el elemento padre.
  // @Input() color: string = 'red';
  // Entonces para el tema del cambio del color en tiempo real vamos a usar un input setter, entonces para ello
  // comentamos el anterior input y ahora lo creamos de la siguiente manera.
  @Input() set color ( valor: string ) {
    // Cada vez que el color cambie cambiamos el valor del mismo
    // this._htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    this.setColor();
  }

  // Creamos una propiedad para recibir el mensaje
  // @Input() mensaje: string = 'Este campo es requerido';
  // Entonces para el tema del cambio del mensaje en tiempo real vamos a usar un input setter, entonces para ello
  // comentamos el anterior input y ahora lo creamos de la siguiente manera.
  @Input() set mensaje ( valor: string ) {
     // Cada vez que el mensaje cambie cambiamos el valor del mismo
    //  this._htmlElement.nativeElement.innerText = valor;
     this._mensaje = valor;
     this.setMensaje();
  }

  constructor( private elem: ElementRef<HTMLElement> ) { 
    console.log( 'Constructor directive' );
    // console.log( elem );

    // Inicializamos el ElementRef
    this. _htmlElement = elem;

  }
  ngOnChanges(changes: SimpleChanges): void {

    // Acá tenemos un inconveniente ya que como recibe el ultimo valor del ultimo input entonces tenemos errores
    // los cuales los podríamos solucionar encapsulando con condiciones if pero el problema es que si tuvieramos
    // un componente con demasiados input esto se tornaría tedioso y con demasiado código.
    // NOTA: En la siguiente clase se va a explicar como hacer esto de mejor forma usando input setters
    // Entonces como dice la nota anterio entonces comentamos el código que se había realizado antes
    /*
    if( changes['mensaje'] ){
      // console.log( changes );
      const mensaje = changes['mensaje'].currentValue
      // console.log( mensaje );
      this._htmlElement.nativeElement.innerText = mensaje;
    }
    if( changes['color'] ){
      const color = changes['color'].currentValue;
      this._htmlElement.nativeElement.style.color = color;
    }

    console.log( changes );
    */
  }

  ngOnInit(): void {
    console.log( 'NgOnInit directiva' );

    // console.log( this.color ); //undefined
    // console.log( this.mensaje ); //undefined

    // Llamamos la función para cambiar el color al span
    this.setColor();

    // Llamamos la función para cambiar el mensaje al span
    this.setMensaje();

    this.setEstiloClase();
  }

  setEstiloClase(): void{
    // Adicionalmente podemos establecerle la clase al elemento html para que del lado de nuestro componente agregar.component.html
    // quede más simplificado, para hacer esto podemos crear un nuevo método o simplemente aletar la propiedad directamente acá ya 
    // que el metodo setColor ya lo estamos usando  entonces para hacer esto hacemos lo siguiente
    this._htmlElement.nativeElement.classList.add( 'form-text' );
  }

  // Para modificar el color al span solamente bastaría con hacer lo siguiente
  setColor(): void {
    // Acá hacemos referencia al elemento y le mandamos por el valor del Input que estamos recibiendo para obtener 
    // el color que el usuario haya querido usar o recibir el color rojo por defecto que se había asignado.
    this._htmlElement.nativeElement.style.color = this._color;
    // NOTA: Adicionalmente del lado del componente agregar.component.html deje el color, el mensaje y elimine la clase del spoan para fines ilustrativos
    //       pero como se menciónó estos ya no son necesarios y el span simplemente podría quedar con la directiva y el *ngIf.
    
    // Adicionalmente podemos establecerle la clase al elemento html para que del lado de nuestro componente agregar.component.html
    // quede más simplificado, para hacer esto podemos crear un nuevo método o simplemente aletar la propiedad directamente acá ya 
    // que el metodo setColor ya lo estamos usando  entonces para hacer esto hacemos lo siguiente
    // this._htmlElement.nativeElement.classList.add( 'form-text' );
  
  }

  // Creamos el método para establecer el mensaje que se va a recibir desde el componente padre, o el valor que se tiene por defecto
  // en caso de que no se envíe.
  setMensaje(): void {
    this._htmlElement.nativeElement.innerText = this._mensaje;
  }


}
