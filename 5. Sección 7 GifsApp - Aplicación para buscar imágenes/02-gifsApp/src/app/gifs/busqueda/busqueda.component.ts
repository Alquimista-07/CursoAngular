import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

// Usamo el decorador ViewChild
// Y le pasamos el elemento que pasamos por referencia local
// Y con el cual vamos a ayudarnos par purgar la caja de texto luego de darle enter
// NOTA: Acá el txtBuscar nos arroja un error porque nos dice que el elemento pueda que no exista
//       pero como estoy seguro de que siempre va a existir usamos el operado Non-null-assertion operator (!)
//       Para ver más documentación podemos visitar: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
@ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  // Función para buscar 
  buscar() {

    //console.log( this.txtBuscar );
    const valor = this.txtBuscar.nativeElement.value;
    console.log( valor );

    // Mandamos como vacío para que se limpie loa caja de texto
    this.txtBuscar.nativeElement.value = '';    

  }

}
