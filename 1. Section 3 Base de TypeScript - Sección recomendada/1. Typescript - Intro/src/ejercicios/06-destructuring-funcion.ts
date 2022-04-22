

console.log('Hola Mundo!!!...');

/*
    ===== Código de TypeScript =====
*/

//===========================================
// 21. Desestructuración de argumentos
//===========================================

// NOTA: Para la clase 22. Importaciones y exportaciones ocupamos primero exportar la interface con el fin de que 
//       pueda ser importada y usada en los demás archivos donde la necesitemos. Para exportarla hacemos lo siguiente:

export interface Producto {

    desc: string;
    precio: number;

}

const telefono: Producto= {

    desc: 'Nokia A1',
    precio: 150

}

const tableta: Producto= {

    desc: 'Ipad Air',
    precio: 350

}

// NOTA: Ahora también para el ejercicio de la clase 22. Importaciones y exportaciones ocupamos exportar
//       de la misma manera la función para poderla usar en los demás archivos que sea requerida. 
// function calculaISV( productos: Producto[] ): number {
//------------------------------------------------------------------------------------
// Como tambien puedo regresar un arreglo podemos hacer lo siguiente
//------------------------------------------------------------------------------------
export function calculaISV( productos: Producto[] ): [ number, number ] {

    let total = 0;

    // productos.forEach( ( producto ) => {
    //-----------------------------------------------------------------------------------------------------------
    // Podríamos hacerlo como se mostraba anteriormente pero usando la desestructuración simplemente
    // hariamos lo siguiente:
    //-----------------------------------------------------------------------------------------------------------
    productos.forEach( ( { precio } ) => {

        // total += producto.precio;
        total += precio;

    });

    //return total * 0.15;
    //Como tambien puedo regresar un arreglo podemos hacer lo siguiente
    return [ total, total * 0.15 ];

}

const articulos = [ telefono, tableta ];

//const isv = calculaISV( articulos );
// Como estoy regresando un arreglo puedo aplicar destructuración a lo que me esta regresando la función
const [ total, isv ] = calculaISV( articulos );


console.log( 'Total:', total );
console.log( 'ISV:', isv );