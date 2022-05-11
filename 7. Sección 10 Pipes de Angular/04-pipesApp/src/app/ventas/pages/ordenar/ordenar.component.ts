import { Component } from '@angular/core';

// Importamos la interface y el enum creados
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;

  // Creamos una propiedad que me va a ayudar para determinar porque es es que se quiere ordenar
  ordenarPor: string = '';

  //Creamos un arreglo que va a ser la data de la tabla
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ];

  cambiarMayusculaMinuscula(){

    this.enMayusculas = !this.enMayusculas;

  }

  // Creamos el metodo para ordenar
  cambiarOrden( valor: string ) {
    this.ordenarPor = valor;
    // console.log( valor );
  }

}
