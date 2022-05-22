// NOTA: Esta es una forma de tener las validaciones pero si requermimos información de servicios
//       requeriría un poco más de trabajo, que nos permitiera intercambiar la información sin inyectar
//       el servicio. Pero esta es una forma de hacerlo para cuando tenemos validaciones sencillas y
//       no requerimos de inyectar servicios.
//
// NOTA 2: Adicionalmetne se recomendaría hacer esto de las validaciones mejor directamente en un servicio de validaciones.
//
import { FormControl } from '@angular/forms';
  
// Creamos la expresción regular donde el preimer () valida que es para el nombre y el otro () es para el apellido
// La expresión valida que puede contener cualquier caracter de la a a la z múscula y de la A a la Z mayúscula y 
// luego el + indica cualquier cantidad de caracteres
export const regexNombreApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';

// Expresión regular para el email
export const emailPattern       : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


export const noPuedeSerAlcehmist = ( control: FormControl ) => {

    const valor: string = control.value?.trim().toLowerCase();

    if( valor === 'alchemist' ){
      // return ERROR!!!...
      return {
        noAlchemist: true
      }
    }

    // De lo contrario si regresa null todo esta bien
    return null;

}