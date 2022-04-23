/*
    ===== Código de TypeScript =====
*/

//===========================================
// 26. Genéricos
//===========================================

// NOTA: Hay muhos usos para los genéricos pero uno de los principales usos es saber
//       que tipo de dato o que información es la que va a retornar alguna función o
//       que tipo de dato es el que va a obtenerse.

// Entonces para usar los genericos lo especificamos indicando <T> y el tipo del argumento 
// como T, otra cosa no necesariamente se especifica que sea T, puede ser una G, una F o 
// cualquier otro valor pero por estándar casi siempre se maneja con una T

function queTipoSoy <T> ( argumento: T ) {

    return argumento;

}

let soyString = queTipoSoy( 'Hola Mundo!!!...' );
let soyNumero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );

let soyExplicito = queTipoSoy <number> ( 100 );
let soyExplicito2 = queTipoSoy <string> ( 'Hola Mundo' );

// También podemos especificar que es de tipo generico y que vamos por ejemplo a retornar un string
function queTipoSoy2 <T> ( argumento: T ): string {

    return argumento.toString(); // Pero debemos obligar a que retorne lo que indicamos

}