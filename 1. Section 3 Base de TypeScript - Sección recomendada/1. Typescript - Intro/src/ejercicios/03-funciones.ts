/*
    ===== Código de TypeScript =====
*/

//===========================================
// 16. Funciones básicas
//===========================================

// En la siguiente función indicamos que a es número, b es número y que el tipo 
// de retorno tiene que ser un número
function sumar( a: number, b: number ): number {
    // Por lo tanto si intentaramos hacer lo siguiente como estamo indicanod el retorno luego de ): number 
    // que tiene que ser number la siguiente línea nos da error.
    //return (a + b).toString();
    return (a + b);
}

// Ahora por ejemplo para especificar el tipo de los parametros y el tipo del retorno en una función de flecha
// hacemos lo siguiente:
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

// NOTA: En JavaScript el orden de los parámetros es importante, por lo tanto si queremos dejar argumentos
//       opcionales primero se colocan los obligatorios y al final los opcionales y adicionalmente cuando es
//       opcional se le debe colocar el signo ?.
//       También luego de los argumentos opcionales podemos colocar los que tiene un valor por defecto
//       y a los cuales le asignamos el valor por defecto con el signo =
function multiplicar( numero: number, otroNumero?: number, base: number = 2 ): number {

    return numero * base;

}

const resultado = sumar( 10, 20 );
const resultado2 = sumarFlecha( 10, 20 );
const resultado3 = multiplicar( 20, 20 );
const resultado4 = multiplicar( 20 ); // Si le borro el siguiente argumento va a funcionar ya que el argumento es opcional y la base que es el otro valor
                                      // requerido tiene un valor por defecto. 
// Pero si quisieramos modificar la base que tiene un valor por defecto entonces
// tendríamos que enviar todos los argumentos.
const resultado5 = multiplicar( 100, 10, 4 );


console.log( resultado );
console.log( resultado2 );
console.log( resultado3 );
console.log( resultado4 );
console.log( resultado5 );


//===========================================
// 17. Funciones con objetos como argumentos
//===========================================

// Definimos una interface
interface PersonajeLOR {

    nombre: string;
    pv: number;
    // Ahora para indicar en mi interfaz que esto es una función hacemos lo siguiente:
    mostrarHp: () => void;
    // Y de la misma forma podemos indicar los paráemtros, su tipo y su retorno como por ejemplo:
    //mostrarHp: ( a: number, b: string, c: boolean ) => void;


}

// Cuando indico el retorno de la función lo que estoy indicando es que la función no va a retornar nada
function curar( personaje: PersonajeLOR, curarX: number ): void {

    personaje.pv += curarX;
    
}

const nuevoPersonaje: PersonajeLOR = {

    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log( 'Puntos de vida:', this.pv );
    }

}

curar( nuevoPersonaje, 20 );

nuevoPersonaje.mostrarHp();
