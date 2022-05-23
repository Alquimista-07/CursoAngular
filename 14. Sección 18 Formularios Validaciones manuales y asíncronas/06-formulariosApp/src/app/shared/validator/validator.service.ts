import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  // Creamos la expresción regular donde el preimer () valida que es para el nombre y el otro () es para el apellido
  // La expresión valida que puede contener cualquier caracter de la a a la z múscula y de la A a la Z mayúscula y 
  // luego el + indica cualquier cantidad de caracteres
  public regexNombreApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  // Expresión regular para el email
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  // NOTA: La ventaja es que esto al ser un servicio podemos hacer inyecciones de otros servidios que necesitemos
  constructor() { }

  noPuedeSerAlcehmist ( control: FormControl ): ValidationErrors | null {

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

  camposIguales( campo1: string, campo2: string ) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      // console.log( formGroup );
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if( pass1 !== pass2 ) {

        formGroup.get(campo2)?.setErrors({
          noIguales: true
        });

        return { 
          noIguales: true
        }

      }

      // Hay que tener cuidado con esta ya que si el campo 2 tuviera otra validación
      // lo purga y lo perdemos
      formGroup.get(campo2)?.setErrors(null);

      return null;

    }

  }

}
