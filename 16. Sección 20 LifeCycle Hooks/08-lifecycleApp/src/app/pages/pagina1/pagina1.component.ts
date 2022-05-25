import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

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
  }

  // Este método ngOnChanges es un hook.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  // Este método ngDoCheck es un hook.
  ngDoCheck(): void {
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
    console.log('ngAfterViewChecked');
  }

  // Este método ngOnDestroy es un hook.
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }  
  

}
