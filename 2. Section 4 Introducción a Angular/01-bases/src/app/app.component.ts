import { Component } from '@angular/core';

// Este decorador recibe al menos 2 argumentos que son el selector, y especificar si
// por lo menos tiene una contraparte de html
@Component({
  selector: 'app-root', // Nombre que este componente tiene
  templateUrl: './app.component.html', // Contraparte de html
  //-----------------------------------------------------------------------------------------------------------
  // Existe otro template el cual nos permite definir ya sea un template literal 
  // (parecido al templateUrl) o un string con lo que queremos mostrar por ejemplo:
  //
  // OJO en este caso al usar este template se comentaría y se ignoraría el templateURL 
  // y se podría borrar
  //
  //template: '<span>Juan</span>',
  //
  // Otra forma de usarlo es la siguiente:
  /*
  template: `
    <h1>Hola de nuevo</h1>
    `,
  */
  //-----------------------------------------------------------------------------------------------------------
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Contador App'; // Acá agregamos el tipado ya que es algo común
}
