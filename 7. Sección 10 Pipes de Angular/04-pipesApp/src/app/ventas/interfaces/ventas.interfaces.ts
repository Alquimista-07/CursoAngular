// Creamos una enumeración
export enum Color {

    // Una enumeración es basicamente trabajar con valores numéricos
    // solo que con palabras.
    rojo, negro, azul, verde
    //0     1     2      3

}

export interface Heroe {

    nombre: string;
    vuela : boolean;

    // NOTA: Entonces con el enum en vez colocar por ejemplo
    //       color: number y obligar a la gente a que sea 1,2,3,4,5
    //       puedo crearme la enumeración para trabajar en base a 
    //       palabras que pueden ser más fáciles de entender semanticamete
    //       que un número que no se que color será.
    color : Color;

}