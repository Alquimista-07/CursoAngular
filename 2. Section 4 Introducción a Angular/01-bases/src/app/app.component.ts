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
  // Creo una propiedad nueva con su respectivo tipo
  numero:number = 10;

  //======================================================================================================================
  // CLASE: 39. Métodos en el componente-->
  //======================================================================================================================

  // Creo otra propiedad para que no choque con el anterior ejercicio
  numero2:number = 20;

  // Acá podríamos crearnos unos métodos para el contador ya que como se mencionó no es muy aconsejable
  // meter mucha lógica del lado del template
  sumar(){

    this.numero2 += 1;
  }

  restar(){
    this.numero2 -= 1;
  }

  // Otra forma que podríamos hacerlo es simplmente creando una sola función que haga las 2 acciones
  // entonces para esto hacemos lo siguiente:

  numero3:number = 30;

  acumular( valor: number ): void{
    this.numero3 += valor;
  }

  //======================================================================================================================
  // CLASE: 40. Tarea con el contador-->
  //======================================================================================================================

  // Creamos unas nuevas propiedades
  numero4: number = 55;
  base   : number = 5;

  // Creamos una nueva función
  acumular2( valor:number ): void{

    this.numero4 += valor;

  }
}
