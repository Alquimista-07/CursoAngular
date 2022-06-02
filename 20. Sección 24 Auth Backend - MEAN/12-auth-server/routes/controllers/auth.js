// Hay que tener en cuenta que acá no es necesario hacer la siguiente importación pero esta nos va a servir
// como ayuda ya que si no la hacemos tendríamos un inconveniente el cual es que no tendríamos la ayuda del tipado
const { response } = require('express');

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

    return res.json({
        ok: true,
        msg: 'Crear usuario /new'
    });

}

//================================
// Login de usuario
//================================
const loginUsuario = (req, res = response)=>{

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