import { Component, OnInit } from '@angular/core';

// Para el uso de la animación como de ondas tenemos que importar y configurar 
// un servicio propio de PrimeNg y para el cual se importa y se inyecta de la siguiente 
// forma.
//NOTA: Esos esfectos también aplican para las animaciones de los botones y demás que usen este efecto, por
//      lo tanto es necesario importarlo e inyectarlo de la misma manera
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
    // Lo siguiente ya no lo estamos usando entonces lo comentamos
    /*
    nombre: string = 'juAn hERnanDez';
    valor: number = 1000;
    obj = {
      nombre: 'Juan'
    }

    mostrarNombre() {

      console.log( this.nombre);
      console.log( this.valor);
      console.log( this.obj);

    }*/

    constructor( private primengConfig: PrimeNGConfig ){}

    ngOnInit() {
      this.primengConfig.ripple = true;
    }

}
