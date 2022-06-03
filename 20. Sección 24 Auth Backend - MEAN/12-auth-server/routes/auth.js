// Este archivo va a contener todas las rutas que tengan
// que ver con la autenticación

// Para el manejo de rutas requerimos ocupamos el Router
// del paquete de express
const { Router } = require('express');
// Importamos el check de express-validator.
// Para ver más documentación sobre el express-valiator podemos ir a https://express-validator.github.io/docs/
const { check } = require('express-validator');
// Importamos los controladores
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();

// NOTA: Acá por lo tanto ya tenemos disponibles los verbos Http como el GET, el POST, etc.

// Entonces acá ya podemos hacer cosas como por ejemplo la parte de login de usuario la cual la hacemos mediante
// un POST y le damos un path que en este caso es el /, posteriormente vienen los middlewares (uno solo o un arreglo []) 
// y posteriormente viene el controlador (loginUsuario) el cual si vamos al archivo de controladores (auth.js en la carpeta controllers) 
// vemos que es un callback (función de flecha) y el cual recibe el req -> request y el res -> response

// NOTA: Usualmente a la función se conoce como callback pero también se conoce como el controlador
//       del la ruta que en este caso es /

//============================================================================================================
// Crear un nuevo usuario
//============================================================================================================
router.post( '/new', crearUsuario );

//============================================================================================================
// Login de usuario
//============================================================================================================
router.post( '/', [

    // Acá adentro definimos todos los middlewares que necesito que esta ruta pase, o evalue o ejecute antes
    // de llegar al controlador (loginUsuario). Aunque hay que tener en cuenta que también podemos cancelar 
    // en algún middleware para no ejecute el controlador

    // El check puede recibir un string o un arreglo de strings y el mensaje.
    // Por lo tanto el primer argumento es el nombre del campo que estoy esperando
    // y que en este caso se llamo email, y luego el mensaje de error. 
    check('email', "El email es obligatorio").isEmail(),
    check('password', "La contraseña es obligatoria").isLength({ min: 6 })

], loginUsuario );

//============================================================================================================
// Validar y revalidar token
//============================================================================================================
router.get( '/renew', revalidarToken );


// Ahora en node para exportar las cosas y que puedan ser utilizadas
// en otros archivos lo hacemos de la siguiente manera:
// NOTA: Puedo exportar un objeto o algo por defecto que en este caso es el router
module.exports = router;