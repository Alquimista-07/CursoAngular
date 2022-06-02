// Este archivo va a contener todas las rutas que tengan
// que ver con la autenticación

// Para el manejo de rutas requerimos ocupamos el Router
// del paquete de express
const { Router } = require('express');

const router = Router();

// NOTA: Acá por lo tanto ya tenemos disponibles los verbos Http como el GET, el POST, etc.

// Entonces acá ya podemos hacer cosas como por ejemplo la parte de crear un usuario la cual 
// la hacemos mediante un POST y le damos un path que en este caso lo llamamos new, y posteriormente viene el 
// callback (función anónima de fleca) y que recibe el req -> request y el res -> response
// NOTA: Usualmente a la función se conoce como callback pero también se conoce como el controlador
//       del la ruta que en este caso es /new
//============================================================================================================
// Crear un nuevo usuario
//============================================================================================================
router.post( '/new', (req, res)=>{

    return res.json({
        ok: true,
        msg: 'Crear usuario /new'
    });

});

//============================================================================================================
// Login de usuario
//============================================================================================================
router.post( '/', (req, res)=>{

    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });

});

//============================================================================================================
// Validar y revalidar token
//============================================================================================================
router.get( '/renew', (req, res)=>{

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

});


// Ahora en node para exportar las cosas y que puedan ser utilizadas
// en otros archivos lo hacemos de la siguiente manera:
// NOTA: Puedo exportar un objeto o algo por defecto que en este caso es el router
module.exports = router;