// Acá vamos a trabajar con todo lo relacionado a la cración y verificación 
// de JWT.

//====================================================================================================================================================================================
// NOTAS Y COMENTARIOS SOBRE JWT
//====================================================================================================================================================================================
// El JWT es una forma de autenticación pasive bastante conocida, para ver más información sobre los JWT podemos ir a la documentación que se encuentra en el siguiente 
// enlace: https://jwt.io/

// Adicionalmente un JWT esta conformado por 3 parte las cuales son:
// 1. El header
// 2. El payload que contiene la información a almacenar en el JWT
// 3. El verify signature o firma que sirve para verificar que el header y el payload coincidan.

// OJO: Hay que tener mucho cuidado con la información que se va a almacenar dentro del payload, porque a diferencia de la encriptación hash de una sola vía que se realizo con el password, 
//      el payload de un JWT si se puede reconstruir y obtener la información almacenada allí dando lugar a vulnerabilidades si la información que se almacena allí es delicada. Otra cosa es 
//      que si lo que no se podría saber es como se encripto o firmo el token y como se había mencionado dicha firma verifica que si el header coincide con el payload y si no coinciden
//      inmediatamente el JWT queda inválido para el backend, es decir, el backend lo va a verificar y si esta firma recibió alguna modificación el backend lo va a rechazar.
//====================================================================================================================================================================================

// Importamos el paquete jsonwebtoken
const jwt = require('jsonwebtoken');
const { Promise } = require('mongoose');

// Cuando llamemos la función generarJWT esperaría recibir la información para el payload
const generarJWT = ( uid, name ) =>{

    // Creamos el payload que se va a firmar usando la función sign()
    const payload = { uid, name };

    // Creamos una promesa para transformar el sign() en una ya que como tal el método sign trabaja como callback
    return new Promise( (resolve, reject) =>{

        // Para creación del JWT usamos la función sign() la cual recibe como primer argumento el payload. Luego como segundo valor va el secretOrPrivateKey
        // el cual es una llave secreta que nadie debe de conocer ya que si llegaran a saberla alguien más podría crear y firmar tokens como si el backend
        // lo hubiera hecho, adicionalmente caber resaltar que este secretOrPrivateKey va a ser el valor de una variable de entorno que nosotros mismos
        // definimos en nuestro archivo .env. Y como tercer parámetro vienen opciones que usalmente se usan para definir por ejemplo la duración al JWT que 
        // puede ser de horas, días, años junto con otras opciones que se pueden ver en la documentación oficial.
        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h' // Expira en 24 horas
        }, 
        // Ahora viene una función que tiene el error o el token creado
        (err, token) => {
            // Aca tenemos que llamar este callback cuando se resuelva el sign()

            if( err ){
                // TODO MAL
                console.log(err);
                reject( err );
            }
            else {
                // TODO BIEN
                // Entonces regresamos el JWT
                resolve( token );
            }

        });

    });

}

// Ahora hay que recordar que si queremos usar las funciones y demás cosasa
// definidas dentro de este archivo es necesario exportarla
module.exports = {
    generarJWT
}