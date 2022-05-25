import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
// NOTA: Todos los hooks (que son intefaces) van a venir de @angular/core. Adicionalente va a ser muy pero muy raro que 
//       sea necesario implementar todos los hooks del ciclo de vida de angular en un mismo componente
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
             AfterViewInit, AfterViewChecked, OnDestroy {

  nombre: string = 'Ariadna';
  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor() {
    // NOTA: En el constructor hacemos inyecciones de dependencias que sean necesitadas y usualmente 
    //       eso es todo, o si necesitamos algún tipo de inicialización antes de que el html sea construido
    console.log('constructor');
  }

  // Básicamente un hook(gancho) es un metodo el cual es ejecutado cuando 
  // sucede algo en el ciclo de vida de un componente, entonces el método 
  // es disparado de forma automática

  // Este método ngOnInit es un hook. Entonces este se va a dispara en el momento en que
  // sea construido el componente, es decir, en el momento en que el componente sea utilizado
  // se va a ejecutar el constructor y luego el ngOnInit y todo lo demás
  ngOnInit(): void {
    // NOTA: Este es cuando ya el componente esta inicializado y podríamos tener acceso al html,
    //       por ejemplo acá es donde podemos hacer peticiones http traer información de servicios, etc
    //       y llenar propiedades de manera segura en nuestro componente, especialmente si las peticiones 
    //       son asíncronas
    console.log('ngOnInit');

    // Usamos un operador de rxjs para incrementar los segundos
    // Pero este obsevable siempre va a estar emitiendo valores
    // y explicitamente lo tengo que terminar si no tenemos una
    // fuga de memoria ya que es practicamente infinito
    this.timerSubscription =  interval( 1000 ).subscribe( i => {
      this.segundos = i;
    });
  }

  // Este método ngOnChanges es un hook.
  ngOnChanges(changes: SimpleChanges): void {
    // NOTA: Este ngOnCganges no se va a disparar o no va a ser llamado por el framework, si el componente no tiene 
    //       inputs o si funciona sin proveer inputs. Y en cuantoa a esto input no se refiere a un input en el html
    //       sino que se refiere a un input de un componente padre al hijo, es decir, cuando usamos un decorador @Input
    console.log('ngOnChanges');
  }

  // Este método ngDoCheck es un hook.
  ngDoCheck(): void {
    // NOTA: Este método se ejecuta antes de los cambios, es decir, es disparado inmediatamente después de que
    //       el ngOnChanges se dispara y después cada vez que se detecta o se hace el ciclo de detección de cambios
    console.log('ngDoCheck');
  }

  // Este método ngAfterContentInit es un hook.
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  // Este método ngAfterContentChecked es un hook.
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // Este método ngAfterViewInit es un hook.
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // Este método ngAfterViewChecked es un hook.
  ngAfterViewChecked(): void {
    // NOTA: Este método se ejecuta cuando ya se hacen los cambios y se verifica
    console.log('ngAfterViewChecked');
  }

  // Este método ngOnDestroy es un hook.
  ngOnDestroy(): void {
    //NOTA: Este ngOnDestoy es llamado de forma inmaeidata después de que el componente ha sido destruido
    //      y es util para hacr limpieza de observables, por ejemplo si tenemos un observable que este 
    //      emitiendo valores o necesitamos hacer una limpieza, dejar un timer o purgar información cuando
    //      el componente va a ser destruido, este es el ciclo de vida que se debería implementar
    console.log('ngOnDestroy');
    // Entonces para para poder destuir el observable y evitar la fuga de memoria usamos el ngOnDestroy
    // usando la referencia del suscription que creamos para el subscirbe del observable que nos creo el 
    // interval
    this.timerSubscription.unsubscribe();
    console.log('Timer Limpiado');
  }  


  guardar() {

  }
  

}
