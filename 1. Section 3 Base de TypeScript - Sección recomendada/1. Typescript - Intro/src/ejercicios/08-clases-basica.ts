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