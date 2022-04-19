/*
    ===== Código de TypeScript =====
*/

//===========================================
// 15. Objetos, arreglos e interfaces
//===========================================

//* *********************************************** */
// Arreglos
//* *********************************************** */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTA: Si dejamos de la siguiente manera el arreglo nos lo va a asignar de tipo any
//       pero esto no es recomendable ya que nos va a aceptar cualquier cosa.
let arr = [ 1, "Juan", [], {} ];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let habilidades = [ 'Bash', 'Counter', 'Healing' ];

// Como los valores que asignamos al arreglo habilidades se infirio que era de tipo string
// yo no podría hacer lo siguiente de intentar insertar un valor numérico o booleano, u otro
// valor que no sea string ya que va a arrojar error
//
//habilidades.push( 1 );
//

habilidades.push( 'Smash' );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTA: Ahora si por ejemplo hicieramos lo siguiente:
let arr2 = [ 'Bash', 'Counter', 'Healing', 100 ];
// Lo que sucede es que typescript va a inferir que las variables son de tipo string o number y por ende
// lo siguiente si lo podríamos hacer.
arr2.push( 100 );
// Pero no podríamos asignar booleanos
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Entonces si yo quiero indicar los tipos que va a recibir mi arrelo lo puedo indicar de la siguiente manera:
let habilidades2: ( boolean | string | number )[] = [ 'Bash', 'Counter', 'Healing', 100 ];

// Ahora si solo queremos que sea de tipo string hacemos lo siguiente, y si intentamos colocar cualquier otro tipo 
// de dato nos va a indicar un error
let habilidades3: string[] = [ 'Bash', 'Counter', 'Healing' ];

//* *********************************************** */
// Objetos e interfaces
//* *********************************************** */

// Para trabajar con objetos en typescript podemos definir las interfaces
// NOTA: Estas interfaces al momento de convertirsen a Javascript para que el navegador
//       las interprete se van a traducir en cero líneas de código, es decir, van a ser 
//       obviadas y como tal solo son usadas en el momento de la codificación para hacer 
//       que nuestro código cumpla con lo especificado.
interface Personaje {

    nombre: string,
    hp: number,
    habilidades: string[],
    publoNatal?: string  // Cuando colocamos el ? indicamos que es opcional

}

const personaje: Personaje = {

    nombre: 'Strider',
    hp: 100,
    habilidades: [ 'Bash', 'Counter', 'Healing' ]

}

personaje.publoNatal = 'Pueblo paleta';

// El siguiente console.table lo que hace es mostrarnos los datos en una tabla
console.table( personaje );