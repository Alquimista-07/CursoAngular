/*
    ===== Código de TypeScript =====
*/


//===========================================
// 27. Decoradores de clases
//===========================================

// NOTA: Un decorador no es más que una función que expande su clase
//       añadiendole funcionalidades especiales

// Los decoradores son una característica propia de typescript
// y hay muchos tipos de decoradores, para más información 
// podemos ir al enlace: https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators

// NOTA: Usualmente los decoradores sirven para cambiar las clases en el momento en que son definidas,
//       es decir para que en el momento que se este transpilando va a estender internamente las 
//       funcionalidades que hemos estado queriendo implmentar y permitir de esta forma expandir 
//       funcionalidades.
//       Y algo que Angular hace es que usa bastante los decoradores para cambiar la cosas, por ejemplo:

function classDecorator <T extends{ new ( ...args: any[] ): {} }> (

    constructor: T

 ) {

    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };

}

@classDecorator
class MiSuperClase {

    public miPropiedad: string = 'ABC123';

    imprimir() {

        console.log( 'Hola Mundo!!!...' );

    }

}

console.log( MiSuperClase );

const miInstaciaClase = new MiSuperClase();

console.log( miInstaciaClase.miPropiedad );