// NOTA: Para probrar nuestro backend usaremos Postman el cual nos permite hacer las
//       peticiones Http con su respectiva ruta.


// Importamos express
const express = require('express');

// Crear el servidor/aplicación de express
const app = express();

// Acá vamos a configurar las rutas
// NOTA: Para configurar las rutas vamos a usar algo que se conoce como un middleware de express.
//       Y un middleware no es más que una función que se ejecuta cuando el interprete pase evaluando
//       cada una de las líneas de código. 
//       En este caso el middleware es el use() el cual recibe como primer parámetro la ruta princiapl que 
//       le queremos dar a la aplicación que en este caso es '/api/auth', y recibe un segundo parámetro el 
//       cual es la importación del archivo donde especificamos las rutas y que en este caso lo llamamos auth.js
//=================================================================================================================
// Rutas
//=================================================================================================================
app.use( '/api/auth', require('./routes/auth') );


// Levantamos la aplicación de express indicando que va a ser a través del pueto 4000
// y hacemos un llanado a un callback (función anónima) y le indicamos un console.log 
// que nos va a servir como una confirmación e indicar que efectivamente el servidor 
// se esta ejecutando.
app.listen( 4000, () => {
    console.log( `Servidor ejecutandose en el puerto ${ 4000 }` );
});