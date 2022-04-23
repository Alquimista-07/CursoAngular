/*
    ===== Código de TypeScript =====
*/

//===========================================
// 28. Encadenamiento opcional
//===========================================

// NOTA: Como se había mencionado en algún momento el signo ? es bastante flexible y dependiendo
//       de donde se use significa varias cosas

interface Pasajero {

    nombre: string;
    hijos?: string[]; // El signo de ? acá significa que esta propiedad es opcional

}

const pasajero1: Pasajero = {

    nombre: 'Juan'

}

const pasajero2: Pasajero = {

    nombre: 'Melissa',
    hijos: [ 'Ariadna', 'Gabriel' ]

}

function imprimeHijos( pasajero: Pasajero ): void {

    const cuantosHijos = pasajero.hijos?.length || 0; // Acá cuando uso el ? le estoy diciendo que intente evaluar los hijos, si los hijos tiene
                                                      // un valor entonces haga lo siguiente. Entonces podemos colocar que si es undefined entonces
                                                      // coloque cero

    console.log( cuantosHijos );
    
}

imprimeHijos( pasajero2 );
imprimeHijos( pasajero1 ); // Aca es undefined y nos va a dar error hasta que no coloquemos el ? en la funcion (imprimeHijos) cuando se piden los hijos 