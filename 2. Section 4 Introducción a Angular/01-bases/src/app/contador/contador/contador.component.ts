//==================================================================
// 41. Crear un componente manualmente
//==================================================================
// Para este ejercicio comentamos o eliminamos todo el código que teníamos 
// de ejercicios anteriores en el archivo app.component ya que ahora vamos 
// crear un componente manualemente y separarlo para usarlo

// Importamos para usar y crear el decorador
import { Component } from '@angular/core';

@Component({
    selector: 'app-contador', // Generalmente se coloca app para indicar que es algo que nosotros hicimos
    // Creamos el template el cual como habíamos visto se puede hacer de 2 forma, en este caso lo creamos
    // usando un template pero hay que aclarar que también puede ir en un archivo html externo y colocarlo
    // acá
    template: `

        <h1> Tarea Contador </h1>
        <h3>La base es: <strong> {{base}} </strong></h3>
        <button (click)="acumular2( base )"> + {{base}}</button>
        <span> {{numero4}} </span>
        <button (click)="acumular2( -base )"> - {{base}} </button>

    `
})

// Creamos la clase manualmente y la exportamos para usarla en otros lugares
export class ContadorComponent {

  titulo: string = 'Contador App';

  // Creamos unas nuevas propiedades
  numero4: number = 55;
  base   : number = 5;

  // Creamos una nueva función
  acumular2( valor:number ): void{

    this.numero4 += valor;

  }
    
}