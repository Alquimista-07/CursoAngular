/*
    ===== Código de TypeScript =====
*/

// URL Documentación Typescript: https://www.typescriptlang.org/docs/handbook/basic-types.html

// La idea o lo recomendable sería trabajar con un tipado estricto y en eso se basan los siguientes ejercicios

//===========================================
// 14. Tipos básicos y conceptos generales
//===========================================
let nombre: string = 'Strider'; 
// NOTA: Al colocar el tipo luego de los dos puntos indicamos de que tipo es
//       ya que si no lo indicamos lo que va a hacer es inferir de que tipo es.
//       Y es util en caso de que tengamos variable ambigüas como por ejemplo X
//       y de esta forma se que es.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTA: Si lo dejamos como una constante y nos paramos sobre ella no nos va a decir de que
// tipo es, sino que nos va a indicar que es una constante y contiene el valor que le tengamos
// asignado.
const nombre2 = 'Strider';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ahora si necesitaramos asignar uno u otro tipo de dato para indicar por ejemplo que el hp esta FULL
// lo podemos hacer de la siguiente manera
let hp: number| string = 100;

nombre = 'Juan'; // Y esto funciona ya que le estamos asignando un valor string nuevo

hp = 'FULL';     // Luego esto no nos da error debido a que indicamos que podía ser number o string pero si se va a quejar
                 // si intentaramos asignarle un arreglo o un boolean ya que no le indicamos dichos tipos

let estaVivo: boolean = true; 


// Por ejemplo si intentaramos asignar algo que no es un string a la variable nombre como indicamos que tenía que ser de tipo string 
// nos va a dar un error
//
//nombre = 123;
//

console.log( nombre, hp );