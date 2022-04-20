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
