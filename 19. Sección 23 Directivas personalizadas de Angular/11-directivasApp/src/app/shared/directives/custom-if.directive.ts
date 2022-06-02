import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  // Creamos una propiedad que va a determinar que pueda mostrar o no el elemento y también
  // lo hacemos a través de in input setter y le colocamos exáctamente el mismo nombre del
  // selector de la directiva
  @Input() set customIf( condicion: boolean ) {
    if( condicion ){
      // Mostramos el elemento
      this.viewContainer.createEmbeddedView( this.templateRef );
    }
    else{
      // Ocultamos el elemento
      this.viewContainer.clear();
    }
  }

  // Inyectamos el TemplateRef que es muy parecido al ElementRef solo que el TemplateRef se encuentra a un nivel superior, también necesitamos inyectar
  // otra propiedad que es la que verdaderamente va a ocultar y mostrar el elemento que es el ViewContainerRef
  constructor( private templateRef: TemplateRef<HTMLElement>,
               private viewContainer: ViewContainerRef ) { 
    console.log( 'CustomIf' );
  }

}
