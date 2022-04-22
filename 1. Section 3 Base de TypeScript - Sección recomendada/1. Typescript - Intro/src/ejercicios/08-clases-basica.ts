/*
    ===== Código de TypeScript =====
*/

//===========================================
// 23. Clases básicas
//===========================================

// NOTA: Las clases luecen como una interface ya que ambas sirven para definir las propiedades que van a tener
//       este tipo de dato. Pero con existen diferencias las cuales son:
//
//       * Como habíamos mencionado anteriormente cuando la interface es llevada a código JavaScript para que el 
//         navegador la ejecute esta se traducía a cero líneas de código, a diferencia de las clases que estas si 
//         son llevadas y las podemos ver cuando son llevadas a JavaScript para el navegador. Es decir, las interfaces
//         no existen en JavaSript pero las clase si.
//
//       * Otra diferencia es que las clase clases me sirven para crear instancias.
//
//       * En una interface yo no puedo definir como quiero que funcione algún método, o si quiero tener getters y setters

class Heroe {

    // NOTA: La diferencia entre public, private y static básicamente es el alcance o visibilidad de cada una,
    //       es decir:
    // * Cuando tenemos un método o atributo definido como public, significa que va a ser visible tanto dentro
    //   como fuera de la clase en la que se encuentre. 
    //
    // * Cuando tenemos un método o atributo definido como private, significa que solo va a ser visible dentro
    //   de la clase en la que se encuentra.
    //
    // * Cuando tenemos un método o atributo definido como static, significa que voy a poder acceder al valor de
    //   dicha propiedad sin crear una instancia de la clase
    //
    /*
    private alterEgo: string;
    public edad: number;
    static nombreReal: string;
    */

    // Comentamos las anteriores líneas ya que en esta clase no se va a entrar mucho en detalle, sino que vamos a tratar las
    // generalidades pero si lo vamos a usar mucho más y ver más adelante en el curos:
    alterEgo: string;
    edad: number;
    nombreReal: string;

    // En una clase podemos definir por ejemplo una función
    imprimirNombre(){
        return this.alterEgo + ' ' + this.nombreReal;
    }


}

interface Personaje2 {

    alterEgo?: string;
    edad?: number;
    nombreReal?: string;

    // Pero en la interface lo más que se puede hacer es definir que dicha función va a
    // retornar por ejemplo un string y no se puede hacer la implementación del mismo
    imprimirNombre?: () => string;
}

// La siguiente línea no nos marca herror ya que como nombreReal es una propiedad estática
// no es necesario instanciar la clase y la podemos usar.
// Heroe.nombreReal;

// Creamos una instancia de la clase
const ironman = new Heroe();

const spiderman: Personaje2 = {}

// Luego cuando vayamos a usar la instancia nos vamos a dar cuenta de que solo aparece la edad
// y esto es porque es la unica que es pública, ya que para usar la privada ocupariamos usar
// un constructor del cual se va a hablar en una clase más adelante
//ironman.edad

console.log( ironman );


//===========================================
// 24. Constructor de una clase
//===========================================

class Heroe2 {

    alterEgo: string;
    edad: number;
    nombreReal: string;

    // NOTA: El constructor de la clase no es más que una función que se va a llamar
    //       cuando creo una instancia de una clase. Pero esto de ver clases en typescript
    //       definidas de esta forma ya que usualmente voy a ocupar que las propiedades
    //       tengan un valor y siempre tengan esa data y a la vez sería tedioso enviar en 
    //       el constructos como parametro e inicializar cada uno de los atributos
    constructor( alterEgo: string ) {
        console.log( 'Hey!!!...' );
        // Como se observa esto se ejecuta antes del console.log ya que
        // se creo y ejecuto cuando creamos la instancia de la clase y por
        // esto el constructor es un punto interesante para poder inicializar 
        // las propiedades de la clase.
        this.alterEgo = alterEgo;
    }

}

// Creamos la instancia de la clase
const ironman2 = new Heroe2( 'Ironman' );

console.log( ironman2 );

//----------------------------------------------------------------------------------------
//NOTA: Hay una forma corta que se recomienda y se ve bastante la cual es la siguiente:
//----------------------------------------------------------------------------------------
class Heroe3 {

    constructor(
        public alterEgo: string,
        // Y de la misma forma puedo usar las propiedades opcionales, obligatorias y con valor por defecto
        public edad?: number,
        public nombreReal?: string
     ){}

}

const ironman3 = new Heroe3( 'Ironman', 45, 'Tony Stark' );

console.log( ironman3 );

//===========================================
// 25. Extender una clase
//===========================================

// Extender se hace para añadir ciertas funcionalidades, ciertas
// propiedades a una clase existente.

// Para el ejercicio vamos a crear otra clase pero también podría ser una
// interface ya que estas también se pueden extender

class PersonaNormal {

    constructor ( 
        public nombre: string, 
        public direccion: string 
        ){}

}

// Entonces la idea es que yo pueda añadir o expander la clase Heroe4 con todas las propiedades
// y métodos que persona normal tiene y para ello usamos la palabra reservada extends
class Heroe4 extends PersonaNormal {

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal:string
    ){
        // La llamada al super es en pocas palabras es llamar al constructor de la clase a la cual 
        // extiende (PersonaNormal). Y le pasamos los parametros que tenga definidos el constructor
        super( nombreReal, 'New York, USA' ); // Acá pasamos sin el this ya que estamos es haciendo 
                                              // referencia al argumento que estoy recibiendo en el
                                              // constructor
    }

}

// Instanciamos la clase
const ironman4 = new Heroe4( 'Ironman', 45, 'Tony Stark' );

console.log( ironman4 );