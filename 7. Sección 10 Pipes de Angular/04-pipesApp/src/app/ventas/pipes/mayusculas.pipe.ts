import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    // Como queremos que el argumento enMayusculas sea ocional, entonces para hacerlo opcional
    // le asignamos un valor por defecto
    transform(value: string, enMayusculas: boolean = true): string {
        // console.log( value );
        // console.log( enMayusculas );

        // if( enMayusculas === true ){
        // La siguiente condición es la misma que la anterior
        // if( enMayusculas ){
        //     return value.toLocaleUpperCase();
        // }else{
        //     return value.toLocaleLowerCase();
        // }

        // Lo mismo que se hizo anteriormente se puede hacer usando un ternario
        return ( enMayusculas ) 
            ? value.toLocaleUpperCase() 
            : value.toLocaleLowerCase();
    }

}