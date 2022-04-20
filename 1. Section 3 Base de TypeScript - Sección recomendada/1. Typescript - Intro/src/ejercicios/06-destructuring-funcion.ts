

console.log('Hola Mundo!!!...');

/*
    ===== Código de TypeScript =====
*/

//===========================================
// 21. Desestructuración de argumentos
//===========================================

interface Producto {

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

// function calculaISV( productos: Producto[] ): number {
//------------------------------------------------------------------------------------
// Como tambien puedo regresar un arreglo podemos hacer lo siguiente
//------------------------------------------------------------------------------------
function calculaISV( productos: Producto[] ): [ number, number ] {

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