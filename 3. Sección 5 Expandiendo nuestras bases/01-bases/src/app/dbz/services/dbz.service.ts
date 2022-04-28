import { Injectable } from "@angular/core";

// NOTA: Este servicio a pasar de que ya lo importamos en el modulo dbz solo se va a ejecutar
//       hasta que alguien lo requiera y cuando sea requerido se va a crear la primera instancia
//       y ya cuando se haya creado va a ser la misma para cualquier componente, servicio, pipe o
//       lo que sea que lo consuma, incluso otro servicio.

//NOTA: El servicio es una clase abstracta donde vamos a colocar la información y los métodos para 
//      interactuar con fuentes externas o manipular el estado de la data de la aplicación, y nos
//      permite de una manera centralizarlos
@Injectable()
export class DbzService {

    constructor(){
        console.log( 'Servicio Inicializado!!!...' );
    }

}