import { Directive, Input } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

// NOTA: El input debe tener el customMin y el ngModel y si no va a entrar a la directiva
//       y en el selector se deben especificar tanto el nombre de la directiva como ngModel
@Directive({
    selector: '[customMin][ngModel]',
    // Al igual que los servicios necesitamos especificar el provider
    // en el cual enviamos el Validator
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
// Ahora si quiereo que esta extienda el formulario necesito implementar el validator.
// El Validator es un objeto que viene con Angular para realizar este tipo de validaciones
// como el required, el minlength, etc.
export class CustomMinDirective implements Validator {

    // Recbibmos el valor mínimo con a través de in Input para poderlo recibir del padre
    @Input() minimo!: number;

    constructor() { }

    // Ahora debemos implementar una función para el validator
    validate( control: FormControl ) {
        
        // Ahora obtenemos el valor de input
        const inputValue = control.value;

        console.log( inputValue );
        console.log( 'minimo', this.minimo );

        return ( inputValue < this.minimo )
                ? {'customMin': true }
                : null;

    }

}