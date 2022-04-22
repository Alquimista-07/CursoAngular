/*
    ===== Código de TypeScript =====
*/

//===========================================
// 22. Importaciones y exportaciones
//===========================================

// Posteriormente luego de exportar la interface y la función calcularISV en el archivo 06-destructuring-funcion.ts 
// lo que vamos a hacer es importarla donde la necesitemos y para ello vamos a importarla de la siguiente forma:

import { calculaISV, Producto } from './06-destructuring-funcion';

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [ total, isv ] = calculaISV( carritoCompras );

// NOTA: En este caso cuando ejecutemos el ejercicio nos van a aparecer los console.log
//       duplicados y esto sucede porque cuando se va a buscar la fucnión calculaISV lo 
//       que va a hacer es ejecutar nuevamente el archivo donde se encuentra la función
//       completo, y como sabemos en el arcnivo 06-destructuring-funcion.ts también  
//       tenemos otros console.log que casualmente muestran lo mismo y por eso también
//       se están mostrando.
//       Por eso hay que tener en cuenta que cuando importemos también se va a ejecutar el
//       código que tengamos en los archivos que estemos importando con excepción de las 
//       interfaces.
console.log( 'Total', total );
console.log( 'ISV', isv );