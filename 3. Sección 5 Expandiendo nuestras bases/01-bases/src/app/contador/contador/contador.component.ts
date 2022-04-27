import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h1> Tarea Contador </h1>
        <h3>La base es: <strong> {{base}} </strong></h3>
        <button (click)="acumular2( base )"> + {{base}}</button>
        <span> {{numero4}} </span>
        <button (click)="acumular2( -base )"> - {{base}} </button>

    `
})

export class ContadorComponent {

  titulo: string = 'Contador App';

  numero4: number = 55;
  base   : number = 5;

  acumular2( valor:number ): void{

    this.numero4 += valor;

  }
    
}