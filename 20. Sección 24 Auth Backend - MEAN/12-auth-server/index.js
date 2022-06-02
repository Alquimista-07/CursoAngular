// NOTA: Para probrar nuestro backend usaremos Postman el cual nos permite hacer las
//       peticiones Http con su respectiva ruta.


// Importamos express
const express = require('express');

// Crear el servidor/aplicación de express
const app = express();

// Ahora creamos una petición Http
// Petición GET la cual tiene la ruta inicial '/' y le asignamos un callback (función anónima)
// la cual tiene un par de argumentos (req -> petición, res -> repuesta)
app.get('/', ( req, res ) =>{

    // Y en este caso respondemos con un archivo json
    res.json({
        ok: true,
        msg: 'Todo Ok!',
        uid: 1234
    });

    // NOTA: Acionalmente si queremos cambiar el status de la respuesta
    //       podemos Agregar el statud de la siguiente manera:
    /*
    res.status(500).json({
            ok: true,
            msg: 'Todo Ok!',
            uid: 1234
        });
    */

});

// Levantamos la aplicación de express indicando que va a ser a través del pueto 4000
// y hacemos un llanado a un callback (función anónima) y le indicamos un console.log 
// que nos va a servir como una confirmación e indicar que efectivamente el servidor 
// se esta ejecutando.
app.listen( 4000, () => {
    console.log( `Servidor ejecutandose en el puerto ${ 4000 }` );
});