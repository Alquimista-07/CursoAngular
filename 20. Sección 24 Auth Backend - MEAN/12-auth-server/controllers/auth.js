// Hay que tener en cuenta que acá no es necesario hacer la siguiente importación pero esta nos va a servir
// como ayuda ya que si no la hacemos tendríamos un inconveniente el cual es que no tendríamos la ayuda del tipado
const { response } = require('express');

// Importamos el validarionRestult del express-validator
const { validationResult } = require('express-validator');

// Como se había mencionado cada uno de los callback o controladores en nuestro archivo de rutas auth.js pueden crecer bastante
// por lo tanto se recomienda separar el controlador del manejador de la ruta con el fin de mantenerlo lo más ordenado posible, 
// y para esto lo vamos a hacer dentro de este archivo que también lo llamamos auth.js al igual que el archivo de rutas.
// OJO. No es necesario llamarlo igual pero sirve a modo de tener un orden

// Entonces ahora vamos a crear los controladores.

//NOTA: Como se realizo la importación del response entonces vamos a igualar el res al response y le indicaría que res 
//      es de tipo response y por lo tanto ya tenemos la ayuda del tipado.
//================================
// Crear un nuevo usuario
//================================
const crearUsuario = (req, res = response)=>{

    const errors = validationResult( req );
    // console.log( errors );

    if( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    //NOTA: Entonces para probar lo que estamos mandando por el body usamos postman, el cual en los en los endpoint de
    //      tipo POST (crearUsuario, loginUsuario) configuramos en el postman el body y le indicamos ras y luego el formato 
    //      que es JSON y en la caja de texto que se muestra configuramos el objeto que vamos a enviar por el body. otra cosa
    //      que se puede hacer con postman es genera la documentación de los endpoint que hayamos creado pero eso es tema que 
    //      se debe investigar ya que en el curso no lo explican.

    // Y al darle enviar en el postman podemos hacer un console.log para ver como llega la información
    console.log( req.body );
    
    // Entonces por lo tanto ya podemos extraer los datos que me intersan podemos desestructurar
    const { email, name, password } = req.body;
    console.log( email );
    console.log( name );
    console.log( password );

    return res.json({
        ok: true,
        msg: 'Crear usuario /new'
    });

}

//================================
// Login de usuario
//================================
const loginUsuario = (req, res = response)=>{

    // Ahora acá viene un objeto que el middleware check de express validator envía a través
    // del req y con el cual trabajaremos las validaciones
    const errors = validationResult( req );
    // console.log( errors );
    if( !errors.isEmpty() ){
        // Entonces si el objeto errors no viene vacío, es decir, se presentó un error
        // entonces enviamos un estatus 400 que es un bad error
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    const { email, password } = req.body;
    console.log( email );
    console.log( password );

    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });

}

//================================
// Validar y revalidar token
//================================
const revalidarToken = (req, res = response)=>{

    // Y en este caso respondemos con un archivo json
    return res.json({
        ok: true,
        msg: 'Validar y revalidar token /renew'
    });

    // NOTA: Acionalmente si queremos cambiar el status de la respuesta
    //       podemos Agregar el statud de la siguiente manera:
    /*
    res.status(500).json({
            ok: true,
            msg: 'Prueba!',
        });
    */

}

// Ahora necesitamos exportar el controlador nuevamente.
// NOTA: Recordando que anteriormente cuando se creo el archivo de rutas se había mencionado que se puede
//       exportar algo por defecto o un objeto, entonces acá vamos a exportarlo como un objeto ya que requiero
//       exportar varias cosas.
module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}

//NOTA: Adicionalmente acordemonos que no es necesario asignar en el objeto el {crearUsuario : crearUsuario}
//      a no ser de que quisieramos por ejemplo dejarlo como {crear: crearUsuario}