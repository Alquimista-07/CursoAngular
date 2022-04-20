/*
    ===== Código de TypeScript =====
*/

//===========================================
// 19. Desestructuración de Objetos
//===========================================

interface Reproductor {

    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;

}

interface Detalles {

    autor: string;
    anio: number; 

}

const reproductor: Reproductor = {

    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed sheeran',
        anio: 2015
    }

}

//const autor = 'Fulano';

// El destructuring se hace de la siguiente forma:
//const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor; // Esta es una forma pero no puede ser tan fácil de leer
const { volumen: vol, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

console.log( 'El volumen actual es: ', vol );
console.log( 'El segundo actual es: ', segundo );
console.log( 'La canción actual es: ', cancion );
console.log( 'El autor actual es: ', autor );


//===========================================
// 20. Desestructuración de Arreglos
//===========================================

const dbz:string[] = [ 'Goku', 'Vegeta', 'Trunks' ];

const [ p1, p2, p3 ] = dbz;

// Si necesitara solo una posición en especifico como en la destructuración de arreglos lo que importa es la posición
// simplemente dejamos vacio
const [ , , trunks ] = dbz;

console.log( 'Personaje 1:', p1 );
console.log( 'Personaje 2:', p2 );
console.log( 'Personaje 3:', p3 );
console.log( 'Personaje 3:', trunks );

//---------------------------------------------------------------------------------------------------------------------------
// NOTA: Adicionalmente si tuvieramos otro arreglo interno podríamos hacer otra destructuración sin problemas
//       como por ejemplo si tuvieramos lo siguiente:
//
// const dbz:string[] = [ 'Goku', 'Vegeta', 'Trunks', [] ];
//
// const [ , , trunks:[] ] = dbz;
//
// Pero de cierto modo esto es raro que se presente y que llegue a necesitarse.
//---------------------------------------------------------------------------------------------------------------------------

